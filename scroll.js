const goBtnTop = document.querySelector('.go-top')

goBtnTop.addEventListener('click', onTopGo)

window.addEventListener('scroll', trackScroll)

function trackScroll () {
    const offset = window.pageYOffset
    const coords = document.documentElement.clientHeight 
    if(offset > coords){
        goBtnTop.classList.add('is-show')
    }else{
        goBtnTop.classList.remove('is-show')
    }

}

function onTopGo (){
   if(window.pageYOffset > 0){
    window.scrollBy(0, -35)
    setTimeout(onTopGo, 0)
   }
}