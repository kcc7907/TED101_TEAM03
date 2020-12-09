$(document).ready(function(){
    
    memSetStyle();

    $(window).resize(function(){
        memSetStyle();
    });
    
    //點擊修改會員資料================================================
    $('.jk_meminfo form>div>div>span').click(function(e){

        //隱藏修改按鈕
        $(this).hide();

        let myself = e.target.className;
        if(myself == "btn_pwd"){    //修改密碼
            $('#changePassword input').attr({
                value: '',           //初值為空字串
                disabled: false,
                className: 'able',
            }); 
            $('#changePassword').css({display:'flex'}); //顯示修改密碼欄位 
            $('#password').hide();            

        }else{                      //修改一般資料
            let inputChange = $(`input#${myself}`);
            $(inputChange).attr({
                disabled: false,
                className: 'able',
            }).focus();
        }
        //顯示送出按鈕
        $('#btn').css({display: 'flex'});    
    });


    //輸入時背景提醒
    
    $('.jk_meminfo .input').focus(function(){
        $(this).css({
            backgroundColor: '#ddd',
        })
    });
    $('.jk_meminfo .input').blur(function(){
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

    //資料送出判定==========================================================
    
    $('#memberInfo').submit(function(e){
        
        let send_data = true;   

        let email = document.getElementById("email");
        $(email).removeClass("-error");
        $('.jk_meminfo form>div>div>label[for="email"]+span.warn').remove();

         //信箱未填
        if(email.value.trim() == ""){
            send_data = false;
            email.value = "";
            $('.jk_meminfo label[for="email"]').after('<span class="warn" style="color:red;">*欄位不可為空</sapn>')
            $(email).addClass("-error");
            
        }        
        
        let phone = document.getElementById("phone");
        $(phone).removeClass("-error");
        $('.jk_meminfo form>div>div>label[for="phone"]+span.warn').remove();
        
        //手機未填
        if(phone.value == ""){  //已限制輸入字元，不用trim()
            send_data = false; 
            $('.jk_meminfo label[for="phone"]').after('<span class="warn" style="color:red;">*欄位不可為空</sapn>')
            $(phone).addClass("-error");
            
        }

        let name = document.getElementById("name");
        $(name).removeClass("-error");
        $('.jk_meminfo form>div>div>label[for="name"]+span.warn').remove();

        //姓名未填
        if(name.value.trim() == ""){
            send_data = false;
            name.value = "";
            $('.jk_meminfo label[for="name"]').after('<span class="warn" style="color:red;">*欄位不可為空</sapn>')
            $(name).addClass("-error");                        
        }

        let address = document.getElementById("address");
        $(address).removeClass("-error");
        $('.jk_meminfo form>div>div>label[for="address"]+span.warn').remove();

        //地址未填
        if(address.value.trim() == ""){
            send_data = false;
            address.value = "";
            $('.jk_meminfo label[for="address"]').after('<span class="warn" style="color:red;">*欄位不可為空</sapn>')
            $(address).addClass("-error");
        }

        //修改密碼============================================
        let password = document.querySelectorAll('#changePassword input');
        let changePassword = document.getElementById('changePassword');
        for(let i = 0; i < password.length; i++){

            if(password[i].value.trim() == ""){ //有密碼欄位未填，標記
                send_data = false;
                if(!(password[i].classList.contains('-error'))){        
                    
                    if(!(changePassword.classList.contains('-er'))){    //內外層皆無錯誤樣式
                        $('.jk_meminfo label[for="password"]').after('<span class="warn" style="color:red;">*欄位不可為空</sapn>');
                        $('#changePassword').addClass('-er');
                    }
                    password[i].classList.add("-error");

                }else{                                                  

                    if(!(changePassword.classList.contains('-er'))){    //外層無錯誤樣式
                        $('.jk_meminfo label[for="password"]').after('<span class="warn" style="color:red;">*欄位不可為空</sapn>');
                        $('#changePassword').addClass('-er');
                    }
                    
                }                

            }else{
                //密碼已填寫欄位移除標記
                password[i].classList.remove("-error");

                if(!password[0].classList.contains('-error') && !password[1].classList.contains('-error') && !password[2].classList.contains('-error')){
                    
                    $('#changePassword').removeClass('-er');
                    $('.jk_meminfo form>div>div>label[for="password"]+span.warn').remove();


                    //新密碼相符判斷
                    if(password[1].value === password[2].value){    
                        
                        $('#changePassword').removeClass('-er');
                        $('.jk_meminfo form>div>div>label[for="password"]+span.warn').remove();
    
                    }else{ 
                        
                        send_data = false;
                        if(!(password[i].classList.contains('-error'))){
    
                            if(!(changePassword.classList.contains('-er'))){
                                $('.jk_meminfo label[for="password"]').after('<span class="warn" style="color:red;">*確認密碼不正確</sapn>')
                                $('#changePassword').addClass('-er');
                            }else{
                                $('.jk_meminfo label[for="password"]+span').replace('欄位不可為空','確認密碼不正確')
                                // $('label[for="password"]').after('<span class="warn" style="color:red;">*確認密碼不正確</sapn>')
                                
                            }
    
                            password[2].classList.add("-error");
                        }else{
    
                            if(!(changePassword.classList.contains('-er'))){
                                $('.jk_meminfo label[for="password"]').after('<span class="warn" style="color:red;">*確認密碼不正確</sapn>')
                                $('#changePassword').addClass('-er');
                            }else{
                                $('.jk_meminfo label[for="password"]+span').replace('欄位不可為空','確認密碼不正確')
                                // $('label[for="password"]').after('<span class="warn" style="color:red;">*確認密碼不正確</sapn>')
                                
                            }        
                        }                    
                    }               
                }
            }
        }
        

        if(!send_data){
            e.preventDefault();
        }
    });


    //取消修改資料==========================================================
    let memberInfo = document.getElementById('memberInfo');
    memberInfo.addEventListener('reset', function(){

        $('.jk_meminfo form>div>div>span.warn').remove();                   //移除警示字串
        $('#changePassword').removeClass('-er');                //移除.-er
        $('.jk_meminfo form input.-error').removeClass('-error');           //移除.-error
        $('.jk_meminfo form>div>div>span:hidden').show();                   //顯示修改按鈕
        $('#changePassword input').attr({value:'********'});    //密碼初值不為空字串
        $('#changePassword').hide();                            //隱藏密碼更新欄位
        $('#btn').hide();                                       //隱藏表單送出按鈕
        $('#password').show();                                  //顯示密碼欄位
        $('.jk_meminfo input[className="able"]').attr({                     //資料顯示欄位不可更新
            disabled: true,
            className: '',
        });   




    })

});

function memSetStyle(){

    let winWidth = $(window).width();

    if(winWidth < 576){
        $('.jk_meminfo .pwd_warn').text('6~12字元')
    }else{
        $('.jk_meminfo .pwd_warn').text('密碼長度限制6~12字元')
    }

}

//手機09開頭 長度10

