let headerNav = document.querySelector('header nav');
let $_headerNav = $('header nav');
let ham = document.querySelector('.ham');
let hamSpan = document.querySelectorAll('.ham span');

function navNone(evt) {
    evt.preventDefault();
    hamSpan[0].classList.toggle('-hamR');
    hamSpan[1].classList.toggle('-none');
    hamSpan[2].classList.toggle('-hamL');
    // headerNav.classList.toggle('-block');
    // headerNav.slideToggle();
    $_headerNav.slideToggle();
}

ham.addEventListener('click', navNone);
