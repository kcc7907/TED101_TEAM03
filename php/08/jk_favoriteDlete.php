<?php
    include("jk_link.php");

    $user = "A111200001";   //測試帳號
    $item = $_POST["removeItem"];
    
    $sql = "DELETE FROM favorite where MEMBER_ID = ? and PRODUCT_ID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, "$user");
    $statement->bindValue(2, "$item");
    $statement->execute();

?>