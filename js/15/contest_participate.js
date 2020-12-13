$(document).ready(function () {
    // ======== 隱藏其他form，僅顯現第一個form ========
    $('#formStep2').hide();
    $('#formStep3').hide();
    $('.lastP').hide();

    // ======== 同意鈕 ========
    $('#submitStep1').change(function(){
        if($(this).prop("checked")){
            $(this).prop( "checked", true).val('1');
        }
    });


    // ======== 下一步 ========
    $('.nextBtn').click(function (e){
        checkRequired(e.target);
    });

    // ======== 上一步 ========
    $('.backBtn').click(function(){
        $(this).closest('form').hide();
        $(this).closest('form').prev('form').show();
    });

    // ======== 最後一步確認 =========
    $('.sureThis').closest('div').next('div').hide();
    $('.sureThis').click(function(e){
        // checkRequired(e.target);
        alert('hi');
    });
    $('#sureGoContest').click(function(){
        $('form').hide();
        $(this).closest('form').next('form').show();
    });
    $('#notsureGoContest').click(function(){
        $(this).closest('div').hide();
    });

});

// ======== vue =========
let vueJH = new Vue({
    el: '#JHC',
    data: { 
        pImgName: ['請選擇上傳檔案','請選擇上傳檔案','請選擇上傳檔案'],
        pImgUrl: {
            url1: '',
            url2: '',
            url3: '',
        },
        workTypes:['沙發', '桌子', '床', '椅子', '書櫃', '訂製櫃'],
    },
    methods: {
        file1(){
            let self1 = this;
            let file1 = document.getElementById('pId').files[0];
            this.pImgName[0] = file1.name;
            let readFile1 = new FileReader();
            readFile1.readAsDataURL(file1);
            readFile1.addEventListener('load', function (e) {
                self1.pImgUrl.url1 = e.target.result;
            });
        },
        file2(){
            let self2 = this;
            let file2 = document.getElementById('draft').files[0];
            this.pImgName[1] = file2.name;
            let readFile2 = new FileReader();
            readFile2.readAsDataURL(file2);
            readFile2.addEventListener('load', function (e) {
                self2.pImgUrl.url2 = e.target.result;
            });
        },
        file3(){
            let self3 = this;
            let file3 = document.getElementById('draw').files[0];
            this.pImgName[2] = file3.name;
            let readFile3 = new FileReader();
            readFile3.readAsDataURL(file3);
            readFile3.addEventListener('load', function (e) {
                self3.pImgUrl.url3 = e.target.result;
            });
        },
    },
    computed: {
        
    },
    watch: {
        pImgUrl: {
            handler(newNum) {
                this.pImgUrl.url1 = newNum.url1;
                this.pImgUrl.url2 = newNum.url2;
                this.pImgUrl.url3 = newNum.url3;
            },
            deep: true,
        },
    },
});


function checkRequired(theNextBtn) {  
    let needWrite = $(theNextBtn).closest('form.formStep').find('[required="required"]');
    let need = true;
    // $(needWrite).each(function () {
    if ($(needWrite).val() == '' || $(needWrite).val() == 0) {
        need = false;
    //         let needName = $(this).attr('id');
    //         let needDataId = '[data-id="' + needName + '"]';
    //         let needInput = $(`'${needDataId}'`);
    //         console.log(needDataId);
    //         console.log(`needName = ${needName}`);
    //         console.log(`needInput = ${needInput}`);
    //         $(this).css('border','1px solid red');
    }else{
        need = true;
    }
    // });
    if(need == true){
        $(theNextBtn).closest('form').hide();
        $(theNextBtn).closest('form').next('form').show();
    }else{
        alert('所有欄位為必填，請輸入完整資訊。');
    }
}