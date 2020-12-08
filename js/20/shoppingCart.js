let delAll= document.querySelector('.delAll');
let checkAll= document.querySelector('.checkAll');
let title= document.querySelectorAll('.title');
title[0].classList.add('-onColor');
// let x = document.querySelectorAll('.pick');


// document.addEventListener('click',e=>console.log(e.target));
// let allCheck = ()=>{
//     console.log('test');
// }

// checkAll.addEventListener('click',()=>{
//     let x = document.querySelectorAll('.pick');
//     console.log(x);
//     if(checkAll.checked){
//         for(let a in x){
//             x[a].checked = true;
//         }
//     }else{
//         for(let a in x){
//             x[a].checked = false;
//         }
//     }
// });

// let buy= document.querySelector('.buy');

// buy.addEventListener('click',()=>{
//     location.href ="shoppingorder.html"
// });

let all = new Vue({
    el:'#all',
    data:{
    },
    methods: {
        deleteAll(){
            let ul = document.querySelector('.product');
            ul.innerHTML = '';
        },
        checkAll(e){
            e.target.checked==true?left.check=true:left.check=false;
        },
    },
});

let left = new Vue({
    el:'#list',
    data:{
        check:false,
        prdid:[],
        rp:[],
        proTotal:0
    },
    // mounted() {
    created() {
        let list = JSON.parse(localStorage.getItem("lists"));
        this.proTotal = list.length;
        list.forEach((a, b) => {
                this.prdid.push(a.prd_id);
            });
        axios.post('http://localhost:8787/php/20/getProduct.php', this.prdid).then(res => {
            this.rp = res.data;
        }).catch(err=>{
            if (err.response) {
                console.log(err.response.status)
            } else if (err.request) {
                console.log(err.request)
            } else {
                console.log('Error', err.message)
            }
        });
    },
    // mounted() {
    // },
});

Vue.component('myList', {
    data() {
        return {
            num: 1,
            price: 1000,
        };
    },
    props: ['check', 'prdId', 'url', 'prdName', 'prdPrice', 'discountId'],
    template:
        `<li class="list">
                <input type="checkbox" class="pick" v-model="check">
                <div class="picbox">
                    <div class="imgbox">
                        <img :src="url" class="pic">
                        <div class="tag">
                            <p>A</p>
                        </div>
                    </div>
                </div>
                <div class="discountbox">
                    <div class="discount">
                        <div class="tag">
                            <p>A</p>
                        </div>
                        <p>沙發優惠組</p>
                    </div>
                </div>
                <div class="info">
                    <div class="procduct_name">
                        <p>{{prdName}}</p>
                    </div>
                    <div class="material">
                        <p>黑色</p>
                    </div>
                    <div class="pricebox">
                        <p class="dollar">$</p>
                        <p class="price">{{prdPrice}}</p>
                    </div>
                </div>
                <div class="count">
                    <div class="totalbox">
                        <p class="dollar">$</p>
                        <p class="price_total">{{prdPrice}}</p>
                    </div>
                    <div class="numbox">
                        <div class="arrowl"><img src="../img/shoppincart/left-G.svg" alt="" @click='btnl'></div>
                        <input type="number" class="num" :value="num" disabled>
                        <div class="arrowr"><img src="../img/shoppincart/right-G.svg" alt="" @click='btnr'>
                        </div>
                    </div>
                </div>
                <img src="../img/shoppincart/trash.svg" alt="" class="trash" @click='deleteList'>
            </li>`,
    methods: {
        btnl(e) {
            this.num > 1 ? this.num-- : 1;
            right.total = this.num * this.price + right.total;
            right.totalPrice();
        },
        btnr() {
            this.num++;
            right.total = this.num * this.price + right.total;
            right.totalPrice();
        },
        deleteList(e) {
            e.target.closest('ul').removeChild(e.target.closest('li'));
        },
    },
});

let list = [
    {
        prd_id : 'b001',
        num : '1'
    },
    {
        prd_id : 'b002',
        num : '2'
    },
    {
        prd_id : 'b003',
        num : '3'
    }
];

localStorage.clear();
localStorage.setItem("lists", JSON.stringify(list));