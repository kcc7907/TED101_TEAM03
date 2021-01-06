<?php
    include("../connect.php");
    $rp = json_decode(file_get_contents('php://input'), true);
    $sq1 = "SELECT `MGR_ACCOUNT` FROM `MANAGER` WHERE `MGR_ACCOUNT` = 'guest'";
    $sq2 = "SELECT `MEM_NAME` FROM `MEMBER` WHERE `MEM_NAME` = 'guest'";
    $bk = $pdo->query($sq1);
    $ft = $pdo->query($sq2);
    $bk->execute();
    $ft->execute();
    $data1 = $bk->fetchColumn();
    $data2 = $ft->fetchColumn();

    if($data1){
        $sql = "DELETE FROM `MANAGER` WHERE `MANAGER`.`MGR_NAME` = 'guest'";
        $del = $pdo->query($sql);
        $del->execute();
    }else{
        $sql = "INSERT INTO `MANAGER` (`MGR_ID`, `MGR_NAME`, `MGR_ACCOUNT`, `MGR_PWD`, `MGR_AUTHORITY`, `MGR_DATE`) VALUES ('7', 'guest', 'guest', 'forguest', 'null', '2021/01/06')";
        $del = $pdo->query($sql);
        $del->execute();
    }

    if($data2){
        $sql = "DELETE FROM `MEMBER` WHERE `MEMBER`.`MEM_ID` = 'guest'";
        $del = $pdo->query($sql);
        $del->execute();
    }else{
        $sql = "INSERT INTO `MEMBER` (`MEM_ID`, `MEM_PWD`, `MEM_NAME`, `MEM_PHONE`, `MEM_EMAIL`, `MEM_CITY`, `MEM_ADDRESS`, `MEM_DATE`, `MEM_VOTED`) VALUES ('guest', 'forguest', 'guest', '0900123456', 'guest@guest.com', '台北市', '信義區忠孝東路三段38號', now(), '0')";
        $del = $pdo->query($sql);
        $del->execute();
    }

    // print_r($result->errorInfo());
?>