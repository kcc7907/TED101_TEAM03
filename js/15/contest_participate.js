$(document).ready(function () {
    // ======== 隱藏其他form，僅顯現第一個form ========
    $('#JHC #formStep2').hide();
    $('#JHC #formStep3').hide();
    $('#JHC form#preview').hide();
    $('#JHC .lastP').hide();
    $('#JHC div.confirmDivC').hide();


    
    if(!checkCookie('loging')){
        $('#login div.closebtn').hide();
        $('#signUp div.closebtn').hide();
        logBox();
        memBox();
    }else{
        goStep();
    }
    

    $('#formStep1 button.nextBtn').click(goStep);

    // $('登出').click(()=>{
    //     $('#login div.closebtn').hide();
    //     $('#signUp div.closebtn').hide();
    //     logBox();
    //     memBox();
    // });
});

// ======== vue =========
let vueJH = new Vue({
    el: '#JHC',
    data: { 
        pImgName: ['請選擇上傳檔案','請選擇上傳檔案','請選擇上傳檔案'],
        pImgUrl: [],
        workTypes:['沙發', '桌子', '床', '椅子', '書櫃'],
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

// ======== 按鈕事件 ========
function checkRequired(theNextBtn) {
    let needWrite = $(theNextBtn).closest('form.formStep').find('[required="required"]');
    need = true;
    checkPID = true;

    if($(theNextBtn).closest('form.formStep').find('#pIdNum').length !== 0){
        // #form2判斷
        $(needWrite).each(function (index, value) {
            if ($(value).val() == '' || $(value).val() == 0) {
                need = false;
            }else{
                need = true;
            }
        });


        let PID = $('#pIdNum').val().trim();
        let testPID = /^[A-Z][12]\d{8}$/;
        if(!testPID.test(PID)){
            checkPID = false;
        }else{
            checkPID = true;
        }
        
        if(need == true && checkPID == true){
            $(theNextBtn).closest('form').hide();
            $(theNextBtn).closest('form').next('form').show();
        }else if (need == true && checkPID !== true){
            let str = `請輸入正確身分證號碼。`;
            confirmContest(str);
        }else{
            let str = `所有欄位為必填，請輸入完整資訊。`;
            confirmContest(str);
        }

    }else{
        // #form1判斷
        $(needWrite).each(function (index, value) {
            if ($(value).val() == '' || $(value).val() == 0) {
                need = false;
            }else{
                need = true;
            }
        });

        if(need == true){
            $(theNextBtn).closest('form').hide();
            $(theNextBtn).closest('form').next('form').show();
        }else{
            // confirm視窗
            let str = `所有欄位為必填，請輸入完整資訊。`;
            confirmContest(str);
        }
    }
}


// ======== 投稿步驟 ========
function goStep() {
    // **************** 同意鈕 
    $('#JHC label[for="submitStep1"]').click(()=>{
        if($('#JHC #submitStep1').prop( "checked", true)){
            $('#JHC #submitStep1').val('1');
        }
    });

    if($('#JHC #submitStep1').prop( "checked", true)){
        $('#JHC #submitStep1').val('1');
    }


    // **************** 下一步
    if(checkCookie('loging')){
        $('#JHC button.nextBtn').click(function (e){
            checkRequired(e.target);
        });
    }else{
        $('#login div.closebtn').hide();
        $('#signUp div.closebtn').hide();
        logBox();
        memBox();
    }
    
    // **************** 上一步
    $('#JHC .backBtn').click(function(){
        $(this).closest('form').hide();
        $(this).closest('form').prev('form').show();
    });
    
    // **************** 預覽投稿
    $('button.viewThis').click(function(e){
        // checkRequired(e.target);
        $('form#preview').show();
        $('#preview .clickVote').css('opacity', '1');
        $('#preview').click(()=>{
            $('#preview').hide();
            $('#preview .clickVote').css('opacity', '0')
        });

        $.ajax({
            url: "contestR.php",
            type: "POST",
            data: form_data,
            contentType: false,
            cache: false,
            processData:false,
            success: function(res){
                // console.log(res);
                $('#JHC .step form').hide();
                $('#JHC .lastP').show();
                $('div.confirmDivC').css({
                    'zIndex': '-99',
                    'opacity': '0',
                }).hide();
            },
        });
    });
    
    
    // **************** 送出確認
    $('.sureThis').click((e)=>{
        // #form3判斷
        // 確認必填
        let needWrite = $(e.target).closest('form.formStep').find('[required="required"]');
        let need = true;
        $(needWrite).each(function (index, value) {
            if ($(value).val() == '' || $(value).val() == 0) {
                need = false;
            }else{
                need = true;
            }
        });
        
        if(need == true){
            // confirm視窗
            // 1.改變文字
            $('#JHC div.confirmDivC').find('p.contentFont').text(`確認是否送出？`);
            // 2.出現confirm視窗
            $('div.confirmDivC').show().css({
                'zIndex': '99',
                'opacity': '1',
            });
            // 3.點擊確認鈕 -> 送出資料
            $('#JHC #sureGoContest').click(function(){
                let contestant = getCookie('loging');
                let pIdNum = $('#JHC #pIdNum').val().trim(); // 身分證號碼
                let fType = $('#JHC #fType').val(); // 作品種類
                let fName = $('#JHC #fName').val().trim(); // 作品名稱
                let fConcept = $('#JHC #fConcept').val().trim(); // 設計理念
                let pId = $('#JHC input#pId').prop('files')[0]; // 上傳身分證
                let draft = $('#JHC input#draft').prop('files')[0]; // 上傳草稿
                let draw = $('#JHC input#draw').prop('files')[0]; // 上傳完稿
                let form_data = new FormData();
                form_data.append('contestant', contestant);
                form_data.append('pIdNum', pIdNum);
                form_data.append('type', fType);
                form_data.append('name', fName);
                form_data.append('concept', fConcept);
                form_data.append('file1', pId);
                form_data.append('file2', draft);
                form_data.append('file3', draw);
                
                $.ajax({
                    url: "contestR.php",
                    type: "POST",
                    data: form_data,
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

            console.log();
        }else{
            let str = `所有欄位為必填，請輸入完整資訊。`;
            confirmContest(str);
        }
    });
}

// ======== confirm燈箱 ========
function confirmContest(text) {  
    // 1.隱藏取消鈕 
    $('#notsureGoContest').hide();
    // 2.改變文字
    $('#JHC div.confirmDivC').find('p.contentFont').text(text);
    // 3.出現confirm視窗
    $('div.confirmDivC').show().css({
        'zIndex': '99',
        'opacity': '1',
    });
    // 4.點擊確認鈕
    $('#JHC #sureGoContest').click(function(){
        $('div.confirmDivC').css({
            'zIndex': '-99',
            'opacity': '0',
        }).hide();
        $('#notsureGoContest').show();
    });
}

// document.addEventListener('click',e=>console.log(e.target));