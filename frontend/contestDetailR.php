<?php
include("../php/connect.php");
    class contestClass{
        // 建立SQL
        // $sql = "INSERT INTO `team03`.`WORK` (`WK_ID`, `WK_SESSION`, `WK_SPECIES`, `WK_NAME`, `WK_CONCEPT`, `WK_IMG``WK_VOTES`, `WK_STATUS`, `WK_DATE`) VALUES (time(), 2, ?, ?, ?, ?, 0, `審核中`, NOW());";
    
        // // 執行
        // $statement = $pdo->prepare($sql);
        function getfType(){
            $fType = $_POST["fType"];
            return $fType ;
        }
        function getfName(){
            $fName = $_POST["fName"];
            return $fName;
        }
        function getfConcept(){
            $fConcept = $_POST["fConcept"];
            return $fConcept;
        }
    
    }



