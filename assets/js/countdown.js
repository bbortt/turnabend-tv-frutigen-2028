(function () {
  var el = document.getElementById("countdown");
  if (!el) return;

  var target = new Date(el.getAttribute("data-event-date")).getTime();
  if (isNaN(target)) return;

  var daysEl = el.querySelector('[data-unit="days"]');
  var hoursEl = el.querySelector('[data-unit="hours"]');
  var minutesEl = el.querySelector('[data-unit="minutes"]');
  var secondsEl = el.querySelector('[data-unit="seconds"]');

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  var timer;

  function tick() {
    var diff = target - Date.now();

    if (diff <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      clearInterval(timer);
      return;
    }

    var totalSeconds = Math.floor(diff / 1000);
    var days = Math.floor(totalSeconds / 86400);
    var hours = Math.floor((totalSeconds % 86400) / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
  }

  tick();
  timer = setInterval(tick, 1000);
})();
