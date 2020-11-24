$(document).ready(function(){

    mainText();
        
    $('.jk_favorite .remove').click(function(){

        $(this).closest('.table').remove();

        mainText();
        
    });
});

function mainText(){
    let main = document.querySelector('.jk_favorite main');
    let table = document.querySelector('.jk_favorite .table');

    if(table == null){
        $(main).text('您目前沒有收藏任何商品');
        $(main).css('textAlign', 'center');

    }
}

