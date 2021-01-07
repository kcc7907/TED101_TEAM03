<?php
    include("../connect.php");

    $sql = "DELETE FROM `MEMBER` WHERE `MEMBER`.`MEM_ID` = 'guest'";
    // $rp = json_decode(file_get_contents('php://input'), true);
    $statement = $pdo->query($sql);
    $statement->execute();

    $sql="SELECT `CT_WORK_ID` FROM `CONTESTANT` WHERE `CONTESTANT`.`CT_MEMBER_ID` = 'guest'";
    $result = $pdo->query($sql);
    $result -> execute();
    $order_total = $result->fetchColumn();
    $workId = $order_total;

    $sql = "DELETE FROM `CONTESTANT` WHERE `CONTESTANT`.`CT_MEMBER_ID` = 'guest'";
    $statement = $pdo->query($sql);
    $statement->execute();

    $sql = "DELETE FROM `WORK` WHERE `WORK`.`WK_ID` = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1,$workId);
    $statement->execute();

    $sql = "DELETE FROM `noti` WHERE `noti`.`MEMBER_ID` = 'guest'";
    $statement = $pdo->query($sql);
    $statement->execute();

    $sql = "DELETE FROM `MANAGER` WHERE `MANAGER`.`MGR_NAME` = 'guest'";
    $del = $pdo->query($sql);
    $del->execute();

    $sql="SELECT * FROM `ORDER` WHERE `MEMBER_ID` = 'guest'";
    $result = $pdo->query($sql);
    $result -> execute();
    $order_id = $result->fetchColumn();
    $order = $order_id;

    $sql = "DELETE FROM `ORDER` WHERE `ORDER`.`MEMBER_ID` = 'guest'";
    $statement = $pdo->query($sql);
    $statement->execute();

    $sql = "DELETE FROM `ORDER_DETAIL` WHERE `ORDER_DETAIL`.`ORDER_ID` = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1,$order);
    $statement->execute();

    $sql = "INSERT INTO `MANAGER` (`MGR_ID`, `MGR_NAME`, `MGR_ACCOUNT`, `MGR_PWD`, `MGR_AUTHORITY`, `MGR_DATE`) VALUES ('7', 'guest', 'guest', 'forguest', 'null', '2021/01/06')";
    $del = $pdo->query($sql);
    $del->execute();

    $sql = "INSERT INTO `MEMBER` (`MEM_ID`, `MEM_PWD`, `MEM_NAME`, `MEM_PHONE`, `MEM_EMAIL`, `MEM_CITY`, `MEM_ADDRESS`, `MEM_DATE`, `MEM_VOTED`) VALUES ('guest', 'forguest', 'guest', '0900123456', 'guest@guest.com', '台北市', '信義區忠孝東路三段38號', now(), '0')";
    $del = $pdo->query($sql);
    $del->execute();

    print_r($result->errorInfo());
?>