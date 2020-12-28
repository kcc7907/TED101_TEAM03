<?php
    include("../connect.php");
    $sql="SELECT * FROM `MANAGER` WHERE `MGR_ACCOUNT` = ?";
    $rp = json_decode(file_get_contents('php://input'), true);
    $pwd = $rp['pwd'];
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1,$rp['user']);
    $statement->execute();
    $data = $statement->fetchAll();
    foreach($data as $index => $row){
        $mid = $row["MGR_ACCOUNT"];
        $mpwd = $row["MGR_PWD"];
    }
    if(!isset($mid)){
        echo 'empty';
    }else if ($pwd == $mpwd){
        echo 'ok';
    }else{
        echo 'no';
    }
?>