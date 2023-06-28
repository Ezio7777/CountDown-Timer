const daysEL = document.getElementById("days");
const hoursEL = document.getElementById("hours");
const minEL = document.getElementById("minutes");
const secondEL = document.getElementById("seconds");

const fifthSem = "9 Dec 2023";

function countdown() {
  const fifthSemDate = new Date(fifthSem);

  const cuurrentDate = new Date();

  const totalseconds = (fifthSemDate - cuurrentDate) / 1000;

  const days = Math.floor(totalseconds / 3600 / 24);

  const hours = Math.floor(totalseconds / 3600) % 24;

  const minutes = Math.floor(totalseconds / 60) % 60;

  const seconds = Math.floor(totalseconds % 60);

  daysEL.innerHTML = days;
  hoursEL.innerHTML = formatTime(hours);
  minEL.innerHTML = formatTime(minutes);
  secondEL.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
