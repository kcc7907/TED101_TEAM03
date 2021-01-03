<?php
    include("../connect.php");
    date_default_timezone_set("Asia/Taipei");

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

    $sql="SELECT `PRD_NAME` FROM `PRODUCT` WHERE `PRD_ID`= ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1,$pid);
    $statement->execute();
    $prd_name = $statement->fetchColumn();

    $date = date("Y/m/d H:i");
    $sql = 'INSERT INTO `noti` (`NOTI_TEXT`, `MEMBER_ID`, `NOTI_DATE`) VALUES (?,?,?)';
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1,'您已成功收藏'.$prd_name);
    $statement->bindValue(2,$mid);
    $statement->bindValue(3,$date);
    $statement->execute();
    print_r($statement->errorInfo());

?>