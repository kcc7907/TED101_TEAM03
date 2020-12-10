let delAll= document.querySelector('.delAll');
let checkAll= document.querySelector('.checkAll');
let title= document.querySelectorAll('.title');
title[0].classList.add('-onColor');

let list = [
    {
        prd_id : 'c001',
        num : '1'
    },
    {
        prd_id : 't001',
        num : '2'
    },
    {
        prd_id : 'b003',
        num : '3'
    },
    {
        prd_id : 'c003',
        num : '1'
    },
    {
        prd_id : 't005',
        num : '1'
    }
];
localStorage.clear();
localStorage.setItem("lists", JSON.stringify(list));

let right = new Vue({
    el:'#right',
    data:{
        total:0,
        discount:0,
        Shipping:0,
        final:0,
        proTotal:0
    },
    methods: {
        buy(){
            let numAll=0;
            left.rp.forEach((a,b) => {
                let x =document.querySelectorAll('.num')
                numAll+=parseInt(x[b].value);
                console.log(numAll);
            });



            let x =confirm();
            if(x)location.href ="shoppingorder.html"
            else return
        },
        // totalPrice(){
        //     this.final =this.total+this.discount+this.Shipping;
        // }
    },
    created() {
        let list = JSON.parse(localStorage.getItem("lists"));
        if(!list)return;
        this.proTotal = list.length;
    },
    // mounted(){
    //     this.final = this.total+this.discount;
    // },
    watch: {
        total(){ this.final = this.total+this.discount}
    },
});

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
        proTotal:0,
        discount_list:[],
        discount_inner:[],
        discount_specie:[],
        disA:false,
        disB:false,
        disShow:false
    },
    // mounted() {
    created() {
        let list = JSON.parse(localStorage.getItem("lists"));
        if(!list)return false;
        this.proTotal = list.length;
        list.forEach((a, b) => {
                this.prdid.push(a.prd_id);
        });
        //product
        axios.post('http://localhost:8787/php/20/getProduct.php', this.prdid).then(res => {
            this.rp = res.data;
            this.rp.forEach((a,b) => {
                right.total+=parseInt(a.PRD_PRICE);
            });
        }).catch(err=>{
            if (err.response) {
                console.log(err.response.status)
            } else if (err.request) {
                console.log(err.request)
            } else {
                console.log('Error', err.message)
            }
        });
        //discount
        axios.post('http://localhost:8787/php/20/getDiscount.php').then(res => {
            this.discount_list = res.data;
            this.discount_list.forEach((a,b) => {
                this.discount_specie.push(a.DIS_ID);
                this.discount_inner.push(a.DIS_PRODUCT_ID1);
                this.discount_inner.push(a.DIS_PRODUCT_ID2);
            });
            let sp1,sp2;
            this.discount_inner.forEach((a,b) => {
                let getc = this.rp.filter((q,w)=>{
                    return q.PRD_NAME == a;
                })
                if(getc.length){
                    if(!sp1){
                        sp1=getc[0].DISCOUNT_ID;
                    }else if(sp1 === getc[0].DISCOUNT_ID){
                        sp1+=getc[0].DISCOUNT_ID;
                    }else if(!sp2){
                        sp2 = getc[0].DISCOUNT_ID;
                    }else{ sp2 += getc[0].DISCOUNT_ID; }
                }
            });
            if(sp1.length>1)this.disA=true;
            if(sp2.length>1)this.disB=true;
        });
    },
    watch: {
        disA(){if(this.disA==true)right.discount -= 500},
        disB(){
            if(this.disB==true)right.discount -= 2500;
            right.final = right.total+right.discount;
        },
    },
});

Vue.component('myList', {
    data() {
        return {
            num: 1,
        };
    },
    props: ['mycheck', 'prdId', 'url', 'prdName', 'prdPrice', 'discountId','prdMtl'],
    template:
        `<li class="list">
                <input type="checkbox" class="pick" :checked="mycheck">
                <div class="picbox">
                    <div class="imgbox">
                        <img :src="url" class="pic">
                        <div class="tag" v-show="discountId">
                            <p>{{discountId}}</p>
                        </div>
                    </div>
                </div>
                <div class="discountbox">
                    <div class="discount" v-show="discountId">
                        <div class="tag">
                            <p>{{discountId}}</p>
                        </div>
                        <p>{{discountId=='A'?'狂熱桌椅組':'跳樓桌椅組'}}</p>
                    </div>
                </div>
                <div class="info">
                    <div class="procduct_name">
                        <p>{{prdName}}</p>
                    </div>
                    <div class="material" v-show="prdMtl">
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
            if(this.num > 1){
                this.num--;
                right.total = this.num * this.prdPrice + right.total;}
        },
        btnr() {
            this.num++;
            right.total += parseInt(this.prdPrice) ;
        },
        deleteList(e) {
            let list = JSON.parse(localStorage.getItem("lists"));
            let newList= [];
            list.forEach(a=>{
                if(this.prdId != a.prd_id){
                    newList.push(a);
                }
            });
            localStorage.setItem("lists", JSON.stringify(newList));
            this.$destroy();
            this.$el.parentNode.removeChild(this.$el);
            right.total = right.total- (this.prdPrice * this.num);
        },
    },
});

let dis =
[
    {
        A:['雨豆','天鵝']
    },
    {
        B:['舒服','日常']
    }
];
let dis2 =
[
    {
        DIS_AMOUNT:500,
        DIS_ID:'A',
        DIS_PRODUCT_ID1:"雨豆"
    },
    {
        DIS_AMOUNT:500,
        DIS_ID:'A',
        DIS_PRODUCT_ID1:"天鵝"
    },
    {
        DIS_AMOUNT:500,
        DIS_ID:"B",
        DIS_PRODUCT_ID1:"舒服"
    },
    {
        DIS_AMOUNT:500,
        DIS_ID:"B",
        DIS_PRODUCT_ID1:"日常"
    }
];
