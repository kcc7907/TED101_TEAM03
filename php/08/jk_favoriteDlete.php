<?php
    include("jk_link.php");   
    
    if(isset($_COOKIE["loging"])){
        $user = $_COOKIE["loging"];
    }else{
        echo "<script>location.href = 'home2D.php';</script>";
    }

    $item = $_POST["removeItem"];
    
    $sql = "DELETE FROM FAVORITE where MEMBER_ID = ? and PRODUCT_ID = ?";   //移除收藏項目
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, "$user");
    $statement->bindValue(2, "$item");
    $statement->execute();

?>