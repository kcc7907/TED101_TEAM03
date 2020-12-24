

// function validate() {

//     let emailId = document.myForm.useremail.value;
//     atpos = emailId.indexOf('@');
//     dotpos = emailId.lastIndexOf('.');
//     let phoneId = document.myForm.userphone.value;
//     let phoneConfirm = /^[09]{2}\d{8}$/;
//     // let phoneConfirm = /^09\d{2}-\d{6}$/;

//     if (document.myForm.username.value == "") {
//         alert("請輸入姓名!");
//         document.myForm.username.focus();
//         return false;
//     }
//     if (document.myForm.useremail.value == "") {
//         alert("請輸入信箱!");
//         document.myForm.useremail.focus();
//         return false;
//     }
//     if (document.myForm.userphone.value == "") {
//         alert("請輸入電話!");
//         document.myForm.userphone.focus();
//         return false;
//     }
//     if (document.myForm.useraddress.value == "") {
//         alert("請輸入地址!");
//         document.myForm.useraddress.focus();
//         return false;
//     }
//     if (atpos < 1 || (dotpos - atpos < 2)) {
//         alert('請輸入正確信箱格式- XXXXXX@XXXXX.com');
//         document.myForm.useremail.focus();
//         return false;
//     }
//     if (!phoneConfirm.test(phoneId)) {
//         alert('請輸入正確電話格式- 09XXXXXXXX');
//         document.myForm.userphone.focus();
//         return false;
//     }
//     /////////////////////send email///////////////////////
//     Email.send({
//         SecureToken: "b67cba3c-c13e-4c1a-bbaf-3ce0f4a2c87e",
//         // Username: "tibame.team3@gmail.com",
//         // Password: "Tibame@group39494",
//         To: 'tibame.team3@gmail.com',
//         From: "tibame.team3@gmail.com",
//         Subject: "This is the subject TEXT9494",
//         Body: "And this is the body"
//     }).then(
//         message => alert('已收到您的資訊，感謝。')
//     );
// };


$(document).ready(function () {
    $('#small01').on('click', function () {
        $('div.blackBack').addClass('-on');
    });

    $('.cancel').on('click', function () {
        $('div.blackBack').addClass('-opacity-zero');

        setTimeout(function () {
            $('div.blackBack').removeClass('-on -opacity-zero');
        }, 1000);
    });

    $('#small02').on('click', function () {
        $('div.blackBack2').addClass('-on');
    });

    $('.cancel').on('click', function () {
        $('div.blackBack2').addClass('-opacity-zero');

        setTimeout(function () {
            $('div.blackBack2').removeClass('-on -opacity-zero');
        }, 1000);
    });

    $('#small03').on('click', function () {
        $('div.blackBack3').addClass('-on');
    });

    $('.cancel').on('click', function () {
        $('div.blackBack3').addClass('-opacity-zero');

        setTimeout(function () {
            $('div.blackBack3').removeClass('-on -opacity-zero');
        }, 1000);
    });





    ///////////////////表單驗證-focus blur 效果///////////////////////
    $('#username').focus(function () {
        $(this).css("borderBottom", "3px solid #865454");
    });
    $('#username').blur(function () {
        $(this).css("borderBottom", "1px solid #BDA79E");
    });
    $('#useremail').focus(function () {
        $(this).css("borderBottom", "3px solid #865454");
    });
    $('#useremail').blur(function () {
        $(this).css("borderBottom", "1px solid #BDA79E");
    });
    $('#userphone').focus(function () {
        $(this).css("borderBottom", "3px solid #865454");
    });
    $('#userphone').blur(function () {
        $(this).css("borderBottom", "1px solid #BDA79E");
    });
    $('#useraddress').focus(function () {
        $(this).css("borderBottom", "3px solid #865454");
    });
    $('#useraddress').blur(function () {
        $(this).css("borderBottom", "1px solid #BDA79E");
    });
    ///////////////////表單驗證 效果///////////////////////





});



