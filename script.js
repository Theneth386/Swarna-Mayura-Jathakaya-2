let timeleft = 10;
const secondsSpan = document.getElementById("seconds");
const loadingScreen = document.getElementById("loading-screen");
const musicBtn = document.getElementById("music-btn");
const audioBox = document.getElementById("audio-container");
const driveAudioLink = "https://google.com1ZuTEYP_dRbLJdMpjDAS99UsGKFDW5puP";
let isMusicOn = true;
if (secondsSpan) {
    secondsSpan.textContent = timeleft;
}
const countdownTimer = setInterval(function() {
    timeleft--;
    if (secondsSpan) {
        secondsSpan.textContent = timeleft;
    }

    if (timeleft <= 0) {
        clearInterval(countdownTimer);

        if (loadingScreen) {
            loadingScreen.style.display = "none";
        }

        if (audioBox) {
            audioBox.innerHTML = `<iframe id="bg-music" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="${soundCloudLink}"></iframe>`; 
        }
    }
}, 1000);

if (musicBtn) {
    musicBtn.addEventListener("click", function() {
        if (isMusicOn) {
            if (audioBox) audioBox.innerHTML = "";
            musicBtn.textContent =  "🔇 Music: OFF";
            musicBtn.classList.add("music-off");
            isMusicOn = false;
        } else {
            if (audioBox) audioBox.innerHTML = `<iframe id="bg-music" width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="${soundCloudLink}"></iframe>`;
            musicBtn.textContent = "🎵 Music: ON";
            musicBtn.classList.remove("music-off");
        }
    });
}
