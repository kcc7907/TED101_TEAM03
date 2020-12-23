$(document).ready(function (){

    mainText();

    //登出
    $('body').on('click', '#sureGoHome', function () {
        delCookie("loging");
        location.href = 'home2D.php';
    }); 
    //

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

function mainText() {
    let main = document.querySelector('.jk_order main');
    let item = document.querySelector('.jk_order main .table');

    if (item == null) {
        $(main).html('您目前沒有任何訂單，<a href="product/product.html">趕快來看看</a>有什麼喜歡的商品吧!');
        $(main).css('textAlign', 'center');

    }
}


//取cookies     
function getCookie(name){
    let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]); 
    return null;
}
//刪除cookie
function delCookie(name){
var exp = new Date();
exp.setTime(exp.getTime() - 1);
var cval = getCookie(name);
if (cval != null) 
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()+";path=/";
}