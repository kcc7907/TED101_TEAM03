<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的收藏</title>

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
                    
                    
                    <ul class="item">
                        <li class="name">
                            <img src="../img/product/sofa02/sofa02_01.jpg">
                            <span>聚樂沙發組</span>
                        </li>
                        <li class="size">
                            犀牛真皮
                        </li>
                        <li class="price">
                            32,000 元
                        </li>
                        <li class="btn">
                            <button class="add"><span>加入購物車</span><i class="fas fa-cart-arrow-down"></i></button>
                            <button class="remove"><span>移除</span><i class="far fa-trash-alt"></i></button>
                        </li>
                    </ul>
                    
                </div>

                <div class="table">
                    <ul class="title">
                        <li class="name">項目</li>
                        <li class="size">規格</li>
                        <li class="price">價錢</li>
                        <li class="btn"></li>
                    </ul>
                    
                    
                    <ul class="item">
                        <li class="name">
                            <img src="../img/product/bed02/bed02_02.jpg">
                            <span>尊榮雙人床</span>
                        </li>
                        <li class="size">
                            雙人床
                        </li>
                        <li class="price">
                            42,000 元
                        </li>
                        <li class="btn">
                            <button class="add"><span>加入購物車</span><i class="fas fa-cart-arrow-down"></i></button>
                            <button class="remove"><span>移除</span><i class="far fa-trash-alt"></i></button>
                        </li>
                    </ul>
                    
                </div>
            </main>
        </div>
    </div>

    <!-- <footer class="libft">
        <section class="herf">
            <div class="logo">
                <img src="../../img/headerFooter/logo.svg" alt="">
            </div>
            <div class="page">
                <a href="../../frontend/product.html">救世家具</a>
                <a href="../../frontend/case.html">優質案例</a>
                <a href="../../frontend/qa.html">客戶服務</a>
                <a href="../../frontend/qa.html">聯繫我們</a>
                <a href="../../frontend/contest_participate.html">傢俱賞</a>
            </div>
        </section>
        <section class="link">
            <div class="scb">
                <label for="mail">訂閱電子報</label>
                <input type="text" class="mail" placeholder="enter your email">
            </div>
            <div class="company">
                <img src="../../img/headerFooter/東和鋼鐵.png">
                <img src="../../img/headerFooter/cooperate_blum.png">
                <img src="../../img/headerFooter/foot_logo.png">
            </div>
        </section>
        <section class="copy">
            <p>Copy right 2020,All Right Reserved | By 救世宅</p>
        </section>
    </footer> -->

    <script src="../lib/header/header.js"></script>
</body>
</html>