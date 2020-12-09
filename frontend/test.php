<?php
    include("../php/08/jk_link.php");

    $user = "A111200001";   //測試帳號

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

<?php
    //依訂單編號取明細資料
    foreach($order_ids as $i => $item){
        $sql_orderDetail = "SELECT * from `ORDER` o join (select * from `ORDER_DETAIL` od join product p on od.PRODUCT_ID = p.PRD_ID) op on op.ORDER_ID = o.ORD_ID where ORDER_ID = ?";
        $statement = $pdo->prepare($sql_orderDetail);
        $statement->bindValue(1, "$item");
        $statement->execute();
        $orderDetailData = $statement->fetchAll();
        
        
        
?>
    <div class="table">                    
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

                        <li><?=$row["PRD_NAME"]?></li>
                        
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

                        <li><?='缺數量欄位'?></li>

                        <?php
                            }
                        ?>
                    </ol>
                </li>

                <li class="price">
                    <?php
                        $sumPrice = [];
                        foreach($orderDetailData as $j => $row){
                            array_push($sumPrice, $row["PRD_PRICE"]);                           
                        };
                        echo array_sum($sumPrice);
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
                <div class="step1">
                    <img src="" alt="">
                    <p>
                        <i class="fas fa-shopping-cart"></i>
                        <span>已訂購</span>
                        <span><?='缺狀態時間欄位'?></span>
                    </p>
                </div>
                <div class="step2">
                    <img src="" alt="">
                    <p>
                        <i class="fas fa-money-check-alt"></i>
                        <span>已付款</span>
                        <span><?='缺狀態時間欄位'?></span>
                    </p>
                </div>
                <div class="step3 -now">
                    <img src="" alt="">
                    <img src="" alt="">
                    <p>
                        <i class="fas fa-truck-moving"></i>
                        <span>運送中</span>
                        <span><?='缺狀態時間欄位'?></span>
                    </p>
                </div>
                <div class="step4">
                    <img src="" alt="">
                    <img src="" alt="">
                    <p>
                        <i class="fas fa-check-circle"></i>
                        <span>已送達</span>
                        <span><?='缺狀態時間欄位'?></span>
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
                        <li class="pro_dsicount">折扣</li>
                        <li class="pro_total">小計</li>
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
                                <li><?=$row["PRD_PRICE"]?></li>

                            <?php
                                };
                            ?>
                            
                            </ol>
                        </li>

                        <li class="pro_count">
                            <ol>
                                <li><?='缺數量欄位'?></li>
                                <li><?='缺數量欄位'?></li>
                            </ol>
                        </li>

                        <li class="pro_dsicount">
                            <ol>
                                <li>-99 元</li>
                                <li>-0 元</li>
                            </ol>
                        </li>

                        <li class="pro_total">
                            <ol>
                                <li>9,999,900 元</li>
                                <li>90,000,000 元</li>
                            </ol>
                        </li>
                    </ul>

                    <div class="rwd_discount">
                        折扣: <span>-99</span> 元
                    </div>

                </div>
            </div>
        </div>
    </div>


<?php
        
    }

?>

