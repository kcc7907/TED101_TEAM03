<?php

    include("jk_link.php");

    
    //資料庫資料
    $sql = "SELECT * FROM member WHERE MEM_ID =?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, "A111200001");     //測試帳號
    $statement->execute();
    $data = $statement->fetchAll();

    $pwd = $data[0]["MEM_PWD"];
    // $name = $data[0]["MEM_NAME"];
    // $phone = $data[0]["MEM_PHONE"];
    // $email = $data[0]["MEM_EMAIL"];
    // $address = $data[0]["MEM_ADDRESS"];

    //輸入資料

    if($_POST['name']){
        alert();
    }
    // $oldPassword = $_POST['oldPassword'];
    // $newPassword = $_POST['newPassword'];


        
    // $name = $_POST['name'];
    // $phone = $_POST['phone'];
    // $email = $_POST['email'];
    // $address = $_POST['address'];
    // $date = $_POST['date'];




    // if($oldPassword == $pwd){

    //     $sql = "UPDATE member SET MEM_PWD = ?, MEM_NAME = ?, MEM_PHONE = ?, MEM_EMAIL = ?, MEM_ADDRESS = ?, MEM_DATE = ? WHERE MEM_ID = ?";
    
    //     $statement = $pdo->prepare($sql);
    //     $statement->bindValue(1, "$newPassword");
    //     $statement->bindValue(2, "$name");
    //     $statement->bindValue(3, "$phone");
    //     $statement->bindValue(4, "$email");
    //     $statement->bindValue(5, "$address");
    //     $statement->bindValue(6, "$date");
    //     $statement->bindValue(7, "A111200001");
    //     $statement->execute();

    // }else {
        
    // }





?>