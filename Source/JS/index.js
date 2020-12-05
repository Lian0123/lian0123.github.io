/*
 * X: 降低效能(移除特效)

var jsonUri = "data:text/plain;base64,"+window.btoa(JSON.stringify(partJson));

particlesJS.load('particlesJS', jsonUri, function() {
    console.log('callback - particles.js config loaded');
});
*/
document.getElementsByTagName("div").topMask.className  = "animated fadeOut delay-500ms";
setTimeout(() => {
    document.getElementsByTagName("div").topMask.style.display  = "none";
}, 1000);

document.getElementsByTagName("div").mainView.style.display     = "";
document.getElementsByTagName("div").documentView.style.display = "none";
document.getElementsByTagName("div").projectView.style.display  = "none";
document.getElementsByTagName("div").aboutView.style.display    = "none";
document.getElementsByTagName("div").blogView.style.display     = "none";
