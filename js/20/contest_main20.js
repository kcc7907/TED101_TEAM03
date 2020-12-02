let content =document.querySelector('.content');
let right =document.querySelector('.right');
let slider =document.querySelector('.slider');
let bgbox =document.querySelector('.bgbox');

content.addEventListener('click',()=>{
    if(window.innerWidth<=800){
    content.classList.add('-none');
    bgbox.style.height = '100%';
    bgbox.style.top  = '0px';
    right.classList.add('-block');
    }
});


let rule_content = document.querySelectorAll('.rule_content');
let tab_span = document.querySelectorAll('.rule_tab span');

tab_span.forEach((x,y) => {
    tab_span[y].addEventListener('click',(e)=>{
        rule_content.forEach((a,b) => {
            rule_content[b].style.display = 'none';
        });
        rule_content[y].style.display = 'block';
    });
});


$('.down img').click(function () {
    $(this).toggleClass('-scale');
    $('footer').toggleClass('-on').css('box-shadow', 'rgb(0,0,0,.5) 0 0 30px');
});
