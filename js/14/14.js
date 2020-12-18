console.log(123);
$(document).ready(function () {
    //jQuery獎項輪播圖

    let divWidth = $('#sliderBoard').width(); //90%
    let imgCount = $('#content li').length;   //3(張照片)
    let index;

    resizeWidth();
    window.onresize = function () {
        resizeWidth(); //90%
    }

    function resizeWidth() {
        divWidth = $('#sliderBoard').width();
        $('#content').width(divWidth * imgCount);    //ul的寬度
        $('#content li').width(divWidth);            //li的寬度
        $('#contentButton li').click(function () {
            index = $(this).index();

            $('#content').stop(true).animate({
                left: divWidth * index * -1,
            }, 700);

            $(this).addClass('clickMe');
            $('#contentButton li').not(this).removeClass('clickMe');
        });

        if (window.innerWidth <= 768) {
            divHeight = $('#content img').height();
            // console.log(divHeight);
            $('.other_text').height(divHeight)
        }

        image = $('#content img').height();
        console.log(image);
        $('.other_text').height(image)

        $(window).scroll(function () {
            image = $('#content img').height();
            console.log(image);
            $('.other_text').height(image)
        })

    }


    for (let i = 0; i < imgCount; i++) {
        $('#contentButton').append('<li></li>');
    }
    $('#contentButton li:nth-child(1)').addClass('clickMe');

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
    setInterval(movemove, 2100);


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
    // console.log(S_photo);
    for (let i = 0; i < S_photo.length; i++) {
        S_photo[i].addEventListener('click', function (e) {
            document.getElementById('big').src = e.target.src;
            // console.log(document.getElementById('big').src);
        });
    };

    //箭頭綁定
    $('#to_left').click(function () {
        let now_Src = document.getElementById('big').src;
        let smallP = $('.small');
        var sphoto = document.querySelectorAll('img.small');

        if (sphoto[0].src == now_Src) {
            //sphoto.length - 1是取得總共的張數，動態去抓取
            document.getElementById('big').src = sphoto[(sphoto.length - 1)].src;
        } else {
            for (let i = 0; i < smallP.length; i++) {
                if (smallP[i].src == now_Src) {
                    let bbb = smallP[i].closest('div.inter_one').previousElementSibling.querySelector('img.small').src;
                    document.getElementById('big').src = bbb;
                }
            }
        }
    });

    $('#to_right').click(function () {
        //宣告抓出id="big"(大圖片)
        let now_Src = document.getElementById('big').src;
        var sphoto = document.querySelectorAll('img.small');
        //最後一張才會到這裡判斷，長度判斷要減一
        if (sphoto[(sphoto.length - 1)].src == now_Src) {
            //從第一張找
            document.getElementById('big').src = sphoto[0].src;
        }
        else {
            let smallPic = $('.small');
            for (let i = 0; i < smallPic.length; i++) {
                if (smallPic[i].src == now_Src) {
                    let bbb = smallPic[i].parentElement.parentElement.nextElementSibling.querySelector('img.small').src
                    document.getElementById('big').src = bbb;
                }
            }
        }

        // let now_Src = $('#big');
        // let S_photo = document.getElementsByClassName('small').src;
        //宣告小張圖片

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
        // console.log($("div.tab." + $(this).attr("data-target")));
    });
});
