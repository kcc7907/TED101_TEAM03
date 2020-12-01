
$(document).ready(function () {
    //////////LIGHTBOX////////////////////////////
    $('#lightBox01').on('click',function(){
        $('div.blackBack').addClass('-on');
    });

    $('#cancel').on('click',function(){
        $('div.blackBack').addClass('-opacity-zero');

        setTimeout(function(){
            $('div.blackBack').removeClass('-on -opacity-zero');
        },1000);
    });
/////////////////lightbox mobile/////////////////
    $('#lightBox01-mobile').on('click',function(){
        $('div.blackBack').addClass('-on');
    });

    $('#cancel-mobile01').on('click',function(){
        $('div.blackBack').addClass('-opacity-zero');

        setTimeout(function(){
            $('div.blackBack').removeClass('-on -opacity-zero');
        },1000);
    });

    ///////////////尺寸圖 /運送 切換////////////////
    $('#size').on('click', function () {
        $('#bottomCad').css({
            display: 'flex',
        });
        $('#bottomDelivery').css({
            display: 'none',
        });
        $('#delivery').css({
            borderBottom: '0',
        });
        $('#size').css({
            borderBottom: '10px solid #bda79e',
        });
    });

    $('#delivery').on('click', function () {
        $('#delivery').css({
            borderBottom: '10px solid #bda79e',
        });
        $('#size').css({
            borderBottom: '0',
        });
        $('#bottomCad').css({
            display: 'none',
        });
        $('#bottomDelivery').css({
            display: 'flex',
        });
    });
    //////////////////////////slider/////////////////////////

    const sliderBox = document.querySelector('.slider');
    const slider = document.querySelectorAll('.slider img');

    const leftBtn = document.querySelector('#left');
    const rightBtn = document.querySelector('#right');

    //Counter
    let counter = 1;
    const size = slider[0].clientWidth;

    console.log(size);

    // sliderBox.style.transform = 'translateX(' + (-size * counter) +'px)';

    //Button Listeners
    rightBtn.addEventListener('click', () => {
        if (counter >= slider.length - 1) return;
        sliderBox.style.transition = "transform 0.3s ease-in-out";
        counter++;
        sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    leftBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        sliderBox.style.transition = "transform 0.3s ease-in-out";
        counter--;
        sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    sliderBox.addEventListener('transitionend', () => {
        //console.log(slider[counter]);
        if (slider[counter].id === 'lastClone') {
            sliderBox.style.transition = 'none';
            counter = slider.length - 2;
            sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
        };
        if (slider[counter].id === 'firstClone') {
            sliderBox.style.transition = 'none';
            counter = slider.length - counter;
            sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
        };
    });


});