$(document).ready(function () {
    $('.icon1Btn').on('click', function () {
        $('.product').css({
            display: 'block',
        });
        $('.bookcase_select').css({
            display: 'none',
        });
        $('.chair_select').css({
            display: 'none',
        });
        $('.table_select').css({
            display: 'none',
        });
        $('.bed_select').css({
            display: 'none',
        });
        $('.productBox').css({
            justifyContent: 'left',
        });
        $('.product').css({
            marginLeft: '15px',
        });
    });
    $('.icon2Btn').on('click', function () {
        $('.product').css({
            display: 'block',
        });
        $('.bookcase_select').css({
            display: 'none',
        });
        $('.chair_select').css({
            display: 'none',
        });
        $('.sofa_select').css({
            display: 'none',
        });
        $('.bed_select').css({
            display: 'none',
        });
        $('.productBox').css({
            justifyContent: 'left',
        });
        $('.product').css({
            marginLeft: '15px',
        });
    });
    $('.icon3Btn').on('click', function () {
        $('.product').css({
            display: 'block',
        });
        $('.bookcase_select').css({
            display: 'none',
        });
        $('.chair_select').css({
            display: 'none',
        });
        $('.sofa_select').css({
            display: 'none',
        });
        $('.table_select').css({
            display: 'none',
        });
        $('.productBox').css({
            justifyContent: 'left',
        });
        $('.product').css({
            marginLeft: '15px',
        });
    });
    $('.icon4Btn').on('click', function () {
        $('.product').css({
            display: 'block',
        });
        $('.bookcase_select').css({
            display: 'none',
        });
        $('.bed_select').css({
            display: 'none',
        });
        $('.sofa_select').css({
            display: 'none',
        });
        $('.table_select').css({
            display: 'none',
        });
        $('.productBox').css({
            justifyContent: 'left',
        });
        $('.product').css({
            marginLeft: '15px',
        });
    });
    $('.icon5Btn').on('click', function () {
        $('.product').css({
            display: 'block',
        });
        $('.chair_select').css({
            display: 'none',
        });
        $('.bed_select').css({
            display: 'none',
        });
        $('.sofa_select').css({
            display: 'none',
        });
        $('.table_select').css({
            display: 'none',
        });
        $('.productBox').css({
            justifyContent: 'left',
        });
        $('.product').css({
            marginLeft: '15px',
        });
    });

    //////////////毛點///////////////
    $('.icon6Btn').on('click', function () {
        $('html,body').animate({
            scrollTop: $('span.line').offset().top
        }, 1500);
    });
});