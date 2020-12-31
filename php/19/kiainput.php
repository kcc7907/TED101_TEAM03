<?php
    include("../connect.php");
    date_default_timezone_set("Asia/Taipei");
    $sql = "INSERT INTO `CONTACT_FORM` (CTA_NAME, CTA_PHONE, CTA_QUESTION, CTA_DATE) VALUES (?, ?, ?, ?)";
    // [kianame] => vzvz
    // [kiaphone] => gGAWs
    // [kiaquestion] => fGZV
    $rp = json_decode(file_get_contents('php://input'), true);
    // print_r($rp);

    $date = date("Y/m/d H:i");
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1,$rp['kianame']);
    $statement->bindValue(2,$rp['kiaphone']);
    $statement->bindValue(3,$rp['kiaquestion']);
    $statement->bindValue(4,$date);
    $statement->execute();
?>