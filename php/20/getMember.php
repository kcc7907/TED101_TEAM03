<?php
    include("../connect.php");
    $rp = json_decode(file_get_contents('php://input'), true);
    foreach($rp as $index => $row);
    $sql = "SELECT * FROM team03.MEMBER WHERE `MEM_ID` =";
    $sql = $sql.'"'.$row.'"';
    $result = $pdo->query($sql);
    $result->execute();
    $data = $result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
?>