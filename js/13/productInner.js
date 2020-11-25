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









});