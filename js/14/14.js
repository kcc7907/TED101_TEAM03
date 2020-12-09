$(document).ready(function () {
    //jQuery輪播圖

    let divWidth = $('#sliderBoard').width(); //90%
    let imgCount = $('#content li').length;   //3(張照片)
    // console.log(imgCount);

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

    // function change() {
    //     let winWidth = $(window).width();
    //     $('#sliderBoard').css({
    //         left: (winWidth - divWidth) / 2,
    //     });
    //     // console.log(divWidth);
    // }
    // change();

    // $(window).resize(function () {
    //     divWidth = $('#sliderBoard').width(); //60% 不用let
    //     // console.log(divWidth);
    //     $('#content').width(divWidth * imgCount);    //ul的寬度
    //     $('#content li').width(divWidth);            //li的寬度
    //     change();
    // });

    function movemove() {
        $('#contentButton li.clickMe').removeClass('clickMe').next().addClass('clickMe');

        if ($('#contentButton li.clickMe').index() == -1) {
            $('#contentButton li:last-child').removeClass('clickMe');
            $('#contentButton li:first-child').addClass('clickMe');
        }

        // console.log($('li.clickMe').index());
        // $('li.clickMe').removeClass('clickMe').next().addClass('clickMe');
        let tt = $('#contentButton li.clickMe').index();
        if (tt <= 2) {
            $('#content').animate({
                left: divWidth * tt * -1,
            });
        }
    }
    setInterval(movemove, 2000);


    //RWD輪播圖
    // if (windows.ineerwidth < 993) {
    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.interior_two'
    // });
    // $('.slider-nav').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 2,
    //     asNavFor: '.interior_one',
    //     dots: true,
    //     focusOnSelect: true
    // });
    // }
    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-nav'
    // });
    // $('.slider-nav').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: true,
    //     centerMode: true,
    //     focusOnSelect: true
    // });





    // 360平面圖燈箱
    $('div.inter_one a').click(function (e) {
        // <a>連結不作用
        e.preventDefault();
        // 改寫img src
        $('#picsLightBox img:first-child').attr('src', `${$(this).children('img').attr('src')}`);
        // 燈箱出現
        $('#picsLightBox').css({
            'opacity': '1',
            'z-index': '10',
        });
        // 關閉燈箱
        $('#picsLightBox img:last-child').click(function () {
            $('#picsLightBox').css({
                'opacity': '0',
                'z-index': '-10',
            });
        });
    });



    //RWD輪播圖
    let S_photo = $('.small');
    console.log(S_photo);
    for (let i = 0; i < S_photo.length; i++) {
        S_photo[i].addEventListener('click', function (e) {
            document.getElementById('big').src = e.target.src;
            console.log(document.getElementById('big').src);
        });
    };

    //箭頭綁定
    //
    $('#to_left').click(function () {

    });

    $('#to_right').click(function () {
        let now_Src = document.getElementById('big').src;
        // let now_Src = $('#big');
        // let S_photo = document.getElementsByClassName('small').src;
        let smallP = $('.small');
        for (let i = 0; i < smallP.length; i++) {
            if (smallP[i].src == now_Src) {
                let bbb = smallP[i].parentElement.parentElement.nextElementSibling.querySelector('img.small').src
                document.getElementById('big').src = bbb;
            }
        }
        // for (let i = 0; i < smallP.length; i++) {
        //     if (smallP[i] == now_Src) {
        //         console.log(smallP[i]);
        //     }
        // }
    });
});

// 頁籤
$(function () {
    $("a.tab").on("click", function (e) {
        e.preventDefault();

        /* 將頁籤列表移除所有 -on，再將指定的加上 -on */
        $(this).closest("ul").find("a.tab").removeClass("-on");
        $(this).addClass("-on");

        /* 找到對應的頁籤內容，加上 -on 來顯示 */
        $("div.tab").removeClass("-on");
        $("div.tab." + $(this).attr("data-target")).addClass("-on");
        console.log($("div.tab." + $(this).attr("data-target")));
    });
});


