// Target marriage date (YYYY, MM - 1, DD, HH, MM, SS)
const marriageDate = new Date(2023, 11, 06, 12, 0, 0);

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = marriageDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = `
        ${days}<span class="label">days</span>
        ${hours}<span class="label">hours</span>
        ${minutes}<span class="label">minutes</span>
        ${seconds}<span class="label">seconds</span>
    `;
}

updateCountdown();
setInterval(updateCountdown, 1000); // Update every second