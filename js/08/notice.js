$(document).ready(function () {

    //登出
    $('header .logout').click(function () {
        delCookie("loging");
        location.href = 'home2D.php';
    });    
});

function mainText() {
    let main = document.querySelector('.jk_favorite main');
    let item = document.querySelector('.jk_favorite .table .item');

    if (item == null) {
        $(main).text('您目前沒有收藏任何商品');
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





