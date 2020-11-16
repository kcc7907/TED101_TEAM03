$(document).ready(function(){
    
    //點擊修改會員資料
    $('form>div>div>span').click(function(e){

        //隱藏修改按鈕
        $(this).css({display:'none'});

        let myself = e.target.className;
        if(myself === "btn_pwd"){   //修改密碼
            $('#changePassword input').attr({value:''}); //初值為空字串
            $('#changePassword').css({display:'flex'}).slideDown(); //顯示修改密碼欄位

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
    
    $('.input').focus(function(){
        $(this).css({
            backgroundColor: '#ddd',
        })
    });
    $('.input').blur(function(){
        $(this).css({
            backgroundColor: 'rgba(0,0,0,0)',
        })
    });


    
    //限制手機僅能輸入數字
    $('#phone').keydown(function(e){
        if((e.which >= 48 && e.which <= 57)|| e.which == 8 || e.which == 46 || e.which == 37 || e.which == 39 || e.which == 13){
            
        }else{
            e.preventDefault();
        }
    })
    //以其他方式輸入非數字字元時取代
    $('#phone').keyup(function(e){
        let str = (e.target.value).replace(/\D/g, "");
        e.target.value = str;
    })

    //資料送出判定
    $('#memberInfo').submit(function(e){
        
        let send_data = true;

        let email = document.getElementById("email");
         //信箱未填
        if(email.value == ""){
            send_data = false;
            if(!(email.classList.contains('-error'))){                
                $('label[for="email"]').after('<span style="color:red;">*修改欄位不可為空</sapn>')
            }
            $(email).addClass("-error");
        }else{
            $(email).removeClass("-error");
        }

        //信箱格式
        // if(is.email(email.value)){
        //     account.removeClass("-error");
        // }else{
        //     send_data = false;
        //     account.addClass("-error");
        // }
        
        //手機未填
        let phone = document.getElementById("phone");
        if(phone.value == ""){
            send_data = false;
            if(!(phone.classList.contains('-error'))){                
                $('label[for="phone"]').after('<span style="color:red;">*修改欄位不可為空</sapn>')
            }
            $(phone).addClass("-error");
        }else{
            $(phone).removeClass("-error");
        }

        //姓名未填
        let name = document.getElementById("name");
        if(name.value == ""){
            send_data = false;
            if(!(name.classList.contains('-error'))){                
                $('label[for="name"]').after('<span style="color:red;">*修改欄位不可為空</sapn>')
            }
            $(name).addClass("-error");
            
        }else{
            $(name).removeClass("-error");
        }

        //地址未填
        let address = document.getElementById("address");
        if(address.value == ""){
            send_data = false;
            if(!(address.classList.contains('-error'))){                
                $('label[for="address"]').after('<span style="color:red;">*修改欄位不可為空</sapn>')
            }
            $(address).addClass("-error");

        }else{
            $(address).removeClass("-error");
        }

        //密碼未填
        let password = document.querySelectorAll('#changePassword input');
        for(let i = 0; i < password.length; i++){

            if(password[i].value == ""){
                send_data = false;
                // password[i].classList.add("-error");
            }else{
                // password[i].classList.remove("-error");
            }
        }
        

        if(!send_data){
            e.preventDefault();
        }
    })

    




})

//哪些項目為必填欄位不可為空?
//長度是否有最少及最多限制?

