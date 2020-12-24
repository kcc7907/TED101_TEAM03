let headerNav = document.querySelector('header nav');
let $_headerNav = $('header nav');
let ham = document.querySelector('.ham');
let hamSpan = document.querySelectorAll('.ham span');

function navNone(evt) {
    evt.preventDefault();
    hamSpan[0].classList.toggle('-hamR');
    hamSpan[1].classList.toggle('-none');
    hamSpan[2].classList.toggle('-hamL');
    $_headerNav.slideToggle();
    $_headerNav.css({
        'background':'#F1EADE',
        'border': '1px solid #BDA79E',
        'zIndex': '1',
        'padding': '10px 10px 0 10px'
    });
    $('.logMembox').hide();
}

ham.addEventListener('click', navNone);

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        headerNav.style.background = 'none';
        headerNav.style.zIndex = '1';
        headerNav.style.padding = '0px';
        headerNav.style.border = 'none';
    } else {
        headerNav.style.background = '#F1EADE';
        headerNav.style.zIndex = '1';
        headerNav.style.padding = '10px 10px 0 10px';
    }
});

function setShopNum(){
    let shoplist = JSON.parse(localStorage.getItem("lists"));
    let shopIcon = document.querySelector('.shop');
    let shopnum = 0;
    shoplist.forEach(e => {
        shopnum += parseInt(e.num);
    });
    if (shopnum === 0) {
        return false;
    } else if (!shopIcon.classList.contains('shopnum')) {
        shopIcon.setAttribute('data-content', shopnum);
        shopIcon.classList.add('shopnum');
    } else {
        shopIcon.setAttribute('data-content', shopnum);
    }
}

window.addEventListener('storage', setShopNum);
window.addEventListener('load', setShopNum);
