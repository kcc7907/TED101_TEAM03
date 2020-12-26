$(document).ready(function () {
    // =================================== VUE ===================================
    // 最新消息
    let appHomepage = new Vue({
        el:'#appHome',
        data: {
            news:[
                {
                    title:'訂製家具，凝聚美好幸福生活。年末收納好事成雙，雙架組合限時特惠。',
                    time:'12 / 23 / 2020'
                },
                {
                    title:'從丹麥四大匠來認識北歐風家具，北歐風的空間設計有許多元素，例如空間以白色為基調、大面採光以及淺色木質調。',
                    time:'09 / 29 / 2020'
                },
                {
                    title:'家具風格不同搭配方式讓你擁有全新居家氛圍，不需要大動作裝潢，只要使用不同家具風格搭配，讓你輕鬆改變居家風格氣氛。',
                    time:'11 / 27 / 2020'
                },
                {
                    title:'來自傳統工藝品牌 Phantom Hands 經典椅款，每件作品皆以純手工及不同工法製成，並由建築師 Pierre Jeanneret 所設計。',
                    time:'10 / 29 / 2020'
                },
                {
                    title:'Paulistno 休閒椅又稱聖保羅椅，由巴西建築師 Paulo Mendes da Rocha 所設計。',
                    time:'10 / 22 / 2020'
                },
                {
                    title:'重視理性及機能導向的Functionalism（功能主義）為二十世紀建築、設計的主流之一，強調功能第一、以實用為核心。',
                    time:'10 / 05 / 2020'
                },

                {
                    title:'法國國寶設計師 – Jean Prouvé 為英國皇室家族客製頂級沙發，女皇親自頒贈感謝狀，並表示好坐。',
                    time: '11 / 13 / 2020'
                },
                {
                    title:'經典優雅的法國手工燈具 – Serge，由法國製造，並且完全遵守 Mouille 的原始設計，每盞燈具依舊保持手工打造客制化訂做。',
                    time:'08 / 29 / 2020'
                },
                {
                    title:'Charlotte Perriand（夏洛特．貝里安，1903 – 1999），法國建築師和設計師，也是女性家具設計師的先驅。',
                    time:'09 / 15 / 2020'
                },
                {
                    title:'沙發擺放搭配客廳設計，打造理想舒適的客廳，不同款式的選擇，會影響家庭的生活習慣，。',
                    time:'07 / 18 / 2020'
                },
                {
                    title:'在美式鄉村風格空間裡，家具講求舒適、線條簡潔與質感兼具之特色，有時亦會融入帶有自然風味，或者經過古典線條改良的新式家具，多以布面為主，皮製為輔。',
                    time:'06 / 11 / 2020'
                },
                {
                    title:'來救世宅，一起過母親節。',
                    time:'05 / 01 / 2020'
                },
                {
                    title:'沙發是居家佈置的中心，不同沙發材質代表主人的生活品味。挑選沙發時，除了沙發材質之外，內部的泡棉材質也需注意，可以延長使用沙發的耐久度。',
                    time:'04 / 23 / 2020'
                },
                {
                    title:'你選對椅了嗎？無論使用餐桌或書桌工作，一定都要配備一張人因工學 的椅子，當低頭15度時，頸部須承受4.5～5公斤的力度。',
                    time:'12 / 10 / 2020'
                },
            ],
        },
        mounted() {
            // console.log(this.news[0].title);
            $('div#backNews').hide();
        },
        methods: {
            // =================================== 新聞內頁 ===================================
            goContent(e){
                let index = $(e.target).attr('data-id');
                $('div#backNews').eq(index).show().css('zIndex', '99');
                $('div#backNews').eq(index).find('div.innerNews').css('opacity', '1');
                let changeImg = $('.newsImg').eq(index).attr('src');
                $('div#backNews').eq(index).find('img').attr('src', changeImg);
                // $('div#backNews').eq(index).find('div.close').attr('data-id', index);
            },
            newsClose(e){
                let index = $(e.target).parent().attr('data-id');
                $('div#backNews').eq(index).hide().css('zIndex', '-99');
                $('div#backNews').eq(index).find('div.innerNews').css('opacity', '0');
            },
        },
    });


    // =================================== 漢堡包 ===================================
    let $_headerNav = $('header nav');
    $('.ham').click(function(){
        $('.ham span:first-child').toggleClass('-hamR');
        $('.ham span:nth-child(2)').toggleClass('-none');
        $('.ham span:last-child').toggleClass('-hamL');
        $_headerNav.slideToggle();
    });


    // =================================== 最新消息 ===================================
    let news = $('.newsDiv .newsSection');
    let newsBtn = $('.newsDiv .btnSection');
    news.hide();
    news.first().show().css({
        'left': '0',
        'opacity': '.8',
    });
    $('.pageRightBtn').click(function(){
        news.first().hide().css({
            'left': '-50%',
            'opacity': '0',
        });
        news.first().next().show().css({
            'left': '0',
            'opacity': '.8',
        });
        $(this).siblings('span').text('第二頁');
    });
    $('.pageLeftBtn').click(function(){
        news.first().next().hide().css({
            'left': '-50%',
            'opacity': '0',
        });
        news.first().show().css({
            'left': '0',
            'opacity': '.8',
        });
        $(this).siblings('span').text('第一頁');
    });


    // =================================== 左滾輪+右自動輪播 ===================================
    $('div.aboutDiv , div.newsDiv').hide();
    $('div.into').css({
        'left': '0',
        'opacity': '1',
    });
    $('#goScroll').scroll(function(){
        //==== 捲動時抓scrollTop ====
        let scrollPos = $(this).scrollTop(); //pos表position
        if(scrollPos == 0){
            $('div.into').show();
            $('div.aboutDiv').hide().css({
                'left': '-10%',
                'opacity': '0',
            });
            $('div.newsDiv').hide().css({
                'left': '-10%',
                'opacity': '0',
            });
        }else if(scrollPos > 350){
            $('div.into').hide();
            $('div.aboutDiv').hide().css({
                'left': '-10%',
                'opacity': '0',
            });
            $('div.newsDiv').show().css({
                'left': '0',
                'opacity': '1',
            });
        }else{
            $('div.into').hide();
            $('div.aboutDiv').show().css({
                'left': '0',
                'opacity': '1',
            });
            $('div.newsDiv').hide().css({
                'left': '-10%',
                'opacity': '0',
            });

        }
    
    });

    // =================================== 隱藏按鈕 ===================================
    // 登入
    $('span.hideLog').click(()=>{
        $('input#account').val('lee1229');
        $('input#pwd').val('lee1229');
    });

    // 註冊
    $('span.hideSign').click(()=>{
        $('input#memNameJH').val('李婷婷');
        $('input#memPhoneJH').val('0975339003');
        $('input#memEmailJH').val('Lee@gmail.com');
        $('option:nth-child(6)').attr('selected', true);
        $('input#memAddressJH').val('中正路四段194巷9弄18號');
        $('input#memAccountJH').val('lee1229');
        $('input#memPwdJH').val('lee1229');
        $('input#memCheckPJH').val('lee1229');
    });


});

// document.addEventListener('click', (e)=>{
// console.log(e.target);
// });



