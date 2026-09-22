/* Run with jsdom available via NODE_PATH; no browser or network is required. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM, ResourceLoader, VirtualConsole } = require('jsdom');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const pause = () => new Promise(resolve => setTimeout(resolve, 35));
const errors = [];
class LocalResources extends ResourceLoader {
  fetch(url, options) {
    if (options.element?.localName === 'iframe') return Promise.resolve(Buffer.from('<!doctype html><title>Card fixture</title>'));
    const parsed = new URL(url);
    if (parsed.origin !== 'https://portfolio.test') throw new Error('Unexpected external dependency: ' + url);
    return Promise.resolve(fs.readFileSync(path.join(root, parsed.pathname)));
  }
}
async function createSite({ preferences = {}, blockedStorage = false, reduced = false } = {}) {
  let motionListener;
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', error => { if (!error.message.includes('Could not parse CSS')) errors.push(error.message); });
  virtualConsole.on('error', (...args) => errors.push(args.join(' ')));
  const dom = new JSDOM(html, {
    url: 'https://portfolio.test/', runScripts: 'dangerously', resources: new LocalResources(), pretendToBeVisual: true, virtualConsole,
    beforeParse(window) {
      window.matchMedia = () => ({ matches: reduced, addEventListener: (_, callback) => { motionListener = callback; }, removeEventListener() {} });
      Object.defineProperty(window.navigator, 'clipboard', { value: { writeText: async text => { assert.equal(text, 'lian0123@hi2.in'); } }, configurable: true });
      for (const [key, value] of Object.entries(preferences)) window.localStorage.setItem(key, value);
      if (blockedStorage) Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage blocked'); } });
    }
  });
  await new Promise(resolve => dom.window.addEventListener('load', resolve));
  for (let attempt = 0; attempt < 40 && !dom.window.document.body.dataset.motion; attempt++) await pause();
  assert.ok(dom.window.document.body.dataset.motion, 'React effects finish mounting');
  return { dom, document: dom.window.document, window: dom.window, setReduced: matches => motionListener({ matches }) };
}
async function click(element) { assert.ok(element, 'Click target exists'); element.click(); await pause(); }
async function input(window, element, value) {
  Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set.call(element, value);
  element.dispatchEvent(new window.Event('input', { bubbles: true })); await pause();
}
async function select(window, element, value) { element.value = value; element.dispatchEvent(new window.Event('change', { bubbles: true })); await pause(); }
(async () => {
  const { dom, document: d, window: w, setReduced } = await createSite();
  const count = selector => d.querySelectorAll(selector).length;
  assert.equal(count('h1'), 1);
  assert.equal(count('#projects .work-card'), 15);
  assert.equal(count('#writing .writing-item'), 18);
  assert.equal(count('#other .work-card'), 3);
  assert.equal(count('.link-grid a'), 8);
  assert.equal(count('.business-card-preview iframe'), 2);
  const originals = new Set([...d.querySelectorAll('#projects a, #writing a, #other a, .link-grid a')].map(a => a.href));
  for (const a of d.querySelectorAll('a[href^="#"]')) assert.ok(d.getElementById(a.hash.slice(1)), 'Anchor target exists: ' + a.hash);
  const ids = [...d.querySelectorAll('[id]')].map(element => element.id);
  assert.equal(ids.length, new Set(ids).size, 'No duplicate IDs');
  for (const a of d.querySelectorAll('a[target="_blank"]')) assert.match(a.rel, /noopener/);
  await click(d.querySelectorAll('.filter-button')[1]); assert.equal(count('#projects .work-card'), 9);
  await click(d.querySelectorAll('.filter-button')[2]); assert.equal(count('#projects .work-card'), 6);
  await click(d.querySelectorAll('.filter-button')[0]);
  await select(w, d.querySelector('.tech-select'), 'TypeScript'); assert.equal(count('#projects .work-card'), 2);
  await input(w, d.querySelector('input[type="search"]'), 'PARQUET'); assert.equal(count('#projects .work-card'), 1);
  await input(w, d.querySelector('input[type="search"]'), 'not-a-project'); assert.equal(count('#projects .work-card'), 0); assert.ok(d.querySelector('.empty-state'));
  await click(d.querySelector('.empty-state button')); assert.equal(count('#projects .work-card'), 15);
  await select(w, d.querySelector('.tech-select'), 'C / C++'); assert.equal(count('#projects .work-card'), 2);
  await click(d.querySelector('.results-bar button'));
  for (const language of ['en', 'jp', 'zh', 'en', 'zh']) {
    await select(w, d.querySelector('.language-select'), language);
    assert.equal(d.documentElement.lang, { en: 'en', jp: 'ja', zh: 'zh-Hant-TW' }[language]);
    assert.equal(count('#projects .work-card'), 15);
    assert.equal(count('#writing .writing-item'), 18);
    assert.deepEqual(new Set([...d.querySelectorAll('#projects a, #writing a, #other a, .link-grid a')].map(a => a.href)), originals, 'Content links survive language changes');
    const expected = { zh: 'iOS SandBox Account 與 Apple Pay 的踩坑筆記', en: 'iOS Sandbox Accounts and Apple Pay: Lessons Learned', jp: 'iOS Sandbox AccountとApple Payの記録' };
    assert.equal(d.querySelector('.writing-item h3').textContent, expected[language]);
  }
  await click(d.querySelector('.theme-toggle')); assert.equal(d.body.dataset.theme, 'light'); assert.equal(w.localStorage.getItem('site-theme'), 'light');
  await click(d.querySelector('.theme-toggle')); assert.equal(d.body.dataset.theme, 'dark');
  await click(d.querySelectorAll('.map-switcher button')[1]); assert.match(d.querySelector('.network-map').textContent, /React/); assert.match(d.querySelector('.map-console').textContent, /editor.experience/);
  await click(d.querySelectorAll('.map-switcher button')[2]); assert.match(d.querySelector('.network-map').textContent, /Blender/);
  await click(d.querySelector('.motion-toggle')); assert.equal(d.body.dataset.motion, 'paused');
  await click(d.querySelector('.motion-toggle')); assert.equal(d.body.dataset.motion, 'playing');
  setReduced(true); await pause(); assert.equal(d.body.dataset.motion, 'paused'); assert.ok(d.querySelector('.motion-toggle').disabled);
  setReduced(false); await pause(); assert.equal(d.body.dataset.motion, 'playing');
  await click(d.querySelectorAll('[role="tab"]')[1]); assert.match(d.querySelector('#case-panel h3').textContent, /React/);
  d.querySelectorAll('[role="tab"]')[1].dispatchEvent(new w.KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })); await pause();
  assert.equal(d.querySelectorAll('[role="tab"]')[2].getAttribute('aria-selected'), 'true'); assert.equal(d.activeElement.id, 'case-tab-2');
  d.activeElement.dispatchEvent(new w.KeyboardEvent('keydown', { key: 'Home', bubbles: true })); await pause(); assert.equal(d.activeElement.id, 'case-tab-0');
  await click(d.querySelector('.mobile-menu-toggle')); assert.equal(d.querySelector('.mobile-menu-toggle').getAttribute('aria-expanded'), 'true');
  d.querySelector('.nav-link').focus(); d.activeElement.dispatchEvent(new w.KeyboardEvent('keydown', { key: 'Escape', bubbles: true })); await pause(); assert.equal(d.querySelector('.mobile-menu-toggle').getAttribute('aria-expanded'), 'false'); assert.equal(d.activeElement.className, 'mobile-menu-toggle');
  d.body.dispatchEvent(new w.KeyboardEvent('keydown', { key: '/', bubbles: true, cancelable: true })); await pause(); assert.equal(d.activeElement.type, 'search');
  await click(d.querySelector('.copy-email')); assert.equal(d.querySelector('.copy-email').textContent, '已複製信箱');
  w.navigator.clipboard.writeText = async () => { throw new Error('Permission denied'); };
  await click(d.querySelector('.copy-email')); assert.equal(d.querySelector('.copy-email').textContent, '請使用 Email 連結');
  dom.window.close();
  for (const options of [{ preferences: { 'site-lang': 'invalid', 'site-theme': 'invalid' } }, { blockedStorage: true }, { reduced: true }]) {
    const site = await createSite(options);
    assert.equal(site.document.querySelectorAll('#projects .work-card').length, 15, 'Renders with invalid or blocked preferences');
    if (options.reduced) assert.equal(site.document.body.dataset.motion, 'paused');
    site.dom.window.close();
  }
  assert.deepEqual(errors, [], 'No runtime errors');
  console.log('PASS: catalog preservation, 3 languages, filters/search, themes, system map, motion preferences, keyboard navigation, email, and storage recovery.');
})().catch(error => { console.error(error); process.exitCode = 1; });
