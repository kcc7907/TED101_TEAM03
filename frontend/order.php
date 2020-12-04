<?php
    include("../php/08/jk_link.php");

    $user = "A111200001";   //測試帳號

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
    <link rel="stylesheet" href="../css/order.css">
    <link rel="stylesheet" href="../css/header.css">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
        integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">

    <script src="../lib/js/jquery.js"></script>
    <script src="../js/08/order.js"></script>

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
                <!-- 表格 -->
                <div class="table">
                    <!-- 概述 -->
                    <div class="rough">

                        <!-- 標題 -->
                        <ul class="title">
                            <li class="primary">訂單編號</li>
                            <li class="name">商品名稱</li>
                            <li class="count">數量</li>
                            <li class="price">總金額</li>
                            <li class="status">處理狀態</li>
                        </ul>

                        <!-- 訂單項 -->
                        <ul class="item">
                            <li class="primary">
                                <p>202011130004</p>
                                <button>詳細資訊</button>
                            </li>
                            <li class="name">
                                <ol>
                                    <li>辦公桌</li>
                                    <li>辦公椅</li>                                    
                                </ol>
                            </li>
                            <li class="count">
                                <ol>
                                    <li>1</li>
                                    <li>2</li>
                                </ol>
                            </li>
                            <li class="price">
                                99,999,999 元
                            </li>
                            <li class="status">
                                運送中
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
                                    <span>2020/11/11 11:30</span>
                                </p>
                            </div>
                            <div class="step2">
                                <img src="" alt="">
                                <p>
                                    <i class="fas fa-money-check-alt"></i>
                                    <span>已付款</span>
                                    <span>2020/11/11 11:30</span>
                                </p>
                            </div>
                            <div class="step3 -now">
                                <img src="" alt="">
                                <img src="" alt="">
                                <p>
                                    <i class="fas fa-truck-moving"></i>
                                    <span>運送中</span>
                                    <span>2020/11/11 11:30</span>
                                </p>
                            </div>
                            <div class="step4">
                                <img src="" alt="">
                                <img src="" alt="">
                                <p>
                                    <i class="fas fa-check-circle"></i>
                                    <span>已送達</span>
                                    <span></span>
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
                                            <li>辦公椅</li>
                                            <li>辦公椅</li>
                                        </ol>
                                    </li>

                                    <li class="pro_price">
                                        <ol>
                                            <li>9,999,999 元</li>
                                            <li>45,000,000 元</li>
                                        </ol>
                                    </li>

                                    <li class="pro_count">
                                        <ol>
                                            <li>1</li>
                                            <li>2</li>
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