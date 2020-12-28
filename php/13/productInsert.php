<?php
    include("../connect.php");

    $sql = "INSERT INTO `PRODUCT` (`PRD_ID`, `PRD_SPECIES`, `PRD_NAME`, `PRD_PRICE`, `PRD_MATERIAL`, `PRD_DATE`, `DISCOUNT_ID`) VALUES (?,?,?,?,?,?,?)";

    // [product_num] => 1
    // [product_kind] => 2
    // [product_name] => 3
    // [product_price] => 4
    // [product_material] => 5
    // [product_update] => 6
    // [product_discount] => 7
    $rp = json_decode(file_get_contents('php://input'), true);
        // print_r($rp);


    $statement = $pdo->prepare($sql);
        $statement->bindValue(1,$rp['product_num']);
        $statement->bindValue(2,$rp['product_kind']);
        $statement->bindValue(3,$rp['product_name']);
        $statement->bindValue(4,$rp['product_price']);
        $statement->bindValue(5,$rp['product_material']);
        $statement->bindValue(6,$rp['product_update']);
        $statement->bindValue(7,$rp['product_discount']);
        $statement->execute();

        
?>