<?php

    include("jk_link.php");

    if(isset($_COOKIE["loging"])){
        $user = $_COOKIE["loging"];
    }else{
        $user = '';
    }

    $work = $_POST["work"];

    //作品詳細資訊
    $sql = "SELECT * from `work` w
    join 
    (select * from `member`
    join `contestant` on MEM_ID = CT_MEMBER_ID) m
    on m.CT_WORK_ID = w.WK_ID
    where WK_ID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, "$work");    
    $statement->execute();
    $data = $statement->fetchAll();
    //

    //投票判斷
    $sql_voted = "SELECT MEM_VOTED from `member` where MEM_ID = ?";
    $statement_voted = $pdo->prepare($sql_voted);
    $statement_voted->bindValue(1, "$user");    
    $statement_voted->execute();
    $data_voted = $statement_voted->fetchAll();
    $voted = $data_voted[0]["MEM_VOTED"];
    //

    foreach($data as $index => $row){

?>

<?=
'
<div class="clickVote">
    <div class="close">
        <i class="far fa-times-circle"></i>
    </div>
    <div class="content">
        <div class="text">
            <p>
                # 參賽號碼：<span>'?><?=$row["WK_ID"]?><?='</span>
            </p>
            <p>
                # 得票數：<span>'?><?=$row["WK_VOTES"]?><?=' 票</span>
                <input type="hidden" value="'?><?=$row["WK_VOTES"]?><?='">
            </p>
            <p>
                # 參賽者：<span>'?><?=$row["MEM_NAME"]?><?='</span>
            </p>
            <p>
                # 作品種類：<span>'?><?=$row["WK_SPECIES"]?><?='</span>
            </p>
            <p>
                # 作品名稱：<span>'?><?=$row["WK_NAME"]?><?='</span>
            </p>
            <p>
                # 創作理念：
                <p>'?><?=$row["WK_CONCEPT"]?><?='</p>
            </p>
        </div>

        <div class="img">
            <img src="'?><?=$row["WK_DRAW"]?><?='">
        </div>

    </div>

    <div class="btn">
    
    '?>

    <?php
        if($voted == 0){
            echo '<button>投他一票</button>';

        }else{
            echo '<button class="voted" disabled>您已投票</button>';
        }
    
    ?>
    <?='
    </div>
    
</div>

'?>

<?php
    }
?>