$(document).ready(function(){

    //點擊詳細資訊
    $('.jk_vote main .work .img').click(function(){
        $('.jk_vote .backGround').css('display', 'flex');
        
    });

    //關閉詳細資訊
    $('.jk_vote .clickVote .close').click(function(){  
        $('.jk_vote .backGround').css('display', 'none');
    });

    //搜尋作品
    $('.jk_vote .search button').click(function(){

        
        let search = $('.jk_vote .search input').val();
        $('.jk_vote .work').css('display', 'none');
        $(`.jk_vote .work.${search}`).css({
            display: 'block',
            margin: '0 auto',
        });

    });

});

