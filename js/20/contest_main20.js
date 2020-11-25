let content =document.querySelector('.content');
let right =document.querySelector('.right');
let slider =document.querySelector('.slider');
let bgbox =document.querySelector('.bgbox');

content.addEventListener('click',()=>{
    content.classList.add('-none');
    bgbox.style.height = '100%';
    bgbox.style.top  = '0px';
    right.classList.add('-block');
});