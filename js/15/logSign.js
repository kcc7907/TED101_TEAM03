$(document).ready(function () {
    // =================================== 地址 Vue ===================================
    new Vue({
        el: '#addressOption',     
        data: {
            // city: '<?=$city?>',
            citys: ['台北市', '新北市', '基隆市', '桃園市', '新竹市', '新竹縣', '苗栗縣','台中市','彰化縣','南投縣','雲林縣','嘉義市','嘉義縣','台南市','高雄市','屏東縣','宜蘭縣','花蓮縣','台東縣'],
        },
    });

    // =================================== 登入/註冊燈箱 ===================================
    // 隱藏註冊/登入表單
    $('div#login , div#signUp').hide();


    // 重整或開啟時，判斷「會員icon」圖示
    if(checkCookie('loging')){
        $('img.logMem').attr('src','../img/homepage/logInMemHome.png');
        let cookieCheck = true;
    }else{
        $('img.logMem').attr('src','../img/headerFooter/loginIcon.svg');
        let cookieCheck = false;
    }

    // 點擊「會員icon」時，判斷是否有cookie並出現相對應視窗
    $('span.login img').click(function(){
        let cookieCheck = checkCookie('loging');

        if(Boolean(cookieCheck)){
            $('img.logMem').attr('src','../img/homepage/logInMemHome.png');
        }else{
            $('img.logMem').attr('src','../img/headerFooter/loginIcon.svg');
        }
        
        if(Boolean(cookieCheck)){
            $('span.logMem').slideToggle();
        }else{
            logBox();
            memBox();
        }
    });
    
    // 點擊「保持登入」
    $('label.alive').click(function(){
        $('#alivebox').toggleClass('bcgColor');;
    });

    // 點擊「登出時」，出現confirm視窗
    // 1.先隱藏
    $('div.confirmDiv').hide();
    $('div.confirmDiv').find('p.contentFont').text(`確認是否登出？`);
    
    // 2.點擊出現confirm視窗
    $('.logout').click(function(){
        $('div.confirmDiv').show().css({
            'zIndex': '99',
            'opacity': '1',
        });
    });

    // 3.點擊確認鈕
    $('#sureGoHome').click(function(){
        let time = new Date(Date.now());
        // let time = Date.now();
        let timeE = time.toUTCString();
        document.cookie = `loging=; expires=${timeE}`;
        $('span.logMem').hide();
        $('img.logMem').attr('src','../img/headerFooter/loginIcon.svg');
        $('div.confirmDiv').css({
            'zIndex': '-99',
            'opacity': '0',
        }).hide();
    });
    
    // 4.點擊取消鈕
    $('#notsureGoHome').click(function(){
        $('div.confirmDiv').css({
            'zIndex': '-99',
            'opacity': '0',
        }).hide();
    });

    // =================================== 登入hover ===================================
    $('button.login').mouseenter(function () {
        $('#logInDoor').show();
        $('#Path_18').hide();
        logDoorAni();
    });

    $('button.login').mouseout(function () {
        logDoorBackAni();
    });

    // =================================== 登入判斷 ===================================
    $('button.login').click(function () {
        if($('input#account').val() == '' && $('input#pwd').val() !== ''){
            alert('請輸入帳號');
            $('input#account').css('border', '1px solid red');
        }else if($('input#account').val() !== '' && $('input#pwd').val() == ''){
            alert('請輸入密碼');
            $('input#pwd').css('border', '1px solid red');
        }else if($('input#account').val() == '' && $('input#pwd').val() == ''){
            alert('請輸入帳號密碼');
            $('input#account').css('border', '1px solid red');
            $('input#pwd').css('border', '1px solid red');
        }else{
            let account = $('#account').val();
            let pwd = $('#pwd').val();
                $.ajax({  
                    url: './LoginR.php',
                    data:{
                        account,
                        pwd
                    },
                    type: 'POST',
                    dataType: 'text',
                    success(res) {
                        $('body').append(res);
                    },
                });
        }
    });

    // =================================== 註冊判斷 ===================================
    // **** keyup 判斷 *****
    // 1.手機只能輸入數字
    $('#memPhoneJH').keydown(function(e){ 
        if((e.which >= 48 && e.which <= 57)|| e.which == 8 || e.which == 46 || e.which == 37 || e.which == 39 || e.which == 13){
        }else{
            e.preventDefault();
        }
    })
    
    $('#memPhoneJH').keyup(function(e){
        let str = (e.target.value).replace(/\D/g, "");
        e.target.value = str;
    })

    $('#memPhoneJH').change(function(e){
        let thePhone = $(this).val();
        let testP = /^[0-9]{2}[0-9]{8}$/g;
        if(!testP.test(thePhone)){
            alert('請輸入正確手機格式');
        }
    });

    // 2.信箱只能輸入英數
    // $('#memEmailJH').keyup(function(e){
    //     let str = (e.target.value).replace(/\W/g, "");
    //     e.target.value = str;
    // })

    // 3.信箱格式
    $('#memEmailJH').change(function(e){
        let theEmail = $(this).val();
        let testE = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/g;
        if(!testE.test(theEmail)){
            alert('請輸入正確EMAIL格式');
        }
    });

    // 4.帳號只能輸入英數
    $('#memAccountJH').keyup(function(e){
        let str = (e.target.value).replace(/\W/g, "");
        e.target.value = str;
    })

    // 5.不可輸入空白鍵

    // **** button 判斷 ****
    $('button.signup').click(function () {
        // input&select未輸入值，產生紅框
        let theCheck = 1;
        let theMemPhone = $('#memPhoneJH').val();
        let testPhone = /^09$/g;
        let checkPhone = testPhone.test(theMemPhone);
        console.log(checkPhone);
        $('form.signUp input').each(function () {
            if ($(this).val().trim() == '' && checkPhone == true){
                $(this).css('border', '1px solid red');
                $('#memPhoneJH').css('border', '1px solid red');
                theCheck = 0;
            }
        });

        if(Boolean($('select[name="memCity"]').val()) == false){
            $('select[name="memCity"]').css('border', '1px solid red');
            theCheck = 0;
        }

        switch(theCheck){
            case 0:
                alert('紅色方框為必填欄位，請輸入完整資訊。');
                break;
            case 1:
                // 判斷帳號密碼輸入字元
                let memAccount = $('#memAccountJH').val().trim();
                let memPwd = $('#memPwdJH').val().trim();
                let accNum = memAccount.length;
                let pwdNum = memPwd.length;
                if(accNum < 6 || accNum > 12 ){
                    alert('帳號請輸入 6 - 12 字元');
                }else if(pwdNum < 6 || pwdNum > 12){
                    alert('密碼請輸入 6 - 12 字元');
                }else if((accNum < 6 && accNum > 12) || (pwdNum < 8 && pwdNum > 12)){
                    alert('帳號及密碼請輸入 6 - 12 字元');
                }else{
                    let memName = $('#memNameJH').val().trim();
                    let memPhone = $('#memPhoneJH').val().trim();
                    let memEmail = $('#memEmailJH').val().trim();
                    let memCity = $('#memCityJH').val().trim();
                    let memAddress = $('#memAddressJH').val().trim();
                    let memCheckPwd = $('#memCheckPJH').val().trim();
                    if(memPwd !== memCheckPwd){
                        alert('確認密碼有誤');
                    }else{
                        let testE = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/g;
                        let testP = /^[0-9]{2}[0-9]{8}$/g;
                        if(!testP.test(memPhone)){
                            alert('請輸入正確手機格式');
                            $('#memPhoneJH').css('border' , '1px solid red');
                        }else{
                            if(!testE.test(memEmail)){
                                alert('請輸入正確EMAIL格式');
                            }else{
                                $.ajax({  
                                    url: './SignR.php',
                                    data:{
                                        memAccount,
                                        memPwd,
                                        memName,
                                        memPhone,
                                        memEmail,
                                        memCity,
                                        memAddress,
                                    },
                                    type: 'POST',
                                    dataType: 'text',
                                    success(res) {
                                        $('body').append(res);
                                    },
                                });
                            }
                        }
                    }
                }
                break;
        }


    });

    // =================================== 發生change事件時消除紅框: input&select ===================================
    $('input').change(changeBGC);
    $('select').change(function(){
        $(this).css('border' , '1px solid #BDA79E');
    });
});



