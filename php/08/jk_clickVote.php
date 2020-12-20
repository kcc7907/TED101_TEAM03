<?php

    include("jk_link.php");

    $voteId = $_POST["voteId"];
    $voteNum = $_POST["voteNum"] + 1;

    //更新投票數
    $sql = "UPDATE `work` set WK_VOTES = ? where WK_ID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, "$voteNum");    
    $statement->bindValue(2, "$voteId"); 
    $statement->execute();

    //更新會員投票狀態
    $sql_voted = "UPDATE `member` set MEM_VOTED = 1 where MEM_ID = ?";
    $statement_voted = $pdo->prepare($sql_voted);
    $statement_voted->bindValue(1, "$user");    
    $statement_voted->execute();

    echo $voteNum;

?>

