<?php
    include("../php/connect.php");

    //取得欲放置的檔案路徑
    function getFilePath()
    {
        //Web根目錄真實路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
        return $ServerRoot . "/TED101_TEAM03/img/contestWorkImg/";
    }
    $now = date_create('now', new DateTimeZone('Asia/Taipei'));
    $date = date_format($now, 'YmdHis');

    // TEXT
    $newPIdNum = $_POST['newPIdNum'];
    $newStatus = $_POST['newStatus'];
    $WK_ID = $_POST['WK_ID'];
    $MEM_ID = $_POST['MEM_ID'];

    if(isset($_FILES["newFile1"])){
        $new_file1 = $_FILES["newFile1"]["name"];
        $new_filePath_Temp1 = $_FILES["newFile1"]["tmp_name"];
        $new_filePath1 = "pId/" . $MEM_ID . $date . $new_file1;
        $new_usePath1 = '../img/contestWorkImg/' . $new_filePath1;
        if (copy($new_filePath_Temp1 , getFilePath() . $new_filePath1)) {
            $checkN = 1;
        } else {
            echo "拷貝/移動上傳圖片失敗";
        }

        if ($checkN == 1) {
            $sql = "UPDATE `team03`.`CONTESTANT` SET `CT_PERSONAL_ID` = ?, `CT_IMG_FRONT` = ? WHERE (`CT_WORK_ID` = ?) and (`CT_MEMBER_ID` = ?);";
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1, $newPIdNum);
            $statement->bindValue(2, $new_usePath1);
            $statement->bindValue(3, $WK_ID);
            $statement->bindValue(4, $MEM_ID);
            $statement->execute();
        }else {
            echo "保存成功。";
            echo $newPIdNum;
        }
    }else if(isset($_POST['newFile2'])){
        $newFile2 = $_POST['newFile2'];
        $sql = "UPDATE `team03`.`CONTESTANT` SET `CT_PERSONAL_ID` = ?, `CT_IMG_FRONT` = ? WHERE (`CT_WORK_ID` = ?) and (`CT_MEMBER_ID` = ?);";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $newPIdNum);
        $statement->bindValue(2, $newFile2);
        $statement->bindValue(3, $WK_ID);
        $statement->bindValue(4, $MEM_ID);
        $statement->execute();
    }

    if(isset($_FILES["newFile3"])){
        $new_file3 = $_FILES["newFile3"]["name"];
        $new_filePath_Temp3 = $_FILES["newFile3"]["tmp_name"];
        $new_filePath3 = "draft/" . $MEM_ID . $date . $new_file3;
        $new_usePath3 = '../img/contestWorkImg/' . $new_filePath3;
        if (copy($new_filePath_Temp3 , getFilePath() . $new_filePath3)) {
            $checkN = 1;
        } else {
            echo "拷貝/移動上傳圖片失敗";
        }

        if ($checkN == 1) {
            $sql = "UPDATE `team03`.`WORK` SET `WK_DRAFT` = ? WHERE (`WK_ID` = ?);";
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1, $new_usePath3 );
            $statement->bindValue(2, $WK_ID);
            $statement->execute();
        }else {
            echo "保存成功。";
        }
    }else if(isset($_POST['newFile4'])){
        $newFile2 = $_POST['newFile2'];
        $sql = "UPDATE `team03`.`WORK` SET `WK_DRAFT` = ? WHERE (`WK_ID` = ?);";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $newFile2);
        $statement->bindValue(2, $WK_ID);
        $statement->execute();
    }

    if(isset($_FILES["newFile5"])){
        $new_file5 = $_FILES["newFile5"]["name"];
        $new_filePath_Temp5 = $_FILES["newFile5"]["tmp_name"];
        $new_filePath5 = "draw/" . $MEM_ID . $date . $new_file5;
        $new_usePath5 = '../img/contestWorkImg/' . $new_filePath5;
        if (copy($new_filePath_Temp5 , getFilePath() . $new_filePath5)) {
            $checkN = 1;
        } else {
            echo "拷貝/移動上傳圖片失敗";
        }

        if ($checkN == 1) {
            $sql = "UPDATE `team03`.`WORK` SET `WK_DRAW` = ? WHERE (`WK_ID` = ?);";
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1, $new_usePath5);
            $statement->bindValue(2, $WK_ID);
            $statement->execute();
        }else {
            echo "保存成功。";
        }
    }else if(isset($_POST['newFile6'])){
        $newFile6 = $_POST['newFile6'];
        $sql = "UPDATE `team03`.`WORK` SET `WK_DRAW` = ? WHERE (`WK_ID` = ?);";
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $newFile6);
        $statement->bindValue(2, $WK_ID);
        $statement->execute();
    }

    $sql = "UPDATE `team03`.`WORK` SET `WK_STATUS` = ? WHERE (`WK_ID` = ?);";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $newStatus);
    $statement->bindValue(2, $WK_ID);
    $statement->execute();

    
?>