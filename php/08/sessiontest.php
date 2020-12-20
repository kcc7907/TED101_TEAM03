<?php

    include("jk_link.php");

    

    $sql = "UPDATE `work` set WK_VOTES = ? where WK_ID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, "$voteNum");    
    $statement->bindValue(2, "$voteId"); 
    $statement->execute();

    

?>

<?php
        if(!isset($_SESSION)){
            session_start();
            if($_SESSION["vote"] == "voted"){
                echo '<button disabled>投他一票</button>';
            }else{
                echo '<button>投他一票</button>';
            }
        }else{
            if($_SESSION["vote"] == "voted"){
                echo '<button disabled>投他一票</button>';
            }else{
                echo '<button>投他一票</button>';
            }
        }  
    ?>