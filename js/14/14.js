//jQuery輪播圖
$(document).ready(function () {

    let divWidth = $('#sliderBoard').width(); //60%
    let imgCount = $('#content li').length;   //8(張照片)
    // console.log(imgCount);
    // alert(imgCount)

    $('#content').width(divWidth * imgCount);    //ul的寬度
    $('#content li').width(divWidth);            //li的寬度

    for (let i = 0; i < imgCount; i++) {
        $('#contentButton').append('<li></li>');
    }
    $('#contentButton li:nth-child(1)').addClass('clickMe');

    let index;
    $('#contentButton li').click(function () {
        index = $(this).index();

        $('#content').animate({
            left: divWidth * index * -1,
        });

        $(this).addClass('clickMe');
        $('#contentButton li').not(this).removeClass('clickMe');
    });

    function change() {
        let winWidth = $(window).width();
        $('#sliderBoard').css({
            left: (winWidth - divWidth) / 2,
        });
        // console.log(divWidth);
    }
    change();

    $(window).resize(function () {
        divWidth = $('#sliderBoard').width(); //60% 不用let
        // console.log(divWidth);
        $('#content').width(divWidth * imgCount);    //ul的寬度
        $('#content li').width(divWidth);            //li的寬度
        change();
    });

    function movemove() {
        $('li.clickMe').removeClass('clickMe').next().addClass('clickMe');

        if ($('li.clickMe').index() == -1) {
            $('li:last-child').removeClass('clickMe');
            $('li:first-child').addClass('clickMe');
        }

        // console.log($('li.clickMe').index());
        // $('li.clickMe').removeClass('clickMe').next().addClass('clickMe');
        let tt = $('li.clickMe').index();
        $('#content').animate({
            left: divWidth * tt * -1,
        });
    }

    setInterval(movemove, 1000);
});