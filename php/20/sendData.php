<?php
        include("../connect.php");
        date_default_timezone_set("Asia/Taipei");
        $rp = json_decode(file_get_contents('php://input'), true);

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
        $date = date("Y/m/d H:i");
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
        $statement->bindValue(8,$rp['discount']==0?0:$rp['discount']);
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

        $orderNum = "A000".($order_total+1);
        echo $orderNum;

        $sql = 'INSERT INTO `noti` (`NOTI_TEXT`, `MEMBER_ID`, `NOTI_DATE`) VALUES (?,?,?)';
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1,'訂單已完成  訂單編號:'.$orderNum);
        $statement->bindValue(2,$rp['memid']);
        $statement->bindValue(3,$date);
        $statement->execute();
?>