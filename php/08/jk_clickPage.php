<?php

    include("jk_link.php");

    $page = isset($_POST["page"]) ? $_POST["page"] : 1;

    $sql = "SELECT * from `work` w
    join 
    (select * from `member`
    join `contestant` on MEM_ID = CT_MEMBER_ID) m
    on m.CT_WORK_ID = w.WK_ID";
    $statement = $pdo->prepare($sql);     
    $statement->execute();
    $data = $statement->fetchAll();

    foreach ($data as $i => $row) {
        if($i < $page * 8 && $i >= $page * 8 - 8){


        echo '<div class="work">';
            echo '<div class="img '.$row["WK_ID"].'" data-id="'.$row["WK_ID"].'">';
            echo '<img src="'.$row["WK_IMG"].'">';
            echo '<div class="get_num">得票數: <span>'.$row["WK_VOTES"].'</span></div>';                     
        echo '</div>
                <p>
                <span>參賽號碼:<span>'.$row["WK_ID"].'</span></span>';
        echo '<span>作品名稱:<span>'.$row["WK_NAME"].'</span></span>';
        echo '<span>參賽者:<span>'.$row["MEM_NAME"].'</span></span>             
            </p>
        </div>';

        }

    }
    
?>