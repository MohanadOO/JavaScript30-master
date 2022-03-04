const timeLeft = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const timerControl = document.querySelectorAll('.timer__button')
const form = document.customForm
let countdown

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainderSeconds = seconds % 60
  const display = `${minutes}:${
    remainderSeconds < 10 ? '0' : ''
  }${remainderSeconds}`
  timeLeft.textContent = display
  document.title = display
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp)
  const hours = end.getHours()
  const minutes = end.getMinutes()

  endTime.textContent = `Be back At ${hours > 12 ? hours - 12 : hours}:${
    minutes < 10 ? '0' : ''
  }${minutes}`
}

function setTimer() {
  timer(parseInt(this.dataset.time))
}

function timer(seconds) {
  clearInterval(countdown)
  const now = Date.now()
  const then = now + seconds * 1000
  displayTimeLeft(seconds)
  displayEndTime(then)
  countdown = setInterval(() => {
    const timeLeft = Math.round((then - Date.now()) / 1000)
    if (timeLeft < 0) {
      clearInterval(countdown)
      return
    }

    displayTimeLeft(timeLeft)
  }, 1000)
}

timerControl.forEach((time) => time.addEventListener('click', setTimer))

form.addEventListener('submit', function (e) {
  e.preventDefault()
  timer(this.minutes.value * 60)
  this.reset()
})
