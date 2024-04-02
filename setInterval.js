
const logo = document.querySelector('.js-set')

function showLogo () {
logo.classList.add('is-visible')
}

function hideLogo () {
logo.classList.remove('is-visible')
}

setTimeout(() => {
  showLogo();

  setInterval(hideLogo, 7000)

}, 3000);