$(document).ready(function () {
    // ===== 漢堡包 ======
    let $_headerNav = $('header nav');
    $('.ham').click(function(){
        $('.ham span:first-child').toggleClass('-hamR');
        $('.ham span:nth-child(2)').toggleClass('-none');
        $('.ham span:last-child').toggleClass('-hamL');
        $_headerNav.slideToggle();
    });

    // ===== 商品輪播 =====
    // let pdtOutside = $('#sliderBoardJH').width();
    // let pdtCount = $('#pdtJH div').length;
    // console.log(pdtOutside);
    // console.log(pdtCount);


});