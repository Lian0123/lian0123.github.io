const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const events = {}, entries = new Map(), deleted = [];
let shell = [], networkCalls = 0, offline = false, claimed = false;
const key = request => typeof request === 'string' ? request : new URL(request.url).pathname;
const cached = body => ({ status: 200, type: 'basic', body, clone() { return cached(body); } });
const cache = {
  addAll: async files => { shell = files; files.forEach(file => entries.set(file, cached('cached: ' + file))); },
  match: async request => entries.get(key(request)),
  put: async (request, response) => entries.set(key(request), response)
};
vm.runInNewContext(fs.readFileSync(path.join(root, 'service-worker.js'), 'utf8'), {
  self: { addEventListener: (name, handler) => { events[name] = handler; }, location: { origin: 'https://portfolio.test' }, skipWaiting() {}, clients: { claim: async () => { claimed = true; } } },
  caches: { open: async () => cache, keys: async () => ['lian0123-portfolio-v7', 'lian0123-portfolio-v8', 'unrelated-app'], delete: async name => deleted.push(name) },
  URL, Response,
  fetch: async () => { networkCalls++; if (offline) throw new Error('Offline'); return cached('fresh document'); }
});
async function lifecycle(name) { let pending; events[name]({ waitUntil: promise => { pending = promise; } }); await pending; }
async function request(pathname, mode = 'cors', method = 'GET', origin = 'https://portfolio.test') {
  let pending; events.fetch({ request: { url: origin + pathname, mode, method }, respondWith: promise => { pending = promise; } }); return pending;
}
(async () => {
  await lifecycle('install');
  for (const file of shell) assert.ok(fs.existsSync(path.join(root, file === '/' ? 'index.html' : file)), 'Precache file exists: ' + file);
  assert.ok(shell.includes('/Source/JS/Include/react-18.3.1.min.js'));
  assert.ok(shell.includes('/Source/JS/Include/react-dom-18.3.1.min.js'));
  await lifecycle('activate'); assert.deepEqual(deleted, ['lian0123-portfolio-v7']); assert.ok(claimed);
  assert.equal((await request('/index.html', 'navigate')).body, 'fresh document');
  assert.equal(networkCalls, 1);
  assert.match((await request('/Source/JS/app-react.js')).body, /cached/); assert.equal(networkCalls, 1);
  offline = true;
  assert.equal((await request('/index.html', 'navigate')).body, 'fresh document');
  assert.equal((await request('/unknown-route', 'navigate')).body, 'fresh document');
  assert.equal((await request('/missing-script.js')).type, 'error', 'Missing assets must not receive HTML');
  assert.equal(await request('/api', 'cors', 'POST'), undefined);
  assert.equal(await request('/external.js', 'cors', 'GET', 'https://third-party.test'), undefined);
  console.log('PASS: app-shell assets, React offline cache, navigation refresh, offline fallback, asset failures, old-cache cleanup, and origin isolation.');
})().catch(error => { console.error(error); process.exitCode = 1; });
