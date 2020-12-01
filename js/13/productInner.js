///////////////尺寸圖 /運送 切換////////////////
$(document).ready(function () {
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




















    // let divWidth = $('sliderBox').width();
    // let imgCount = $('#content li').length;
    // let liWidth = $('#content li').width;
    // //alert(imgCount);

    // $('#content').width(divWidth * imgCount);
    // $('#content li').width(divWidth);


    // $('#left').click(function () {
    //     // alert();
    //     $('#content').animate({
    //         left: '-500px',
    //     });
    // });
    // $('#right').click(function () {
    //     // alert();
    //     $('#content').animate({
    //         left: '250px',
    //     });
    // });



    // $(document).ready(function () {
    //     let divWidth = $('#sliderBoard').width();
    //     let imgCount = $('#content li').length;
    //     // alert(imgCount)

    //     $('#content').width(divWidth * imgCount);    //ul的寬度
    //     $('#content li').width(divWidth);    //li的寬度

    //     for (let i = 0; i < imgCount; i++) {
    //         $('#contentButton').append('<li></li>');
    //     }
    //     $('#contentButton li:nth-child(1)').addClass('clickMe');

    //     let index;
    //     $('#contentButton li').click(function () {
    //         index = $(this).index();

    //         $('#content').animate({
    //             left: divWidth * index * -1,
    //         });

    //         $(this).addClass('clickMe');
    //         $('#contentButton li').not(this).removeClass('clickMe');
    //     });
    // });


});