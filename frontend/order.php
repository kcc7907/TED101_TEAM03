<?php
    include("../php/08/jk_link.php");

    //會員擁有訂單的訂單編號
    $sql_order = "SELECT * from `ORDER` where MEMBER_ID = ?";
    $statement = $pdo->prepare($sql_order);
    $statement->bindValue(1, "$user");
    $statement->execute();
    $orderIdData = $statement->fetchAll();

    //將訂單編號放入陣列
    $order_ids = [];
    foreach($orderIdData as $index => $id){
        array_push($order_ids, $id["ORD_ID"]);
    }
    
?>

<!DOCTYPE html>
<html lang="zh-Hant">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>救世宅 | 會員中心</title>
    
    <link rel="Shortcut Icon" href="img/favicon.ico">
    <link rel="stylesheet" href="../lib/reset.css">
    <link rel="stylesheet" href="../css/order.css">
    <link rel="stylesheet" href="../css/header.css">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">

        <script src="../lib/js/vue.js"></script>
    <script src="../lib/js/jquery.js"></script>
    <script src="../js/08/order.js"></script>

    <!-- 通用設定 -->
    <link rel="stylesheet" href="../css/logSign.css">
    <script src="../lib/login/lazy-line-painter-1.9.6.min.js"></script>
    <script defer src="../lib/login/logSign.js"></script>

</head>

