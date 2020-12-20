
let app2 = new Vue({
    el:'#app2',
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








