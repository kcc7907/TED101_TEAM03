<?php

    include("jk_link.php");

    

    $sql = "UPDATE `work` set WK_VOTES = ? where WK_ID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, "$voteNum");    
    $statement->bindValue(2, "$voteId"); 
    $statement->execute();

    

?>