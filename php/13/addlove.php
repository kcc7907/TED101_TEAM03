<?php
    include("../connect.php");

    $sql = 'INSERT INTO `FAVORITE` (`PRODUCT_ID`, `MEMBER_ID`) VALUES (?,?)';
    // $result = $pdo->query($sql);
    // $result->execute();


    // $rp = json_decode(file_get_contents('php://input'), true);
    // echo $rp['memberId'];
    $mid = $_POST['memberId'];
    $pid = $_POST['productId'];

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1,$pid);
    $statement->bindValue(2,$mid);
    $statement->execute();
?>