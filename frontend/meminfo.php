<?php    

    include("../php/08/jk_link.php");

    $sql = "SELECT * FROM member WHERE MEM_ID =?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, "$user");
    $statement->execute();
    $data = $statement->fetchAll();

    $account = $data[0]["MEM_ID"];
    $name = $data[0]["MEM_NAME"];
    $phone = $data[0]["MEM_PHONE"];
    $email = $data[0]["MEM_EMAIL"];
    $city = $data[0]["MEM_CITY"];
    $address = $data[0]["MEM_ADDRESS"];
    

?>

<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>救世宅 | 會員中心</title>
    
    <link rel="Shortcut Icon" href="img/favicon.ico">
    <link rel="stylesheet" href="../lib/reset.css">
    <link rel="stylesheet" href="../css/meminfo.css">
    <link rel="stylesheet" href="../css/header.css">
    
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">

    <script src="../lib/js/vue.js"></script>
    <script src="../js/08/is.min.js"></script>
    <script src="../lib/js/jquery.js"></script>
    <script src="../js/08/meminfo.js"></script>

    
    
    <link rel="stylesheet" href="../css/logSign.css">
    <script src="../lib/login/lazy-line-painter-1.9.6.min.js"></script>
    <script defer src="../lib/login/logSign.js"></script>



</head>

<body>
    
    <?php
    include ('../lib/header/header_Include.html');
    include("../lib/login/loginInclude.html");
    ?>
    
    <div class="jk_meminfo">        
        
        <!-- 修改提示 -->
        <div id="jk_point">
            <p>已成功修改會員資料</p>
        </div>

        <div class="container">
            <div class="sideMenu">
                <ul>
                    <li class="-on"><a href="meminfo.php"><i class="fas fa-user"></i><span class="computer">帳戶資料</span><span class="rwd">帳戶</span></a></li>
                    <li><a href="favorite.php"><i class="fas fa-folder-open"></i><span class="computer">我的收藏</span><span class="rwd">收藏</span></a></li>
                    <li><a href="order.php"><i class="fas fa-clipboard-list"></i><span class="computer">訂單查詢</span><span class="rwd">訂單</span></a></li>
                    <li><a href="notice.php"><i class="fas fa-bullhorn"></i><span class="computer">通知總覽</span><span class="rwd">通知</span></a></li>
                </ul>
            </div>


            <main>
                <form id="memberInfo" action="../php/08/jk_resetInfo.php" method="post">

                    <div>
                        <div>
                            <label for="account">帳號</label>
                        </div>
                        <input type="text" id="account" name="account" value="<?=$account?>" disabled>
                    </div>

                    <div>
                        <div>
                            <label for="email">信箱</label>
                            <span class="email">修改</span>
                        </div>
                        <input class="input" type="email" id="email" name="email" value="<?=$email?>" disabled>
                    </div>

                    <div>
                        <div>
                            <label for="phone">手機</label>
                            <span class="phone">修改</span>
                        </div>
                        <input class="input" type="text" id="phone" name="phone" value="<?=$phone?>" disabled>
                    </div>

                    <div>
                        <div>
                            <label for="name">姓名</label>
                            <span class="name">修改</span>
                        </div>
                        <input class="input" type="text" id="name" name="name" value="<?=$name?>" disabled>
                    </div>

                    <div id="vueScope">
                        <div>
                            <label for="address">地址</label>
                            <span class="address">修改</span>
                        </div>
                        <select name="city" v-model="city" disabled>
                            <option disabled>居住縣市</option>
                            <option v-for="city in citys">{{city}}</option>
                        </select>
                        <input class="input" type="text" id="address" name="address" value="<?=$address?>" disabled>
                    </div>

                    <div>
                        <div>
                            <label for="password">密碼
                                <span class="pwd_warn">密碼長度限制6~12字元</span>
                            </label>
                            <span class="btn_pwd">修改</span>
                        </div>
                        
                        <input type="text" id="password" value="************" disabled>

                        <div id="changePassword">                
                            <input class="input" type="password" id="oldPassword" name="oldPassword" maxlength="12" minlength="6" placeholder="輸入舊密碼" value="123456789" disabled>
                            <input class="input" type="password" id="newPassword" name="newPassword" maxlength="12" minlength="6" placeholder="輸入新密碼" value="123456789" disabled>
                            <input class="input" type="password" id="checkPassword" maxlength="12" minlength="6" placeholder="確認新密碼" value="123456789" disabled>
                        </div>
                    </div>

                    <div id="btn">
                        <input type="submit" value="儲存">
                        <input type="reset" value="取消">
                    </div>
                </form>
            </main>
        </div>
    </div>

    <script>     
        new Vue({
            el: '#vueScope',     
            data: {
                city: '<?=$city?>',
                citys: ['台北市', '新北市', '基隆市', '桃園市', '新竹市', '新竹縣', '苗栗縣','台中市','彰化縣','南投縣','雲林縣','嘉義市','嘉義縣','台南市','高雄市','屏東縣','宜蘭縣','花蓮縣','台東縣'],
            },
        });
    </script>
    
    <script src="../lib/header/header.js"></script>

</body>
</html>