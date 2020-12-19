<?php
    include("../connect.php");
    $sql = "SELECT a.*,b.`PIMG_URL`,b.`PIMG_ID` FROM `product` as a LEFT JOIN `product_img` as b ON a.`PRD_ID`= b.`PRD_ID`WHERE a.`PRD_ID`=";
    $rp = json_decode(file_get_contents('php://input'), true);
    foreach($rp as $index => $row){
        if($index==0){
            $sql = $sql."'".$row."'"." ";
        }else{
            $sql = $sql."or a.`PRD_ID` ="."'".$row."'"." ";
        }
    }
    $result = $pdo->query($sql);
    $result->execute();
    $data = $result->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data);
    ?>