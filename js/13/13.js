
let app = new Vue({
    el:'#app',
    data:{
        rp:'',
        formData:{
            mem_num:'',
            mem_pwd: '',
            mem_name: '',
            mem_phone: '',
            mem_email: '',
            mem_city: '',
            mem_addr: '',
            mem_date: ''
        }
    },
    methods: {
        send(){
            console.log(this.formData);
            axios.post('../php/13/kc_memberInsert.php',this.formData).then(res => {
                this.rp = res.data;
            });
            $('div.kcc_jump').addClass('-opacity-zero');
        }
    },
    mounted() {
        axios.post('../php/13/kc_getMember.php').then(res => {
            this.rp = res.data;
        })
    },
});

// var btn = document.querySelector('#product_submit');

// btn.addEventListener('click',()=>{
//     let num = document.querySelector('#mem_num').value;
//     let pwd = document.querySelector('#mem_pwd').value;
//     let mname = document.querySelector('#mem_name').value;
//     let phone = document.querySelector('#mem_phone').value;
//     let email = document.querySelector('#mem_email').value;
//     let city = document.querySelector('#mem_city').value;
//     let addr = document.querySelector('#mem_addr').value;
//     let mdate = document.querySelector('#mem_date').value;

//     let obj = {
//         num:num,
//         pwd:pwd,
//         mname: mname,
//     }

//     axios.post('../php/13/kc_memberInsert.php',obj).then(res => {
//         console.log(res.data);
//     });


// });








