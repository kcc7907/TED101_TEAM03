<?php
include("../php/connect.php");

//取得欲放置的檔案路徑
function getFilePath()
{
    //Web根目錄真實路徑
    $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
    return $ServerRoot . "/TED101_TEAM03/img/contestWorkImg/";
}

//先判斷圖片是否上傳成功?
if ($_FILES["file1"]["error"] > 0 || $_FILES["file2"]["error"] > 0 || $_FILES["file3"]["error"] > 0) {
    echo "上傳失敗";
} else {
    // MEMBER
    $now = date_create('now', new DateTimeZone('Asia/Taipei'));
    $format = date_format($now, 'YmdHis');
    $date = substr($format, 7 , 6 );

    $contestant = $_POST['contestant'];

    $sql = "SELECT MEM_ID, MEM_NAME FROM MEMBER WHERE BINARY MEM_ID = ?";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $contestant);
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);



    // SELECT & INPUT & TEXTAREA
    $pIdNum = $_POST['pIdNum'];
    $type = $_POST['type'];
    $name = $_POST["name"];
    $concept = $_POST["concept"];

    if ($type == '沙發') {
        $workID = "S" . $date;
    } else if ($type == '桌子') {
        $workID = "D" . $date;
    } else if ($type == '床') {
        $workID = "B" . $date;
    } else if ($type == '椅子') {
        $workID = "C" . $date;
    } else if ($type == '書櫃') {
        $workID = "B" . $date;
    }


    // FILE檔案名稱
    $file1 = $_FILES["file1"]["name"];
    $file2 = $_FILES["file2"]["name"];
    $file3 = $_FILES["file3"]["name"];


    // FILE在Server上的暫存檔路徑含檔名
    $filePath_Temp1 = $_FILES["file1"]["tmp_name"];
    $filePath_Temp2 = $_FILES["file2"]["tmp_name"];
    $filePath_Temp3 = $_FILES["file3"]["tmp_name"];



    // FILE欲搬移的正確位置


    $filePath1 = "pId/" . $data[0]['MEM_ID'] . $date . $file1;
    $filePath2 = "draft/" . $data[0]['MEM_ID'] . $date . $file2;
    $filePath3 = "draw/" . $data[0]['MEM_ID'] . $date . $file3;

    $Array = array($filePath_Temp1 => getFilePath() . $filePath1, $filePath_Temp2 => getFilePath() . $filePath2, $filePath_Temp3 => getFilePath() . $filePath3);

    // 資料庫儲存的檔案路徑
    $usePath1 = '../img/contestWorkImg/' . $filePath1;
    $usePath2 = '../img/contestWorkImg/' . $filePath2;
    $usePath3 = '../img/contestWorkImg/' . $filePath3;

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
        $sql = "INSERT INTO `WORK` (`WK_ID`, `WK_SESSION`, `WK_SPECIES`, `WK_NAME`, `WK_CONCEPT`, `WK_DRAFT`, `WK_DRAW`, `WK_VOTES`, `WK_STATUS`, `WK_DATE`) VALUES (?, 2, ?, ?, ?, ?, ?, 0, '待收件', NOW());";
        // 執行
        $statement = $pdo->prepare($sql);

        // 給值
        $statement->bindValue(1, $workID);
        $statement->bindValue(2, $type);
        $statement->bindValue(3, $name);
        $statement->bindValue(4, $concept);
        $statement->bindValue(5, $usePath2);
        $statement->bindValue(6, $usePath3);
        $statement->execute();

        // 建立SQL
        $sql = "INSERT INTO `CONTESTANT` (`CT_WORK_ID`, `CT_PERSONAL_ID`, `CT_IMG_FRONT`, `CT_MEMBER_ID`) VALUES (?, ?, ?, ?);";
        // 執行
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $workID);
        $statement->bindValue(2, $pIdNum);
        $statement->bindValue(3, $usePath1);
        $statement->bindValue(4, $data[0]['MEM_ID']);
        $statement->execute();
        echo  $workID .  $type . $name . $usePath2 . $usePath3 . $pIdNum  . $usePath1 . $data[0]['MEM_ID'];
    }
}
