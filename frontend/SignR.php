<?php
    include("../php/utilClassJH.php");
    $Util = new UtilClass();

    //建立SQL
    $sql = "INSERT INTO MEMBER(MEM_ID, MEM_PWD, MEM_NAME, MEM_PHONE, MEM_EMAIL, MEM_CITY, MEM_ADDRESS, MEM_DATE) VALUES (?,?,?,?,?,?,?,NOW())";

    //執行
    $statement = $Util->getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $_POST["memAccount"]);
    $statement->bindValue(2, $_POST["memPwd"]);
    $statement->bindValue(3, $_POST["memName"]);
    $statement->bindValue(4, $_POST["memPhone"]);
    $statement->bindValue(5, $_POST["memEmail"]);
    $statement->bindValue(6, $_POST["memCity"]);
    $statement->bindValue(7, $_POST["memAddress"]);

    $statement->execute();

    echo "<script>alert('加入成功，請重新登入!'); location.href = 'home2D.php';</script>"; 
?>