<?php
        //MySQL相關資訊
        
        $db_host = "10.2.0.162"
        $db_user = "team03";
        $db_pass = "ted101g3";
        $db_select = "team03";
        $dbconnect = "mysql:host=".$db_host.";dbname=".$db_select;
        $pdo = new PDO($dbconnect, $db_user, $db_pass);

        // $db_host = "localhost";
        // $db_user = "root";
        // $db_pass = "My890213qq";
        // $db_select = "team03";

       //建立資料庫連線物件
        // $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

       //建立PDO物件，並放入指定的相關資料
        // $pdo = new PDO($dsn, $db_user, $db_pass);

        //登入帳號
        // setcookie("loging", "A111200001", time()+3600*24*365, '/');      //測試
        if(isset($_COOKIE["loging"])){
                $user = $_COOKIE["loging"];
        }
?>