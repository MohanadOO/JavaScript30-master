let hourHand = document.querySelector(".hour-hand");
let minutesHand = document.querySelector(".min-hand");
let secondHand = document.querySelector(".second-hand");

setInterval(() => {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hour = date.getHours();
  const SecondRotation = 90 + seconds * 6;
  const MinuteRotation = 90 + minutes * 6;
  const HourRotation = 90 + hour * 6;

  secondHand.style.transform = `rotate(${SecondRotation}deg`;
  minutesHand.style.transform = `rotate(${MinuteRotation}deg`;
  hourHand.style.transform = `rotate(${HourRotation}deg)`;
}, 1000);
