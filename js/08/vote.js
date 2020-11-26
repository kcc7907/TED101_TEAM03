$(document).ready(function(){

    //點擊詳細資訊
    $('.jk_vote main .work .img').click(function(){
        let winWidth = $(window).width();
        let winHeight = $(window).height();
        $('.jk_vote .backGround').css('display', 'flex');
        
    });

    //關閉詳細資訊
    $('.jk_vote .clickVote .close').click(function(){  
        $('.jk_vote .backGround').css('display', 'none');
    }); 

});

