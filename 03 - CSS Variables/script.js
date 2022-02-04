const spacing = document.getElementById('spacing')
const blurBar = document.getElementById('blur')
const base = document.getElementById('base')
const image = document.getElementsByTagName('img')[0]
const js = document.getElementsByClassName('hl')[0]

js.style.color = base.getAttribute('value')
image.style.padding = spacing.getAttribute('value') + 'px'
image.style.backgroundColor = base.getAttribute('value')
image.style.filter = `blur(${blurBar.getAttribute('value')}px)`

const inputs = document.querySelectorAll('.controls input')
inputs.forEach((input) => input.addEventListener('input', updateInputs))

function updateInputs(e) {
  e.target = e.target.setAttribute('value', e.target.value)
  js.style.color = base.getAttribute('value')
  image.style.padding = spacing.getAttribute('value') + 'px'
  image.style.backgroundColor = base.getAttribute('value')
  image.style.filter = `blur(${blurBar.getAttribute('value')}px)`
}