<body>

    <?php
    include ('../lib/header/header_Include.html');
    include("../lib/login/loginInclude.html");
    ?>

    <div class="jk_order">
        <div class="container">
            <div class="sideMenu">
                <ul>
                    <li><a href="meminfo.php"><i class="fas fa-user"></i><span class="computer">帳戶資料</span><span
                                class="rwd">帳戶</span></a></li>
                    <li><a href="favorite.php"><i class="fas fa-folder-open"></i><span
                                class="computer">我的收藏</span><span class="rwd">收藏</span></a></li>
                    <li class="-on"><a href="order.php"><i class="fas fa-clipboard-list"></i><span
                                class="computer">訂單查詢</span><span class="rwd">訂單</span></a></li>
                    <li><a href="notice.php"><i class="fas fa-bullhorn"></i><span class="computer">通知總覽</span><span
                                class="rwd">通知</span></a></li>
                </ul>
            </div>


            <main>
                

                <?php
                    //依訂單編號取明細資料
                    foreach($order_ids as $i => $item){
                        $sql_orderDetail = "SELECT * from `ORDER` o join (select * from `ORDER_DETAIL` od join product p on od.PRODUCT_ID = p.PRD_ID) op on op.ORDER_ID = o.ORD_ID where ORDER_ID = ?";                        
                        $statement = $pdo->prepare($sql_orderDetail);
                        $statement->bindValue(1, "$item");
                        $statement->execute();
                        $orderDetailData = $statement->fetchAll();

                        //找優惠資料 需調整篩選
                        // $sql_discount = "SELECT *
                        //                 from `ORDER` o
                        //                 join
                        //                 (select *
                        //                 from `ORDER_DETAIL` od
                        //                 join
                        //                 (select *
                        //                 from product p
                        //                     join discount d
                        //                     on p.PRD_ID = d.DIS_PRODUCT_ID1 
                        //                         or p.PRD_ID = d.DIS_PRODUCT_ID2) pd
                        //                 on pd.PRD_ID = od.PRODUCT_ID) m
                        //                 on m.ORDER_ID = o.ORD_ID
                                        
                        //                 where ORDER_ID = ?";                        
                        // $statementDis = $pdo->prepare($sql_discount);
                        // $statementDis->bindValue(1, "$item");
                        // $statementDis->execute();
                        // $discountDate = $statementDis->fetchAll();

                        // foreach($discountDate as $d => $dis){};
                ?>

                
                        <div class="table <?=$i?>">                    
                            <div class="rough">
                                <ul class="title">
                                    <li class="primary">訂單編號</li>
                                    <li class="name">商品名稱</li>
                                    <li class="count">數量</li>
                                    <li class="price">總金額</li>
                                    <li class="status">處理狀態</li>
                                </ul>

                                <ul class="item">
                                    <li class="primary">
                                        <p><?=$item?></p>
                                        <button>詳細資訊</button>
                                    </li>

                                    <li class="name">
                                        <ol>
                                        
                                            <?php
                                                foreach($orderDetailData as $j => $row){
                                            ?>

                                            <li><?=$row["PRD_NAME"]?><span> * <?=$row["ORDER_QUANTITY"]?></span></li>
                                            
                                            <?php
                                                }
                                            ?>

                                        </ol>
                                    </li>

                                    <li class="count">
                                        <ol>

                                            <?php
                                                foreach($orderDetailData as $j => $row){
                                            ?>

                                            <li><?=$row["ORDER_QUANTITY"]?></li>

                                            <?php
                                                }
                                            ?>
                                        </ol>
                                    </li>

                                    <li class="price">
                                        <?php
                                            $sumPrice = [];
                                            foreach($orderDetailData as $j => $row){
                                                array_push($sumPrice, $row["PRD_PRICE"] * $row["ORDER_QUANTITY"]);                           
                                            };
                                            // if(isset($dis)){
                                                echo array_sum($sumPrice) + $row["ORD_DISCOUNT"].' 元';
                                            // }else {
                                            //     echo array_sum($sumPrice).' 元';
                                            // }
                                        ?>
                                        
                                    </li>

                                    <li class="status">
                                        <?=$orderDetailData[0]["ORD_STATUS"]?>
                                    </li>
                                </ul>
                            </div>

                            <!-- 明細 -->
                            <div class="detail">
                                <div class="schedule">
                                    <div class="status">
                                        <p>
                                            <i class="fas fa-shopping-cart"></i>
                                            <span>已訂購</span>
                                            <span><?=$row["ORD_BUY"]?></span>
                                        </p>
                                    </div>
                                    <div class="status">
                                        <p>
                                            <i class="fas fa-money-check-alt"></i>
                                            <span>已付款</span>
                                            <span><?=$row["ORD_PAY"]?></span>
                                        </p>
                                    </div>
                                    <div class="status">
                                        <p>
                                            <i class="fas fa-truck-moving"></i>
                                            <span>運送中</span>
                                            <span><?=$row["ORD_TRANS"]?></span>
                                        </p>
                                    </div>
                                    <div class="status">
                                        <p>
                                            <i class="fas fa-check-circle"></i>
                                            <span>已送達</span>
                                            <span><?=$row["ORD_ARR"]?></span>
                                        </p>
                                    </div>
                                </div>

                                <div class="detail_items">
                                    <h3>商品明細</h3>
                                    <div class="table">
                                        <ul class="title">
                                            <li class="pro_name">商品名稱</li>
                                            <li class="pro_price">單價</li>
                                            <li class="pro_count">數量</li>
                                            <li class="pro_total">小計</li>
                                            <li class="pro_dsicount">折扣</li>
                                            
                                        </ul>

                                        <ul class="item">
                                            <li class="pro_name">
                                                <ol>
                                                    <?php
                                                        foreach($orderDetailData as $j => $row){
                                                    ?>
                                                        <li><?=$row["PRD_NAME"]?></li>                            
                                                    <?php
                                                        }
                                                    ?>
                                                </ol>
                                            </li>

                                            <li class="pro_price">
                                                <ol>

                                                <?php
                                                    foreach($orderDetailData as $j => $row){
                                                
                                                ?>
                                                    <li><?=$row["PRD_PRICE"]?><span> 元<span></li>

                                                <?php
                                                    };
                                                ?>
                                                
                                                </ol>
                                            </li>

                                            <li class="pro_count">
                                                <ol>
                                                <?php
                                                    foreach($orderDetailData as $j => $row){
                                                ?>

                                                    <li><?=$row["ORDER_QUANTITY"]?></li>

                                                <?php
                                                    }
                                                ?>
                                                </ol>
                                            </li>

                                            

                                            <li class="pro_total">
                                                <ol>
                                                <?php
                                                    foreach($orderDetailData as $j => $row){
                                                ?>

                                                    <li><?=$row["PRD_PRICE"]*$row["ORDER_QUANTITY"]?><span> 元</span></li>

                                                <?php
                                                    }
                                                ?>
                                                </ol>
                                            </li>

                                            <li class="pro_dsicount">
                                                <ol>
                                                    <li>
                                                    <?php
                                                    // if(isset($dis)){
                                                        echo $row["ORD_DISCOUNT"].'元';
                                                    // }else {
                                                    //     echo '-0 元';
                                                    // }
                                                    ?>
                                                    </li>
                                                </ol>
                                            </li>
                                            
                                        </ul>

                                        <div class="rwd_discount">
                                            折扣: 
                                            <span>
                                                <?php
                                                // if(isset($dis)){
                                                    echo $row["ORD_DISCOUNT"];
                                                //     unset($dis);
                                                // }else {
                                                //     echo '-0';
                                                // }
                                                ?>
                                            </span> 元
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                <?php
                        
                    }

                ?>
                
            </main>
        </div>
    </div>

    <script src="../lib/header/header.js"></script>
</body>

</html>