<?php
    include("../php/utilClassJH.php");

    $sql = "INSERT INTO `team03`.`WORK` (`WK_ID`, `WK_SESSION`, `WK_SPECIES`, `WK_NAME`, `WK_CONCEPT`, `WK_IMG`, `WK_VOTES`, `WK_STATUS`, `WK_DATE`) VALUES (`WK_ID`, 2, ?, ?, ?, ?, 0, `審核中`, NOW());";
    $statement = $pdo -> prepare($sql);
    // $statement->bindValue()
?>