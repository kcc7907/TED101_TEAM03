<?php

    include("jk_link.php");

    $sql = "SELECT WK_ID from `work`";
    $statement = $pdo->prepare($sql);     
    $statement->execute();
    $data = $statement->fetchAll();

    $works = [];
    foreach ($data as $i => $value) {
        array_push($works, $value["WK_ID"]);
    }
    $itemCount = count($works);
    $thePage = ceil($itemCount / 8);

    for($i = 0; $i < $thePage; $i++):
        if($i == 0):
        echo '<span class="page -on">1</span>';
        else:
        echo '<span class="page">'.($i + 1).'</span>';
        endif;
    endfor;
?>