let buy= document.querySelector('.buy');
let title= document.querySelectorAll('.title');
title[1].classList.add('-onColor');

document.cookie = 'loging=A111200001';

creditCartTypes = {
        'VI': [new RegExp('^4[0-9]{12}([0-9]{3})?$'), new RegExp('^[0-9]{3}$'), true],
        'MC': [
            new RegExp('^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$'),
            new RegExp('^[0-9]{3}$'),
            true
        ],
        'JCB': [new RegExp('^35(2[8-9]|[3-8])\\d*$'), new RegExp('^[0-9]{3}$'), true],
};

let left2 = new Vue({
    el:'#left2',
    data:{
        members:[],
        memName: '',
        memLives:'',
        memCity:'',
        cardBox:false,
        remit:false,
        addressBox:false,
        freight:false,
        selected:'居住縣市',
        cardmix:'',
        formData:{
            fname:'',
            memid:'',
            fphone:'',
            fcity:'',
            fadd:'',
            payment:'',
            total:0,
            discount:0,
            products:[]
        }
    },
    methods: {
        focus(e){
            e.target.closest('div').querySelector('input').disabled = false;
            e.target.closest('div').querySelector('input').focus();
        },
        blur(e){
            e.target.closest('div').querySelector('input').disabled = true;
        },
        cardCode(e){
            if (e.which >= 48 && e.which <= 57 || e.which == 8 || e.which == 37 || e.which == 39 ||(e.which >= 96 && e.which <= 105)) {
                if(e.target.value.length>2 &&e.which !== 8)e.preventDefault();
            }else{
                e.preventDefault();
            }
        },
        cardNum(e){
            let v= this.$refs;
            if(e.which == 8){
            }else if (e.which >= 48 && e.which <= 57 || e.which == 37 || e.which == 39 ||(e.which >= 96 && e.which <= 105)) {
                if (v.cardnum1.value.length === 4) v.cardnum2.focus();
                if (v.cardnum2.value.length === 4) v.cardnum3.focus();
                if (v.cardnum3.value.length === 4) v.cardnum4.focus();
                if (v.cardnum4.value.length === 4) e.preventDefault();
                this.cardmix = v.cardnum1.value + v.cardnum2.value + v.cardnum3.value + v.cardnum4.value;
            }else{
                e.preventDefault();
            }
        },
        cardDate(e){
            if(e.target.value.length>3 &&e.which !== 8)e.preventDefault();
            if (e.which >= 48 && e.which <= 57 || e.which == 8 || e.which == 37 || e.which == 39 ||(e.which >= 96 && e.which <= 105)) {
            }else{
                e.preventDefault();
            }
        },
        phoneInput(e){
            if(e.target.value.length==10 &&e.which !== 8 )e.preventDefault();
            if (e.which >= 48 && e.which <= 57 || e.which == 8 || e.which == 37 || e.which == 39 ||(e.which >= 96 && e.which <= 105)) {
            }else{
                e.preventDefault();
            }
        },
        changAddr(){
        },
    },
    created() {
        let cookie = getCookie('loging');
        axios.post('../php/20/getMember.php', {ID: cookie}).then(res => {
            this.members = res.data;
            this.memLives = res.data[0].MEM_CITY + res.data[0].MEM_ADDRESS;
            this.memCity = res.data[0].MEM_CITY ;
            this.formData.fphone = res.data[0].MEM_PHONE;
            this.formData.fname = res.data[0].MEM_NAME;
            this.formData.memid = getCookie('loging');
        });
    },
    watch: {
        cardmix(){
            let visa = creditCartTypes['VI'][0].test(`${this.cardmix}`);
            let md = creditCartTypes['MC'][0].test(`${this.cardmix}`);
            let jcb = creditCartTypes['JCB'][0].test(`${this.cardmix}`);
            if(visa)this.$refs.imgV.style.setProperty('filter', 'grayscale(0%)');
            if(md)this.$refs.imgM.style.setProperty('filter', 'grayscale(0%)');
            if(jcb)this.$refs.imgJ.style.setProperty('filter', 'grayscale(0%)');
        },
        cardBox(){
            if (this.cardBox === true) {
                this.remit=false;
                this.area = '已付款';
                this.formData.payment = '已付款';
            }
        },
        remit(){
            if (this.remit === true) {
                this.cardBox=false;
                this.formData.payment = '未付款';
            }
        },
        freight(){
            if (this.freight === true) {
                this.addressBox=false;
                this.formData.fcity = this.members[0].MEM_CITY;
                this.formData.fadd = this.members[0].MEM_ADDRESS;
                switch (this.memCity) {
                    case '台北市':
                    case '新北市':
                    case '桃園市':
                        right.Shipping = 2000;
                        break;
                    case '基隆市':
                    case '新竹市':
                    case '新竹縣':
                    case '宜蘭縣':
                        right.Shipping = 3000;
                        break;
                    case '苗栗縣':
                    case '台中市':
                    case '彰化縣':
                    case '南投縣':
                    case '雲林縣':
                    case '嘉義市':
                    case '嘉義縣':
                    case '花蓮縣':
                        right.Shipping = 4000;
                        break;
                    case '台南市':
                    case '高雄市':
                    case '屏東縣':
                    case '台東縣':
                        right.Shipping = 5000;
                        break;
                }
            }else right.Shipping = 0;
        },
        addressBox(){
            if (this.addressBox === true) {
                this.freight=false;
                right.Shipping =0;
                this.formData.fadd='';
            }else right.Shipping = 0;
        },
        selected(){
            this.formData.fcity = this.selected;
            switch (this.selected) {
                    case '台北市':
                    case '新北市':
                    case '桃園市':
                        right.Shipping = 2000;
                        break;
                    case '基隆市':
                    case '新竹市':
                    case '新竹縣':
                    case '宜蘭縣':
                        right.Shipping = 3000;
                        break;
                    case '苗栗縣':
                    case '台中市':
                    case '彰化縣':
                    case '南投縣':
                    case '雲林縣':
                    case '嘉義市':
                    case '嘉義縣':
                    case '花蓮縣':
                        right.Shipping = 4000;
                        break;
                    case '台南市':
                    case '高雄市':
                    case '屏東縣':
                    case '台東縣':
                        right.Shipping = 5000;
                        break;
                }
        }
    },
});

