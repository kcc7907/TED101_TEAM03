let delAll= document.querySelector('.delAll');
let checkAll= document.querySelector('.checkAll');
let title= document.querySelectorAll('.title');
title[0].classList.add('-onColor');

let list =
[
    {
        prd_id : 'c001',
        num : '3'
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
document.cookie = 'loging=A111200001';
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
        loginCheck(){
            if(checkCookie('loging')){
                pop.text = '是否確定購買';
                pop.show = true;
                pop.confirm = 'buy';
            }else{
                $('div#login').show().css('zIndex', '4');
                    $('div#login div.login').css({
                    'opacity':'1',
                    'top': '0',
                });
                setTimeout(() => {
                    logAni();
                }, 500);
                (function memBox() {
                    $('.icon >a , a.signLink').click(function (e) {
                        e.preventDefault();
                    });
                    $('a.signLink').click(function(){
                        signBox();
                        $('form input').css({
                            'backgroundColor': 'rgba(0, 0, 0, 0)',
                            'border': 'none',
                            'borderBottom': '1px solid #BDA79E',
                        });
                        $('form select').css('border' , '1px solid #BDA79E');
                        $('#alivebox').removeClass('bcgColor');
                    });
                    $('a.logLink').click(function(e){
                        backToLog();
                        $('form input').css({
                            'backgroundColor': 'rgba(0, 0, 0, 0)',
                            'border': 'none',
                            'borderBottom': '1px solid #BDA79E',
                        });
                        $('form select').css('border' , '1px solid #BDA79E');
                    });
                    $('div.closebtn').click(function(e){
                        let thisBtn = e.target;
                        closeLB(thisBtn);
                    });
                })();
            }
        },
        buy(){
            localStorage.removeItem("lists");
            let buy = document.querySelectorAll('.product li');
            let lists=[];
            buy.forEach((a,b) => {
                let obj ={
                    prd_id: a.getAttribute('data-id'),
                    num: a.getAttribute('data-num'),
                    prd_price: a.getAttribute('data-price')
                }
                lists.push(obj);
            });
            localStorage.setItem("lists", JSON.stringify(lists));
            localStorage.setItem("discount", this.discount);
            // let x =confirm();
            // if(x)location.href ="shoppingorder.html";
            // else return
            location.href ="shoppingorder.php";
        },
    },
    watch: {
        total(){ this.final = this.total+this.discount}
    },
});

let all = new Vue({
    el:'#all',
    data:{
    },
    methods: {
        delCheck(){
            pop.text = '是否刪除全部商品';
            pop.show = true;
            pop.confirm = 'deleteChecked';
        },
        deleteAll(e){
            let pick = document.querySelectorAll('.pick');
            let lists=[];
            pick.forEach((a,b) => {
                if(a.checked===true){
                    right.total-= a.closest('li').getAttribute('data-price')*a.closest('li').getAttribute('data-num');
                    a.closest('ul').removeChild(a.closest('li'));
                    right.proTotal -=a.closest('li').getAttribute('data-num');
                }else{
                    let obj ={
                    prd_id: a.closest('li').getAttribute('data-id'),
                    num: a.closest('li').getAttribute('data-num'),
                    }
                    lists.push(obj)
                }
            });
            localStorage.removeItem("lists");
            localStorage.setItem("lists", JSON.stringify(lists));
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
        disShow:false,
        disArrA:[],
        disArrB:[]
    },
    mounted() {
    // created() {
        let list = JSON.parse(localStorage.getItem("lists"));
        if(!list || list.length === 0){
            let list = document.querySelector('.left');
            list.style.borderBottom = '1px solid #465d4c'
            return;
        }
        list.forEach((a, b) => {
            this.prdid.push(a.prd_id);
            right.proTotal += parseInt(a.num);
        });
        //product
        axios.post('../php/20/getProduct.php', this.prdid).then(res => {
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
        //discount
        axios.post('../php/20/getDiscount.php').then(res => {
            this.discount_list = res.data;
            this.discount_list.forEach((a,b) => {
                this.discount_specie.push(a.DIS_ID);
                this.discount_inner.push(a.DIS_PRODUCT_ID1);
                this.discount_inner.push(a.DIS_PRODUCT_ID2);
            });
            let sp1,sp2;
            // if(this.rp.length==0)return;
            // console.log(rp.length);
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
            // if()
            // if()
            if(sp1.length>1)this.disA=true;
            if(sp2.length>1)this.disB=true;
            this.disArrA=sp1;
            this.disArrB=sp2;
        });
    },
    watch: {
        disA(){
            if(this.disA==true)right.discount -= 500;
            else right.discount +=500;
        },
        disB(){
            if(this.disB==true)right.discount -= 2500;
            else right.discount +=2500;

            right.final = right.total+right.discount;
        },
        disArrA(){
            if(this.disArrA.length<1)this.disA=false;
        },
        disArrB(){
            if(this.disArrB.length<1)this.disB=false;
        },
    },
});

Vue.component('myList', {
    data() {
        return {
            num: 1,
        };
    },
    props: ['mycheck', 'prdId', 'url', 'prdName', 'prdPrice', 'discountId', 'prdMtl','myindex'],
    template:
        `<li class="list" :data-id="prdId" :data-price="prdPrice" :data-num="num" :data-dis="discountId">
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
                    <div class="procduct_name" >
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
                right.total -= parseInt(this.prdPrice);
                right.proTotal--;
            }
        },
        btnr() {
            this.num++;
            right.total += parseInt(this.prdPrice) ;
            right.proTotal++;
        },
        deleteList(e) {
            let list = JSON.parse(localStorage.getItem("lists"));
            let newList= [];
            list.forEach(a=>{
                if(this.prdId != a.prd_id){
                    newList.push(a);
                }
            });
            switch (this.$el.getAttribute('data-dis')) {
                case 'A':
                    left.disArrA=left.disArrA.replace('A','')
                    break;
                case 'B':
                    left.disArrB=left.disArrB.replace('B','')
                    break;
            }
            localStorage.setItem("lists", JSON.stringify(newList));
            this.$destroy();
            this.$el.parentNode.removeChild(this.$el);
            right.total = right.total- (this.prdPrice * this.num);
            right.proTotal-=this.num;
        },
    },
    mounted() {
        let list = JSON.parse(localStorage.getItem("lists"));
        list.forEach((a,b)=>{
            if(this.prdId===a.prd_id)this.num=a.num;
        });
        right.total+=parseInt(this.prdPrice)*this.num;
    },
});