$(document).ready(function () {

    $.ajax({

        url: '../php/14/photoPath.php',
        data: { pdNum1, pdNum2 },//html傳出去的資料
        type: 'POST',//html傳出去的方式
        dataType: 'JSON',//php回來的格式
        success: function (res) {
            // console.log(res);
            // console.log(res[1].CASE_IMG)
            // console.log($(".tab_container").find('img'))
            $(".stylebox_right").find('img').attr('src', '')
            for (i = 0; i < res.length; i++) {
                $(".stylebox_right").find('img').eq(i).attr('src', res[i].CASE_IMG)
            }
        },
        error: function (res) {
            // console.log(res);
        },
    });
})

$.ajax({

    url: '../php/14/photoPath.php',
    dataType: 'JSON',
    success: function (res) {

        $(".st")
    }
})





