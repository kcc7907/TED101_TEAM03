$(document).ready(function(){

    mainText();
        
    $('.jk_favorite .remove').click(function(){

        $(this).closest('ul.item').remove();

        mainText();
        
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

