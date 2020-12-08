$(document).ready(function (){

    status();
    orderSetStyle();

    $(window).resize(function(){
        orderSetStyle();
    });

    $('.jk_order .item .primary button').click(function(){
        $(this).closest('.table').find('.detail').slideToggle();        
        $(this).toggleClass('-on');
    });

});

function status(){

    $('.jk_order .detail .status >p >span:last-child:parent').closest('.status').addClass('-now');
    // $('.jk_order .status.-now').next('.status:has(.-now)').removeClass('-now')
}

function orderSetStyle() {   //table RWD

    let winWidth = $(window).width();
    

    if(winWidth < 992){

        //商品名稱 --> 商品名稱/數量        
        $('ul.title > li.name').text('商品名稱 / 數量');

        // //單價 --> 單價(元)
        $('.detail_items .title .pro_price').text('單價(元)');
        

        // //小計 --> 小計(元)
        $('.detail_items .title .pro_total').text('小計(元)');
        
    }else{
        //商品名稱/數量  --> 商品名稱
        $('ul.title > li.name').text('商品名稱')

        // //單價(元) --> 單價
        $('.detail_items .title .pro_price').text('單價');
        

        // //小計(元) --> 小計
        $('.detail_items .title .pro_total').text('小計');
        
    }
}


// function orderSetStyle() {   //table RWD

//     let winWidth = $(window).width();
    

//     if(winWidth < 992){

//         $.ajax({
//             url: '../../php/08/jk_orderRwdR.php',
//             type: 'POST',
//             dataType: 'text',
//             success(res){
//                 $('.jk_order main').html(`${res}`);
//             },
//         });

//     }else{
//         $.ajax({
//             url: '../../php/08/jk_orderRwdN.php',
//             type: 'POST',
//             dataType: 'text',
//             success(res){
//                 $('.jk_order main').html(`${res}`);
//             },
//         });
//     }

// }