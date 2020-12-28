<?php

    include("../php/08/jk_link.php");    

    //分頁判斷
    $page = isset($_POST["page"]) ? $_POST["page"] : 1;

    //作品資料
    $sql = "SELECT * from `WORK` w
    join 
    (select * from `MEMBER`
    join `CONTESTANT` on MEM_ID = CT_MEMBER_ID) m
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
    
    <!-- 通用設定 -->
    <link rel="stylesheet" href="../css/logSign.css">
    <script src="../lib/login/lazy-line-painter-1.9.6.min.js"></script>
    <script defer src="../lib/login/logSign.js"></script>
    <!--  -->

    <script src="../lib/js/vue.js"></script>
    <script src="../lib/js/jquery.js"></script>
    <script src="../js/08/vote.js"></script>

</head>
<body>
    <!-- header -->
    <?php
    include ('../lib/header/header_Include.html');
    include("../lib/login/loginInclude.html");
    ?>

    <!-- navbar -->
    <nav class="topNav">
        <div>
            <a href="./contest_main20.php">
                <h1 class="titleFont2">賽制說明</h1>
            </a>
            <a href="./vote.php">
                <h1 class="titleFont2">人氣票選</h1>
            </a>
        </div>
        <div>
            <a href="./product/navbarChampion.html">
                <h1 class="titleFont2">歷屆冠軍</h1>
            </a>
            <a href="./contest_participate.php">
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
            </div>
            
            <div class="main"> 
                
                <!-- 即時戰況與頁碼 -->
                <div class="side">
                    <div class="votes">
                        <div>即時</div>
                        <div>戰況</div>
                    </div>

                    <div class="vote_page">
                        <span class="-on">1</span>
                    </div>

                    <div class="visitor">
                        累計瀏覽人次:
                        <div class="num">114352 人</div>
                    </div>
                </div>

                <main>

                <?php
                foreach ($data as $i => $row) {
                    if($i < $page * 8 && $i >= $page * 8 - 8){
            
            
                    echo '<div class="work">';
                        echo '<div class="img '.$row["WK_ID"].'" data-id="'.$row["WK_ID"].'">';
                        echo '<img src="'.$row["WK_DRAW"].'">';
                        echo '<div class="get_num">得票數: <span>'.$row["WK_VOTES"].'</span></div>';                     
                    echo '</div>
                            <p>
                            <span>參賽號碼:<span>'.$row["WK_ID"].'</span></span>';
                    echo '<span>作品名稱:<span>'.$row["WK_NAME"].'</span></span>';
                    echo '<span>參賽者:<span>'.$row["MEM_NAME"].'</span></span>             
                        </p>
                    </div>';
            
                    }            
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