<!DOCTYPE html>
<html lang="zh-Hant">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>救世宅 | 完成訂單</title>
    <link rel="Shortcut Icon" href="../img/favicon.ico">
    <link rel="stylesheet" href="../lib/reset.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="../css/shoppingCart.css">
    <script src="../lib/js/jquery.js"></script>
    <script src="../lib/js/vue.js"></script>
    <script src='../lib/js/axios.js'></script>
    <!-- <script defer src="../js/20/shopCommon.js"></script> -->
    <script defer src="../js/20/shoppingDone.js"></script>
    <script defer src="../lib/header/header.js"></script>

    <link rel="stylesheet" href="../css/logSign.css">
    <script src="../lib/login/lazy-line-painter-1.9.6.min.js"></script>
    <script defer src="../lib/login/logSign.js"></script>
</head>

<body class="kcc_cartbody">
    <?php include("../lib/login/loginInclude.html"); ?>
    <?php include("../lib/header/header_Include.html"); ?>
    <div class="kcc_shoppingcat">
        <div class="top">
            <div class="title">
                <div class="circle">1</div>
                <h2 class="title1">購物車</h2>
            </div>
            <div class="title">
                <div class="circle">2</div>
                <h2 class="title2">訂單資料</h2>
            </div>
            <div class="title">
                <div class="circle">3</div>
                <h2 class="title3">完成訂購</h2>
            </div>
        </div>
        <div class="done_wrap">
            <div class="icon"><img src="../img/shoppincart/done.svg"></div>
            <h2 class="tks">感謝您!已經收到您的訂單!</h2>
            <p class="done_payment_text">{{content}}</p>
            <h2 class="done_detail">本次交易明細如下:</h2>
            <table>
                <tr>
                    <th>訂單明細</td>
                    <td>{{orderNum}}</td>
                </tr>
                <tr>
                    <th>商品明細</td>
                    <td class="done_list" >
                        <pre v-for="item in done_list" :key="item.prd_id">{{item.prd_name}}  {{item.prd_price}}元  X{{item.num}}</pre>
                    </td>
                </tr>
                <tr>
                    <th>訂單金額</td>
                    <td>{{total}}元</td>
                </tr>
                <tr>
                    <th>付款方式</td>
                    <td>{{payment}}</td>
                </tr>
                <tr>
                    <th>交易狀態</td>
                    <td>{{pay}}</td>
                </tr>
            </table>
            <button class="backshop" @click='backShop'>返回商城</button>
        </div>
    </div>
    <?php include("../lib/header/footerInclude.html"); ?>
</body>

</html>