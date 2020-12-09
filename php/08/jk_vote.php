<?php

    include("jk_link.php");

    $work = $_POST["work"];

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

    foreach($data as $index => $row){

?>

<?=
'<div class="text">
    <p>
        # 參賽號碼：<span>'?><?=$row["WK_ID"]?><?='</span>
    </p>
    <p>
        # 得票數：<span>'?><?=$row["WK_VOTES"]?><?=' 票</span>
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
    <img src='?><?=$row["WK_IMG"]?><?='>
</div>'?>

<?php
    }
?>