// *********************************** 以下 function ************************************* //
// ===== log in animation =====
function logAni(){
    let el = document.querySelector('#logIn');
    let myAnimation1 = new LazyLinePainter(el, { "ease": "easeOutExpo", "strokeWidth": 3, "strokeOpacity": 0, "strokeColor": "#bda79e", "strokeCap": "square" });
    myAnimation1.paint();
}

function logDoorAni(){
    let elDoor = document.querySelector('#logInDoor');
    let myAnimation2 = new LazyLinePainter(elDoor, { "ease": "easeOutExpo", "strokeWidth": 3, "strokeOpacity": 0, "strokeColor": "#577c8a", "strokeCap": "square", });
    myAnimation2.paint();
}

function logDoorBackAni(){
    let elDoor = document.querySelector('#logInDoor');
    let myAnimation3 = new LazyLinePainter(elDoor, { "ease": "easeOutExpo", "strokeWidth": 3, "strokeOpacity": 0, "strokeColor": "#bda79e", "strokeCap": "square", });
    myAnimation3.paint();
}

// ===== sign up animation =====
function signAni(){
    let el = document.querySelector('#signUp');
    let myAnimation2 = new LazyLinePainter(el, { "ease": "easeOutExpo", "strokeWidth": 2, "strokeOpacity": 1, "strokeColor": "#865454", "strokeCap": "square" });
    myAnimation2.paint();
}

