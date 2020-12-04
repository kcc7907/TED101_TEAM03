<?php
    include("../php/08/jk_link.php");

    $user = "A111200001";   //測試帳號

    $sql_order = "SELECT ORD_ID from `ORDER` where MEMBER_ID = ?";
    $statement = $pdo->prepare($sql_order);
    $statement->bindValue(1, "$user");
    $statement->execute();
    $data = $statement->fetchAll();
    // print_r($data);



    // $sql = "SELECT * from `ORDER` o join 
    // (select * from `ORDER_DETAIL` od join product p on od.PRODUCT_ID = p.PRD_ID) op
    // on op.ORDER_ID = o.ORD_ID
    // where MEMBER_ID = 'A111200001'";
    // $statement = $pdo->prepare($sql);
    // $statement->bindValue(1, "$user");
    // $statement->execute();
    // $data = $statement->fetchAll();

    
    foreach($data as $index => $row){
        echo $row["ORD_ID"].'/';        
    }

?>

