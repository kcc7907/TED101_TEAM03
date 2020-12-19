$(document).ready(function () {
    $('#small01').on('click', function () {
        $('div.blackBack').addClass('-on');
    });

    $('.cancel').on('click', function () {
        $('div.blackBack').addClass('-opacity-zero');

        setTimeout(function () {
            $('div.blackBack').removeClass('-on -opacity-zero');
        }, 1000);
    });

    $('#small02').on('click', function () {
        $('div.blackBack2').addClass('-on');
    });

    $('.cancel').on('click', function () {
        $('div.blackBack2').addClass('-opacity-zero');

        setTimeout(function () {
            $('div.blackBack2').removeClass('-on -opacity-zero');
        }, 1000);
    });

    $('#small03').on('click', function () {
        $('div.blackBack3').addClass('-on');
    });

    $('.cancel').on('click', function () {
        $('div.blackBack3').addClass('-opacity-zero');

        setTimeout(function () {
            $('div.blackBack3').removeClass('-on -opacity-zero');
        }, 1000);
    });


    ///////////////////表單驗證-focus blur 效果///////////////////////
    $('#username').focus(function () {
        $(this).css("borderBottom", "3px solid #865454");
    });
    $('#username').blur(function () {
        if () {

        } else {

        }
    });
    $('#useremail').focus(function () {
        $(this).css("borderBottom", "3px solid #865454");
    });
    $('#useremail').blur(function () {
        $(this).css("borderBottom", "1px solid #BDA79E");
    });
    $('#userphone').focus(function () {
        $(this).css("borderBottom", "3px solid #865454");
    });
    $('#userphone').blur(function () {
        $(this).css("borderBottom", "1px solid #BDA79E");
    });
    $('#useraddress').focus(function () {
        $(this).css("borderBottom", "3px solid #865454");
    });
    $('#useraddress').blur(function () {
        $(this).css("borderBottom", "1px solid #BDA79E");
    });
    ///////////////////表單驗證 效果///////////////////////





});