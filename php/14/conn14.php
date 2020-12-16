<?php
    include("../connect.php");//連線
    $sql = "SELECT * FROM team03.ORDER";//sql語法
    // $sql = "SELECT *  from `CASE`";//sql語法
    // $statement = $pdo->query($sql);//執行sql語法
    // $statement->execute();
    // $data = $statement->fetchAll(PDO::FETCH_ASSOC);//封裝成二維陣列
    // print json_encode($data);//印出JSON格式
    $result = $pdo->query($sql);
    $result->execute();
    $data = $result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
?>
