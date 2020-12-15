
$(document).ready(function () {
    //////////LIGHTBOX////////////////////////////
    $('#lightBox01').on('click', function () {
        $('div.blackBack').addClass('-on');
    });

    $('.cancel').on('click', function () {
        $('div.blackBack').addClass('-opacity-zero');

        setTimeout(function () {
            $('div.blackBack').removeClass('-on -opacity-zero');
        }, 1000);
    });

    $('#lightBox02').on('click', function () {
        $('div.blackBack2').addClass('-on');
    });

    $('.cancel').on('click', function () {
        $('div.blackBack2').addClass('-opacity-zero');

        setTimeout(function () {
            $('div.blackBack2').removeClass('-on -opacity-zero');
        }, 1000);
    });

    $('#lightBox03').on('click', function () {
        $('div.blackBack3').addClass('-on');
    });

    $('.cancel').on('click', function () {
        $('div.blackBack3').addClass('-opacity-zero');

        setTimeout(function () {
            $('div.blackBack3').removeClass('-on -opacity-zero');
        }, 1000);
    });


    /////////////////lightbox mobile/////////////////
    $('#lightBox01-mobile').on('click', function () {
        $('div.blackBack').addClass('-on');
    });

    $('.cancel-mobile').on('click', function () {
        $('div.blackBack').addClass('-opacity-zero');

        setTimeout(function () {
            $('div.blackBack').removeClass('-on -opacity-zero');
        }, 1000);
    });

    $('#lightBox02-mobile').on('click', function () {
        $('div.blackBack2').addClass('-on');
    });

    $('.cancel-mobile').on('click', function () {
        $('div.blackBack2').addClass('-opacity-zero');

        setTimeout(function () {
            $('div.blackBack2').removeClass('-on -opacity-zero');
        }, 1000);
    });

    $('#lightBox03-mobile').on('click', function () {
        $('div.blackBack3').addClass('-on');
    });

    $('.cancel-mobile').on('click', function () {
        $('div.blackBack3').addClass('-opacity-zero');

        setTimeout(function () {
            $('div.blackBack3').removeClass('-on -opacity-zero');
        }, 1000);
    });



    ///////////////尺寸圖 /運送 切換////////////////
    $('#size').on('click', function () {
        $('#bottomCad').css({
            display: 'flex',
        });
        $('#bottomDelivery').css({
            display: 'none',
        });
        $('#delivery').css({
            borderBottom: '0',
        });
        $('#size').css({
            borderBottom: '10px solid #bda79e',
        });
    });

    $('#delivery').on('click', function () {
        $('#delivery').css({
            borderBottom: '10px solid #bda79e',
        });
        $('#size').css({
            borderBottom: '0',
        });
        $('#bottomCad').css({
            display: 'none',
        });
        $('#bottomDelivery').css({
            display: 'flex',
        });
    });
    //////////////////////////slider/////////////////////////

    const sliderBox = document.querySelector('.slider');
    const slider = document.querySelectorAll('.slider img');

    const leftBtn = document.querySelector('#left');
    const rightBtn = document.querySelector('#right');

    //Counter
    let counter = 1;
    const size = slider[0].clientWidth;

    // console.log(size);

    // sliderBox.style.transform = 'translateX(' + (-size * counter) +'px)';
    function leftmove() {
        sliderBox.style.transition = "transform 0.3s ease-in-out";
        counter++;
        sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
    };
    //Button Listeners
    rightBtn.addEventListener('click', () => {
        if (counter >= slider.length - 1) return;
        sliderBox.style.transition = "transform 0.3s ease-in-out";
        counter++;
        sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    leftBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        sliderBox.style.transition = "transform 0.3s ease-in-out";
        counter--;
        sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    sliderBox.addEventListener('transitionend', () => {
        //console.log(slider[counter]);
        if (slider[counter].id === 'lastClone') {
            sliderBox.style.transition = 'none';
            counter = slider.length - 3;
            sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
        };
        if (slider[counter].id === 'firstClone') {
            sliderBox.style.transition = 'none';
            counter = slider.length - counter;
            sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
        };
    });


    setInterval(leftmove, 3000);
});

///////////////////////////////價錢///////////////
let money = document.querySelectorAll('h1.money');
let quantity = document.querySelectorAll('h1.quantity');
let up = document.querySelectorAll('img.up');
let down = document.querySelectorAll('img.down');

// console.log(up);
// console.log(money[0].getAttribute('data-price'));
// console.log(down);
// console.log(quantity[0].innerText);
let price = money[0].getAttribute('data-price');

function todoadd() {
    quantity[0].innerText = parseInt(quantity[0].innerText) + 1;
    quantity[1].innerText = parseInt(quantity[1].innerText) + 1;
    money[0].innerText = `$${quantity[0].innerText * price}`;
    money[1].innerText = `$${quantity[1].innerText * price}`;
};

function todoless() {
    if (parseInt(quantity[0].innerText) === 1) {
        return;
    } else {
        quantity[0].innerText = parseInt(quantity[0].innerText) - 1;
        quantity[1].innerText = parseInt(quantity[1].innerText) - 1;
        money[0].innerText = `$${quantity[0].innerText * price}`;
        money[1].innerText = `$${quantity[1].innerText * price}`;
    };
};
/////////////////////  第二種寫法/////////////////////////
// for (i = 0; i < down.length; i++) {
//     down[i].addEventListener('click', todoless);
// };
up[0].addEventListener('click', todoadd);
up[1].addEventListener('click', todoadd);
down[0].addEventListener('click', todoless);
down[1].addEventListener('click', todoless);


/////////////////////////  購買  綁定////////////////////////////////
///////////////////寫入假LOCAL STORAGE///////////
// let list =
//     [
//         {
//             prd_id: 'c001',
//             num: '3'
//         },
//         {
//             prd_id: 't001',
//             num: '2'
//         },
//         {
//             prd_id: 'b003',
//             num: '3'
//         },
//         {
//             prd_id: 'c003',
//             num: '1'
//         },
//         {
//             prd_id: 't005',
//             num: '1'
//         }
//     ];
// localStorage.clear();   
// localStorage.setItem("lists", JSON.stringify(list));

let btns = document.querySelectorAll('button.buy');
// console.log(btns);
let productId = btns[0].getAttribute('data-id');
// console.log(productId);

function setLocal() {
    let list = JSON.parse(localStorage.getItem("lists"));
    let lists = [];
    if (list) {
        list.forEach((item, index) => {
            if (item.prd_id === productId) {
                item.num = parseInt(item.num) + parseInt(quantity[0].innerText);
            }
        });
        lists = list;
    } else {
        let object = {
            prd_id: productId,
            num: parseInt(quantity[0].innerText),

        };
        lists.push(object);
    }
    localStorage.setItem("lists", JSON.stringify(lists));
}
btns[0].addEventListener('click', setLocal);
btns[1].addEventListener('click', setLocal);

/////////////////////////  收藏 綁定////////////////////////////////
let loveBtn = document.querySelectorAll('button.love');
console.log(loveBtn);
