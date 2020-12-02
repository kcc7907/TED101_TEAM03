$(document).ready(function () {
    // ===== 漢堡包 ======
    let $_headerNav = $('header nav');
    $('.ham').click(function(){
        $('.ham span:first-child').toggleClass('-hamR');
        $('.ham span:nth-child(2)').toggleClass('-none');
        $('.ham span:last-child').toggleClass('-hamL');
        $_headerNav.slideToggle();
    });


    // ===== 會員燈箱 =====
    // *** <a>停止預設事件 ***
    $('.icon a').click(function (e) {  
            e.preventDefault();
    });
    // *** 點選'會員icon'出現表單 ***
    $('div.LogIn').hide();
    $('.icon a:first-child').click(function(){
        $('div.LogIn').show().css({
            'z-index': '3',
            'opacity': '1',
            'top': '0',
        });
        // logAni();
    });
    // $('.SignUp').hide();
    // $('.icon a:first-child').click(function(){
    //     $('.SignUp').show().css({
    //         'z-index': '3',
    //         'opacity': '1',
    //         'top': '0',
    //     });
    //     // logAni();
    // });
    // *** 點選closeBtn關閉表單 ***
    // $('div.closebtn').click(function(){
    //     $('#login').css({
    //         'z-index': '-3',
    //         'opacity': '0',
    //         'top': '-30vh',
    //     }).hide();
    // });

});

// ===== log in animation =====
function logAni(){
    (function () {
        document.onreadystatechange = () => {

            if (document.readyState === 'complete') {

                /**
                 * Setup your Lazy Line element.
                 * see README file for more settings
                 */

                let el = document.querySelector('#logIn');
                let myAnimation1 = new LazyLinePainter(el, { "ease": "easeOutExpo", "strokeWidth": 3, "strokeOpacity": 0, "strokeColor": "#bda79e", "strokeCap": "square" });
                myAnimation1.paint();
            }
        }

    })();
}

// ===== sign up animation =====
function signAni(){
    // (function () {
        document.onreadystatechange = () => {

            if (document.readyState === 'complete') {

                /**
                 * Setup your Lazy Line element.
                 * see README file for more settings
                 */

                let el = document.querySelector('#signUp');
                let myAnimation2 = new LazyLinePainter(el, { "ease": "easeOutExpo", "strokeWidth": 2, "strokeOpacity": 1, "strokeColor": "#865454", "strokeCap": "square" });
                myAnimation2.paint();
            }
        }
    // })();
}