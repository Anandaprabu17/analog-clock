setInterval(() => {
  let hour = document.getElementById("hr");
  let min = document.getElementById("min");
  let sec = document.getElementById("sec");

  let hourNiddle = document.getElementById("hours");
  let minNiddle = document.getElementById("minutes");
  let secNiddle = document.getElementById("seconds");

  let currentHour = new Date().getHours();
  let currentMin = new Date().getMinutes();
  let currentSec = new Date().getSeconds();

  hourNiddle.style.transform = `rotateZ(${currentHour * 30}deg)`;
  minNiddle.style.transform = `rotateZ(${currentMin * 6}deg)`;
  secNiddle.style.transform = `rotateZ(${currentSec * 6}deg)`;
});
