$(document).ready(function () {
    // =================================== 漢堡包 ===================================
    let $_headerNav = $('header nav');
    $('.ham').click(function(){
        $('.ham span:first-child').toggleClass('-hamR');
        $('.ham span:nth-child(2)').toggleClass('-none');
        $('.ham span:last-child').toggleClass('-hamL');
        $_headerNav.slideToggle();
    });


    // =================================== 最新消息 ===================================
    let news = $('.newsDiv .newsSection');
    let newsBtn = $('.newsDiv .btnSection');
    news.hide();
    news.first().show().css({
        'left': '0',
        'opacity': '.8',
    });
    $('.pageRightBtn').click(function(){
        news.first().hide().css({
            'left': '-50%',
            'opacity': '0',
        });
        news.first().next().show().css({
            'left': '0',
            'opacity': '.8',
        });
        $(this).siblings('span').text('第二頁');
    });
    $('.pageLeftBtn').click(function(){
        news.first().next().hide().css({
            'left': '-50%',
            'opacity': '0',
        });
        news.first().show().css({
            'left': '0',
            'opacity': '.8',
        });
        $(this).siblings('span').text('第一頁');
    });


    // =================================== 左滾輪+右自動輪播 ===================================
    $('div.aboutDiv , div.newsDiv').hide();
    $('div.into').css({
        'left': '0',
        'opacity': '1',
    });
    $('#goScroll').scroll(function(){
        //==== 捲動時抓scrollTop ====
        let scrollPos = $(this).scrollTop(); //pos表position
        if(scrollPos == 0){
            $('div.into').show();
            $('div.aboutDiv').hide().css({
                'left': '-10%',
                'opacity': '0',
            });
            $('div.newsDiv').hide().css({
                'left': '-10%',
                'opacity': '0',
            });
        }else if(scrollPos > 350){
            $('div.into').hide();
            $('div.aboutDiv').hide().css({
                'left': '-10%',
                'opacity': '0',
            });
            $('div.newsDiv').show().css({
                'left': '0',
                'opacity': '1',
            });
        }else{
            $('div.into').hide();
            $('div.aboutDiv').show().css({
                'left': '0',
                'opacity': '1',
            });
            $('div.newsDiv').hide().css({
                'left': '-10%',
                'opacity': '0',
            });

        }
    
    });
});
