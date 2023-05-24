// alert ("да сколько можно!");

//menu

const navToggle = document.querySelector('.main-nav__toggle');
if (navToggle){
    const navMenu = document.querySelector('.main-nav__wrapper');
    navToggle.addEventListener("click", function(e) {
        navToggle.classList.toggle('_active');
        navMenu.classList.toggle('_active');
    } );
}