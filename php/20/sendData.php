<?php
        $db_host = "localhost";
        $db_user = "team03";
        $db_pass = "ted101g3";
        $db_select = "team03";
        $dbconnect = "mysql:host=".$db_host.";dbname=".$db_select;
        $pdo = new PDO($dbconnect, $db_user, $db_pass);

        $rp = json_decode(file_get_contents('php://input'), true);
        // $rp[fname] => 柏美玲
        // $rp[memid] => A111200001
        // $rp[fphone] => 0911111222
        // $rp[fcity] => 高雄市
        // $rp[fadd] => 中正路10號
        // $rp[payment] => 未付款
        // $rp[total] => 97300
        // $rp[discount] => -3000
        // $rp[products] => Array

        //part1 insert delivery
        $insert_delivery="INSERT INTO `delivery` ( `DEL_RECEIVER`, `DEL_CITY`, `DEL_ADDRESS`) VALUES (?,?,?)";
        $statement = $pdo->prepare($insert_delivery);
        $statement->bindValue(1,$rp['fname']);
        $statement->bindValue(2,$rp['fcity']);
        $statement->bindValue(3,$rp['fadd']);
        $statement->execute();

        //part2 insert order
        $insert_order="INSERT INTO `ORDER` (`ORD_ID`, `ORD_PAYMENT`, `ORD_DATE`, `MEMBER_ID`, `DELIVERY_ID`, `ORD_BUY`, `ORD_PAY`,`ORD_DICOUNT`) VALUES (?,?,?,?,?,?,?,?)";
        $sql="SELECT COUNT(`ORD_ID`) FROM `ORDER`";
        $result = $pdo->query($sql);
        $result -> execute();
        $order_total = $result->fetchColumn();
        $ymd = date("Y/m/d");
        $date = date("Y/m/d H:i:s");
        if($rp['payment'] == '未付款'){
            $order_buy =$date;
            $order_pay = null;
        }else{
            $order_buy =$date;
            $order_pay = $date;
        };
        $statement = $pdo->prepare($insert_order);
        $statement->bindValue(1,"A000".($order_total+1));
        $statement->bindValue(2,$rp['payment']);
        $statement->bindValue(3,$ymd);
        $statement->bindValue(4,$rp['memid']);
        $statement->bindValue(5,$order_total+1);
        $statement->bindValue(6,$order_buy);
        $statement->bindValue(7,$order_pay);
        $statement->bindValue(8,$rp['discount']==0?null:$rp['discount']);
        $statement->execute();

        //part3 insert order_detail
        $insert_detail="INSERT INTO `order_detail` ( `ORDER_ID`, `PRODUCT_ID`, `ORDER_QUANTITY`) VALUES ( ?,?,?)";
        foreach($rp['products'] as $index => $row){
            $statement = $pdo->prepare($insert_detail);
            $statement->bindValue(1,"A000".($order_total+1));
            $statement->bindValue(2,$row['prd_id']);
            $statement->bindValue(3,$row['num']);
            $statement->execute();
        }

?>