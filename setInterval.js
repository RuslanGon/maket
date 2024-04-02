
const logo = document.querySelector('.js-set')
let timeoutId = null

function showLogo () {
logo.classList.add('is-visible')
}

function hideLogo () {
logo.classList.remove('is-visible')
}

setTimeout(() => {
  showLogo();

  timeoutId = setInterval(hideLogo, 7000)

}, 3000);

// закрыть при клике

logo.addEventListener('click', () => {
    hideLogo()
    clearTimeout(timeoutId)
})

logo.addEventListener('keydown', (e) => {
if(e.code === 'Escape'){
    hideLogo()
    clearInterval(timeoutId)
}
})


// setInterval(() => {
//     console.log('hello');
//     logo.classList.toggle('is-visible')
// }, 2000)




