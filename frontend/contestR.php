<?php
    include("../php/connect.php");

    //取得欲放置的檔案路徑
    function getFilePath(){
        //Web根目錄真實路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
        return $ServerRoot."/TED101_TEAM03/donotupload/contestWorkImg/pId/";
    }

    //先判斷圖片是否上傳成功?
    if($_FILES["file"]["error"] > 0){
        echo "上傳失敗: 錯誤代碼".$_FILES["file"]["error"];
    }else{
        //Server上的暫存檔路徑含檔名
        $filePath_Temp = $_FILES["file"]["tmp_name"];

        //欲放置的檔案路徑
        $filePath = getFilePath().$_FILES["file"]["name"];
        echo $filePath_Temp;
        echo $filePath;
        //將暫存檔搬移到正確位置
        if(copy($filePath_Temp, $filePath)){

            //取得POST過來的值
            // $CateID = $_POST["Category"]; //分類ID
            // $ProductName = $_POST["ProductName"]; //商品名稱
            // $Price = $_POST["Price"];   //售價
            // $Status = $_POST["Status"];   //狀態 0:刪除, 1:下架, 2:上架

            //建立SQL
            // $sql = "INSERT INTO ec_products(CateID, ProductName, Price, Status, PictureName, CreateDate) VALUES (?,?,?,?,?,NOW())";
            $sql = "INSERT INTO `team03`.`WORK` (`WK_ID`, `WK_SESSION`, `WK_SPECIES`, `WK_NAME`, `WK_CONCEPT`, `WK_IMG`, `WK_VOTES`, `WK_STATUS`, `WK_DATE`) VALUES (`WK_ID`, 2, ?, `?`, `?`, `?`, 0, `審核中`, NOW());";

            //執行
            $statement = $pdo->prepare($sql);

            //給值
            $statement->bindValue(1 , $_FILES["file"]["name"]);             
            $statement->execute();

            //導頁
            //header("Location: Index.php");
            echo "<script>alert('新增成功!'); location.href = 'Product.php';</script>";
        }else{
            echo "拷貝/移動上傳圖片失敗";
        }
    }

    // $statement = $pdo -> prepare($sql);
    // $statement->bindValue();
