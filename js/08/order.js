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
    $('.jk_order .status.-now').next('.status:has(.-now)').removeClass('-now')
}

function orderSetStyle() {   //table RWD

    let winWidth = $(window).width();
    

    if(winWidth < 992){

        //商品名稱 --> 商品名稱/數量        
        $('ul.title > li.name').text('商品名稱 / 數量');

        // //單價 --> 單價(元)
        $('.detail_items .title .pro_price').text('單價(元)');
        // $('.detail_items .item .pro_price ol').html(`
        //     <li>9,999,999</li>
        //     <li>45,000,000</li>
        // `);       

        // //小計 --> 小計(元)
        $('.detail_items .title .pro_total').text('小計(元)');
        // $('.detail_items .item .pro_total ol').html(`
        //     <li>9,999,900</li>
        //     <li>45,000,000</li>
        // `);

    }else{
        //商品名稱/數量  --> 商品名稱
        $('ul.title > li.name').text('商品名稱')

        // //單價(元) --> 單價
        $('.detail_items .title .pro_price').text('單價');
        // $('.detail_items .item .pro_price ol').html(`
        //     <li>9,999,999 元</li>
        //     <li>45,000,000 元</li>
        // `);

        // //小計(元) --> 小計
        $('.detail_items .title .pro_total').text('小計');
        // $('.detail_items .item .pro_total ol').html(`
        //     <li>9,999,900 元</li>
        //     <li>45,000,000 元</li>
        // `);


    }

}


// function orderSetStyle() {   //table RWD

//     let winWidth = $(window).width();
    

//     if(winWidth < 992){

//         $.ajax({
//             url: '../php\08\jk_orderRwdR.php',
//             type: 'POST',
//             dataType: 'text',
//             success(res){
//                 $('.jk_order main').html(`${res}`);
//             },
//         });

//     }else{
//         $.ajax({
//             url: '../php\08\jk_orderRwdN.php',
//             type: 'POST',
//             dataType: 'text',
//             success(res){
//                 $('.jk_order main').html(`${res}`);
//             },
//         });
//     }

// }