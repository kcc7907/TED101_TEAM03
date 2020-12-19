<?php
    include("../connect.php");

    $sql="INSERT INTO `MEMBER` (`MEM_ID`, `MEM_PWD`, `MEM_NAME`, `MEM_PHONE`, `MEM_EMAIL`, `MEM_CITY`, `MEM_ADDRESS`, `MEM_DATE`) VALUES (?,?,?,?,?,?,?,?)";

    // [mem_num] => 1
    // [mem_pwd] => 2
    // [mem_name] => 3
    // [mem_phone] => 4
    // [mem_email] => 5
    // [mem_city] => 6
    // [mem_addr] => 7
    // [mem_date] => 8
    $rp = json_decode(file_get_contents('php://input'), true);
    // print_r($rp);

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1,$rp['mem_num']);
    $statement->bindValue(2,$rp['mem_pwd']);
    $statement->bindValue(3,$rp['mem_name']);
    $statement->bindValue(4,$rp['mem_phone']);
    $statement->bindValue(5,$rp['mem_email']);
    $statement->bindValue(6,$rp['mem_city']);
    $statement->bindValue(7,$rp['mem_addr']);
    $statement->bindValue(8,$rp['mem_date']);
    $statement->execute();

?>