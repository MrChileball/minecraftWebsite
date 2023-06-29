window.addEventListener('DOMContentLoaded', function() {
  function startTimer(duration, display) {
    var timer = duration;
    var minutes, seconds;

    setInterval(function() {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  var timerDuration = 180; // Duración en segundos
  var display = document.querySelector("#timer");

  startTimer(timerDuration, display);
});