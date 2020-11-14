$(document).ready(function(){
    
    //點擊修改會員資料
    $('form>div>div>span').click(function(e){

        //隱藏修改按鈕
        $(this).css({display:'none'});

        let myself = e.target.className;
        if(myself === "btn_pwd"){   //修改密碼
            $('#changePassword').css({display:'flex'}).slideDown();
            $('#password').css({display:'none'});
        }else{                      //修改一般資料
            let inputChange = $(`input#${myself}`);
            $(inputChange).attr({
                disabled: false,
            }).focus();
        }
        //顯示送出按鈕
        $('#btn').css({display: 'flex'});    
    });


    //輸入時背景提醒
    $('input').focus(function(){
        $(this).css({
            backgroundColor: '#ddd',
        })
    })
    $('input').blur(function(){
        $(this).css({
            backgroundColor: 'rgba(0,0,0,0)',
        })
    });

    






})

