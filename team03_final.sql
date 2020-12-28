-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2020-12-28 06:15:56
-- 伺服器版本： 8.0.21
-- PHP 版本： 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `team03`
--
CREATE DATABASE IF NOT EXISTS `team03` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `team03`;

-- --------------------------------------------------------

--
-- 資料表結構 `CASE`
--

CREATE TABLE `CASE` (
  `CASE_ID` int NOT NULL,
  `CASE_IMG` varchar(255) NOT NULL,
  `CASE_INTRO` varchar(45) NOT NULL,
  `CASE_DATE` varchar(45) NOT NULL,
  `CASE_TYPE` varchar(100) NOT NULL,
  `CASE_NAME` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `CASE`
--

INSERT INTO `CASE` (`CASE_ID`, `CASE_IMG`, `CASE_INTRO`, `CASE_DATE`, `CASE_TYPE`, `CASE_NAME`) VALUES
(1, '../img/interiordesign/home/example/chang/C1569288448525.jpg', '信義', '2020-12-13 18:47:29', '居家住宅', '徐公館'),
(2, '../img/interiordesign/home/example/chu bai/C1569288448566.jpg', '北投', '2020-12-12 09:10:18', '居家住宅', '李公館'),
(3, '../img/interiordesign/home/example/dan chang/C1569228045371.jpg', '南港', '2020-12-12 09:11:01', '居家住宅', '王公館'),
(4, '../img/interiordesign/home/example/fu/C1569288448905.jpg', '松山', '2020-12-12 09:09:20', '居家住宅', '林公館'),
(5, '../img/interiordesign/home/example/lin/C1582619597131.jpg', '文山', '2020-12-12 09:09:23', '居家住宅', '何公館'),
(6, '../img/interiordesign/home/example/yo/C1569288522107.jpg', '內湖', '2020-12-12 09:09:25', '居家住宅', '黃公館'),
(7, '../img/interiordesign/home/example/kuo/C1594346104631.jpg', '中正', '2020-12-12 09:09:26', '居家住宅', '紀公館'),
(8, '../img/interiordesign/home/example/rezo/1493275936.jpg', '大安', '2020-12-12 09:09:27', '居家住宅', '侯公館'),
(9, '../img/interiordesign/home/example/yang/C1569225124301.jpg', '中山', '2020-12-12 09:09:29', '居家住宅', '鄭公館'),
(10, '../img/interiordesign/commercial/style/2820051-637309422263006530-16x9.jpg', '台北', '2020-12-12 09:09:32', '商業空間', 'Brun不然'),
(11, '../img/interiordesign/commercial/style/page__zh_tw_15905651050.jpeg', '首爾', '2020-12-12 09:37:03', '商業空間', 'Sanet lind'),
(12, '../img/interiordesign/commercial/style/zip-1.jpg', '紐約', '2020-12-12 09:37:19', '商業空間', 'Nsoe Sden'),
(13, '../img/interiordesign/commercial/example/jpg/commercial-7.jpg', '曼谷', '2020-12-12 09:37:22', '商業空間', 'Ihoeb Wgd'),
(14, '../img/interiordesign/commercial/example/jpg/commercial-15.jpg', '東京', '2020-12-12 09:37:25', '商業空間', 'Owf Sbwr Knn'),
(15, '../img/interiordesign/commercial/example/coffee/_SKA6420_resize.jpg', '澳門', '2020-12-12 09:37:28', '商業空間', 'Jofe Qfen'),
(16, '../img/interiordesign/commercial/example/jpg/commercial-19.jpg', '南京復興', '2020-12-12 09:37:29', '辦公空間', 'TIBAME'),
(17, '../img/interiordesign/office/style/Prj009_Img006.jpg', '忠孝復興', '2020-12-12 09:37:31', '辦公空間', '法華香水'),
(18, '../img/interiordesign/office/example/behance/fa8056522fa28a82f91ccb16cdb5e4eb.jpg', '台北101', '2020-12-12 09:37:31', '辦公空間', 'Google總部'),
(19, '../img/interiordesign/office/example/behance/d8b0d169439757.5b81d0263ab59.jpg', '洲子街', '2020-12-12 09:37:31', '辦公空間', '仁寶科技'),
(20, '../img/interiordesign/office/example/behances/9cc38438346329.575ebb45a5ed3.jpg', '矽谷', '2020-12-12 09:37:31', '辦公空間', '雅典娜律師事務所'),
(21, '../img/interiordesign/office/style/Romy-Tesei-getty-images.jpg', '紐約', '2020-12-12 09:37:31', '辦公空間', '美國運通');

-- --------------------------------------------------------

--
-- 資料表結構 `CONTACT_FORM`
--

CREATE TABLE `CONTACT_FORM` (
  `CTA_ID` int NOT NULL,
  `CTA_NAME` varchar(45) NOT NULL,
  `CTA_PHONE` varchar(45) NOT NULL,
  `CTA_QUESTION` varchar(45) NOT NULL,
  `CTA_FILE` varchar(45) DEFAULT NULL,
  `CTA_DATE` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `CONTACT_FORM`
--

INSERT INTO `CONTACT_FORM` (`CTA_ID`, `CTA_NAME`, `CTA_PHONE`, `CTA_QUESTION`, `CTA_FILE`, `CTA_DATE`) VALUES
(1, '何雨琪', '0901144876', '昨天剛收到的沙發顏色與網頁上有些落差，請問可以更換嗎?', '2020.0930.jpg', '2020/10/02'),
(2, '鄭冠羣', '0915598395', '請問退款費用何時可以收到?', '925退款通知.pdf', '2020/10/04'),
(3, '李國鈔', '0957999290', '我一次訂購了多筆訂單，是否可以合併於一筆轉帳呢?', NULL, '2020/10/04'),
(4, '邱凱旼', '0957349222', '消費多少金額可以享有免運費?', NULL, '2020/10/05'),
(5, '王聖雯', '0958431577', '我的商品收到時有破損，請問可以退貨換新的嗎?', '11523539574.jpg', '2020/10/05'),
(6, '黃亭甄', '0988577433', '優惠組合商品可以進行更換嗎?', NULL, '2020/10/05'),
(7, '徐彥亭', '0956555398', '我想確認20200922這筆訂單是否有收到付款?', '231136.jpg', '2020/10/07'),
(8, '周廷瀚', '0987431222', '客服人員的態度不佳，請加強訓練服務禮儀', '', '2020/10/07'),
(9, '郭子宣', '0957333291', '請問去年聖誕優惠的時光桌椅，請問今年還有生產嗎?', '聖誕桌椅1224.jpg', '2020/10/09'),
(10, '黃家瑋', '0958477324', '今年比賽請問有得獎獎金嗎?', NULL, '2020/10/09');

-- --------------------------------------------------------

--
-- 資料表結構 `CONTESTANT`
--

CREATE TABLE `CONTESTANT` (
  `CT_WORK_ID` varchar(45) NOT NULL,
  `CT_PERSONAL_ID` varchar(45) NOT NULL,
  `CT_IMG_FRONT` varchar(100) NOT NULL,
  `CT_MEMBER_ID` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `CONTESTANT`
--

INSERT INTO `CONTESTANT` (`CT_WORK_ID`, `CT_PERSONAL_ID`, `CT_IMG_FRONT`, `CT_MEMBER_ID`) VALUES
('B121140', 'T222345322', '../img/contestWorkImg/pId/tingting121140身分證正面.png', 'tingting'),
('B121232', 'O233456780', '../img/contestWorkImg/pId/QQ998877121232身分證正面.png', 'QQ998877'),
('B121362', 'H122233445', '../img/contestWorkImg/pId/ch222222121362身分證正面.png', 'ch222222'),
('B152853', 'W122384475', '../img/contestWorkImg/pId/wangwang20201221152853身分證正面01.png', 'wangwang'),
('B171341', 'J111111111', '../img/contestWorkImg/pId/ho77777720201220171341身分證正面01.png', 'ho777777'),
('C118323', 'H111944444', '../img/contestWorkImg/pId/huang999118323身分證正面.png', 'huang999'),
('C121185', 'L123445553', '../img/contestWorkImg/pId/linlin121185身分證正面.png', 'linlin'),
('C212210', 'E222388722', '../img/contestWorkImg/pId/wenwen212210身分證正面.png', 'wenwen'),
('C615434', 'J122938232', '../img/contestWorkImg/pId/lee1229615434身分證正面.png', 'lee1229'),
('D120563', 'A111134532', '../img/contestWorkImg/pId/chunggg120563身分證正面.png', 'chunggg'),
('D121045', 'D122345343', '../img/contestWorkImg/pId/dd12345121045身分證正面.png', 'dd12345'),
('D205551', 'H121034450', '../img/contestWorkImg/pId/TingHang20201220205551身分證正面01.png', 'TingHang'),
('S115135', 'L122677532', '../img/contestWorkImg/pId/leelee20201221151358身分證正面01.png', 'leelee');

-- --------------------------------------------------------

--
-- 資料表結構 `DELIVERY`
--

CREATE TABLE `DELIVERY` (
  `DEL_ID` int NOT NULL,
  `DEL_RECEIVER` varchar(45) NOT NULL,
  `DEL_ARRIVAL_TIME` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '早上',
  `DEL_CITY` varchar(45) NOT NULL,
  `DEL_ADDRESS` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `DELIVERY`
--

INSERT INTO `DELIVERY` (`DEL_ID`, `DEL_RECEIVER`, `DEL_ARRIVAL_TIME`, `DEL_CITY`, `DEL_ADDRESS`) VALUES
(1, '方傑', '早上', '宜蘭縣', '羅東鎮中新一路六段800巷456號'),
(2, '劉家佳', '下午', '基隆市', '信義區錦田路七段461巷347弄624號18樓'),
(3, '朱華銘', '早上', '南投縣', '中寮鄉鹽田街二段760巷16弄51號'),
(4, '孫君', '下午', '高雄市', '霧峰區南村街778巷677號1樓'),
(5, '卓庭彥', '下午', '苗栗縣', '楠梓區四平路731巷57弄450號31樓'),
(6, '夏侯美偉', '早上', '宜蘭縣', '壯圍鄉府前四街九段150號32樓'),
(7, '榮安豪', '早上', '臺南市', '佳里區復興南路一段318號45樓'),
(8, '任宇霖', '下午', '基隆市', '中正區貴林街402號'),
(9, '艾伶靜', '下午', '臺東縣', '金峰鄉文學街九段7巷553弄478號81樓'),
(10, '柏美玲', '早上', '新竹縣', '新豐鄉永榮二街167號');

-- --------------------------------------------------------

--
-- 資料表結構 `DISCOUNT`
--

CREATE TABLE `DISCOUNT` (
  `DIS_ID` varchar(45) NOT NULL,
  `DIS_PRODUCT_ID1` varchar(45) NOT NULL,
  `DIS_PRODUCT_ID2` varchar(45) NOT NULL,
  `DIS_GROUP` varchar(45) NOT NULL,
  `DIS_AMOUNT` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `DISCOUNT`
--

INSERT INTO `DISCOUNT` (`DIS_ID`, `DIS_PRODUCT_ID1`, `DIS_PRODUCT_ID2`, `DIS_GROUP`, `DIS_AMOUNT`) VALUES
('A', '浮葉', '舒服', '狂熱桌椅組', 500),
('B', '天鵝', '日常', '跳樓桌椅組', 2500);

-- --------------------------------------------------------

--
-- 資料表結構 `FAVORITE`
--

CREATE TABLE `FAVORITE` (
  `FAV_ID` int NOT NULL,
  `PRODUCT_ID` varchar(45) NOT NULL,
  `MEMBER_ID` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `FAVORITE`
--

INSERT INTO `FAVORITE` (`FAV_ID`, `PRODUCT_ID`, `MEMBER_ID`) VALUES
(1, 'B003', 'A111200001'),
(2, 'S003', 'A111200001'),
(3, 'D006', 'A111200001'),
(4, 'T008', 'A111200001'),
(5, 'T010', 'A111200002'),
(6, 'S003', 'A111200006'),
(7, 'D003', 'A111200007'),
(8, 'S002', 'A111200008'),
(9, 'B002', 'A111200009'),
(10, 'T005', 'A111200010');

-- --------------------------------------------------------

--
-- 資料表結構 `INVENTORY`
--

CREATE TABLE `INVENTORY` (
  `INV_ID` int NOT NULL,
  `INV_QUANTITY` int NOT NULL,
  `INV_STATUS` varchar(45) NOT NULL,
  `PRODUCT_ID` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `INVENTORY`
--

INSERT INTO `INVENTORY` (`INV_ID`, `INV_QUANTITY`, `INV_STATUS`, `PRODUCT_ID`) VALUES
(1, 1, '上架', 'B001'),
(2, 2, '下架', 'B002'),
(3, 3, '上架', 'B003'),
(4, 4, '上架', 'B004'),
(5, 5, '上架', 'D002'),
(6, 6, '上架', 'D003'),
(7, 7, '上架', 'D004'),
(8, 8, '上架', 'D005'),
(9, 9, '上架', 'S001'),
(10, 10, '上架', 'S002');

-- --------------------------------------------------------

--
-- 資料表結構 `MANAGER`
--

CREATE TABLE `MANAGER` (
  `MGR_ID` int NOT NULL,
  `MGR_NAME` varchar(45) NOT NULL,
  `MGR_ACCOUNT` varchar(45) NOT NULL,
  `MGR_PWD` varchar(45) NOT NULL,
  `MGR_AUTHORITY` varchar(45) NOT NULL,
  `MGR_DATE` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `MANAGER`
--

INSERT INTO `MANAGER` (`MGR_ID`, `MGR_NAME`, `MGR_ACCOUNT`, `MGR_PWD`, `MGR_AUTHORITY`, `MGR_DATE`) VALUES
(1, '鄭冠群', 'aa123', 'aa123', '這裡要放什麼', '2020/11/14'),
(2, '王聖文', 'bb123', 'bb123', '這裡要放什麼', '2020/11/14'),
(3, '李國超', 'cc123', 'cc123', '這裡要放什麼', '2020/11/14'),
(4, '黃亭蓁', 'dd123', 'dd123', '這裡要放什麼', '2020/11/14'),
(5, '何雨錡', 'ee123', 'ee123', '這裡要放什麼', '2020/11/14'),
(6, '邱凱民', 'ff123', 'ff123', '這裡要放什麼', '2020/11/14');

-- --------------------------------------------------------

--
-- 資料表結構 `MEMBER`
--

CREATE TABLE `MEMBER` (
  `MEM_ID` varchar(45) NOT NULL,
  `MEM_PWD` varchar(45) NOT NULL,
  `MEM_NAME` varchar(45) NOT NULL,
  `MEM_PHONE` varchar(45) NOT NULL,
  `MEM_EMAIL` varchar(45) NOT NULL,
  `MEM_CITY` varchar(45) NOT NULL,
  `MEM_ADDRESS` varchar(45) NOT NULL,
  `MEM_DATE` varchar(45) NOT NULL,
  `MEM_VOTED` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `MEMBER`
--

INSERT INTO `MEMBER` (`MEM_ID`, `MEM_PWD`, `MEM_NAME`, `MEM_PHONE`, `MEM_EMAIL`, `MEM_CITY`, `MEM_ADDRESS`, `MEM_DATE`, `MEM_VOTED`) VALUES
('ch222222', 'ch222222', '沈奇勳', '0934475555', 'chi@gmail.com', '彰化縣', '鹿港鎮民權路168號', '2020-12-21 21:34:57', 1),
('chou666', 'cC20201218', '周道緋', '0933987403', 'chou@gmail.com', '台北市', '大安區敦化南路一段160巷16號', '2020-12-20 17:34:55', 0),
('chuchu', 'c333333', '邱凱民', '0922910873', 'chu@gmail.com', '基隆市', '仁愛區港西街5號', '2020-12-21 18:37:39', 0),
('chunggg', 'hh5555', '鄭冠群', '0989765432', 'chung@gmail.com', '屏東縣', '潮州鎮新榮里信義路111', '2020-12-21 20:44:04', 0),
('dd12345', 'dd12345', '洪宏祥', '0922356789', 'diving@gmail.com', '台南市', '東區北門路二段4號', '2020-12-21 20:59:47', 0),
('ho777777', 'ho777777', '何宇奇', '0934567842', 'ho77@gmail.com', '台北市', '信義區西村里8鄰信義路五段7號', '2020-12-20 13:39:36', 0),
('huang999', '#77777', '黃廷甄', '0933345633', 'huang@gmail.com', '台中市', '西區台灣大道二段459號', '2020-12-21 17:50:10', 0),
('leelee', '111111', '李國超', '0923456789', 'hh@gmail.com', '高雄市', '鹽埕區中正四路274號', '2020-12-22 13:49:30', 1),
('linlin', 'linlin', '林煥強', '0922234567', 'lin@gmail.com', '桃園市', '蘆竹區長安路二段236號', '2020-12-21 21:16:22', 0),
('QQ998877', 'QQ12345', '郭子瑄', '0933456788', 'qq860909@gmail.com', '台東縣', '關山鎮隆盛路1號', '2020-12-21 21:20:43', 0),
('qqqqqq', 'qqqqqq', '高哈哈', '0912345678', 'jk@gmail.com', '台北市', '新莊區', '2020-12-24 16:29:54', 1),
('TingHang', 'ting9107', '周霆漢', '0988476583', 'hang@gmail.com', '台北市', '大安區敦化南路1段228號2樓', '2020-12-20 20:44:25', 0),
('tingting', 'tingting', '徐嬿婷', '0922391876', 'ting@gmail.com', '台北市', '中正區北平西路3號', '2020-12-21 21:06:46', 0),
('wangwang', 'wangwang', '王聖文', '0923488591', 'wang@gmail.com', '新竹縣', '竹北市生醫路二段18號1F', '2020-12-21 15:22:08', 0),
('wenwen', 'wenwen', '侯文婷', '0988765493', 'wen@gmail.com', '台北市', '松山區八德路四段520號', '2020-12-22 12:17:34', 0),
('yunyun', 'yunyun', '蔣宗耘', '0977398291', 'yun@gmail.com', '台南市', '市民大道五段87號', '2020-12-28 11:49:19', 0);

-- --------------------------------------------------------

--
-- 資料表結構 `noti`
--

CREATE TABLE `noti` (
  `NOTI_ID` int NOT NULL,
  `NOTI_TEXT` varchar(45) NOT NULL,
  `MEMBER_ID` varchar(45) NOT NULL,
  `NOTI_DATE` char(24) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `noti`
--

INSERT INTO `noti` (`NOTI_ID`, `NOTI_TEXT`, `MEMBER_ID`, `NOTI_DATE`) VALUES
(1, '限時優惠', 'A111200001', ''),
(2, '您的包裹已送達', 'A111200001', ''),
(3, '限時優惠', 'A111200003', ''),
(4, '限時優惠', 'A111200004', ''),
(5, '限時優惠', 'A111200005', ''),
(6, '限時優惠', 'A111200006', ''),
(7, '限時優惠', 'A111200007', ''),
(8, '限時優惠', 'A111200008', ''),
(9, '限時優惠', 'A111200009', ''),
(10, '限時優惠', 'A111200010', '');

-- --------------------------------------------------------

--
-- 資料表結構 `ORDER`
--

CREATE TABLE `ORDER` (
  `ORD_ID` varchar(45) NOT NULL,
  `ORD_STATUS` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '已訂購',
  `ORD_PAYMENT` varchar(45) NOT NULL,
  `ORD_DATE` varchar(45) NOT NULL,
  `MEMBER_ID` varchar(45) NOT NULL,
  `DELIVERY_ID` int NOT NULL,
  `ORD_BUY` char(24) DEFAULT NULL,
  `ORD_PAY` char(24) DEFAULT NULL,
  `ORD_TRANS` char(24) DEFAULT NULL,
  `ORD_ARR` char(24) DEFAULT NULL,
  `ORD_DICOUNT` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `ORDER`
--

INSERT INTO `ORDER` (`ORD_ID`, `ORD_STATUS`, `ORD_PAYMENT`, `ORD_DATE`, `MEMBER_ID`, `DELIVERY_ID`, `ORD_BUY`, `ORD_PAY`, `ORD_TRANS`, `ORD_ARR`, `ORD_DICOUNT`) VALUES
('A00001', '已訂購', '已付款', '2020/11/14', 'A111200001', 1, NULL, NULL, NULL, NULL, 0),
('A00002', '裝貨中', '未付款', '2020/11/14', 'A111200002', 2, NULL, NULL, NULL, NULL, 0),
('A00003', '運送中', '已付款', '2020/11/14', 'A111200003', 3, NULL, NULL, NULL, NULL, 0),
('A00004', '已送達', '未付款', '2020/11/14', 'A111200004', 4, NULL, NULL, NULL, NULL, 0),
('A00005', '已訂購', '已付款', '2020/11/14', 'A111200005', 5, NULL, NULL, NULL, NULL, 0),
('A00006', '裝貨中', '未付款', '2020/11/14', 'A111200006', 6, NULL, NULL, NULL, NULL, 0),
('A00007', '運送中', '已付款', '2020/11/14', 'A111200007', 7, NULL, NULL, NULL, NULL, 0),
('A00008', '已送達', '未付款', '2020/11/14', 'A111200008', 8, NULL, NULL, NULL, NULL, 0),
('A00009', '已訂購', '已付款', '2020/11/14', 'A111200009', 9, NULL, NULL, NULL, NULL, 0),
('A00010', '裝貨中', '未付款', '2020/11/14', 'A111200010', 10, NULL, NULL, NULL, NULL, 0);

-- --------------------------------------------------------

--
-- 資料表結構 `ORDER_DETAIL`
--

CREATE TABLE `ORDER_DETAIL` (
  `ORD_DE_ID` int NOT NULL,
  `ORDER_ID` varchar(45) NOT NULL,
  `PRODUCT_ID` varchar(45) NOT NULL,
  `ORDER_QUANTITY` tinyint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `ORDER_DETAIL`
--

INSERT INTO `ORDER_DETAIL` (`ORD_DE_ID`, `ORDER_ID`, `PRODUCT_ID`, `ORDER_QUANTITY`) VALUES
(1, 'A00001', 'T007', 0),
(2, 'A00002', 'B001', 0),
(3, 'A00003', 'B004', 0),
(4, 'A00004', 'D006', 0),
(5, 'A00005', 'S003', 0),
(6, 'A00006', 'S004', 0),
(7, 'A00007', 'T002', 0),
(8, 'A00008', 'T005', 0),
(9, 'A00009', 'T006', 0),
(10, 'A00011', 'c001', 5);

-- --------------------------------------------------------

--
-- 資料表結構 `PRODUCT`
--

CREATE TABLE `PRODUCT` (
  `PRD_ID` varchar(45) NOT NULL,
  `PRD_SPECIES` varchar(45) NOT NULL,
  `PRD_NAME` varchar(45) NOT NULL,
  `PRD_PRICE` varchar(45) NOT NULL,
  `PRD_MATERIAL` varchar(45) DEFAULT NULL,
  `PRD_DATE` varchar(45) NOT NULL,
  `DISCOUNT_ID` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `PRODUCT`
--

INSERT INTO `PRODUCT` (`PRD_ID`, `PRD_SPECIES`, `PRD_NAME`, `PRD_PRICE`, `PRD_MATERIAL`, `PRD_DATE`, `DISCOUNT_ID`) VALUES
('b001', '床組', '故鄉', '31700', NULL, '2020/12/03', NULL),
('b002', '床組', '心室', '22700', NULL, '2020/12/03', NULL),
('b003', '床組', '傢畫', '31700', NULL, '2020/12/03', NULL),
('b004', '床組', '同夢', '31700', NULL, '2020/12/03', NULL),
('b005', '床組', '竹映', '28700', NULL, '2020/12/03', NULL),
('b006', '床組', 'ㄚㄚㄚ', '25700', NULL, '2020/12/03', NULL),
('b007', '床組', '簡單', '26700', NULL, '2020/12/03', NULL),
('bk001', '書櫃', '日日拾書', '7700', 'null', '2020/11/16', NULL),
('bk002', '書櫃', '藏美', '9999', NULL, '2020/12/03', NULL),
('bk003', '書櫃', '層層', '8700', NULL, '2020/12/03', NULL),
('bk004', '書櫃', '書香', '11100', NULL, '2020/12/03', NULL),
('c001', '椅子', '天鵝', '4500', 'null', '2020/12/03', 'B'),
('c002', '椅子', '懷抱', '5700', NULL, '2020/12/03', NULL),
('c003', '椅子', '舒服', '31700', NULL, '2020/12/03', 'A'),
('s001', '沙發', 'VILLA', '47700', 'null', '2020/12/03', NULL),
('s002', '沙發', '故事', '52700', 'null', '2020/12/03', NULL),
('s003', '沙發', '聚樂', '37700', 'null', '2020/12/03', NULL),
('s004', '沙發', '日子', '12700', NULL, '2020/12/03', NULL),
('s005', '沙發', '陽光', '20000', NULL, '2020/12/03', NULL),
('t001', '桌組', '雨豆', '11700', 'null', '2020/12/03', NULL),
('t002', '桌組', '木潤', '7700', NULL, '2020/12/03', NULL),
('t003', '桌組', '自在', '8700', NULL, '2020/12/03', NULL),
('t004', '桌組', '日暮', '17700', NULL, '2020/12/03', NULL),
('t005', '桌組', '日常', '15700', NULL, '2020/12/03', 'B'),
('t006', '桌組', '浮葉', '8500', NULL, '2020/12/03', 'A'),
('t007', '桌組', '澄澄', '4700', NULL, '2020/12/03', NULL),
('t008', '桌組', '木桌', '13700', NULL, '2020/12/03', NULL),
('哈哈啊哈77777', '', '76', '76', '5', '476', '47'),
('安安安安安安', '2312321', '65765', '5765', '65', '765', '5'),
('我午我我我', '我午我我我午我喔', '我午我我我我', '五我我我午我我', '五我我我午我我', '我午我我我我我午我', '21231545');

-- --------------------------------------------------------

--
-- 資料表結構 `PRODUCT_IMG`
--

CREATE TABLE `PRODUCT_IMG` (
  `PIMG_ID` int NOT NULL,
  `PIMG_URL` varchar(45) NOT NULL,
  `PRD_ID` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `PRODUCT_IMG`
--

INSERT INTO `PRODUCT_IMG` (`PIMG_ID`, `PIMG_URL`, `PRD_ID`) VALUES
(1, '../img/product/bookcase01/bk01_01.jpg', 'bk001'),
(2, '../img/product/chair01/chair01_01.png', 'c001'),
(3, '../img/product/sofa01/sofa01_01.jpg', 's001'),
(4, '../img/product/sofa02/sofa02_01.jpg', 's002'),
(5, '../img/product/sofa03/sofa03_01.jpg', 's003'),
(6, '../img/product/table01/table01_01.jpg', 't001'),
(7, '../img/product/table02/table02_01.jpg', 't002'),
(8, '../img/product/table03/table03_01.jpg', 't003'),
(9, '../img/product/table04/table04_01.jpg', 't004'),
(10, '../img/product/chair02/chair02_01.jpg', 'c002'),
(11, '../img/product/table05/table05_01.jpg', 't005'),
(12, '../img/product/table06/table06_01.png', 't006'),
(13, '../img/product/bed01/bed01_01.jpg', 'b001'),
(14, '../img/product/bed02/bed02_01.jpg', 'b002'),
(15, '../img/product/bed03/bed03_01.jpg', 'b003'),
(16, '../img/product/bed04/bed04_01.jpg', 'b004'),
(17, '../img/product/bed05/bed05_01.jpg', 'b005'),
(18, '../img/product/bed06/bed06_01.jpg', 'b006'),
(19, '../img/product/bed07/bed07_01.jpg', 'b007'),
(20, '../img/product/chair03/chair03_01.jpg', 'c003'),
(21, '../img/product/table07/table07_01.jpg', 't007'),
(22, '../img/product/sofa04/sofa04_01.jpg', 's004'),
(23, '../img/product/sofa05/sofa05_01.jpg', 's005'),
(24, '../img/product/bookcase02/bookcase02_01.jpg', 'bk002'),
(25, '../img/product/bookcase03/bookcase03_01.jpg', 'bk003'),
(26, '../img/product/bookcase04/bookcase04_01.jpg', 'bk004'),
(27, '../img/product/table08/table08_01.jpg', 't008');

-- --------------------------------------------------------

--
-- 資料表結構 `QA`
--

CREATE TABLE `QA` (
  `QA_ID` int NOT NULL,
  `QA_QUESTION` varchar(500) NOT NULL,
  `QA_ANSWER` varchar(500) NOT NULL,
  `QA_DATE` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `QA`
--

INSERT INTO `QA` (`QA_ID`, `QA_QUESTION`, `QA_ANSWER`, `QA_DATE`) VALUES
(1, '請問可以自取嗎？', '無自取服務', '2020/10/01'),
(2, '請問是否可以幫忙處理舊貨?', '本商店沒有處理舊貨服務', '2020/10/02'),
(3, '請問全部商品都是台灣製造嗎?', '是的，本商店商品皆台灣製造', '2020/10/03'),
(4, '請問物流已經安排今日配送到府，可以再改時間 或 改送到其他地址嗎？', '因路線考量，每日都有各縣市區域路線的車趟，臨時欲改時間或地址僅能將您的訂單另安排下一次的車趟再電約。', '2020/10/03'),
(5, '可以指定配送時間嗎？', '救世宅家具採全國配送制，因路線考量，請提供較彈性的收貨時間，使物流單位更快速為您安排出貨。', '2020/10/04'),
(6, '請問商品若需組裝，有無安裝服務？需要額外收取費用嗎？', '本商店有提供，需額外收費服務，依照商品大小', '2020/10/05'),
(7, '請問如果忘記密碼了怎麼辦？', '請點選「會員專區」登入欄位下方中的「忘記密碼」，輸入資料後，再去信件中索取暫時密碼。', '2020/10/05'),
(8, '請問會員個人資料欲修改，應如何處理？', '「會員專區 」登入之後，點選「個人資料」，即可進行修改。', '2020/10/05'),
(9, '請問如果無法登入會員怎麼辦？', '請您於上班時間來電或救世宅客服聯絡，救世宅會盡快為您處理。', '2020/10/06'),
(10, '請問可以自取嗎？', '無自取服務。', '2020/10/08');

-- --------------------------------------------------------

--
-- 資料表結構 `VISITS`
--

CREATE TABLE `VISITS` (
  `VISITS_ID` int NOT NULL,
  `NUMBER` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `VISITS`
--

INSERT INTO `VISITS` (`VISITS_ID`, `NUMBER`) VALUES
(1, 35924);

-- --------------------------------------------------------

--
-- 資料表結構 `WINNER`
--

CREATE TABLE `WINNER` (
  `WIN_WORK_ID` varchar(45) NOT NULL,
  `WIN_DATE` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `WINNER`
--

INSERT INTO `WINNER` (`WIN_WORK_ID`, `WIN_DATE`) VALUES
('A11120001', '2020/12/15');

-- --------------------------------------------------------

--
-- 資料表結構 `WORK`
--

CREATE TABLE `WORK` (
  `WK_ID` varchar(100) NOT NULL,
  `WK_SESSION` int NOT NULL,
  `WK_SPECIES` varchar(100) NOT NULL,
  `WK_NAME` varchar(100) NOT NULL,
  `WK_CONCEPT` varchar(200) NOT NULL,
  `WK_DRAFT` varchar(100) NOT NULL,
  `WK_DRAW` varchar(100) NOT NULL,
  `WK_VOTES` int NOT NULL,
  `WK_STATUS` varchar(100) NOT NULL,
  `WK_DATE` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `WORK`
--

INSERT INTO `WORK` (`WK_ID`, `WK_SESSION`, `WK_SPECIES`, `WK_NAME`, `WK_CONCEPT`, `WK_DRAFT`, `WK_DRAW`, `WK_VOTES`, `WK_STATUS`, `WK_DATE`) VALUES
('B121140', 2, '書櫃', '頁岩', '將一本本人類精華藏在書櫃中，就如同頁岩層層疊疊，埋藏千年洗滌的寶藏。', '../img/contestWorkImg/draft/tingting121140層疊.jpg', '../img/contestWorkImg/draw/tingting121140層疊.jpg', 223, '投稿成功', '2020-12-21 21:14:09'),
('B121232', 2, '床', '床邊故事', '以沈穩色調做為主軸，彷彿此案女主人的性格，在職場上是個獨立自主的女性，相處起來卻細膩溫暖。', '../img/contestWorkImg/draft/QQ998877121232床邊故事.jpg', '../img/contestWorkImg/draw/QQ998877121232床邊故事.jpg', 88, '投稿成功', '2020-12-21 21:23:24'),
('B121362', 2, '書櫃', '情緒化書櫃', '這世界上能找出什麼東西比女朋友的心情還更變化莫測，我們要用雙手創造真正符合生活的好朋友，\n給你前所未有的生活細節和貼心體驗！', '../img/contestWorkImg/draft/ch222222121362情緒化書櫃.jpg', '../img/contestWorkImg/draw/ch222222121362情緒化書櫃.jpg', 113, '投稿成功', '2020-12-21 21:36:29'),
('B152853', 2, '書櫃', '角落一宇', '宇宙的混沌黑，是廣闊而寧靜，同時乘載所有行星的重量。「角落一宇」是被裝飾成書櫃的小宇宙，在你、我書房中，自成一系。', '../img/contestWorkImg/draft/wangwang20201221212849角落一宇.jpeg', '../img/contestWorkImg/draw/wangwang20201221212849角落一宇.jpeg', 252, '投稿成功', '2020-12-20 17:13:41'),
('B171341', 2, '書櫃', '迷宮', '北歐純淨簡約的舒適氛圍，揉合清新自然不浮華的風格，勾勒出純粹而美好的生活風格。', '../img/contestWorkImg/draft/wangwang20201221152853迷宮.jpg', '../img/contestWorkImg/draw/wangwang20201221152853迷宮.jpg', 22, '投稿成功', '2020-12-21 15:28:53'),
('C118323', 2, '椅子', '幾何支點', '1976年解開卡拉比猜想，由此建立的幾何空間名為「卡拉比–丘流形」，此件作品正是向幾何致敬。', '../img/contestWorkImg/draft/huang999118323幾何支點.jpg', '../img/contestWorkImg/draw/huang999118323幾何支點.jpg', 51, '投稿成功', '2020-12-21 18:32:33'),
('C121185', 2, '椅子', '安心鏤空', '利用幾何圖形的基礎概念搭配上精巧的計算與無窮的創意，拼湊出你想要的黃金比例，展演極簡美學，兼具實用性。', '../img/contestWorkImg/pId/linlin121185身分證正面.png', '../img/contestWorkImg/draw/linlin121185安心鏤空.jpg', 662, '投稿成功', '2020-12-21 21:18:50'),
('C212210', 2, '椅子', '好坐的椅子', '椅子是傢俱設計史中不可忽視的要角，坐在椅子的時間比躺臥還長，此時正需要好坐的椅子。', '../img/contestWorkImg/pId/wenwen212210身分證正面.png', '../img/contestWorkImg/draw/wenwen212210好坐的椅子.jpg', 22, '投稿成功', '2020-12-22 12:21:06'),
('D120563', 2, '桌子', '兩腳書櫥的逃亡', '聽著兩腳書櫥的逃亡，突然不在意逃亡的理由，而是在意逃亡的景象。或許她是穿著高跟鞋在跑。', '../img/contestWorkImg/pId/chunggg120563身分證正面.png', '../img/contestWorkImg/draw/chunggg120563兩腳書櫥的逃亡.jpg', 156, '投稿成功', '2020-12-21 20:56:34'),
('D121045', 2, '桌子', '走在時尚尖端', '桌子也可以很Fashion的向前。', '../img/contestWorkImg/pId/dd12345121045身分證正面.png', '../img/contestWorkImg/draw/dd12345121045走在時尚尖端.webp', 23, '投稿成功', '2020-12-21 21:04:53'),
('D205551', 2, '桌子', '圓', '圓型就是為家庭著想的設計。剔除掉了稜角，也同時縮小體積，放在任何地方都適合不過。', '../img/contestWorkImg/pId/TingHang20201220205551身分證正面01.png', '../img/contestWorkImg/draw/TingHang20201220205551簡約.jpg', 69, '投稿成功', '2020-12-20 20:55:51'),
('S115135', 2, '沙發', '陽光棕梠', '生長在熱帶的棕梠，有陽光的氣息，生處在亞熱帶的台灣，少了四季如春，就用陽光棕梠沙發來填補吧。', '../img/contestWorkImg/pId/leelee20201221151358身分證正面01.png', '../img/contestWorkImg/draw/leelee20201221151358棕梠.jpg', 56, '投稿成功', '2020-12-21 15:13:58');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `CASE`
--
ALTER TABLE `CASE`
  ADD PRIMARY KEY (`CASE_ID`);

--
-- 資料表索引 `CONTACT_FORM`
--
ALTER TABLE `CONTACT_FORM`
  ADD PRIMARY KEY (`CTA_ID`);

--
-- 資料表索引 `CONTESTANT`
--
ALTER TABLE `CONTESTANT`
  ADD PRIMARY KEY (`CT_WORK_ID`,`CT_MEMBER_ID`);

--
-- 資料表索引 `DELIVERY`
--
ALTER TABLE `DELIVERY`
  ADD PRIMARY KEY (`DEL_ID`);

--
-- 資料表索引 `DISCOUNT`
--
ALTER TABLE `DISCOUNT`
  ADD PRIMARY KEY (`DIS_ID`);

--
-- 資料表索引 `FAVORITE`
--
ALTER TABLE `FAVORITE`
  ADD PRIMARY KEY (`FAV_ID`);

--
-- 資料表索引 `INVENTORY`
--
ALTER TABLE `INVENTORY`
  ADD PRIMARY KEY (`PRODUCT_ID`);

--
-- 資料表索引 `MANAGER`
--
ALTER TABLE `MANAGER`
  ADD PRIMARY KEY (`MGR_ID`);

--
-- 資料表索引 `MEMBER`
--
ALTER TABLE `MEMBER`
  ADD PRIMARY KEY (`MEM_ID`);

--
-- 資料表索引 `noti`
--
ALTER TABLE `noti`
  ADD PRIMARY KEY (`NOTI_ID`);

--
-- 資料表索引 `ORDER`
--
ALTER TABLE `ORDER`
  ADD PRIMARY KEY (`ORD_ID`);

--
-- 資料表索引 `ORDER_DETAIL`
--
ALTER TABLE `ORDER_DETAIL`
  ADD PRIMARY KEY (`ORD_DE_ID`);

--
-- 資料表索引 `PRODUCT`
--
ALTER TABLE `PRODUCT`
  ADD PRIMARY KEY (`PRD_ID`),
  ADD KEY `FK_PRODUCT_DISCOUNT_idx` (`DISCOUNT_ID`);

--
-- 資料表索引 `PRODUCT_IMG`
--
ALTER TABLE `PRODUCT_IMG`
  ADD PRIMARY KEY (`PIMG_ID`);

--
-- 資料表索引 `QA`
--
ALTER TABLE `QA`
  ADD PRIMARY KEY (`QA_ID`);

--
-- 資料表索引 `VISITS`
--
ALTER TABLE `VISITS`
  ADD PRIMARY KEY (`VISITS_ID`);

--
-- 資料表索引 `WINNER`
--
ALTER TABLE `WINNER`
  ADD PRIMARY KEY (`WIN_WORK_ID`),
  ADD KEY `FK_WINNER_WORK_idx` (`WIN_WORK_ID`);

--
-- 資料表索引 `WORK`
--
ALTER TABLE `WORK`
  ADD PRIMARY KEY (`WK_ID`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `CASE`
--
ALTER TABLE `CASE`
  MODIFY `CASE_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `CONTACT_FORM`
--
ALTER TABLE `CONTACT_FORM`
  MODIFY `CTA_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `DELIVERY`
--
ALTER TABLE `DELIVERY`
  MODIFY `DEL_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `FAVORITE`
--
ALTER TABLE `FAVORITE`
  MODIFY `FAV_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `noti`
--
ALTER TABLE `noti`
  MODIFY `NOTI_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `ORDER_DETAIL`
--
ALTER TABLE `ORDER_DETAIL`
  MODIFY `ORD_DE_ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
