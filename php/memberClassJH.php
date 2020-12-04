<?php
    //將session'會員資料的存取'模組化
    //常用的 Session 函式庫
    // session_start：啟用一個新的或開啟正在使用中的session。
    // session_destroy：清除正在使用中的 session。
    // session_name：取得正在使用中的名稱或將名稱更新為新的名稱。
    // session_module_name：取得或更新正在使用中的模組。
    // session_save_path：存取目前使用中的 session 路徑。
    // session_id：存取目前使用中的 id。
    // session_register：註冊一組新的 session。
    // session_unregister：刪除一個正在使用中的 session。
    // session_is_registered：檢查目前使用中是否已經有此變數。
    // session_decode：資料解碼，解碼成功回傳 true。
    // session_encode：資料編碼，編碼成功回傳 true。

    class MemberClass {   
        
        //清除Session
        function clearSession(){
            if(!isset($_SESSION)){
                session_start(); 
            }
            session_unset();
            session_destroy();
        }

        //--------------------------------------以下為後台使用--------------------------------------

        //取得Session(後台專用)
        function getSessionB(){
            if(!isset($_SESSION)){
                session_start(); 
            }
            return isset($_SESSION["BackendUserID"]) ? $_SESSION["BackendUserID"] : "";             
        }

        //寫入Session(後台專用)
        function setSessionB($UserID){
            if(!isset($_SESSION)){
                session_start(); 
            }
            $_SESSION["BackendUserID"] = $UserID;
        }

        //--------------------------------------以下為前台使用--------------------------------------

        //取得會員ID(前台專用)
        function getMemberID(){
            if(!isset($_SESSION)){
                session_start(); 
            }
            return isset($_SESSION["MemberID"]) ? $_SESSION["MemberID"] : ""; 
        }

        //取得會員帳號(前台專用)
        function getMemberName(){
            if(!isset($_SESSION)){
                session_start();
            }
            return isset($_SESSION["MemberName"]) ? $_SESSION["MemberName"] : ""; 
        }

        //寫入Session(前台專用)
        function setMemberInfo($MemberID, $MemberName){
            if(!isset($_SESSION)){
                session_start(); 
            }
            $_SESSION["MemberID"] = $MemberID; //Table 'ec_member'裡的ID欄位值
            $_SESSION["MemberName"] = $MemberName; //Table 'ec_member'裡的Account欄位值
        }
        
    }
?>