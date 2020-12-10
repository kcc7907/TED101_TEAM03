
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