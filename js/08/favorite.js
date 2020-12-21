$(document).ready(function(){

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








