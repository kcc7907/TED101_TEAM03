$(document).ready(function () {

    mainText();

    //登出
    $('body').on('click', '#sureGoHome', function () {
        delCookie("loging");
        location.href = 'home2D.php';
    }); 
    //   
});

function mainText() {
    let main = document.querySelector('.jk_notice main');
    let item = document.querySelector('.jk_notice main ol li');

    if (item == null) {
        $(main).text('您目前沒有任何通知');
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





