<?php
include("../php/connect.php");
include("./contestDetailR.php");


$Contest = new contestClass();
$type = $Contest -> getfType();
$name = $Contest -> getfName();
$concept = $Contest -> getfConcept();
echo $type . $name . $concept;


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

    
    $Array = array($filePath_Temp1 => $file1, $filePath_Temp2 => $file2, $filePath_Temp3 => $file3);
    
    foreach ($Array as $key => $value) {
        //欲放置的檔案路徑
        $filePath = getFilePath() . $value;
        //將暫存檔搬移到正確位置
        if (copy($key, $filePath)) {
            // 建立SQL
            // $sql = "INSERT INTO `team03`.`WORK` (`WK_ID`, `WK_SESSION`, `WK_SPECIES`, `WK_NAME`, `WK_CONCEPT`, `WK_IMG`, `WK_VOTES`, `WK_STATUS`, `WK_DATE`) VALUES (NOW(), 2, `?`, `?`, `?`, ?, 0, `審核中`, NOW());";

            // // 執行
            // $statement = $pdo->prepare($sql);

            // //給值
            // // $statement->bindValue(1, $fType);
            // // $statement->bindValue(2, $fName);
            // // $statement->bindValue(3, $fConcept);
            // // $statement->bindValue(4, $value);
            // $statement->bindValue(1, $value);
            // $statement->execute();
        } else {
            echo "拷貝/移動上傳圖片失敗";
        }
    };
}
