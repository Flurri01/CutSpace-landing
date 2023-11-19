const form = document.querySelector('.form')
const input = document.querySelector('.form-input')
input.addEventListener('focus', () => {
    form.classList.add('form-active')
})
input.addEventListener('blur', () => {
    form.classList.remove('form-active')
})
const menu = document.querySelector('.navigation')
const burgerButton = document.querySelector('.burger')
const body = document.body
const sections = document.querySelectorAll('.section')
if(menu && burgerButton) {
    burgerButton.addEventListener('click', () => {
        menu.classList.toggle('active')
        burgerButton.classList.toggle('active')
        body.classList.toggle('lock')
    })
}