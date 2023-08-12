/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

const inputHeight = document.querySelector('#input-height');
const inputWeight = document.querySelector('#input-weight');
const resultBlock = document.querySelector('#result-block');
const calculateBtn = document.querySelector('#calculate-btn');


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// Calculate BMI
calculateBtn.addEventListener('click', () => {
    let calculateBMI = inputWeight.value / ((inputHeight.value / 100) * (inputHeight.value / 100));
    resultBlock.textContent = `Ваш результат: ${calculateBMI.toFixed(1)}`
});