// ===== log in lightbox =====
function logBox() {
    $('#logInDoor').hide();
    $('#Path_18').show();
    $('div#login').show().css('zIndex', '3');
    $('div#login div.login').css({
        'opacity':'1',
        'top': '0',
    });
    // 動畫
    setTimeout(() => {
        logAni();
    }, 500);
}

// ===== sign up lightbox =====
function signBox() {  
    // 登入隱藏
    $('div#login').css('zIndex','-3').hide();
    $('div#login div.login').css({
        'opacity':'0',
        'top': '-30vh',
    });
    // input值清空
    $('#account').val('');
    $('#pwd').val('');
    // 註冊顯現
    $('div#signUp').show().css('zIndex', '3');
    $('div#signUp div.signUp').css({
        'opacity':'1',
        'top': '0',
    });
    // 手機09顯示
    $('#memPhoneJH').val('09');
    // 動畫
    setTimeout(() => {
        signAni();
    }, 500);
}

// ===== back to log in lightbox =====
function backToLog() {  
    // 註冊隱藏
    $('div#signUp').css('zIndex', '-3').hide();
    $('div#signUp div.signUp').css({
        'opacity':'0',
        'top': '-30vh',
    });
    $('div#signUp input').val('');
    // 登入顯現
    $('div#login').show().css('zIndex', '3');
    $('div#login div.login').css({
        'opacity':'1',
        'top': '0',
    });
    // 動畫
    setTimeout(() => {
        logAni();
    }, 500);
}

// ===== close lightbox =====
function closeLB(theB) {
    // console.log(theB);
    $('div.confirmDiv').hide();
    $('div.confirmDiv').find('p.contentFont').text(`關閉後將清空您所輸入的資料，請確認是否關閉？`);

    $('div.confirmDiv').show().css({
        'zIndex': '99',
        'opacity': '1',
    });

    $('#sureGoHome').click(function(){
        // 關閉lightbox
        $(theB).parent('div').parent('div').parent('div').css('zIndex', '-3').hide();
        $(theB).parent('div').parent('div').css({
            'opacity':'0',
            'top': '-30vh',
        });

        // input&select初始化
        $(theB).parent('div').parent('div').find('form').find('input').val('').css({
            'backgroundColor': 'rgba(0, 0, 0, 0)',
            'border': 'none',
            'borderBottom': '1px solid #BDA79E',
        });
        $(theB).parent('div').parent('div').find('form').find('select').val('0').css('border', '1px solid #BDA79E');
        $('#alivebox').removeClass('bcgColor');
    });

    $('#notsureGoHome').click(function(){
        $('div.confirmDiv').css({
            'zIndex': '-99',
            'opacity': '0',
        }).hide();
    });

    $('#logInDoor').hide();
}

// ===== log/sign click event =====
function memBox() {  
    // <a>停止預設事件
    $('.icon >a , a.signLink').click(function (e) {  
        e.preventDefault();
    });

    // 點選「會員icon」出現「登入」表單
    // $('span.login img').click(logBox);

    // 點選「註冊新會員」出現「註冊」表單
    $('a.signLink').click(function(){
        signBox();
        $('form input').css({
            'backgroundColor': 'rgba(0, 0, 0, 0)',
            'border': 'none',
            'borderBottom': '1px solid #BDA79E',
        });
        $('form select').css('border' , '1px solid #BDA79E');
        $('#alivebox').removeClass('bcgColor');

    });

    // 點選「回登入頁面」出現「登入」表單
    $('a.logLink').click(function(e){
        backToLog();
        $('form input').css({
            'backgroundColor': 'rgba(0, 0, 0, 0)',
            'border': 'none',
            'borderBottom': '1px solid #BDA79E',
        });
        $('form select').css('border' , '1px solid #BDA79E');
    });
    
    // 點選closeBtn關閉表單
    $('div.closebtn').click(function(e){
        let thisBtn = e.target;
        closeLB(thisBtn);
    });
}

// ===== 發生change，input改變背景色跟換border顏色 =====
function changeBGC() {  
    $(this).css({
        'backgroundColor': 'rgba(0, 0, 0, 0)',
        'border': 'none',
        'borderBottom': '1px solid #BDA79E',
    });
}

// ===== 取得 cookie 的值 =====
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// ===== 檢查某 cookie 是否存在 =====
function checkCookie(cname) {
    var cookie_value = getCookie(cname);
    if (cookie_value != "") {
        return true;
    } else {
        return false;
    }
}