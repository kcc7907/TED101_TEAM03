<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>救世宅 | 我要投稿</title>
    <link rel="Shortcut Icon" href="../img/favicon.ico">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    <link rel="stylesheet" href="../lib/reset.css">
    <link rel="stylesheet" href="../css/contest_participate.css">
    <link rel="stylesheet" href="../css/logSign.css">
    <script src="../lib/js/jquery.js"></script>
    <script src="../lib/js/vue.js"></script>
    <script src="../lib/login/lazy-line-painter-1.9.6.min.js"></script>
    <script defer src="../lib/login/logSign.js"></script>
</head>

<body>

    <header class="common">
        <div class="logo">
            <a href="./home2D.php"><img src="../img/headerFooter/logo.svg"></a>
        </div>
        <nav>
            <div class="nav1">
                <a class="product" href="product/product.html">救世傢俱</a>
                <a class="case" href="./case.html">參考案例</a>
            </div>
            <div class="nav2">
                <a class="qa" href="./qa.html">客戶服務</a>
                <a class="contest" href="./contest_main20.php">傢聚賞</a>
            </div>
        </nav>
        <div class="icon">
            <a class="login ">
                <img src="../img/headerFooter/loginIcon.svg" class="logMem" alt="">
            </a>
            <a class="shop " href="shoppingCart.php">
                <img src="../img/headerFooter/shoppingCart.svg" alt="" onclick="location.href='shoppingCart.php'">
            </a>
            <a class="ham">
                <span></span>
                <span></span>
                <span></span>
            </a>
            <div class="logMembox">
                <a href="./meminfo.php">會員中心</a>
                <span class="logout">登出</span>
            </div>
        </div>
    </header>
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
    <div class="JHC" id="JHC">
        <header></header>
        <div class="container">
            <div class="step">
                <ol>
                    <li class="step contentFont">1.同意規範</li>
                    <li class="step contentFont" @click="fillPID">2.上傳資料</li>
                    <li class="step contentFont" @click="fillWork">3.投稿成功</li>
                </ol>
                <form action="#" name="formStep1" class="formStep contentFont" id="formStep1">
                    <div class="rule">
                        <p class="contentFont">
                            一、 凡參與競賽，即視為同意本同意書之規定，活動中若有爭議，主辦單位和執行單位保有活動最終解釋權。本同意書如有未盡事宜，除依相關法律規定辦理外，主辦單位保留修改之權利，主辦單位及執行單位並得另行補充及隨時公布於活動網頁。<br>
                            二、 所有參賽作品除本競賽提供之素材外皆須為本人作品，且為未曾參加其他比賽得獎之作品，如有違反，取消參賽資格。<br>
                            三、 所有參賽作品嚴禁抄襲、盜用與仿冒，並不得引用有版權肖像權之圖片、文章或參賽作品，若有涉及侵害著作權、專利權或其他權利之情事，參賽者應自負一切法律責任。<br>
                            四、 參賽作品若引用他人商標、著作、影音時，參賽者應事先取得著作權人之同意授權且付清相關費用，並於參賽作品註明出處。參賽作品引用之任何商標、著作、影音等所衍生之智慧財產權糾紛，皆由參賽者自行承擔法律責任，若因此致主辦單位或其他第三人受有損害，並應予賠償。<br>
                            五、 參賽作品若涉及或影射腥、羶、色情、暴力或影響社會善良風俗等內容，或惡意造成主辦單位或其他任何第三人包含但不限於形象、聲譽等有價或無價之損失，主辦單位得不另行通知參賽者針對該作品進行下架並取消參賽資格，並保留法律追訴權，若造成主辦單位或其他任何第三人受有損害者，參賽者應自負民事及刑事上之責任。<br>
                            六、 完成報名即視為授權主辦單位使用參賽者公開於官方網站上的文字、個人資料等，且視為本活動資料均歸主辦單位所有，如有違反，主辦單位得取消其參賽及得獎資格。<br>
                            七、 得獎參賽作品之著作權，參賽者同意專屬授權主辦單位無償永久使用。<br>
                            八、 主辦單位為推廣本活動之後續宣傳等事宜，得將參賽作品及說明文字等各項資料，以任何形式公開展示、利用或散布，運用於相關媒體如電視、報章雜誌、網際網路、展覽等公開播送、傳輸及散布。<br>
                            九、 立書人同意遵守「傢聚賞」參賽同意書及本活動其他相關規定。
                        </p>
                    </div>
                    <input type="radio" id="submitStep1" name="submitStep1" required="required" value="0" data-id="submitStep1">
                    <label for="submitStep1" class="contentFont"><span></span>我同意以上規定</label>
                    <button type="button" class="nextBtn contentFont">下一步</button>
                </form>
                <form action="#" name="formStep2" class="formStep contentFont" id="formStep2">
                    <p class="contentFont">&frasl;&frasl;&emsp;參賽者資料&emsp;&frasl;&frasl;</p>
                    <div class="view">
                        <label class="contentFont" for="pIdNum">身分證號碼：</label>
                        <input type="text" class="contentFont" id="pIdNum" required="required" autocomplete="off" data-id="pIdNum">
                        <br>
                        <label for="pId" class="contentFont">上傳身分證：</label>
                        <label for="pId" class="fileUpload detailFont" data-id="pId">上傳檔案</label>
                        <input type="file" id="pId" name="pId" class="fileUpload" required="required" @change="file1">
                        <br>
                        <span class="file contentFont">檔案名稱：</span>
                        <span class="file contentFont" id="fileName">{{pImgName[0]}}</span>
                        <div id="pImg">
                            <img :src="pImgUrl[0]" id="pIdImg">
                            <span class="detailFont previewP">圖片預覽</span>
                        </div>
                    </div>
                    <div class="btn">
                        <button type="button" class="backBtn contentFont">上一步</button>
                        <button type="button" class="nextBtn contentFont">下一步</button>
                    </div>
                </form>
                <form action="#" name="formStep3" class="formStep contentFont" id="formStep3">
                    <p class="contentFont">&frasl;&frasl;&emsp;作品資料&emsp;&frasl;&frasl;</p>
                    <div class="view">
                        <label class="contentFont" for="fType">作品種類：</label>
                        <select class="contentFont" id="fType" name="fType" required="required" data-id="fType" v-model="selectType">
                            <option disabled selected>請選擇作品種類</option>
                            <option v-for="type in workTypes" class="contentFont" :value="type">{{type}}</option>
                        </select>
                        <br>
                        <label class="contentFont" for="fName">作品名稱：</label>
                        <input type="text" class="contentFont" id="fName" required="required" autocomplete="off" data-id="fName" v-model="fName">
                        <br>
                        <label for="fConcept" class="fConcept contentFont">設計理念：</label>
                        <textarea name="fConcept" class="contentFont" id="fConcept" required="required" autocomplete="off" data-id="fConcept" v-model="fConcept"></textarea>
                        <br>
                        <div>
                            <div>
                                <label class="contentFont" for="draft">設計稿：</label>
                                <label for="draft" class="fileUpload detailFont" data-id="draft">上傳檔案</label>
                                <input type="file" id="draft" name="draft" class="fileUpload" required="required" @change="file2">
                                <br>
                                <span class="file contentFont">檔案名稱：</span>
                                <span class="file contentFont" id="draftName">{{pImgName[1]}}</span>
                                <div>
                                    <img :src="pImgUrl[1]" class="zoomOut" @click="zoomOut" data-id="0">
                                    <span class="detailFont" @click="zoomOut" data-id="0">圖片預覽 ( 點擊放大圖片 )</span>
                                </div>
                                <div class="zoom" @click="noZoom" data-id="0">
                                    <p>點擊任意位置結束。</p>
                                    <div>
                                        <img :src="pImgUrl[1]">
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label class="contentFont" for="draw">設計圖：</label>
                                <label for="draw" class="fileUpload detailFont" data-id="draw">上傳檔案</label>
                                <input type="file" id="draw" name="draw" class="fileUpload" required="required" @change="file3">
                                <br>
                                <span class="file contentFont">檔案名稱：</span>
                                <span class="file contentFont" id="drawName">{{pImgName[2]}}</span>
                                <div>
                                    <img :src="pImgUrl[2]" class="zoomOut" @click="zoomOut" data-id="1">
                                    <span class="detailFont" @click="zoomOut" data-id="1">圖片預覽 ( 點擊放大圖片 )</span>
                                </div>
                                <div class="zoom" @click="noZoom" data-id="1">
                                    <p>點擊任意位置結束。</p>
                                    <div>
                                        <img :src="pImgUrl[2]">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn">
                        <button type="button" class="backBtn contentFont">上一步</button>
                        <button type="button" class="contentFont viewThis">預覽投稿</button>
                        <button type="button" class="contentFont sureThis">送出投稿</button>
                    </div>
                </form>
                <form id="preview">
                    <div class="backGround">
                        <div class="clickVote">
                            <div class="close">
                                <i class="far fa-times-circle"></i>
                            </div>
                            <div>
                            </div>
                            <div class="content">
                                <div class="text">
                                    <p class="contentFont">
                                        # 參賽號碼：<span class="contentFont">A111111</span>
                                    </p>
                                    <p class="contentFont">
                                        # 得票數：<span class="contentFont">0票</span>
                                    </p>
                                    <p class="contentFont">
                                        # 參賽者：<span class="contentFont">李婷婷</span>
                                    </p>
                                    <p class="contentFont">
                                        # 作品種類：<span class="contentFont">{{selectType}}</span>
                                    </p>
                                    <p class="contentFont">
                                        # 作品名稱：<span class="contentFont">{{fName}}</span>
                                    </p>
                                    <p class="contentFont">
                                        # 創作理念：
                                        <p class="contentFont">{{fConcept}}</p>
                                    </p>
                                </div>
                                <div class="img">
                                    <img :src="pImgUrl[2]">
                                </div>
                            </div>
                            <div class="preViewBtn">
                                <p class="contentFont">投他一票</p>
                            </div>
                        </div>
                    </div>
                </form>
                <form class="lastP">
                    <p class="contentFont">恭喜您完成此次投稿!</p>
                    <a href="./product.html">
                        <h2 class="titleFont2">前往參觀其他作品</h2>
                        <h2 class="titleFont2">再次投稿</h2>
                    </a>
                </form>
            </div>
        </div>
        <!-- confirm燈箱 -->
        <div class="confirmDivC">
            <div>
                <p class="contentFont lineHeight"></p>
                <input type="button" class="detailFont" id="sureGoContest" value="確認">
                <input type="button" class="detailFont" id="notsureGoContest" value="取消">
            </div>
        </div>
    </div>
    <?php include("../lib/login/loginInclude.html"); ?>
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
    <script src="../lib/header/header.js"></script>
    <script src="../js/15/contest_nav_footer.js"></script>
    <script defer src="../js/15/contest_participate.js"></script>

</body>

</html>