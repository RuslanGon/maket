const goBtnTop = document.querySelector('.go-top')
goBtnTop.addEventListener('click', onTopGo)
function onTopGo (){
   if(window.pageYOffset > 0){
    window.scrollBy(0, -75)
   }
}