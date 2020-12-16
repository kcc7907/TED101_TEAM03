let buy= document.querySelector('.buy');
let title= document.querySelectorAll('.title');
title[1].classList.add('-onColor');

document.cookie = 'loging=A111200001';

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
        getCity(e){
        },
        focus(e){
            e.target.closest('div').querySelector('input').disabled = false;
            e.target.closest('div').querySelector('input').focus();
        },
        blur(e){
            e.target.closest('div').querySelector('input').disabled = true;
        },
        cardCode(e){
            if (e.which >= 48 && e.which <= 57 || e.which == 8 || e.which == 37 || e.which == 39) {
                if(e.target.value.length>2 &&e.which !== 8)e.preventDefault();
            }else{
                e.preventDefault();
            }
        },
        cardNum(e){
            let v= this.$refs;
            if (e.which >= 48 && e.which <= 57 || e.which == 8 || e.which == 37 || e.which == 39) {
            }else{
                e.preventDefault();
            }
            if(v.cardnum1.value.length===4)v.cardnum2.focus();
            if(v.cardnum2.value.length===4)v.cardnum3.focus();
            if(v.cardnum3.value.length===4)v.cardnum4.focus();
            if(v.cardnum4.value.length===4)e.preventDefault();
            this.cardmix = v.cardnum1.value+ v.cardnum2.value+v.cardnum3.value+v.cardnum4.value;
        },
        cardDate(e){
            if(e.target.value.length>3 &&e.which !== 8)e.preventDefault();
            if (e.which >= 48 && e.which <= 57 || e.which == 8 || e.which == 37 || e.which == 39) {
            }else{
                e.preventDefault();
            }
        },
        phoneInput(e){
            if(e.target.value.length==10 &&e.which !== 8)e.preventDefault();
            if (e.which >= 48 && e.which <= 57 || e.which == 8 || e.which == 37 || e.which == 39) {}else{
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
        totalPrice() {
            this.final = this.total + this.discount + this.Shipping;
        },
        gotest() {
            let x = confirm();
            if (x) location.href = "shoppingdone.html"
            else return
        },
        sendData(){
            let that = this;
            let list = JSON.parse(localStorage.getItem("lists"));
            left2.formData.products = list;
            axios.post('http://localhost:8787/php/20/sendData.php',left2.formData).then(res => {
                console.log(res.data);
        })
        },
    },
    mounted() {
        let list = JSON.parse(localStorage.getItem("lists"));
        if(!list)this.proTotal = list.length;
        this.discount = parseInt(localStorage.getItem("discount"));
        list.forEach((a,b) => {
            this.total+=parseInt(a.prd_price);
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

// window.addEventListener('beforeunload',()=>{
//     localStorage.removeItem("lists");
// });


