<?php
    include("../php/connect.php");

    $sql = "UPDATE `team03`.`WORK` SET `WK_DRAFT` = ?, `WK_DRAW` = ?,  `WK_STATUS` = ? WHERE (`WK_ID` = ?);";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, '111');
    $statement->bindValue(2, '222');
    $statement->bindValue(3, '333');
    $statement->bindValue(4, '2020-12-19 10:39:04');
    $statement->execute();


    $sql = "UPDATE `team03`.`CONTESTANT` SET `CT_PERSONAL_ID` = ?, `CT_IMG_FRONT` = ? WHERE (`CT_WORK_ID` = ?) and (`CT_MEMBER_ID` = ?);
    ";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, '111');
    $statement->bindValue(2, '222');
    $statement->bindValue(3, '2020-12-19 10:39:04');
    $statement->bindValue(4, 'A111200005');
    $statement->execute();
?>