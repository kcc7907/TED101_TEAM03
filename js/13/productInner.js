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
    let divWidth = $('sliderBox').width();
    let imgCount = $('#content li').length;
    let liWidth = $('#content li').width;
    //alert(imgCount);

    $('#content').width(divWidth * imgCount);
    $('#content li').width(divWidth);


    $('#left').click(function () {
        // alert();
        $('#content').animate({
            left: '-500px',
        });
    });


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