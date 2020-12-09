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
Vue.config.keyCodes = {
    f1: 112,
    up: [38, 87],
    "insert-mode": [],
};
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
        // modified:{
        //     namebtn:'',
        // },
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
            if(v.cardnum1.value.length===4)v.cardnum2.focus()
            if(v.cardnum2.value.length===4)v.cardnum3.focus()
            if(v.cardnum3.value.length===4)v.cardnum4.focus()
            if(v.cardnum4.value.length===4)e.preventDefault();
        },
        cardDate(e){
            if(e.target.value.length>3 &&e.which !== 8)e.preventDefault();
            if (e.which >= 48 && e.which <= 57 || e.which == 8 || e.which == 37 || e.which == 39) {
            }else{
                e.preventDefault();
            }
        },
    },
    created() {
        let cookie = getCookie('loging');
        axios.post('http://localhost:8787/php/20/getMember.php', {ID: cookie}).then(res => {
            this.members = res.data;
            this.formData.fadd = res.data[0].MEM_CITY + res.data[0].MEM_ADDRESS;
            this.formData.fphone = res.data[0].MEM_PHONE;
            this.formData.fname = res.data[0].MEM_NAME;
        });
    },
    watch: {
        cardBox(){
            if (this.cardBox === true) {
                this.remit=false;
                this.area = '已付款';
            }
        },
        remit(){
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
