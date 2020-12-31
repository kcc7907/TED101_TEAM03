<?php
    include("../connect.php");

    //取得欲放置的檔案路徑
    function getFilePath()
    {
        //Web根目錄真實路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
        return $ServerRoot . "/TED101_TEAM03/img/interiordesign/";
        // return $ServerRoot . "../img/interiordesign/";
    }

    //先判斷圖片是否上傳成功?
    if ($_FILES["newImg"]["error"] > 0) {
        echo "上傳失敗";
    } else {
        $file = $_FILES["newImg"]["name"];
        $filePath_Temp = $_FILES["newImg"]["tmp_name"];
        $filePath = "../../img/interiordesign/office/example/ninestars/" . $file;
        $usePath = '../img/interiordesign/office/example/ninestars/' . $file;

        if (copy($filePath_Temp, $filePath)) {
            $case_num = $_POST['case_num'];
            $case_region = $_POST['case_region'];
            $case_name = $_POST['case_name'];
            // $case_date = $_POST['case_date'];
            $case_type = $_POST['case_type'];
            $sql="INSERT INTO `CASE` (`CASE_ID`,`CASE_IMG`, `CASE_INTRO`, `CASE_DATE`, `CASE_TYPE`, `CASE_NAME`) VALUES (?,?,?, NOW(),?,?)";
            // [case_num] => 11
            // [case_name] => 33
            // [case_date] => 44
            // [case_type] => 居家住宅
            // [case_path] => 55
            // [case_intro] => 22
            
            
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1,$case_num);
            $statement->bindValue(2,$usePath);
            $statement->bindValue(3,$case_region);
            $statement->bindValue(4,$case_type);
            $statement->bindValue(5,$case_name);
            $statement->execute();
        }
         
        else 
        {
            echo "拷貝/移動上傳圖片失敗";
        }
    }

?>