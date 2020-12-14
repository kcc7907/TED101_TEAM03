$(document).ready(function(){

    mainText();
        
    $('.jk_favorite .remove').click(function(e){

        $(this).closest('ul.item').remove();

        mainText();

        //資料庫移除
        let removeItem = $(this).data("name");
        $.ajax({
            url: '../../../ted10103/php/08/jk_favoriteDlete.php',   //檔案位置奇怪       
            type: 'POST',
            data: {
                removeItem,
            },            
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








