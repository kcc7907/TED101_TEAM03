$(document).ready(function () {

    $.ajax({

        url: '../php/14/photoPath.php',
        // data: { pdNum1, pdNum2 },//html傳出去的資料
        // type: 'POST',//html傳出去的方式
        dataType: 'JSON',//php回來的格式
        success: function (res) {
            // console.log(res);
            // console.log(res[0].CASE_IMG)

            // console.log($(".stylebox_right").find('img'))
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


/*
let ?? =`
                        <div class="jpgbox">
                            <div class="inter_pic">
                                <a href="./case4.html" class="img_inter">
                                    <img src="../img/interiordesign/office/example/ren/12Modern-iDiD-ntc 2_fe819.jpg"
                                        class="office_pic">
                                    <span class="contentFont">士林</span>
                                    <span class="contentFont">紀公館</span></a>
                            </div>
                        </div>

`


*/

