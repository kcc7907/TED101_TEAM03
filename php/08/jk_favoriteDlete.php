<?php
    include("jk_link.php");    

    $item = $_POST["removeItem"];
    
    $sql = "DELETE FROM favorite where MEMBER_ID = ? and PRODUCT_ID = ?";   //移除收藏項目
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, "$user");
    $statement->bindValue(2, "$item");
    $statement->execute();

?>