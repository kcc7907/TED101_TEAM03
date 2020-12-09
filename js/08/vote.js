$(document).ready(function () {

    //頁碼
    $.ajax({
        url: '../php/08/jk_votePage.php',
        // type: 'POST',
        // data:{
        //     work: workId,
        // },
        dataType: 'text',
        success(res) {
            $('.jk_vote .vote_page').html(`${res}`);
        },
    });

    //點擊頁碼    
    $('.side').on('click', '.page', function (e) {
        let page = $(this).text();
        console.log(page);
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
    })



    //點擊詳細資訊
    $('.jk_vote main .work .img').click(function () {

        let workId = $(this).data("id");
        $.ajax({
            url: '../php/08/jk_voteDetail.php',
            type: 'POST',
            data: {
                work: workId,
            },
            dataType: 'text',
            success(res) {
                $('.jk_vote .clickVote .content').html(`${res}`);
            },
        });

        $('.jk_vote .backGround').css('display', 'flex');


    });

    //關閉詳細資訊
    $('.jk_vote .clickVote .close').click(function () {
        $('.jk_vote .backGround').css('display', 'none');
    });

    //點擊投票
    $('.jk_vote .clickVote button').click(function () {
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
                $('.jk_vote .clickVote .content').html(`${res}`);
            },
        });

        $('.jk_vote .backGround').css('display', 'flex');

    });



});



