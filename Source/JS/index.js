var jsonUri = "data:text/plain;base64,"+window.btoa(JSON.stringify(partJson));

particlesJS.load('particlesJS', jsonUri, function() {
    console.log('callback - particles.js config loaded');
});

document.getElementsByTagName("div").mainView.style.display     = "";
document.getElementsByTagName("div").documentView.style.display = "none";
document.getElementsByTagName("div").projectView.style.display  = "none";
document.getElementsByTagName("div").aboutView.style.display    = "none";
document.getElementsByTagName("div").blogView.style.display     = "none";