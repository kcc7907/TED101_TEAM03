<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>救世宅 | 首頁</title>
    <link rel="Shortcut Icon" href="../img/favicon.ico">
    <link rel="stylesheet" href="../css/home2D.css">
    <link rel="stylesheet" href="../lib/reset.css">
    <script src="../lib/js/jquery.js"></script>
    <script src="../lib/js/vue.js"></script>
    <script src="../js/15/lazy-line-painter-1.9.6.min.js"></script>
    <script src="../js/15/home2D.js"></script>
    <script src="../js/15/logSign.js"></script>
</head>

<body>
    <div class="JHH" id="appHome">
        <header class="common">
            <div class="logo">
                <a href="./home2D.php"><img src="../img/headerFooter/logo.svg"></a>
            </div>
            <nav>
                <div class="nav1">
                    <a href="product/product.html">救世傢俱</a>
                    <a href="./case.html">參考案例</a>
                </div>
                <div class="nav2">
                    <a href="./qa.html">客戶服務</a>
                    <a href="./contest_main20.php">傢聚賞</a>
                </div>
            </nav>
            <div class="icon">
                <span class="login">
                    <img src="../img/headerFooter/loginIcon.svg" class="logMem" alt="">
                    <span class="logMem">
                        <a href="./meminfo.php">會員中心</a>
                        <span href="" class="logout">登出</span>
                    </span>
                </span>
                <a class="shop" href="shoppingCart.php">
                    <img src="../img/headerFooter/shoppingCart.svg" alt="">
                </a>
                <a class="ham">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
        </header>
        <div id="homeLeft">
            <div>
                <header class="common">
                    <div class="logo">
                        <a href="./home2D.php"><img src="../img/headerFooter/logo.svg"></a>
                    </div>
                    <nav>
                        <div class="nav1">
                            <a href="product/product.html">救世傢俱</a>
                            <a href="./case.html">參考案例</a>
                        </div>
                        <div class="nav2">
                            <a href="./qa.html">客戶服務</a>
                            <a href="./contest_main20.php">傢聚賞</a>
                        </div>
                    </nav>
                    <div class="icon">
                        <span class="login">
                            <img src="../img/headerFooter/loginIcon.svg" class="logMem" alt="">
                            <span class="logMem">
                                <a href="./meminfo.php">會員中心</a>
                                <span href="" class="logout">登出</span>
                            </span>
                        </span>
                        <a class="shop" href="shoppingCart.php">
                            <img src="../img/headerFooter/shoppingCart.svg" alt="">
                        </a>
                        <a class="ham">
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                    </div>
                </header>
            </div>
            <div id="goScroll">
                <div>
                    <div>
                        <h2 class="contentFont lineHeight">關於我們</h2>
                        <div class="time">
                            <span class="detailFont lineHeight">服務時間：</span>
                            <p class="detailFont lineHeight day">每週一至周五</p>
                            <p class="detailFont lineHeight clock">上午9:00至下午6:00</p>
                        </div>
                        <div>
                            <span class="detailFont lineHeight">營業據點：</span>
                            <p class="detailFont lineHeight">台北市信義區忠孝東路五段68號</p>
                        </div>
                        <div class="tel">
                            <span class="detailFont lineHeight">聯絡電話：</span>
                            <p class="detailFont lineHeight">( 02 ) 9876 - 5432</p>
                        </div>
                    </div>
                    <div>
                        <h2 class="contentFont lineHeight">最新消息</h2>
                        <ul>
                            <li class="detailFont lineHeight">{{news[0].title}}<time class="detailFont">- {{news[0].time}} </time></li>
                            <li class="detailFont lineHeight">{{news[1].title}}<time class="detailFont">- {{news[1].time}} </time></li>
                            <li class="detailFont lineHeight">{{news[2].title}}<time class="detailFont">- {{news[2].time}} </time></li>
                            <li class="detailFont lineHeight">{{news[3].title}}<time class="detailFont">- {{news[3].time}} </time></li>
                            <li class="detailFont lineHeight">{{news[4].title}}<time class="detailFont">- {{news[4].time}} </time></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <img src="../img/homepage/Iconfacebook.png" alt="facebook">
                    </div>
                    <div>
                        <img src="../img/homepage/Iconinstagram.png" alt="instagram">
                    </div>
                    <div>
                        <img src="../img/homepage/Icontwitter.png" alt="twitter">
                    </div>
                    <div>
                        <img src="../img/homepage/Iconlinkedin.png" alt="linkedin">
                    </div>
                </div>
                <div>
                    <div>
                        <p class="detailFont">版權所有</p>
                        <div><img src="../img/homepage/Iconcopyright.png"></div>
                        <p class="detailFont">2020 救世宅</p>
                    </div>
                    <div>
                        <p class="detailFont">版本 01 / 01 / 2020 @ 6:18:25 PM</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="homeRight">
            <div class="into">
                <a href="javascript: void(0)" class="titleFont3">歡迎來到救世宅</a>
            </div>
            <div>
            </div>
            <div class="aboutDiv">
                <div>
                    <div>
                        <span></span>
                        <p class="hugeP">關於救世宅</p>
                    </div>
                    <div>
                        <div>
                            <h3 class="titleFont3">救世團隊</h3>
                            <p class="detailFont lineHeight">領有註冊商標證書邁向永續經營的企業品牌里程碑。秉持著「誠實、原創」初衷，把每位客戶託付案件做到最好，誠信、專業、肯定是我們永續經營的企業文化。</p>
                        </div>
                        <div>
                            <h3 class="titleFont3">救世理念</h3>
                            <p class="detailFont lineHeight">房子，是現代人普遍尋求的歸處。而傢俱，則是一間房屋的靈魂。我們希望藉由高品質的傢俱，為人們提供能自在生活的空間。</p>
                        </div>
                    </div>
                </div>
                <div id="sliderBoardJH">
                    <div id="pdtJH">
                        <div>
                            <img src="../img/product/sofa05/sofa05_03.jpg" alt="沙發">
                        </div>
                        <div>
                            <img src="../img/product/table08/table08_04.jpg" alt="桌組">
                        </div>
                        <div>
                            <img src="../img/product/bed01/bed01_01.jpg" alt="床組">
                        </div>
                        <div>
                            <img src="../img/product/chair02/chair02_02.jpg" alt="椅子">
                        </div>
                        <div>
                            <img src="../img/product/bookcase03/bookcase03_04.jpg" alt="書櫃">
                        </div>
                        <div>
                            <img src="../img/product/entrance/entrance01.jpg" alt="訂製櫃">
                        </div>
                        <div>
                            <img src="../img/product/wardrobe/wr10.jpeg" alt="優惠組合">
                        </div>
                        <div>
                            <img src="../img/product/sofa05/sofa05_03.jpg" alt="沙發">
                        </div>
                        <div>
                            <img src="../img/product/table08/table08_04.jpg" alt="桌組">
                        </div>
                        <div>
                            <img src="../img/product/bed01/bed01_01.jpg" alt="床組">
                        </div>
                        <div>
                            <img src="../img/product/chair02/chair02_02.jpg" alt="椅子">
                        </div>
                        <div>
                            <img src="../img/product/bookcase03/bookcase03_04.jpg" alt="書櫃">
                        </div>
                        <div>
                            <img src="../img/product/entrance/entrance01.jpg" alt="訂製櫃">
                        </div>
                        <div>
                            <img src="../img/product/wardrobe/wr10.jpeg" alt="優惠組合">
                        </div>
                    </div>
                </div>
                <h3 class="titleFont3">救世產品</h3>
                <span id="frtButton"></span>
                <span id="bckButton"></span>
            </div>
            <div class="newsDiv">
            <<template>
                <div class="newsSection">
                    <div>
                        <a href="" class="titleFont2 lineHeight">{{news[0].title}}</a>
                        <time class="titleFont2">{{news[0].time}}</time>
                        <div>
                            <img src="../img/news/news01.jpg" alt="news">
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href="" class="detailFont">{{news[1].title}}</a>
                            <time class="detailFont">{{news[1].time}}</time>
                            <div>
                                <img src="../img/news/news02.jpg" alt="news">
                            </div>
                        </div>
                        <div>
                            <a href="" class="detailFont">{{news[2].title}}</a>
                            <time class="detailFont">{{news[2].time}}</time>
                            <div>
                                <img src="../img/news/news03.jpg" alt="news">
                            </div>
                        </div>
                        <div>
                            <a href="" class="detailFont">{{news[3].title}}</a>
                            <time class="detailFont">{{news[3].time}}</time>
                            <div>
                                <img src="../img/news/news04.jpg" alt="news">
                            </div>
                        </div>
                        <div>
                            <a href="" class="detailFont">{{news[4].title}}</a>
                            <time class="detailFont">{{news[4].time}}</time>
                            <div>
                                <img src="../img/news/news05.jpg" alt="news">
                            </div>
                        </div>
                        <div>
                            <a href="" class="detailFont">{{news[5].title}}</a>
                            <time class="detailFont">{{news[5].time}}</time>
                            <div>
                                <img src="../img/news/news06.jpg" alt="news">
                            </div>
                        </div>
                        <div>
                            <a href="" class="detailFont">{{news[6].title}}</a>
                            <time class="detailFont">{{news[6].time}}</time>
                            <div>
                                <img src="../img/news/news07.jpg" alt="news">
                            </div>
                        </div>
                    </div>
                </div>
            </template>>
                <div class="newsSection">
                    <div>
                        <a href="" class="titleFont2 lineHeight">{{news[7].title}}</a>
                        <time class="titleFont2">{{news[7].time}}</time>
                        <div>
                            <img src="../img/news/news01.jpg" alt="news">
                        </div>
                    </div>
                    <div>
                        <div>
                            <a href="" class="detailFont">{{news[8].title}}</a>
                            <time class="detailFont">{{news[8].time}}</time>
                            <div>
                                <img src="../img/news/news02.jpg" alt="news">
                            </div>
                        </div>
                        <div>
                            <a href="" class="detailFont">{{news[9].title}}</a>
                            <time class="detailFont">{{news[9].time}}</time>
                            <div>
                                <img src="../img/news/news03.jpg" alt="news">
                            </div>
                        </div>
                        <div>
                            <a href="" class="detailFont">{{news[10].title}}</a>
                            <time class="detailFont">{{news[10].time}}</time>
                            <div>
                                <img src="../img/news/news04.jpg" alt="news">
                            </div>
                        </div>
                        <div>
                            <a href="" class="detailFont">{{news[11].title}}</a>
                            <time class="detailFont">{{news[11].time}}</time>
                            <div>
                                <img src="../img/news/news05.jpg" alt="news">
                            </div>
                        </div>
                        <div>
                            <a href="" class="detailFont">{{news[12].title}}</a>
                            <time class="detailFont">{{news[12].time}}</time>
                            <div>
                                <img src="../img/news/news06.jpg" alt="news">
                            </div>
                        </div>
                        <div>
                            <a href="" class="detailFont">{{news[13].title}}</a>
                            <time class="detailFont">{{news[13].time}}</time>
                            <div>
                                <img src="../img/news/news07.jpg" alt="news">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btnSection">
                    <div>
                        <!-- <span class="rotateSpan" id="rotateSpan1"></span> -->
                        <span class="titleFont1">
                            最新消息
                        </span>
                        <!-- <span class="rotateSpan" id="rotateSpan2"></span> -->
                    </div>
                    <div>
                        <button class="left pageLeftBtn"></button>
                        <button class="right pageRightBtn"></button>
                        <span class="hugeP pageBtn">第一頁</span>
                    </div>
                </div>
            </div>
        </div>
        <div id="bottomBox">
            <div>
                <div>
                    <img src="../img/homepage/Iconfacebook.png" alt="facebook">
                </div>
                <div>
                    <img src="../img/homepage/Iconinstagram.png" alt="instagram">
                </div>
                <div>
                    <img src="../img/homepage/Icontwitter.png" alt="twitter">
                </div>
                <div>
                    <img src="../img/homepage/Iconlinkedin.png" alt="linkedin">
                </div>
            </div>
            <div>
                <div>
                    <p class="detailFont">版權所有</p>
                    <div><img src="../img/homepage/Iconcopyright.png"></div>
                    <p class="detailFont">2020 救世宅</p>
                </div>
                <div>
                    <p class="detailFont">版本 01 / 01 / 2020 @ 6:18:25 PM</p>
                </div>
            </div>
        </div>
        <!-- confirm燈箱 -->
        <div class="confirmDiv">
            <div>
                <p class="contentFont lineHeight"></p>
                <input type="button" class="detailFont" id="sureGoHome" value="確認">
                <input type="button" class="detailFont" id="notsureGoHome" value="取消">
            </div>
        </div>
    </div>


    <!-- 登入燈箱 -->
    <div id="login">
        <div class="login">
            <span class="hideLog"></span>
            <h1 class="titleFont2">歡迎回來</h1>
            <form action="LoginR.php" class="login" name="login" method="POST">
                <div>
                    <label for="account" class="titleFont3">帳號</label>
                    <input type="text" id="account" name="account" class="titleFont3" minlength="8" maxlength="12" required="required" autocomplete="off">
                    <label for="pwd" class="titleFont3">密碼</label>
                    <input type="password" class="titleFont3" id="pwd" name="pwd" minlength="8" maxlength="12" required="required" autocomplete="off">
                    <input type="checkbox" id="alive" name="alive" class="alive detailFont">
                    <label for="alive" class="alive" id="alivebox"></label>
                    <label for="alive" class="alive detailFont">保持登入</label>
                </div>
                <div>
                    <p class="detailFont"><a>忘記密碼</a></p>
                    <button type="button" class="login titleFont2">登入</button>
                    <p class="detailFont"><a href="javascript: void(0)" class="signLink">註冊新會員</a></p>
                </div>
            </form>
            <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 603 693" data-llp-composed="true" id="logIn" class="lazy-line-painter">
                <path id="Path_17" data-name="Path 17" d="M4.5,244.5,304.5,3l300,241.5V624c0,38.108-29.848,69-66.667,69H71.167C34.348,693,4.5,662.108,4.5,624Z" transform="translate(-3 -1.5)" fill="none" data-llp-id="logIn-0" data-llp-duration="5000" data-llp-delay="0" fill-opacity="0" style="" />
                <path id="Path_18" data-name="Path 18" d="M13.5,162.7V18h86.819V162.7" transform="translate(244 518.801)" fill="none" data-llp-id="logIn-1" data-llp-duration="5000" data-llp-delay="0" fill-opacity="0" style="" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 603 693" data-llp-composed="true" id="logInDoor" class="lazy-line-painter">
                <path id="Path_19" data-name="Path 19" d="M13.5,162.7V18h86.819V162.7" transform="translate(244 518.801)" fill="none" data-llp-id="logIn-2" data-llp-duration="5000" data-llp-delay="0" fill-opacity="0" style="" />
            </svg>

            <div class="closebtn">
                <img class="closebtn" src="../img/homepage/Iconcancel.png">
            </div>
        </div>

    </div>

    <!-- 註冊燈箱 -->
    <div id="signUp">
        <div class="signUp">
            <span class="hideSign"></span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 953 1009" data-llp-composed="true" id="signUp" class="lazy-line-painter">
                <g id="Rectangle_457" data-name="Rectangle 457" fill="none" stroke="#865454" stroke-width="1">
                    <rect width="953" height="1009" data-llp-id="signUp-0" data-llp-duration="5000" data-llp-delay="0" fill-opacity="0" style="" />
                </g>
            </svg>
            <h1 class="titleFont1">加入會員享受輕鬆購物</h1>
            <form action="SignR.php" class="signUp" name="signUp">
                <div>
                    <div>
                        <label for="memName" class="titleFont3">姓名</label>
                        <input type="text" name="memName" class="titleFont3" id="memNameJH" required="required" autocomplete="off" placeholder="請輸入姓名">
                    </div>
                    <div>
                        <label for="Phone" class="titleFont3">手機</label>
                        <input type="text" name="memPhone" class="titleFont3" id="memPhoneJH" maxlength="10" required="required" autocomplete="off" placeholder="請輸入手機號碼">
                    </div>
                </div>
                <div>
                    <label for="email" class="titleFont3">信箱</label>
                    <input type="email" name="memEmail" class="titleFont3" id="memEmailJH" required="required" autocomplete="off" placeholder="請輸入信箱">
                </div>
                <div id="addressOption">
                    <label for="address" class="titleFont3">地址</label>
                    <select name="memCity" id="memCityJH" class="detailFont" required="required">
                        <option name="memCity" selected disabled value="0">請選擇縣市</option>
                        <option v-for="city in citys" class="detailFont" name="memCity" :value="city">{{city}}</option>
                    </select>
                    <input type="text" name="memAddress" class="titleFont3" id="memAddressJH" required="required" autocomplete="off" placeholder="請輸入地址">
                </div>
                <div>
                    <label for="account" class="titleFont3">帳號</label>
                    <input type="text" name="memAccount" class="titleFont3" id="memAccountJH" minlength="6" maxlength="12" required="required" autocomplete="off" placeholder="請輸入英文或數字(6-12字元)">
                </div>
                <div>
                    <label for="pwd" class="titleFont3">密碼</label>
                    <input type="password" name="memPwd" class="titleFont3" id="memPwdJH" minlength="6" maxlength="12" required="required" autocomplete="off" placeholder="請輸入密碼(6-12字元)">
                </div>
                <div>
                    <label for="checkP" class="titleFont3">密碼確認</label>
                    <input type="password" name="memCheckP" class="titleFont3" id="memCheckPJH" required="required" autocomplete="off" placeholder="請重複輸入密碼">
                </div>
                <div>
                    <!-- <button type="button" class="titleFont3 signup">註冊</button> -->
                    <button type="button" class="titleFont3 signup">註冊</button>
                </div>
                <div>
                    <span class="detailFont">註冊表示同意<a class="detailFont">商店服務條款</a>與<a class="detailFont">會員責任規範及個資聲明</a>。</span>
                </div>
                <div>
                    <a href="javascript: void(0)" class="detailFont logLink">回登入頁面</a>
                </div>
            </form>
            <div class="closebtn">
                <img class="closebtn" src="../img/homepage/Iconcancel.png">
            </div>
        </div>
    </div>



</body>

</html>