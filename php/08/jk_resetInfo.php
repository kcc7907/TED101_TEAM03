<?php

    include("jk_link.php");

    //建立SQL
    $sql = "UPDATE member SET PWD = '?' WHERE Name = '王大明'";

    $statement = $pdo->prepare($sql);

    $statement->bindValue(1, "$pwd");

    $statement->execute();
    
    $data = $statement->fetchAll();

?>