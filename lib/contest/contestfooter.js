// footer
$(document).ready(function () {
    $('.slideUp').click(function () {
        $('footer').addClass('on').css('box-shadow', 'rgb(0,0,0,.5) 0 -0px 30px');
        $(this).hide().css({
            backgroundColor: '#CAC3BB',
        });
        $('.slideDn').show();
    });

    $('.slideDn').click(function () {
        $('footer').removeClass('on').css('box-shadow', 'rgb(0,0,0,.5) 0 0 30px');
        $(this).hide();
        $('.slideUp').show().css({
            backgroundColor: '#F1EADE',
        });;
    });
});