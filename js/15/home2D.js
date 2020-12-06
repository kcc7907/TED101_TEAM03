$(document).ready(function () {
    // =================================== 地址 Vue ===================================
    new Vue({
        el: '#addressOption',     
        data: {
            // city: '<?=$city?>',
            citys: ['台北市', '新北市', '基隆市', '桃園市', '新竹市', '新竹縣', '苗栗縣','台中市','彰化縣','南投縣','雲林縣','嘉義市','嘉義縣','台南市','高雄市','屏東縣','宜蘭縣','花蓮縣','台東縣'],
        },
    });


    // =================================== 漢堡包 ===================================
    let $_headerNav = $('header nav');
    $('.ham').click(function(){
        $('.ham span:first-child').toggleClass('-hamR');
        $('.ham span:nth-child(2)').toggleClass('-none');
        $('.ham span:last-child').toggleClass('-hamL');
        $_headerNav.slideToggle();
    });


    // =================================== 會員燈箱 ===================================
    // <a>停止預設事件
    $('.icon a , a.signLink , a.logLink').click(function (e) {  
        e.preventDefault();
    });

    // 隱藏表單
    $('div#login , div#signUp').hide();

    // 點選「會員icon」出現「登入」表單
    $('div.icon a:first-child').click(log);

    // 點選「註冊新會員」出現「註冊」表單
    $('a.signLink').click(sign);


    // 點選「回登入頁面」出現「登入」表單
    $('a.logLink').click(backToLog);
    
    // 點選closeBtn關閉表單
    $('div.closebtn').click(closeLB);

    
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
    // keyup 判斷
    // button 判斷
    $('button.signup').click(function () {
        // input&select未輸入值，產生紅框
        let theCheck = 1;
        $('form.signUp input').each(function () {
            if ($(this).val() == ''){
                $(this).css('border', '1px solid red');
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
                // 判斷帳號密碼輸入值
                let accNum = $('#memAccountJH').val().length;
                let pwdNum = $('#memPwdJH').val().length;
                if(accNum < 8 || accNum > 12 ){
                    alert('帳號請輸入 8 - 12 字元');
                }else if(pwdNum < 8 || pwdNum > 12){
                    alert('密碼請輸入 8 - 12 字元');
                }else if((accNum < 8 && accNum > 12) || (pwdNum < 8 && pwdNum > 12)){
                    alert('帳號及密碼請輸入 8 - 12 字元');
                }else{
                    alert('傳送ajax');
                }
                // let memAccount = $('#memAccountJH').val();
                // let memPwd = $('#memPwdJH').val();
                // let memName = $('#memNameJH').val();
                // let memPhone = $('#memPhoneJH').val();
                // let memEmail = $('#memEmailJH').val();
                // let memCity = $('#memCityJH').val();
                // let memAddress = $('#memAddressJH').val();
                // $.ajax({  
                //     url: './SignR.php',
                //     data:{
                //         memAccount,
                //         memPwd,
                //         memName,
                //         memPhone,
                //         memEmail,
                //         memCity,
                //         memAddress,
                //     },
                //     type: 'POST',
                //     dataType: 'text',
                //     success(res) {
                //         $('body').append(res);
                //     },
                // });
                break;
        }


    });


    // =================================== 發生change事件時消除紅框: input&select ===================================
    $('input').change(changeBGC);
    $('select').change(function(){
        $(this).css('border' , '1px solid #BDA79E');
    });
});





// ===== log in animation =====
function logAni(){
    let el = document.querySelector('#logIn');
    let myAnimation1 = new LazyLinePainter(el, { "ease": "easeOutExpo", "strokeWidth": 3, "strokeOpacity": 0, "strokeColor": "#bda79e", "strokeCap": "square" });
    myAnimation1.paint();
}

// ===== sign up animation =====
function signAni(){
    let el = document.querySelector('#signUp');
    let myAnimation2 = new LazyLinePainter(el, { "ease": "easeOutExpo", "strokeWidth": 2, "strokeOpacity": 1, "strokeColor": "#865454", "strokeCap": "square" });
    myAnimation2.paint();
}

// ===== log in lightbox =====
function log() {  
    $('div#login').show().css('z-index', '3');
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
function sign() {  
    // 登入隱藏
    $('div#login').css('z-index','-3').hide();
    $('div#login div.login').css({
        'opacity':'0',
        'top': '-30vh',
    });
    // input值清空
    $('#account').val('');
    $('#pwd').val('');
    // 註冊顯現
    $('div#signUp').show().css('z-index', '3');
    $('div#signUp div.signUp').css({
        'opacity':'1',
        'top': '0',
    });
    // 動畫
    setTimeout(() => {
        signAni();
    }, 500);
}

// ===== back to log in lightbox =====
function backToLog() {  
            // 註冊隱藏
            $('div#signUp').css('z-index', '-3').hide();
            $('div#signUp div.signUp').css({
                'opacity':'0',
                'top': '-30vh',
            });
            $('div#signUp input').val('');
            // 登入顯現
            $('div#login').show().css('z-index', '3');
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
function closeLB() {  
    // 關閉lightbox
    $(this).parent('div').parent('div').css({
        'z-index': '-3',
    }).hide();
    $(this).parent('div').css({
        'opacity':'0',
        'top': '-30vh',
    });
    // input&select初始化 // TODO:待寫判斷
    // alert('關閉後將清空您所輸入的資料，請確認是否關閉');
    // if($('#account').val() !== '' || $('#pwd').val() !== ''){       
    // }else{
        $(this).parent('div').find('form').find('input').val('').css({
            'backgroundColor': 'rgba(0, 0, 0, 0)',
            'border': 'none',
            'borderBottom': '1px solid #BDA79E',
        });
        $(this).parent('div').find('form').find('select').val('0').css('border', '1px solid #BDA79E');

    // }
}

// ===== 發生change，input改變背景色跟換border顏色 =====
function changeBGC() {  
    $(this).css({
        'backgroundColor': 'rgba(0, 0, 0, 0)',
        'border': 'none',
        'borderBottom': '1px solid #BDA79E',
    });
}

