$(document).ready(function(){

    //點擊menu選項
    $('.jk_authority .menu .item').click(function(){
        
        if($(this).hasClass('-open')){      //子項已展開
            $(this).parent('ul').children('li:not(.item)').slideUp();          //收合
            $(this).removeClass('-open');   //移除展開記號
            $(this).children('i').css({     //箭頭轉回
                transform: 'rotate(0deg)',
            })

        }else{                              //子項未展開
            $(this).parent('ul').children('li:not(.item)').slideDown();        //點擊展開
            $(this).addClass('-open');      //給予展開記號
            $(this).children('i').css({     //箭頭向下
                transform: 'rotate(-90deg)',
            })
            

        } 
    });

    //收合sideMenu    
    $('.jk_authority .sideMenu .arrow>i').click(function(){

        if($(this).hasClass('-rotate')){

            $('.jk_authority .sideMenu').removeClass('-close');
            $('.jk_authority .sideMenu .arrow>i').removeClass('-rotate');
        }else{

            $('.jk_authority .sideMenu').addClass('-close');
            $('.jk_authority .sideMenu .arrow>i').addClass('-rotate');
        }

    });


});