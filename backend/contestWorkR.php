<?php
    include("../php/connect.php");
    $sql="SELECT t.WK_SESSION, m.MEM_ID, m.MEM_NAME, t.WK_ID, t.CT_PERSONAL_ID, t.CT_IMG_FRONT, t.WK_NAME, t.WK_CONCEPT, t.WK_IMG, t.WK_VOTES, t.WK_STATUS, t.WK_DATE FROM `MEMBER` m JOIN (SELECT * FROM CONTESTANT c JOIN WORK w ON c.CT_WORK_ID = w.WK_ID) t ON m.MEM_ID = t.CT_MEMBER_ID;";


    $statement = $pdo->prepare($sql);
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    // print_r($data);

    foreach($data as $index => $value){
        print_r($value)."<br>";
    }
?>