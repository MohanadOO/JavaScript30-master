const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const req = new XMLHttpRequest()
req.open('GET', endpoint, true)
req.send()
req.onload = () => {
  const json = JSON.parse(req.responseText)
  const cities = json.map((element) => element['city'])

  const search = document.querySelector('.search')
  search.addEventListener('input', displayMatches)

  const list = document.querySelector('.suggestions')

  function findMatches(matchWord) {
    return json.filter((place) => {
      const regex = new RegExp(matchWord, 'gi')
      return place.city.match(regex) || place.state.match(regex)
    })
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  function displayMatches() {
    if (this.value === '') {
      return
    }
    const matchArray = findMatches(this.value)
    const html = matchArray
      .map((place) => {
        const regex = new RegExp(this.value, 'gi')
        const cityName = place.city.replace(
          regex,
          `<span class = 'hl'> ${this.value}</span>`
        )
        const stateName = place.state.replace(
          regex,
          `<span class = 'hl'> ${this.value}</span>`
        )
        return `
      <li>
      <span class = "name">${cityName}, ${stateName}</span>
      <span class = "population">${numberWithCommas(place.population)}</span>
      </li>
      `
      })
      .join('')
    list.innerHTML = html
  }
}
