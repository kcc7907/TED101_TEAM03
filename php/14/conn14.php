<?php
    include("../connect.php");//連線
    $sql = "SELECT * FROM team03.ORDER";//sql語法
    $result = $pdo->query($sql);
    $result->execute();
    $data1 = $result->fetchAll(PDO::FETCH_ASSOC);

    $sql = "SELECT * FROM team03.CASE";//sql語法
    $statement = $pdo->query($sql);//執行sql語法
    $statement->execute();
    $data2 = $statement->fetchAll(PDO::FETCH_ASSOC);//封裝成二維陣列
    
    // $allData = ('order'=> $data1, 'case'=> $data2);
    $allData = array('order'=> $data1, 'case'=> $data2);

    print json_encode($allData);//印出JSON格式

?>
