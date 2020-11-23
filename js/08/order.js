$(document).ready(function (){

    setStyle();

    $(window).resize(function(){
        setStyle();
    });

    $('.jk_order .item .primary button').click(function(){
        $(this).closest('.table').find('.detail').slideToggle();
        // $(this).closest('.table').css({
        //     backgroundColor: 'red',
        // });
        
    });







});

function setStyle() {   

    let winWidth = $(window).width();
    // let winHeight = $(window).height();

    if(winWidth < 992){

        //商品名稱 --> 商品名稱/數量        
        $('ul.title > li.name').html('<span>商品名稱 / </span><span>數量</span>');

        //數量移入內容欄位呈現
        $('ul.item > li.name ol').html(`
            <li>辦公桌 * 1</li>
            <li>辦公椅 * 2</li>
        `);

        //單價 --> 單價(元)
        $('.detail_items .title .pro_price').text('單價(元)');
        $('.detail_items .item .pro_price ol').html(`
            <li>9,999,999</li>
            <li>45,000,000</li>
        `);       

        //小計 --> 小計(元)
        $('.detail_items .title .pro_total').text('小計(元)');
        $('.detail_items .item .pro_total ol').html(`
            <li>9,999,900</li>
            <li>45,000,000</li>
        `);


    }else{
        //商品名稱/數量  --> 商品名稱
        $('ul.title > li.name').html('<li class="name">商品名稱</li>')

        //數量移回入數量欄位呈現
        $('ul.item > li.name ol').html(`
            <li>辦公桌</li>
            <li>辦公椅</li>
        `);

        //單價(元) --> 單價
        $('.detail_items .title .pro_price').text('單價');
        $('.detail_items .item .pro_price ol').html(`
            <li>9,999,999 元</li>
            <li>45,000,000 元</li>
        `);

        //小計(元) --> 小計
        $('.detail_items .title .pro_total').text('小計');
        $('.detail_items .item .pro_total ol').html(`
            <li>9,999,900 元</li>
            <li>45,000,000 元</li>
        `);


    }

}