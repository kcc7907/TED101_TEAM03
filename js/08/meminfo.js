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
        //let str = e.target.value;
        // 或是 let str = this.value;
        e.target.value = str;
    })

    //資料送出判定
    $('#memberInfo').submit(function(e){

        let send_data = true;

        let email = document.getElementById("email");
        if(email.value == ""){
            send_data = false;
            email.classList.add("-error");
        }else{
            email.classList.remove("-error");
        }
        
        let email = document.getElementById("email");
        if(is.email(email.value)){
            account.classList.remove("-error");
        }else{
            send_data = false;
            account.classList.add("-error");
        }

        let cards_el = document.getElementsByClassName("card");
        let card_str = "";
        for(let i = 0; i < cards_el.length; i++){
            card_str += cards_el[i].value;
        }
        console.log(card_str);
        if( is.creditCard(card_str)){
            for(let i = 0; i < cards_el.length; i++){
                cards_el[i].classList.remove("-error");
            }
        }else{
            send_data = false;
            for(let i = 0; i < cards_el.length; i++){
                cards_el[i].classList.add("-error");
            }
        }

        if(!send_data){
            e.preventDefault();
        }
    })






})

//哪些項目為必填欄位不可為空?
//長度是否有最少及最多限制?

