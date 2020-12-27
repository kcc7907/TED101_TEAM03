let content =document.querySelector('.content');
let right =document.querySelector('.right');
let left =document.querySelector('.left');
let slider =document.querySelector('.slider');
let bgbox =document.querySelector('.bgbox');

//mobile entry
content.addEventListener('click',()=>{
    if(window.innerWidth<=800){
    content.classList.add('-none');
    bgbox.style.height = '100%';
    bgbox.style.top  = '0px';
    left.style.height  = 'auto';
    right.classList.add('-block');
    }
});
window.addEventListener('resize',()=>{
    if(window.innerWidth>800){
        content.classList.remove('-none');
        right.classList.remove('-block');
    }
});


//onClick change_content
let rule_content = document.querySelectorAll('.rule_content');
let tab_span = document.querySelectorAll('.rule_tab span');
let px = parseInt(window.getComputedStyle(tab_span[1]).fontSize);
tab_span[0].classList.add('onTarget');
tab_span[0].style.setProperty('font-size',`${px+3}px`,"important");

tab_span.forEach((x,y) => {
    tab_span[y].addEventListener('click',(e)=>{
        rule_content.forEach((a,b) => {
            rule_content[b].style.display = 'none';
            tab_span[b].classList.remove('onTarget');
            tab_span[b].style.setProperty('font-size',`${px}px`,"important");
        });
        tab_span[y].classList.add('onTarget');
        tab_span[y].style.setProperty('font-size',`${px+3}px`,"important");
        rule_content[y].style.display = 'block';
        rule_content[y].scrollTop=0;
    });
});


//onScroll change_content
let content_len =rule_content.length;
rule_content.forEach((a,b) => {
    a.addEventListener("scroll",()=>{
        let scrollTotal = a.scrollHeight-a.clientHeight;
        if(b===rule_content.length-1 && a.scrollTop === scrollTotal){
            a.addEventListener('mousewheel',function wheelReset(e){
                if(e.wheelDelta <= -120){
                    rule_content[b].style.display = 'none';
                    rule_content[0].style.display = 'block';
                    rule_content[0].scrollTop=0;
                    tab_span[0].classList.add('onTarget');
                    tab_span[0].style.setProperty('font-size',`${px+3}px`,"important");
                    tab_span[b].classList.remove('onTarget');
                    tab_span[b].style.setProperty('font-size',`${px}px`,"important");
                }
            a.removeEventListener('mousewheel',wheelReset);
            },{ passive: true});
            rule_content[0].scrollTop=0;
        }else if(a.scrollTop === scrollTotal){
            a.addEventListener('mousewheel',function wheelNext(e){
                if(e.wheelDelta <= -120){
                    rule_content[b].style.display = 'none';
                    rule_content[b+1].style.display = 'block';
                    rule_content[b+1].scrollTop=0;
                    tab_span[b+1].classList.add('onTarget');
                    tab_span[b+1].style.setProperty('font-size',`${px+3}px`,"important");
                    tab_span[b].classList.remove('onTarget');
                    tab_span[b].style.setProperty('font-size',`${px}px`,"important");
                }
            a.removeEventListener('mousewheel',wheelNext);
            },{ passive: true});
        }
    });
});


//footer
$('.down img').click(function () {
    $(this).toggleClass('-scale');
    $('footer').toggleClass('-on').css('box-shadow', 'rgb(0,0,0,.5) 0 0 30px');
});


//slider
let picbox = document.querySelector('.picbox');
let logos = document.querySelectorAll('.picbox img');
let leave = document.querySelector('.leave');

let count=0;
let picWidth = logos[0].offsetWidth;
let len = logos.length;
let num = picbox.offsetWidth/logos[0].offsetWidth;

window.addEventListener('resize',getWidth);
function getWidth(){
    picWidth = logos[0].offsetWidth;
    len = logos.length;
    num = picbox.offsetWidth/logos[0].offsetWidth;
}

$('.arrowr img').click(function () {
    if(parseInt($('.leave').css('left'))%picWidth == 0 ){
        clearInterval(sliderRun);
        if(num+count<len){
            count++;
            $('.leave').animate({
                left:picWidth*count*-1
            },{
                complete: function () {
                    sliderRun = setInterval(run, 2000);
                }
            })
        }else if(num+count===len){
            sliderRun = setInterval(run, 2000);
        }
    }
});

$('.arrowl img').click(function () {
    if(parseInt($('.leave').css('left'))%picWidth == 0 ){
        clearInterval(sliderRun);
        if(count>0){
            count--;
            $('.leave').animate({
                left:picWidth*count*-1
            },{
                complete: function () {
                    sliderRun = setInterval(run, 2000);
                }
            });
        }else if(count===0){
            sliderRun = setInterval(run, 2000);
        }
    }
});

let sliderRun = setInterval(run, 2000);
function run(){
    if(num+count<len){
        count++;
        $('.leave').animate({
            left:picWidth*count*-1
        });
    }else {
        count=0;
        $('.leave').animate({
            left:picWidth*count*-1
        });
    }
}
