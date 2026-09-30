let timeleft = 10;
const secondsSpan = document.getElementById("seconds");
const loadingScreen = document.getElementById("loading-screen");
const musicBtn = document.getElementById("music-btn");
const audioBox = document.getElementById("audio-container");
const driveAudioLink = "audio/ඩජටල වසක තරණ l සවරණ මයර ජතකය  Swarna Mayura Jatakaya.mp3";
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
            audioBox.innerHTML = `<audio id="bg-music" autoplay loop><source src="${driveAudioLink}" type="audio/mpeg"></audio>`; 
        }
    }
}, 1000);

if (musicBtn) {
    musicBtn.addEventListener("click", function() {
        const bgMusic = document.getElementById("bg-music");
        if (bgMusic) {
            if (isMusicOn) {
                bgMusic.pause();
                musicBtn.textContent = "🔇 Music: OFF";
                musicBtn.classList.add("music-off");
                isMusicOn = false;
            } else {
                bgMusic.play();
                musicBtn.textContent = "🎵 Music: ON";
                musicBtn.classList.remove("music-off");
                isMusicOn = true;
            }
        }
    });
}
