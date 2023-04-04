


let currentHours = 23;
let currentMinutes = 59;
let currentSeconds = 59;

let hour1 = document.getElementById("hour1");
let hour2 = document.getElementById("hour2");
let min1 = document.getElementById("min1");
let min2 = document.getElementById("min2");
let sec1 = document.getElementById("sec1");
let sec2 = document.getElementById("sec2");

const timerInterval = setInterval(() => {
  if (currentSeconds == 0) {
    if (currentMinutes == 0) {
      currentHours -= 1;
      currentMinutes = 59;
      currentSeconds = 59;
    } else {
      currentMinutes -= 1;
      currentSeconds = 59;
    }
  } else {
    currentSeconds -= 1;
  }

  hour1.innerText = currentHours.toString().padStart(2, "0")[0];
  hour2.innerText = currentHours.toString().padStart(2, "0")[1];
  min1.innerText = currentMinutes.toString().padStart(2, "0")[0];
  min2.innerText = currentMinutes.toString().padStart(2, "0")[1];
  sec1.innerText = currentSeconds.toString().padStart(2, "0")[0];
  sec2.innerText = currentSeconds.toString().padStart(2, "0")[1];
}, 1000);