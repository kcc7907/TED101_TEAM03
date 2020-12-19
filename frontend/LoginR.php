<?php
    include("../php/connect.php");

    //建立SQL
    $sql = "SELECT * FROM MEMBER WHERE BINARY MEM_ID = ? and BINARY MEM_PWD = ?";

    //執行
    $statement = $pdo->prepare($sql);
    
    //給值 //post變數自定義但要跟ajax裡的data命名相同才接的到
    $statement->bindValue(1, $_POST["account"]);
    $statement->bindValue(2, $_POST["pwd"]);
    $statement->execute();
    $data = $statement->fetchAll();

    $memberID = "";
    $memberName = "";
    foreach($data as $index => $row){
        $memberID = $row["MEM_ID"];
        $memberName = $row["MEM_NAME"];
    }



    
    //判斷是否有會員資料?
    if($memberID != "" && $memberName != ""){
        // if(!isset($_SESSION)){
            session_start(); 
        // }
        $_SESSION["MemberID"] = $memberName;
        $check = 0;
        echo $check;
    }else{
        //跳出提示停留在登入頁
        $check = 1;
        echo $check;
    }
?>