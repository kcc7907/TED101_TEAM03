$(document).ready(function(){

    //登出
    $('body').on('click', '#sureGoHome', function () {
        delCookie("loging");
        location.href = 'home2D.php';
    }); 
    //
    
    mainText();
        
    $('.jk_favorite .remove').click(function(e){

        let removeItem = $(this).data("name");
        $('#dropCheck').css('display', 'flex');
        $('#dropCheck .check').click(function(){

            //移除網頁資料
            $(`.remove[data-name=${removeItem}]`).closest('ul.item').remove();


            //移除資料庫資料
            $.ajax({
                url: '../php/08/jk_favoriteDlete.php',
                type: 'POST',
                data: {
                    removeItem,
                },            
            });

            mainText();
            $('#dropCheck').css('display', 'none');
        });

        $('#dropCheck .cancel').click(function(){
            $('#dropCheck').css('display', 'none');
        });
    });
});

function mainText(){
    let main = document.querySelector('.jk_favorite main');
    let item = document.querySelector('.jk_favorite .table .item');

    if(item == null){
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







