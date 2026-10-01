let timeleft = 10;
const secondsSpan = document.getElementById("seconds");
const loadingScreen = document.getElementById("loading-screen");
const musicBtn = document.getElementById("music-btn");
const audioBox = document.getElementById("audio-container");

// 🟢 ඔයා සරල කරපු අලුත්ම සින්දු ලින්ක් එක:
const driveAudioLink = "audio/music.mp3";
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

        // 🟢 HTML5 Audio ටැග් එක නිවැරදිව ඇතුළත් කිරීම:
        if (audioBox) {
            audioBox.innerHTML = `<audio id="bg-music" autoplay loop><source src="${driveAudioLink}" type="audio/mpeg"></audio>`; 
        }
    }
}, 1000);

// 🟢 බටන් එක ක්‍රියාත්මක වන සහ අකුරු මාරු වන නිවැරදි ලොජික් එක:
if (musicBtn) {
    musicBtn.addEventListener("click", function() {
        const bgMusic = document.getElementById("bg-music");
        if (bgMusic) {
            if (isMusicOn) {
                bgMusic.pause(); // සින්දුව නවත්වයි
                musicBtn.textContent = "🔇 Music: OFF";
                musicBtn.classList.add("music-off");
                isMusicOn = false;
            } else {
                bgMusic.play(); // සින්දුව නැවත ප්ලේ කරයි
                musicBtn.textContent = "🎵 Music: ON";
                musicBtn.classList.remove("music-off");
                isMusicOn = true;
            }
        }
    });
}
