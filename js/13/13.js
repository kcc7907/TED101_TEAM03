
let app = new Vue({
    el:'#app',
    data:{
        rp:'',
    },
    methods: {
    },
    mounted() {
        axios.post('../php/13/kc_getMember.php').then(res => {
            this.rp = res.data;
        })
    },
});

var btn = document.querySelector('#product_submit');

btn.addEventListener('click',()=>{
    let num = document.querySelector('#mem_num').value;
    let pwd = document.querySelector('#mem_pwd').value;
    let mname = document.querySelector('#mem_name').value;
    let phone = document.querySelector('#mem_phone').value;
    let email = document.querySelector('#mem_email').value;
    let city = document.querySelector('#mem_city').value;
    let addr = document.querySelector('#mem_addr').value;
    let mdate = document.querySelector('#mem_date').value;

    let obj = {
        num:num,
        pwd:pwd,
        mname: mname,
    }

    axios.post('../php/13/kc_memberInsert.php',obj).then(res => {
        console.log(res.data);
    });


});








