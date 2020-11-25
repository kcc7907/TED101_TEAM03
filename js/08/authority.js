$(document).ready(function(){

    $('.jk_authority .menu .item').click(function(){
        
        if($(this).hasClass('-open')){  //子項已展開
            $(this).parent('ul').children('li:not(.item)').slideUp();          //收合
            $(this).removeClass('-open')   //移除展開記號

        }else{                          //子項未展開
            $(this).parent('ul').children('li:not(.item)').slideDown();        //點擊展開
            $(this).addClass('-open');  //給予展開記號
            

        }


    });


});