<?php
    include("../php/08/jk_link.php");

    $sql = "SELECT PRD_ID, PIMG_URL, PRD_NAME, PRD_MATERIAL, PRD_PRICE from favorite f join(select * from product p join product_img i on i.PRODUCT_ID = p.PRD_ID)m on m.PRD_ID = f.PRODUCT_ID where MEMBER_ID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, "$user");
    $statement->execute();
    $data = $statement->fetchAll();

?>


<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>救世宅 | 會員中心</title>
    
    <link rel="Shortcut Icon" href="img/favicon.ico">
    <link rel="stylesheet" href="../lib/reset.css">
    <link rel="stylesheet" href="../css/favorite.css">
    <link rel="stylesheet" href="../css/header.css">
    <!-- <link rel="stylesheet" href="../css/footer.css"> -->


    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    
    <script src="../lib/js/jquery.js"></script>
    <script src="../js/08/favorite.js"></script>
</head>
<body>

    <header class="common">
        <div class="logo">
            <a href="./home2D.html"><img src="../img/headerFooter/logo.svg"></a>
        </div>
        <nav>
            <dav class="nav1">
                <a href="./product.html">救世傢俱</a>
                <a href="./case.html">參考案例</a>
            </dav>
            <dav class="nav2">
                <a href="./qa.html">客戶服務</a>
                <a href="./contest_participate.html">傢聚賞</a>
            </dav>
        </nav>
        <div class="icon">
            <a class="login" href="./meminfo.html">
                <img src="../img/headerFooter/loginIcon.svg" alt="">
            </a>
            <a class="shop" href="./contest_main20.html">
                <img src="../img/headerFooter/shoppingCart.svg" alt="">
            </a>
            <a class="ham">
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>
    </header>
    
    <div class="jk_favorite">
        <div class="container">
            <div class="sideMenu">
                <ul>
                    <li><a href="meminfo.php"><i class="fas fa-user"></i><span class="computer">帳戶資料</span><span
                                class="rwd">帳戶</span></a></li>
                    <li class="-on"><a href="favorite.php"><i class="fas fa-folder-open"></i><span class="computer">我的收藏</span><span
                                class="rwd">收藏</span></a></li>
                    <li><a href="order.php"><i class="fas fa-clipboard-list"></i><span
                                class="computer">訂單查詢</span><span class="rwd">訂單</span></a></li>
                    <li><a href="notice.php"><i class="fas fa-bullhorn"></i><span class="computer">通知總覽</span><span
                                class="rwd">通知</span></a></li>
                </ul>
            </div>

            <main>  

                <div class="table">
                    <ul class="title">
                        <li class="name">項目</li>
                        <li class="size">規格</li>
                        <li class="price">價錢</li>
                        <li class="btn"></li>
                    </ul>
                    
                    <?php
                        foreach($data as $index => $row){
                    ?>
                    
                    <ul class="item">
                        <li class="name">
                            <img src="<?=$row["PIMG_URL"]?>">
                            <span><?=$row["PRD_NAME"]?></span>
                        </li>
                        <li class="size">
                            <?php
                                if($row["PRD_MATERIAL"] != 'null' && $row["PRD_MATERIAL"] != '' ){echo $row["PRD_MATERIAL"];}else{echo '無特殊規格';};
                            ?>
                        </li>
                        <li class="price">
                            <?=$row["PRD_PRICE"]?> 元
                        </li>
                        <li class="btn">
                            <a class="seeProduct" href="">
                                <button class="add"><span>查看詳情</span><i class="fas fa-cart-arrow-down"></i></button>
                            </a>
                            <button class="remove" data-name="<?=$row["PRD_ID"]?>"><span>移除</span><i class="far fa-trash-alt"></i></button>
                        </li>
                    </ul>

                    <?php
                        };
                    ?>
                                        
                </div>
                
            </main>
        </div>
    </div>

    <script src="../lib/header/header.js"></script>
</body>
</html>