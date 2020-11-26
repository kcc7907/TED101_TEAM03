$(document).ready(function () {
    // ======== 隱藏其他form，僅顯現第一個form ========
    $('#formStep2').hide();
    $('#formStep3').hide();
    $('.lastP').hide();

    // ======== 下一步 ========
    $('.nextBtn').click(function (){
        $(this).closest('form').hide();
        $(this).closest('form').next('form').show();
    });

    // ======== 上一步 ========
    $('.backBtn').click(function(){
        $(this).closest('form').hide();
        $(this).closest('form').prev('form').show();
    });

    // ======== 最後一步確認 =========
    $('.sureThis').closest('div').next('div').hide();
    $('.sureThis').click(function(){
        $(this).closest('div').next('div').show().css('opacity','100%');
    });
    $('#sureGo').click(function(){
        $('form').hide();
        $(this).closest('form').next('form').show();
    });
    $('#notsureGo').click(function(){
        $(this).closest('div').hide();
    });
});