let right = new Vue({
    el: '#right',
    data: {
        total: 0,
        discount: 0,
        Shipping: 0,
        final: 0,
        proTotal: 0
    },
    methods: {
        backCart(){
            pop.text = '是否返回購物車?';
            pop.show = true;
            pop.confirm = 'backCart';
        },
        totalPrice() {
            this.final = this.total + this.discount + this.Shipping;
        },
        sendCheck() {
            let v= left2.$refs;
            let check = false;
            let count =0;
            if(check===false){
                if(v.rname.value==''){
                    v.rname.classList.add('input_erro');
                }
                if(v.rphone.value==''){
                    v.rphone.classList.add('input_erro');
                }
                if(v.raddr.value==''){
                    v.raddr.classList.add('input_erro');
                }
                if(left2.cardBox==true){
                    let cards = document.querySelectorAll('.card_box input');
                    cards.forEach(a=>{
                        if(a.value=='')a.classList.add('input_erro');
                    })
                }
                if(left2.addressBox==true){
                    if(v.rfaddr.value==''){
                        v.rfaddr.classList.add('input_erro');
                    }
                    if(left2.selected=='居住縣市'){
                        document.querySelector('.freight_city').classList.add('input_erro');
                        count++;
                    }
                }
                let inputs = document.querySelectorAll('input');
                inputs.forEach(a => {
                    if(a.classList.contains('input_erro')){
                        count++;
                    }
                });
                if(left2.freight==true && left2.remit==true){
                    check=true;
                }else if(count==0 &&(left2.addressBox==true||left2.freight==true)&&(left2.cardBox==true||left2.remit==true)){
                    check=true;
                }else{
                    pop.text = '請正確填寫資料';
                    pop.show = true;
                }
            }
            if(check===true){
                pop.text = '是否確認完成訂單?';
                pop.show = true;
                pop.confirm = 'sendData';
            }
        },
        sendData(){
            let list = JSON.parse(localStorage.getItem("lists"));
            left2.formData.products = list;
            axios.post('../php/20/sendData.php',left2.formData).then(res => {
                localStorage.setItem("orderNum", res.data);
                localStorage.setItem("total", this.final);
                if(left2.remit)localStorage.setItem("payment", '匯款');
                if(left2.cardBox)localStorage.setItem("payment", '信用卡');
            }).then(()=>location.href ="shoppingdone.php")
        },
    },
    mounted() {
        let list = JSON.parse(localStorage.getItem("lists"));
        if(!list)this.proTotal = list.length;
        this.discount = parseInt(localStorage.getItem("discount"));
        list.forEach((a,b) => {
            this.total+=parseInt(a.prd_price);
            this.proTotal+=parseInt(a.num);
        });
        this.final = this.total+this.discount;
        left2.formData.discount = this.discount;
    },
    watch: {
        Shipping(){
            this.final= this.total+this.discount+this.Shipping;
        },
        final(){
            left2.formData.total = this.final;
        }
    },
});



