//Get out Elements
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
const fullScreen = player.querySelector('.fullscreen')

//Build our function
function togglePlay() {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

function updateButton() {
  const icon = this.paused ? '►' : '❚❚'
  toggle.textContent = icon
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  video[this.name] = this.value
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}

let toggleCheck = false
function toggleFullScreen() {
  if (toggleCheck === false) {
    player.style.maxWidth = `${100}vw`
    document.body.style.display = 'block'
    toggleCheck = true
  } else {
    player.removeAttribute('style')
    video.removeAttribute('style')
    document.body.removeAttribute('style')
    toggleCheck = false
  }
}

//Hook up the event listener
toggle.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('click', togglePlay)
video.addEventListener('timeupdate', handleProgress)
skipButtons.forEach((button) => button.addEventListener('click', skip))
ranges.forEach((range) => range.addEventListener('input', handleRangeUpdate))

let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => (mousedown = true))
progress.addEventListener('mouseup', () => (mousedown = false))

fullScreen.addEventListener('click', toggleFullScreen)
