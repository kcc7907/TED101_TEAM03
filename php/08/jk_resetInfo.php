<?php

    include("jk_link.php");

    $user = "A111200001";   //測試帳號

    //資料庫資料
    $sql = "SELECT * FROM member WHERE MEM_ID =?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, "$user");
    $statement->execute();
    $data = $statement->fetchAll();

    $pwd = $data[0]["MEM_PWD"];
    // $name = $data[0]["MEM_NAME"];
    // $phone = $data[0]["MEM_PHONE"];
    // $email = $data[0]["MEM_EMAIL"];
    // $address = $data[0]["MEM_ADDRESS"];

    //輸入資料========================================================

    // 一般資料
    if(isset($_POST['name'])){      //名字
        $name = $_POST['name'];
        $sql = "UPDATE member SET MEM_NAME = ?, MEM_DATE = now() WHERE MEM_ID =?";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, "$name");
        $statement->bindValue(2, "$user");
        $statement->execute();
    }
    if(isset($_POST['phone'])){     //電話        
        $phone = $_POST['phone'];
        $sql = "UPDATE member SET MEM_PHONE = ?, MEM_DATE = now() WHERE MEM_ID =?";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, "$phone");
        $statement->bindValue(2, "$user");
        $statement->execute();
    }
    if(isset($_POST['email'])){     //信箱
        $email = $_POST['email'];
        $sql = "UPDATE member SET MEM_EMAIL = ?, MEM_DATE = now() WHERE MEM_ID =?";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, "$email");
        $statement->bindValue(2, "$user");
        $statement->execute();
    }
    if(isset($_POST['address'])){   //地址
        $address = $_POST['address'];
        $city = $_POST['city'];
        $sql = "UPDATE member SET MEM_ADDRESS = ?, MEM_CITY = ?, MEM_DATE = now() WHERE MEM_ID =?";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, "$address");
        $statement->bindValue(2, "$city");
        $statement->bindValue(3, "$user");
        $statement->execute();
    }
    

    //密碼

    if(isset($_POST['oldPassword'])){
        $oldPassword = $_POST['oldPassword'];
        if($pwd == $oldPassword){

            $newPassword = $_POST['newPassword'];
            $sql = "UPDATE member SET MEM_PWD = ?, MEM_DATE = now() WHERE MEM_ID =?";
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1, "$newPassword");
            $statement->bindValue(2, "$user");
            $statement->execute();
        }else{
            echo "<script>alert('輸入密碼錯誤，請重新確認'); location.href = '../../frontend/meminfo.php';</script>";
        }
    }


    // session_start();
    // $_SESSION["key"]= "value";
    // header("Location: ../../frontend/meminfo.php");

    // echo "
    // <script>alert('已成功修改會員資料');
    // location.href = '../../frontend/meminfo.php';</script>
    // ";

    echo "
    <script>sessionStorage.setItem('reset', 'true');
    location.href = '../../frontend/meminfo.php';</script>
    ";
    
    
    // echo "
    // <script>
    // location.href = '../../frontend/meminfo.php';
    
    // let noticeDiv = createElement('div');
    // noticeDiv.innerHTML = '<p>已成功修改會員資料</p>';
    // document.getElementsByClassName('body')[0].appendChild(childNode);


    // </script>
    
    // ";


?>