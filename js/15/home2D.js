$(document).ready(function () {
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


    // =================================== 登入ajax ===================================
    $('button.login').click(function (e) {

        if($('input#account').val() == '' && $('input#pwd').val() !== ''){
            alert('請輸入帳號');
        }else if($('input#account').val() !== '' && $('input#pwd').val() == ''){
            alert('請輸入密碼');
        }else if($('input#account').val() == '' && $('input#pwd').val() == ''){
            alert('請輸入帳號密碼');
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
                    console.log(res);
                    $('body').append(res);
                },
            });
        }
        
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
    // 將input值清空 // TODO:待寫判斷
    // alert('關閉後將清空您所輸入的資料，請確認是否關閉');
    // if($('#account').val() !== '' || $('#pwd').val() !== ''){       
    // }else{
        $('#account').val('');
        $('#pwd').val('');
    // }

}