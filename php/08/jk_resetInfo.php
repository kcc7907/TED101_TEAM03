<?php

    include("jk_link.php");

    $user = "A111200001";

    //資料庫資料
    $sql = "SELECT * FROM member WHERE MEM_ID =?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, "$user");
    $statement->execute();
    $data = $statement->fetchAll();

    $pwd = $data[0]["MEM_PWD"];
    $name = $data[0]["MEM_NAME"];
    $phone = $data[0]["MEM_PHONE"];
    $email = $data[0]["MEM_EMAIL"];
    $address = $data[0]["MEM_ADDRESS"];

    //輸入資料========================================================

    // 一般資料
    if(isset($_POST['name'])){      //名字
        $name = $_POST['name'];
        $sql = "UPDATE member SET MEM_NAME = ? WHERE MEM_ID =?";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, "$name");
        $statement->bindValue(2, "$user");
        $statement->execute();
    }
    if(isset($_POST['phone'])){     //電話        
        $phone = $_POST['phone'];
        $sql = "UPDATE member SET MEM_PHONE = ? WHERE MEM_ID =?";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, "$phone");
        $statement->bindValue(2, "$user");
        $statement->execute();
    }
    if(isset($_POST['email'])){     //信箱
        $email = $_POST['email'];
        $sql = "UPDATE member SET MEM_EMAIL = ? WHERE MEM_ID =?";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, "$email");
        $statement->bindValue(2, "$user");
        $statement->execute();
    }
    if(isset($_POST['address'])){   //地址
        $address = $_POST['address'];
        $sql = "UPDATE member SET MEM_ADDRESS = ? WHERE MEM_ID =?";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, "$address");
        $statement->bindValue(2, "$user");
        $statement->execute();
    }
    

    //密碼

    if(isset($_POST['oldPassword'])){
        $oldPassword = $_POST['oldPassword'];
        if($pwd == $oldPassword){

            $newPassword = $_POST['newPassword'];
            $sql = "UPDATE member SET MEM_PWD = ? WHERE MEM_ID =?";
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1, "$newPassword");
            $statement->bindValue(2, "$user");
            $statement->execute();
        }else{

        }
    }

    // header("Location: ../../frontend/meminfo.php");

    //提示文字?
    echo "<script>alert('已成功修改會員資料'); location.href = '../../frontend/meminfo.php';</script>";


?>