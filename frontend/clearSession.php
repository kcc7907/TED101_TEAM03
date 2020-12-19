<?php
    session_start();
    if($_POST['check'] == 1){
        session_destroy();
    };
?>