$(document).ready(function () {
    // ======== 隱藏其他form，僅顯現第一個form ========
    $('#JHC #formStep2').hide();
    $('#JHC #formStep3').hide();
    $('#JHC form#preview').hide();
    $('#JHC .lastP').hide();
    // if(checkCookie('loging')){
        // ======== 同意鈕 ========
        $('#JHC #submitStep1').change(function(){
            if($(this).prop("checked")){
                $(this).prop( "checked", true).val('1');
            }
        });
        // ======== 下一步 ========
        $('#JHC button.nextBtn').click(function (e){
            checkRequired(e.target);
        });

        // ======== 上一步 ========
        $('#JHC .backBtn').click(function(){
            $(this).closest('form').hide();
            $(this).closest('form').prev('form').show();
        });

        // ======== 最後一步確認 =========

        $('button.viewThis').click(function(e){
            // checkRequired(e.target);
            $('form#preview').show();
            $('#preview .clickVote').css('opacity', '1');
            $('#preview').click(()=>{
                $('#preview').hide();
                $('#preview .clickVote').css('opacity', '0')
            });
        });


        $('.sureThis').click((e)=>{
            let needWrite = $(e.target).closest('form.formStep').find('[required="required"]');
            let need = true;
            $(needWrite).each(function (index, value) {
                if ($(value).val() == '' || $(value).val() == 0) {
                    need = false;
                }else{
                    need = true;
                }
            });

            // if(need == true){
                // 點擊「送出時」，出現confirm視窗
                // 1.先隱藏
                $('#JHC div.confirmDivC').hide();
                $('#JHC div.confirmDivC').find('p.contentFont').text(`確認是否送出？`);

                // 2.點擊出現confirm視窗
                // $('.sureThis').click(function(){
                    $('div.confirmDivC').show().css({
                        'zIndex': '99',
                        'opacity': '1',
                    });
                // });

                // 3.點擊確認鈕 -> 送出資料
                $('#JHC #sureGoContest').click(function(){
                    let fType = $('#JHC #fType').val(); // 作品種類
                    let fName = $('#JHC #fName').val().trim(); // 作品名稱
                    let fConcept = $('#JHC #fConcept').val().trim(); // 設計理念
                    // // let workDetail = {
                    // //     fType,
                    // //     fName,
                    // //     fConcept,
                    // // };
                    $.ajax({
                        url: "contestDetailR.php",
                        // url: "contestImgR.php",
                        type: "POST",
                        data: {
                            fType,
                            fName,
                            fConcept,
                        },
                        success: function(res){
                            console.log('hi');
                        },
                    });

                    let pId = $('#JHC input#pId').prop('files')[0]; // 上傳身分證
                    let draft = $('#JHC input#draft').prop('files')[0]; // 上傳草稿
                    let draw = $('#JHC input#draw').prop('files')[0]; // 上傳完稿
                    let form_data = new FormData();
                    form_data.append('file1', pId);
                    form_data.append('file2', draft);
                    form_data.append('file3', draw);

                    $.ajax({
                        url: "contestImgR.php",
                        type: "POST",
                        data: form_data,
                        // data: {
                        //     form_data,
                        //     fType,
                        //     fName,
                        //     fConcept,
                        // },
                        contentType: false,
                        cache: false,
                        processData:false,
                        success: function(res){
                            console.log(res);
                            $('#JHC .step form').hide();
                            $('#JHC .lastP').show();
                            $('div.confirmDivC').css({
                                'zIndex': '-99',
                                'opacity': '0',
                            }).hide();
                        },
                    });
                });

                // 4.點擊取消鈕
                $('#notsureGoContest').click(function(){
                    $('div.confirmDivC').css({
                        'zIndex': '-99',
                        'opacity': '0',
                    }).hide();
                });
            // }else{
                // alert('所有欄位為必填，請輸入完整資訊。');
            // }
        });
    // }else{
    //     logBox();
    //     memBox();
    // }
});

// ======== vue =========
let vueJH = new Vue({
    el: '#JHC',
    data: { 
        pImgName: ['請選擇上傳檔案','請選擇上傳檔案','請選擇上傳檔案'],
        pImgUrl: [],
        workTypes:['沙發', '桌子', '床', '椅子', '書櫃', '訂製櫃'],
        fName: '',
        fConcept: '',
    },
    methods: {
        file1(){
            let self1 = this;
            let file1 = document.getElementById('pId').files[0];
            this.pImgName[0] = file1.name;
            let readFile1 = new FileReader();
            readFile1.readAsDataURL(file1);
            readFile1.addEventListener('load', function (e) {
                self1.pImgUrl.splice(0, 1, e.target.result);
            });
        },
        file2(){
            let self2 = this;
            let file2 = document.getElementById('draft').files[0];
            this.pImgName[1] = file2.name;
            let readFile2 = new FileReader();
            readFile2.readAsDataURL(file2);
            readFile2.addEventListener('load', function (e) {
                // self2.pImgUrl.push(e.target.result);
                self2.pImgUrl.splice(1, 1, e.target.result);
            });
        },
        file3(){
            let self3 = this;
            let file3 = document.getElementById('draw').files[0];
            this.pImgName[2] = file3.name;
            let readFile3 = new FileReader();
            readFile3.readAsDataURL(file3);
            readFile3.addEventListener('load', function (e) {
                // self3.pImgUrl.push(e.target.result);
                self3.pImgUrl.splice(2, 1, e.target.result);
            });
        },
    },
    computed: {
        
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


    // if(need == true){
        $(theNextBtn).closest('form').hide();
        $(theNextBtn).closest('form').next('form').show();
    // }else{
    //     alert('所有欄位為必填，請輸入完整資訊。');
    // }
}


// document.addEventListener('click',e=>console.log(e.target));