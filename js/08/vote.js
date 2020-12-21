$(document).ready(function () {

    //登出
    $('header .logout').click(function () {
        delCookie("loging");
        location.href = 'home2D.php';
    }); 
    //

    //頁碼
    $.ajax({
        url: '../php/08/jk_votePage.php',
        dataType: 'text',
        success(res) {
            $('.jk_vote .vote_page').html(`${res}`);
        },
    });

    //點擊頁碼    
    $('.jk_vote .container').on('click', '.page', function (e) {
        let page = $(this).text();
        $.ajax({
            url: '../php/08/jk_clickPage.php',
            type: 'POST',
            data:{
                page,
            },
            dataType: 'text',
            success(res) {
                $('.jk_vote main').html(`${res}`);
            },
        });
        $('.jk_vote .page').removeClass('-on');        
        $(`.jk_vote .page:contains(${page})`).addClass('-on');
        // $(this).addClass('-on');
    });

    //瀏覽人次
    $.ajax({
        url: '../php/08/jk_voteVisit.php',
        dataType: 'text',
        success(res) {
            $('.jk_vote .visitor .num').html(`${res}`);
        },
    });

    //點擊詳細資訊
    $('.jk_vote main').on('click', '.work .img', function () {

        let workId = $(this).data("id");
        $.ajax({
            url: '../php/08/jk_voteDetail.php',
            type: 'POST',
            data: {
                work: workId,
            },
            dataType: 'text',
            success(res) {
                $('.jk_vote .backGround').html(`${res}`);
            },
        });

        $('.jk_vote .backGround').css('display', 'flex');


    });

    //關閉詳細資訊    
    $('.jk_vote').on('click', '.clickVote .close', function () {
        $('.jk_vote .backGround').css('display', 'none');
    });

    //點擊投票    
    $('.jk_vote').on('click', '.clickVote button', function () {
        let voteId = $(this).closest('.clickVote').find('.content p:first-child span').text();
        let voteNum = $(this).closest('.clickVote').find('.content p:nth-child(2) input').val();
        $.ajax({
            url: '../php/08/jk_clickVote.php',
            type: 'POST',
            data: {
                voteId,
                voteNum,
            },
            dataType: 'text',
            success(res) {
                $(`.jk_vote .img.${voteId}`).find('.get_num span').text(`${res}`);
            },
        });
        $('.jk_vote .backGround').css('display', 'none');
        
    });

    //搜尋作品
    $('.jk_vote .search button').click(function () {

        let searchId = $('.jk_vote .search input').val();
        $.ajax({
            url: '../php/08/jk_voteDetail.php',
            type: 'POST',
            data: {
                work: searchId,
            },
            dataType: 'text',
            success(res) {
                if(res == ""){
                    $('.jk_vote .clickVote').html(`
                        <div class="close">
                            <i class="far fa-times-circle"></i>
                        </div>
                        <div class="content warn">
                            本次作品無此參賽號碼，請於確認後重新搜尋。
                        </div>                    
                    `);
                }else{
                    $('.jk_vote .backGround').html(`${res}`);
                }
            },
        });

        $('.jk_vote .backGround').css('display', 'flex');

    });



});

//取cookies     
function getCookie(name){
    let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]); 
    return null;
}
//刪除cookie
function delCookie(name){
var exp = new Date();
exp.setTime(exp.getTime() - 1);
var cval = getCookie(name);
if (cval != null) 
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()+";path=/";
}

