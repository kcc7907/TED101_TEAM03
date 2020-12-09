<?php

    include("jk_link.php");

    // $page = $_POST["page"];

    $sql = "SELECT * from `work` w
    join 
    (select * from `member`
    join `contestant` on MEM_ID = CT_MEMBER_ID) m
    on m.CT_WORK_ID = w.WK_ID";
    $statement = $pdo->prepare($sql);     
    $statement->execute();
    $data = $statement->fetchAll();

    foreach ($data as $i => $row) {
?>
<?='
        <div class="work">
            <div class="img '?><?=$row["WK_ID"]?><?='" data-id="'?><?=$row["WK_ID"]?><?='">
                <img src="'?><?=$row["WK_IMG"]?><?='">
                <div class="get_num">得票數: <span>'?><?=$row["WK_VOTES"]?><?='</span></div>                         
            </div>
            <p>
                <span>參賽號碼:<span>'?><?=$row["WK_ID"]?><?='</span></span>
                <span>作品名稱:<span>'?><?=$row["WK_NAME"]?><?='</span></span>
                <span>參賽者:<span>'?><?=$row["MEM_NAME"]?><?='</span></span>                
            </p>
        </div>
'?>

<?php
    }
    
?>