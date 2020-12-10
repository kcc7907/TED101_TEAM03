
let app = new Vue({
    el:'#app',
    data:{
        rp:'',
    },
    methods: {
    },
    mounted() {
        axios.post('http://localhost:8787/php/20/getProduct.php', this.prdid).then(res => {
            this.rp = res.data;
        })
    },
});