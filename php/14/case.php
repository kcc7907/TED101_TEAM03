<?php
    include("../connect.php");

    $sql="INSERT INTO `CASE` (`CASE_IMG`, `CASE_INTRO`, `CASE_DATE`, `CASE_TYPE`, `CASE_NAME`) VALUES (?,?, ?,?,?)";
    // [case_num] => 11
    // [case_name] => 33
    // [case_date] => 44
    // [case_type] => 居家住宅
    // [case_path] => 55
    // [case_intro] => 22
    $rp = json_decode(file_get_contents('php://input'), true);
    // print_r($rp);

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1,$rp['case_path']);
    $statement->bindValue(2,$rp['case_intro']);
    $statement->bindValue(3,$rp['case_date']);
    $statement->bindValue(4,$rp['case_type']);
    $statement->bindValue(5,$rp['case_name']);
    $statement->execute();
?>