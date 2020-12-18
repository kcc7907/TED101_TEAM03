<?php
include("../php/connect.php");

//取得欲放置的檔案路徑
function getFilePath()
{
    //Web根目錄真實路徑
    $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
    return $ServerRoot . "/TED101_TEAM03/donotupload/contestWorkImg/";
}

//先判斷圖片是否上傳成功?
if ($_FILES["file1"]["error"] > 0 || $_FILES["file2"]["error"] > 0 || $_FILES["file3"]["error"] > 0) {
    echo "上傳失敗";
} else {
    // MEMBER
    $contestant = $_POST['contestant'];

    $sql="SELECT MEM_ID, MEM_NAME FROM MEMBER WHERE BINARY MEM_ID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $contestant);
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    // print_r($data);



    // SELECT & INPUT & TEXTAREA
    // $type = trim($_POST['type'], "<br>");
    $pIdNum = $_POST['pIdNum'];
    $type = $_POST['type'];
    $name = $_POST["name"];
    $concept = $_POST["concept"];

    // FILE檔案名稱
    $file1 = $_FILES["file1"]["name"];
    $file2 = $_FILES["file2"]["name"];
    $file3 = $_FILES["file3"]["name"];


    // FILE在Server上的暫存檔路徑含檔名
    $filePath_Temp1 = $_FILES["file1"]["tmp_name"];
    $filePath_Temp2 = $_FILES["file2"]["tmp_name"];
    $filePath_Temp3 = $_FILES["file3"]["tmp_name"];

    $now = date_create('now', new DateTimeZone('Asia/Taipei'));
    $date = date_format($now, 'YmdHis');

    // FILE欲搬移的正確位置
    $filePath1 = "pId/" . $data[0]['MEM_ID'] . $date . $file1;
    $filePath2 = "draft/" . $data[0]['MEM_ID'] . $date . $file2;
    $filePath3 = "draw/" . $data[0]['MEM_ID'] . $date . $file3;

    $Array = array($filePath_Temp1 => getFilePath() . $filePath1, $filePath_Temp2 => getFilePath() . $filePath2, $filePath_Temp3 => getFilePath() . $filePath3);

    // 資料庫儲存的檔案路徑
    $usePath1 = '../donotupload/contestWorkImg/' . $filePath1;
    $usePath2 = '../donotupload/contestWorkImg/' . $filePath2;
    $usePath3 = '../donotupload/contestWorkImg/' . $filePath3;

    // 確認暫存檔搬移到正確位置
    foreach ($Array as $key => $value) {
        $checkN = 0;
        if (copy($key, $value)) {
            $checkN = 1;
        } else {
            echo "拷貝/移動上傳圖片失敗";
        }
    };
    



    if ($checkN == 1) {
        // 建立SQL
        $sql = "INSERT INTO `WORK` (`WK_ID`, `WK_SESSION`, `WK_SPECIES`, `WK_NAME`, `WK_CONCEPT`, `WK_DRAFT`, `WK_DRAW`, `WK_VOTES`, `WK_STATUS`, `WK_DATE`) VALUES (NOW(), 2, ?, ?, ?, ?, ?, 0, '待收件', NOW());";
        // 執行
        $statement = $pdo->prepare($sql);

        // 給值
        $statement->bindValue(1, $type);
        $statement->bindValue(2, $name);
        $statement->bindValue(3, $concept);
        $statement->bindValue(4, $usePath2);
        $statement->bindValue(5, $usePath3);
        $statement->execute();

        echo $type.$name.$concept.$usePath2.$usePath3;

        // 建立SQL
        $sql = "INSERT INTO `CONTESTANT` (`CT_WORK_ID`, `CT_PERSONAL_ID`, `CT_IMG_FRONT`, `CT_MEMBER_ID`) VALUES (NOW(), ?, ?, ?);";
        // 執行
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $pIdNum);
        $statement->bindValue(2, $usePath1);
        $statement->bindValue(3, $data[0]['MEM_ID']);
        $statement->execute();

        echo $type . $name . '<br>' . $concept . '<br>' . $usePath2 . '<br>' . $usePath3 . '<br>';
    } else {
        echo "拷貝/移動上傳圖片失敗";
    }
}
