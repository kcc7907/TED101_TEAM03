$(document).ready(function () {
    //點擊menu選項
    $('.jk_authority .menu .item').click(function () {
        if ($(this).parent('ul').parent('li').hasClass('-on')) {      //子項已展開
            $(this).parent('ul').children('li:not(.item)').slideUp();          //收合
            $('.jk_authority .menu .item').parent('ul').parent('li').removeClass('-on');    //移除記號
        } else {                              //子項未展開
            $(this).parent('ul').children('li:not(.item)').slideDown();        //點擊展開
            $('.jk_authority .menu .item').parent('ul').parent('li').removeClass('-on');    //移除其他展開項記號
            $(this).parent('ul').parent('li').addClass('-on');      //給予記號
            $('.jk_authority .menu .item').parent('ul').parent('li:not(.-on)').find('li:not(.item)').slideUp();    //收回其他展開項
        }
    });
    ////////////////////////國超段落///////////////////////////
    // $('#jk_authorityChange').click(function () {
    //     // $('.jk_authorityChange').css('display', 'table');
    //     $('.jk_authority main').css('display', 'block');

    // });

    ///////////////////SAM START////////////////
    $('#sam_authorityChange1').click(function () {
        $('main').css('display', 'none');
        $('main.sam_class').css('display', 'block');
    });

    $('#sam_authorityChange2').click(function () {
        $('div.sam_jump').addClass('-on');
    });

    $('img.cancel-icon').click(function () {
        $('div.sam_jump').addClass('-opacity-zero');

        setTimeout(function () {
            $('div.sam_jump').removeClass('-on -opacity-zero');
        }, 1000);
    });
    $('.smallginlin').click(function () {
        $('input#product_number').val("Text_number001");
        $('input#product_kind').val("桌組");
        $('input#product_name').val("大家順利找到好工作");
        $('input#product_price').val(12000);
        $('input#product_material').val('楓木');
        $('input#product_update').val('2020/12/29');
        $('input#product_discount').val('無');
        // console.log($('input#product_number'));
    });
    // $('button.cancel').click(function (e) {
    //     let firm1 = confirm('是否下架此商品');
    //     if (firm1) {
    //         this.innerText = '已下架';
    //         this.closest('tr').style.background = 'rgba(120,120,120,.3)';
    //     } else {
    //         e.preventDefault();
    //     }
    // });


    /////////////////////////kcc start ////////////////////////////
    $('#kcc_authorityChange1').click(function () {
        $('main').css('display', 'none');
        $('main.kcc_class').css('display', 'block');
    });

    $('#kcc_authorityChange2').click(function () {
        $('div.kcc_jump').addClass('-on');
    });

    $('img.cancel-icon').click(function () {
        $('div.kcc_jump').addClass('-opacity-zero');

        setTimeout(function () {
            $('div.kcc_jump').removeClass('-on -opacity-zero');
        }, 1000);
    });

    /////////////////////////case start ////////////////////////////

    $('#jane_authorityChange').click(function () {
        $('main').css('display', 'none');
        $('main.jane_case').css('display', 'block');
    });

    $('#jane_authorityChange2').click(function () {
        $('div.jane_jump').addClass('-on');
    });

    $('img.cancel-icon').click(function () {
        $('div.jane_jump').addClass('-opacity-zero');
        setTimeout(function () {
            $('div.jane_jump').removeClass('-on -opacity-zero');
        }, 1000);
    });

    /////////////////////////order start ////////////////////////////

    $('#jane_authorityChange1').click(function () {
        $('main').css('display', 'none');
        $('main.jane_order').css('display', 'block');
    });


    /////////////////////////jh start ////////////////////////////

    $('#jh_authorityChange1').click(function () {
        $('main').css('display', 'none');
        $('main.jh_class').css('display', 'block');
    });
    // $('img.cancel-icon').click(function () {
    //     $('div.jh_jump').addClass('-opacity-zero');
    //     setTimeout(function () {
    //         $('div.jh_jump').removeClass('-on -opacity-zero');
    //     }, 1000);
    // });


});