<?php
    include("../connect.php");
    $sql = "DELETE FROM `MEMBER` WHERE `MEMBER`.`MEM_ID` = ?";
    $rp = json_decode(file_get_contents('php://input'), true);
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1,$rp['id']);
    $statement->execute();

    $sql="SELECT `CT_WORK_ID` FROM `CONTESTANT` WHERE `CONTESTANT`.`CT_MEMBER_ID` = ?";
    $result = $pdo->prepare($sql);
    $result -> bindValue(1,$rp['id']);
    $result -> execute();
    $order_total = $result->fetchColumn();
    $workId = $order_total;

    $sql = "DELETE FROM `CONTESTANT` WHERE `CONTESTANT`.`CT_MEMBER_ID` = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1,$rp['id']);
    $statement->execute();

    $sql = "DELETE FROM `WORK` WHERE `WORK`.`WK_ID` = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1,$workId);
    $statement->execute();

    print_r($statement->errorInfo());
?>