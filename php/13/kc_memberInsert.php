<?php
    include("../connect.php");

    $sql="INSERT INTO `MEMBER` (`MEM_ID`, `MEM_PWD`, `MEM_NAME`, `MEM_PHONE`, `MEM_EMAIL`, `MEM_CITY`, `MEM_ADDRESS`, `MEM_DATE`) VALUES (?,?,?,?,?,?,?,?)";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1,'1');
    $statement->bindValue(2,'2');
    $statement->bindValue(3,'3');
    $statement->bindValue(4,'4');
    $statement->bindValue(5,'5');
    $statement->bindValue(6,'6');
    $statement->bindValue(7,'7');
    $statement->bindValue(8,'8');
    // $statement->execute();
    $rp = json_decode(file_get_contents('php://input'), true);
    print_r($rp);
?>