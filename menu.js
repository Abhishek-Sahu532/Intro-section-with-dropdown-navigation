let openMenu = document.getElementsByClassName('open-menu')[0];

let topContainer = document.querySelector('.top-container')
let closeMenuBtn = document.querySelector('.close-menu');
let mobileMenu = document.querySelector('.mobile-menu')


openMenu.addEventListener('click', () => {
    topContainer.style.display = 'none'
    mobileMenu.style.display = 'revert'
    mobileMenu.style.height = '100vh'
    closeMenuBtn.style.display = 'revert'
})

closeMenuBtn.addEventListener('click', () => {
    topContainer.style.display = 'flex'
    mobileMenu.style.display = 'none'
    closeMenuBtn.style.display = 'none'
})