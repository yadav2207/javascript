let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function startStopwatch() {
  interval = setInterval(function() {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    let displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    let displayHours = hours < 10 ? "0" + hours : hours;
    document.getElementById("stopwatch").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
  }, 1000);
}

function stopStopwatch() {
  clearInterval(interval);
}

function resetStopwatch() {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("stopwatch").innerHTML = "00Hr:00min:00sec";
}
document.getElementById("start").addEventListener("click", startStopwatch);
document.getElementById("stop").addEventListener("click", stopStopwatch);
document.getElementById("reset").addEventListener("click", resetStopwatch);