<?php

    include("jk_link.php");    

    $sql = "SELECT `NUMBER` from `VISITS`";    
    $statement = $pdo->prepare($sql);
    $statement->execute();
    $data = $statement->fetchAll();

    $visit_num = 1;
    foreach ($data as $index => $row) {
        $visit_num = $row["NUMBER"];
    }
    $visit_num += 1;

    $sql = "UPDATE `VISITS` set `NUMBER` = $visit_num where VISITS_ID = 1";    
    $statement = $pdo->prepare($sql);
    $statement->execute();

    echo $visit_num.' 人';

?>