<!DOCTYPE html>
<html lang="zh-Hant">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>救世宅 | 訂單資料</title>
    <link rel="Shortcut Icon" href="../img/favicon.ico">
    <link rel="stylesheet" href="../lib/reset.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link rel="stylesheet" href="../css/shoppingCart.css">
    <script src="../lib/js/jquery.js"></script>
    <script src="../lib/js/vue.js"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/axios/0.20.0/axios.js'></script>
    <script defer src="../js/20/shopCommon.js"></script>
    <script defer src="../js/20/shoppingOrder.js"></script>
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
        <main>
            <div class="left2" id="left2">
                <h2 class="info">購買人資料</h2>
                <div class="outer memberbox">
                    <div class="name df">
                        <p class="innerT lh">姓名</p>
                        <input type="text" class="name_input" v-model="formData.fname" disabled @blur="blur"
                            @keyup.13="blur" ref="rname">
                        <button class="modified" @click="focus">修改</button>
                    </div>
                    <div class="phone df">
                        <p class="innerT lh">電話</p>
                        <input type="text" ref="rphone" class="phone_input" v-model="formData.fphone" disabled @blur="blur"
                            @keyup.13="blur" @keydown="phoneInput"><button class="modified" @click="focus">修改</button>
                    </div>
                    <div class="lives df">
                        <p class="innerT lh">住址</p>
                        <input type="text" ref="raddr" class="live_input" v-model="memLives" disabled @blur="blur"
                            @keyup.13="blur"><button class="modified" @click="focus">修改</button>
                    </div>
                </div>
                <h2 class="payment">付款方式</h2>
                <div class="outer paymentbox">
                    <div class="checkT">
                        <input type="checkbox" class="credit_check" v-model="cardBox">
                        <p class="lh">信用卡</p>
                    </div>
                    <transition name="bounce">
                    <div class="card_box" v-show="cardBox">
                        <div class="cardnum_box">
                            <p class="card_num">信用卡號碼</p>
                            <div class="inputnum_box df">
                                <input type="text" class="card_num1" ref="cardnum1" @keydown="cardNum">
                                <input type="text" class="card_num2" ref="cardnum2" @keydown="cardNum">
                                <input type="text" class="card_num3" ref="cardnum3" @keydown="cardNum">
                                <input type="text" class="card_num4" ref="cardnum4" @keydown="cardNum">
                            </div>
                        </div>
                        <div class="carddate_box">
                            <p class="card_date">有效日期</p>
                            <input ref="rcdate" type="text" class="card_date1" @keydown="cardDate">
                            <!-- <input type="text" class="card_date2" style="display: none;"> -->
                        </div>
                        <div class="cardcode_box">
                            <p class="card_code">安全碼</p>
                            <input ref="rccode" type="text" class="card_code1" @keydown="cardCode">
                        </div>
                        <div class="cardicon_box">
                            <img src="../img/shoppincart/visa.svg" alt="" ref="imgV">
                            <img src="../img/shoppincart/mastercard.svg" alt="" ref="imgM">
                            <img src="../img/shoppincart/jcb.svg" alt="" ref="imgJ">
                        </div>
                    </div>
                    </transition>
                    <div class="checkT">
                        <input type="checkbox" class="remit_input" v-model="remit">
                        <p class="remit lh">匯款</p>
                    </div>
                    <transition name="bounce">
                    <div class="remit_box" v-show="remit">
                        <div class="remitbank_box df">
                            <p>銀行</p>
                            <p class="gary">台灣銀行(004)南門分行</p>
                        </div>
                        <div class="remitaccount_box df">
                            <p>銀行帳戶</p>
                            <p class="gary">033001122581</p>
                        </div>
                        <div class="remituser_box df">
                            <p>匯款戶名</p>
                            <p class="gary">救世宅</p>
                        </div>
                    </div>
                    </transition>
                </div>
                <h2 class="adds">運送地址</h2>
                <div class="outer addsbox">
                    <div class="checkT">
                        <input type="checkbox" class="freight_input" v-model="freight">
                        <p class="lh">同購買人住址</p>
                    </div>
                    <div class="checkT">
                        <input type="checkbox" class="adds_input" v-model="addressBox">
                        <p class="lh">新增寄送地址</p>
                    </div>
                    <transition name="slide-fade">
                    <div class="address_box" v-show="addressBox">
                        <select class="freight_city" v-model="selected">
                            <option selected disabled>居住縣市</option>
                            <optgroup label="運費2000元">
                                <option>台北市</option>
                                <option>新北市</option>
                                <option>桃園市</option>
                            </optgroup>
                            <optgroup label="運費3000元">
                                <option>基隆市</option>
                                <option>新竹市</option>
                                <option>新竹縣</option>
                                <option>宜蘭縣</option>
                            </optgroup>
                            <optgroup label="運費4000元">
                                <option>苗栗縣</option>
                                <option>台中市</option>
                                <option>彰化縣</option>
                                <option>南投縣</option>
                                <option>雲林縣</option>
                                <option>嘉義市</option>
                                <option>嘉義縣</option>
                                <option>花蓮縣</option>
                            </optgroup>
                            <optgroup label="運費5000元">
                                <option>台南市</option>
                                <option>高雄市</option>
                                <option>屏東縣</option>
                                <option>台東縣</option>
                            </optgroup>
                        </select>
                        <input type="text" ref="rfaddr" v-model="formData.fadd">
                        <p class="onlytw">*僅提供本島寄送</p>
                    </div>
                    </transition>
                </div>
            </div>
            <div class="right" id="right">
                <h2 class="titlenum">合計商品{{proTotal}}項</h2>
                <div class="cart_top">
                    <div class="cart_top_list">
                        <span class="unflod">展開清單<img src="../img/shoppincart/cart_down.svg" class="openimg"></span>
                        <ul class="tatal_list">
                            <li class="tatal_li">
                                <p class="tatal_list_name">商品名商</p>
                                <p class="tatal_list_price">1000元</p>
                                <p class="tatal_list_num">X1</p>
                            </li>
                            <li class="tatal_li">
                                <p class="tatal_list_name">商品名商</p>
                                <p class="tatal_list_price">1000元</p>
                                <p class="tatal_list_num">X1</p>
                            </li>
                        </ul>
                    </div>
                    <div class="totalconut">
                        <div class="type">
                            <p class="cart_total">金額</p>
                            <p class="cart_discount">折扣</p>
                            <p class="Shipping">運費</p>
                            <p class="final_price">結帳金額</p>
                        </div>
                        <div class="pricenum">
                            <div class="merge cart_totalnum">
                                <p class="dollar">$</p>
                                <p class="cart_price1">{{total}}</p>
                            </div>
                            <div class="merge discount_num">
                                <p class="dollar">$</p>
                                <p class="cart_price2">{{discount}}</p>
                            </div>
                            <div class="merge Shipping_num">
                                <p class="dollar">$</p>
                                <p class="cart_price3">{{Shipping}}</p>
                            </div>
                            <div class="merge final_num">
                                <p class="dollar">$</p>
                                <p class="cart_price4">{{final}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart_btn">
                    <button class="backstep" type="button" @click="backCart"><img src="../img/shoppincart/cart_left.svg"
                            class="backimg" @click="backCart">返回購物車</button>
                    <button class="buy" type="button" @click='sendCheck'>完成訂購</button>
                </div>
            </div>

            <div class="kc_popup" v-if="show">
                <h2>{{text}}</h2>
                <div class="btnbox">
                    <p class="return" @click="close">返回</p>
                    <p class="checkok" @click="popSwitch">確認</p>
                </div>
            </div>
        </main>
    </div>
    <?php include("../lib/header/footerInclude.html"); ?>
</body>

</html>