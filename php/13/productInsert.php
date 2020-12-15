<?php
    include("../connect.php");

    $sql = "INSERT INTO PRODUCT (`PRD_ID`, `PRD_SPECIES`, `PRD_NAME`, `PRD_PRICE`, `PRD_MATERIAL`, `PRD_DATE`, `DISCOUNT_ID`) VALUES (?,?,?,?,?,?,?)";


    $statement = $pdo->prepare($sql);
        $statement->bindValue(1,'1');
        $statement->bindValue(2,'2');
        $statement->bindValue(3,'3');
        $statement->bindValue(4,'4');
        $statement->bindValue(5,'5');
        $statement->bindValue(6,'6');
        $statement->bindValue(7,'7');
        $statement->execute();


?>