<?php
    include("../php/utilClassJH.php");
	// $Util = new UtilClass();	

    //建立SQL
    $sql = "SELECT * FROM MEMBER WHERE BINARY MEM_ID = ? and MEM_PWD = ?";

    //執行
    // $statement = $Util->getPDO()->prepare($sql);
    $statement = $pdo->prepare($sql);
    
    //給值 //post變數自定義但要跟ajax裡的data命名相同才接的到
    $statement->bindValue(1, $_POST["account"]);
    $statement->bindValue(2, $_POST["pwd"]);
    $statement->execute();
    $data = $statement->fetchAll();
    // print_r($data);

    $memberID = "";
    $memberName = "";
    foreach($data as $index => $row){
        $memberID = $row["MEM_ID"];
        $memberName = $row["MEM_NAME"];
    }
    


    //判斷是否有會員資料?
    if($memberID != "" && $memberName != ""){
        // include("../php/memberClassJH.php");
        // $Member = new MemberClass();
    
        //將會員資訊寫入session
        // $Member->setMemberInfo($memberID, $memberName);

        //導回產品頁        
        echo "<script>alert('登入成功!');</script>"; 
        echo "<br/>";
        echo "<script>document.cookie='loging=".$memberID."';</script>";
        echo "<br/>";
        echo "<script>$('div#login').css('z-index','-3').hide();</script>";
        echo "<br/>";
        echo "<script>$('div.login').css({'opacity':'0','top':'-30vh',});</script>";
        echo "<br/>";
        echo "<script>$('form input').val('')</script>";
        echo "<br/>";
        echo "<script>$('form select').val('0')</script>";
        echo "<br/>";
        echo "<script>$('img.logMem').attr('src','../img/homepage/logInMemHome.png');</script>";
    }else{
        //跳出提示停留在登入頁
        echo "<script>alert('帳號或密碼錯誤!');</script>"; 
    }
?>