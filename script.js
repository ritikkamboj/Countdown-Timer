// we have to time difference ,but before that we have to find the current year and from that we have to find the next year
const daysUI = document.getElementById("days");
const hoursUI = document.getElementById("hours");
const minutesUI = document.getElementById("minutes");
const secondsUI = document.getElementById("seconds");
const yearNext = document.getElementById("year");
const loading = document.getElementById("loading");
const countdown = document.getElementById("countdown");

const currYear = new Date().getFullYear();
console.log(currYear);

yearNext.innerHTML = currYear + 1;

const nextYearTime = new Date(` January 01 ${currYear + 1} 00:00:00`);
console.log(nextYearTime);

// now we  have to find the time difference form the current time to the next year time

function timeRemaining() {
  let diff = nextYearTime - new Date();
  // coverting into seconds

  let seconds = Math.floor(diff / 1000);
  const days = Math.floor(seconds / (24 * 3600));
  seconds %= 24 * 3600;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  daysUI.innerHTML = days < 10 ? `0` + days : days;
  hoursUI.innerHTML = hours < 10 ? `0` + hours : hours;
  minutesUI.innerHTML = minutes < 10 ? `0` + minutes : minutes;
  secondsUI.innerHTML = seconds < 10 ? `0` + seconds : seconds;
}

setInterval(timeRemaining, 1000);

setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);
