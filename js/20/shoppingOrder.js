let buy= document.querySelector('.buy');
let title= document.querySelectorAll('.title');
title[1].classList.add('-onColor');

document.cookie = 'loging=A111200001';

// 取得 cookie 的值
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// 檢查某 cookie 是否存在
function checkCookie(cname) {
    var cookie_value = getCookie(cname);
    if (cookie_value != "") {
        return true;
    } else {
        return false;
    }
}

let left2 = new Vue({
    el:'#left2',
    data:{
        members:[],
        memName: '',
        addrs:'',
        cardBox:false,
        remit:false,
        addressBox:false,
        selected:'居住縣市',
        area:'',
        formData:{
            fname:'',
            fphone:'',
            fadd:'',
            payment:'',
            products:[],
            total:0,
        }
    },
    methods: {
        getCity(e){
            console.log(e.target.value);
        }
    },
    created() {
        let cookie = getCookie('loging');
        axios.post('http://localhost:8787/php/20/getMember.php', {ID: cookie}).then(res => {
            this.members = res.data;
            this.formData.fadd = res.data[0].MEM_CITY + res.data[0].MEM_ADDRESS;
            this.formData.fphone = res.data[0].MEM_PHONE;
            this.memName = res.data[0].MEM_NAME;
        });
    },
    watch: {
        cardBox:function(e){
            if (this.cardBox === true) {
                this.remit=false;
                this.area = '已付款';
            }
        },
        remit:function(e){
            if (this.remit === true) {
                this.cardBox=false;
                this.area = '未付款';
            }
        },
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
    },
    mounted() {
        let list = JSON.parse(localStorage.getItem("lists"));
        this.proTotal = list.length;
    },
});