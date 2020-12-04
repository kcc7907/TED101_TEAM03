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


    // =================================== 登入判斷 ===================================
    // $('button.login').click(function (e) {
    //     let theThis = e;
    //     $('.login :text').each(function () {  
    //         if($(this).val() == ""){
    //             $('form.login').preventDefault();
    //             alert('no');
    //             console.log(this);
    //         }else{
    //             alert('ok');
    //         }
    //     });
    // });
    // $('form.login').submit(function (e) { 
    //     // e.preventDefault();
    //     $('form.login :text, form.login :password').each(function () {  
    //         if($(this).val() == ''){
    //             e.preventDefault();
    //             console.log(e);
    //         }
    //     });
    // });

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
    $('div#login').show().css({
        'z-index': '3',
        'opacity': '1',
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
    $('div#login').css({
        'z-index': '-3',
        'opacity': '0',
        'top': '-30vh',
    }).hide();
    // 註冊顯現
    $('div#signUp').show().css({
        'z-index': '3',
        'opacity': '1',
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
            $('div#signUp').css({
                'z-index': '-3',
                'opacity': '0',
                'top': '-30vh',
            }).hide();
            // 登入顯現
            $('div#login').show().css({
                'z-index': '3',
                'opacity': '1',
                'top': '0',
            });
            // 動畫
            setTimeout(() => {
                logAni();
            }, 500);
}

// ===== close lightbox =====
function closeLB() {  
    $(this).parent('div').parent('div').css({
        'z-index': '-3',
        'opacity': '0',
        'top': '-30vh',
    }).hide();
}