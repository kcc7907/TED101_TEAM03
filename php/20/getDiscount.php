<?php
    $db_host = "localhost";
    $db_user = "team03";
    $db_pass = "ted101g3";
    $db_select = "team03";
    $dbconnect = "mysql:host=".$db_host.";dbname=".$db_select;
    $pdo = new PDO($dbconnect, $db_user, $db_pass);

    $sql ='SELECT * FROM `discount`';

    $result = $pdo->query($sql);
    $result->execute();
    $data = $result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
?>