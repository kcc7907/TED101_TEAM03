$(document).ready(function(){

    //點擊menu選項
    $('.jk_authority .menu .item').click(function(){
        
        if($(this).parent('ul').parent('li').hasClass('-on')){      //子項已展開
            $(this).parent('ul').children('li:not(.item)').slideUp();          //收合       
            $('.jk_authority .menu .item').parent('ul').parent('li').removeClass('-on');    //移除記號
            
            


        }else{                              //子項未展開
            $(this).parent('ul').children('li:not(.item)').slideDown();        //點擊展開            
            $('.jk_authority .menu .item').parent('ul').parent('li').removeClass('-on');    //移除其他展開項記號
            $(this).parent('ul').parent('li').addClass('-on');      //給予記號 
            $('.jk_authority .menu .item').parent('ul').parent('li:not(.-on)').find('li:not(.item)').slideUp();    //收回其他展開項
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

    $('#jk_authorityChange').click(function(){

        // $('.jk_authorityChange').css('display', 'table');
        $('.jk_authority main').css('display', 'block');


    });


});