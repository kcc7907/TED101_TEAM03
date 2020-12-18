<?php
    include("../connect.php");

    $sql="INSERT INTO `CASE` (`CASE_IMG`, `CASE_INTRO`, `CASE_DATE`, `CASE_TYPE`) VALUES (?,?, ?,?)";

    // [case_num] => 1
    // [case_name] => 2
    // [case_date] => 3
    // [case_type] => 4
    // [case_path] => 5

    $rp = json_decode(file_get_contents('php://input'), true);
    // print_r($rp);

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1,$rp['case_path']);
    $statement->bindValue(2,$rp['case_name']);
    $statement->bindValue(3,$rp['case_date']);
    $statement->bindValue(4,$rp['case_type']);
    $statement->execute();
?> 