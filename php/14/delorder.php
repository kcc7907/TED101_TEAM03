<?php
    include("../connect.php");//連線
    $sql = "DELETE FROM `ORDER` WHERE `ORDER`.`ORD_ID` = ?";
    $rp = json_decode(file_get_contents('php://input'), true);
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1,$rp['id']);
    $statement->execute();
    print_r($statement->errorInfo());
?>