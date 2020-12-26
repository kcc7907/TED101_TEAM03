<?php
    include("../connect.php");//連線
    $sql = "SELECT * from `CASE`";//sql語法
    // $sql = "SELECT *  from `CASE`";//sql語法
    $statement = $pdo->query($sql);//執行sql語法
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);//封裝成二維陣列
    print json_encode($data);//印出JSON格式
?>
