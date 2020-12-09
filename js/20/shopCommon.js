
// buy.addEventListener('mouseenter',()=>{
//     buy.classList.add('-hover');
// })


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
        buy(){
            let x =confirm();
            if(x)location.href ="shoppingorder.html"
            else return
        },
        totalPrice(){
            this.final =this.total+this.discount+this.Shipping;
        }
    },
    mounted() {
        let list = JSON.parse(localStorage.getItem("lists"));
        this.proTotal = list.length;
    },
});