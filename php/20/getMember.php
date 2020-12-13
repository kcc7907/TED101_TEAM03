<?php
    $db_host = "localhost";
    $db_user = "team03";
    $db_pass = "ted101g3";
    $db_select = "team03";
    $dbconnect = "mysql:host=".$db_host.";dbname=".$db_select;
    $pdo = new PDO($dbconnect, $db_user, $db_pass);

    $rp = json_decode(file_get_contents('php://input'), true);
    foreach($rp as $index => $row);

    $sql = "SELECT * FROM team03.MEMBER WHERE `MEM_ID` =";
    $sql = $sql.'"'.$row.'"';
    $result = $pdo->query($sql);
    $result->execute();
    $data = $result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
?>