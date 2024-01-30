const hamButton = document.querySelector('#menu')
const navigation = document.querySelector('.navigation')
const active = document.querySelector('')

hamButton.addEventListener('click', () =>{
    navigation.classList.toggle('open')
    hamButton.classList.toggle('open')
})