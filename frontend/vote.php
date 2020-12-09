<?php

    include("../php/08/jk_link.php");

    $sql = "SELECT * from `work` w
    join 
    (select * from `member`
    join `contestant` on MEM_ID = CT_MEMBER_ID) m
    on m.CT_WORK_ID = w.WK_ID";
    $statement = $pdo->prepare($sql);     
    $statement->execute();
    $data = $statement->fetchAll();
    

?>




<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>救世宅 | 傢聚賞</title>
    
    <link rel="Shortcut Icon" href="img/favicon.ico">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    
    <link rel="stylesheet" href="../lib/reset.css">
    <link rel="stylesheet" href="../css/vote.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/navFooter.css">
    <link rel="stylesheet" href="../css/footer.css">


    <script src="../lib/js/jquery.js"></script>
    <script src="../js/08/vote.js"></script>
</head>
<body>

    <!-- header -->
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

    <!-- navbar -->
    <nav class="topNav">
        <div>
            <a href="./contest_main20.html">
                <h1 class="titleFont2">賽制說明</h1>
            </a>
            <a href="./vote.html">
                <h1 class="titleFont2">人氣票選</h1>
            </a>
        </div>
        <div>
            <a href="./navbarChampion.html">
                <h1 class="titleFont2">歷屆冠軍</h1>
            </a>
            <a href="./contest_participate.html">
                <h1 class="titleFont2">我要投稿</h1>
            </a>
        </div>
    </nav>


    <div class="jk_vote">
        <div class="container">

            <!-- 搜尋bar -->
            <div class="search">
                <label class="search_input">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="輸入作品參賽號碼">
                </label>
                <button>搜尋</button>
            </div>

            <!-- 隱藏頁碼 -->
            <div class="vote_page">
                <span class="-on">1</span>
                <!-- <span>2</span> -->
                <!-- <span>3</span> -->
            </div>
            
            <div class="main"> 

                <!-- 即時戰況與頁碼 -->
                <div class="side">
                    <div class="votes">
                        <div>即時</div>
                        <div>戰況</div>
                    </div>

                    <div id="vote_page">
                        <span class="-on">1</span>
                        <!-- <span>2</span>
                        <span>3</span> -->
                    </div>

                    <div class="visitor">
                        累計瀏覽人次:
                        <div class="num">114352 人</div>
                    </div>
                </div>
                
                <!-- 參賽作品 --><!-- 8圖換頁如何做-->
                <main>

                <?php
                foreach($data as $index => $row){
                ?>

                    <div class="work">
                        <div class="img <?=$row["WK_ID"]?>" data-id="<?=$row["WK_ID"]?>">
                            <img src="<?=$row["WK_IMG"]?>">
                            <div class="get_num">得票數: <span><?=$row["WK_VOTES"]?></span></div>                            
                        </div>
                        <p>
                            <span>參賽號碼:<span><?=$row["WK_ID"]?></span></span>
                            <span>作品名稱:<span><?=$row["WK_NAME"]?></span></span>
                            <span>參賽者:<span><?=$row["MEM_NAME"]?></span></span>                
                        </p>
                    </div>


                <?php
                }
                ?>
                    
                </main>

                
            </div>

        </div>

        <div class="backGround">
            <div class="clickVote">
                <div class="close">
                    <i class="far fa-times-circle"></i>
                </div>
                <div class="content">
                    
                </div>

                <div class="btn">
                    <button>投他一票</button>
                </div>
                
            </div>

        </div>

    </div>

    <!-- footer -->
    <footer class="libft">
        <!-- contest 新增用 -->
        <div class="slideBtn">
            <div class="slideUp">
                <img src="../img/contest/footer_up.png">
            </div>
            <div class="slideDn">
                <img src="../img/contest/footer_down.png">
            </div>
        </div>
        <!--  -->
        <section class="herf">
            <div class="logo">
                <img src="../img/headerFooter/logo.svg" alt="">
            </div>
            <div class="page">
                <a href="./product.html">救世家具</a>
                <a href="./case.html">優質案例</a>
                <a href="./qa.html">客戶服務</a>
                <a href="./qa.html">聯繫我們</a>
                <a href="./contest_participate.html">傢俱賞</a>
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
    </footer>

    <script src="../lib/contest/contestfooter.js"></script>
    <script src="../lib/header/header.js"></script>
</body>
</html>