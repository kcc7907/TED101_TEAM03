<?php
include("../php/connect.php");

//取得欲放置的檔案路徑
function getFilePath()
{
    //Web根目錄真實路徑
    $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
    return $ServerRoot . "/TED101_TEAM03/donotupload/contestWorkImg/pId/";
}

//先判斷圖片是否上傳成功?
if ($_FILES["file1"]["error"] > 0 || $_FILES["file2"]["error"] > 0 || $_FILES["file3"]["error"] > 0) {
    echo "上傳失敗";
} else {
    //欲放置的檔案路徑
    $file1 = $_FILES["file1"]["name"];
    $file2 = $_FILES["file2"]["name"];
    $file3 = $_FILES["file3"]["name"];

    //Server上的暫存檔路徑含檔名
    $filePath_Temp1 = $_FILES["file1"]["tmp_name"];
    $filePath_Temp2 = $_FILES["file2"]["tmp_name"];
    $filePath_Temp3 = $_FILES["file3"]["tmp_name"];

    //欲放置的檔案路徑
    $filePath1 = getFilePath() . $_FILES["file1"]["name"];
    $filePath2 = getFilePath() . $_FILES["file2"]["name"];
    $filePath3 = getFilePath() . $_FILES["file3"]["name"];
    // echo $filePath_Temp1;
    // echo $filePath1;
    // echo $filePath_Temp2;
    // echo $filePath2;
    // echo $filePath_Temp3;
    // echo $filePath3;

    $Array = array($filePath_Temp1 => $filePath1, $filePath_Temp2 => $filePath2, $filePath_Temp3 => $filePath3);
    // $pathTempArray = array($filePath_Temp1,$filePath_Temp2,$filePath_Temp3);
    // print_r($Array) ;

    foreach ($Array as $key => $value) {
        echo "Array: $key, $value";
        //將暫存檔搬移到正確位置
        if (copy($key, $value)) {
            //建立SQL
            $sql = "INSERT INTO `team03`.`WORK` (`WK_ID`, `WK_SESSION`, `WK_SPECIES`, `WK_NAME`, `WK_CONCEPT`, `WK_IMG`, `WK_VOTES`, `WK_STATUS`, `WK_DATE`) VALUES (`WK_ID`, 2, ?, `?`, `?`, `?`, 0, `審核中`, NOW());";

            //執行
            $statement = $pdo->prepare($sql);

            //給值
            $statement->bindValue(1, $_FILES["file1"]["name"]);
            $statement->execute();
        } else {
            echo "拷貝/移動上傳圖片失敗";
        }
    };
}
