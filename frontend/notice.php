<?php
    include("../php/08/jk_link.php");

    $sql = "SELECT * from NOTI where MEMBER_ID = ? order by NOTI_ID desc;";     //缺少建立時間
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
    <link rel="stylesheet" href="../css/notice.css">
    <link rel="stylesheet" href="../css/header.css">
    <!-- <link rel="stylesheet" href="../css/footer.css"> -->

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">

    <script src="../lib/js/vue.js"></script>
    <script src="../lib/js/jquery.js"></script>

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

    <div class="jk_notice">
        <div class="container">
            <div class="sideMenu">
                <ul>
                    <li><a href="meminfo.php"><i class="fas fa-user"></i><span class="computer">帳戶資料</span><span class="rwd">帳戶</span></a></li>
                    <li><a href="favorite.php"><i class="fas fa-folder-open"></i><span class="computer">我的收藏</span><span class="rwd">收藏</span></a></li>
                    <li><a href="order.php"><i class="fas fa-clipboard-list"></i><span class="computer">訂單查詢</span><span class="rwd">訂單</span></a></li>
                    <li class="-on"><a href="notice.php"><i class="fas fa-bullhorn"></i><span class="computer">通知總覽</span><span class="rwd">通知</span></a></li>
                </ul>
            </div>


            <main>
                <ol>
                    
                    <?php
                        foreach($data as $index => $row){
                    ?>

                    <li>                        
                        <p><?=$row["NOTI_TEXT"]?></p>
                        <span><?=$row["NOTI_DATE"]?></span>
                    </li> 

                    <?php
                        };
                    ?>
                    
                </ol>

                <!-- <div id="page">
                    <ol>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ol>
                </div> -->
            </main>
        </div>
    </div>

    <!-- <footer class="libft">
        <section class="herf">
            <div class="logo">
                <img src="../img/headerFooter/logo.svg" alt="">
            </div>
            <div class="page">
                <a href="./product.html">救世家具</a>
                <a href="./case.html">優質案例</a>
                <a href="./qa.html">客戶服務</a>
                <a href="./qa.html">聯繫我們</a>
                <a href="./contest_main20.html">傢俱賞</a>
            </div>
        </section>
        <section class="link">
            <div class="scb">
                <label for="mail">訂閱電子報</label>
                <input type="text" class="mail" placeholder="enter your email">
            </div>
            <div class="company">
                <img src="../img/headerFooter/東和鋼鐵.png">
                <img src="../img/headerFooter/cooperate_blum.png">
                <img src="../img/headerFooter/foot_logo.png">
            </div>
        </section>
        <section class="copy">
            <p>Copy right 2020,All Right Reserved | By 救世宅</p>
        </section>
    </footer> -->

    <script src="../lib/header/header.js"></script>
    
</body>

</html>