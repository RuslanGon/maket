const btn = document.querySelector('.btn-modal')

btn.addEventListener('click', e => {
    if(e.target.nodeName !== 'BUTTON') return
    showModal()
})
    

function showModal (){
document.body.classList.add('show-modal')
}

function hideModal (){
document.body.classList.remove('show-modal')
}

