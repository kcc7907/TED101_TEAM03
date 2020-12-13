<?php
    $db_host = "localhost";
    $db_user = "team03";
    $db_pass = "ted101g3";
    $db_select = "team03";
    $dbconnect = "mysql:host=".$db_host.";dbname=".$db_select;
    $pdo = new PDO($dbconnect, $db_user, $db_pass);

    // $sql="SELECT `ORD_ID` FROM `order` ORDER BY `ORD_ID` DESC LIMIT 1";
    $sql="SELECT COUNT(`ORD_ID`) FROM `ORDER`";

    $result = $pdo->query($sql);
    $result->execute();
    // $data = $result->fetchAll(PDO::FETCH_ASSOC);
    $data = $result->fetchAll();
    // echo json_encode($data);
    // echo $data;
    // print_r($rp)
    // echo date("Y/m/d H:i:s");

    // foreach($data as $index => $row){
        // $num = trim($row[$index], $row[$index]);
        // $num = strchr($row[$index], trim($row[$index],'A'));
    // }
    // echo trim($row[$index],'A');

    // foreach($data as $index => $row)
    // echo $row[$index];


    $rp = json_decode(file_get_contents('php://input'), true);
    // foreach($rp as $index => $row){
    //     echo $row;
    // }
    // print_r($rp);
    echo $rp[0];
    
?>