const btn = document.querySelector('.btn-modal')
const modal = document.querySelector('.modal')
const backdrop = document.querySelector('.backdrop')

btn.addEventListener('click', e => {
    if(e.target.nodeName !== 'BUTTON') return
    showModal()
})
    
backdrop.addEventListener('click', e => {
    if(e.target === e.currentTarget)
    hideModal()
})


function showModal (){
document.body.classList.add('show-modal')
}

function hideModal (){
document.body.classList.remove('show-modal')
}

