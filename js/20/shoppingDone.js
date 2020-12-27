let title= document.querySelectorAll('.title');
title[2].classList.add('-onColor');

let text={
    done:'本次訂單已經完成，詳細訂單流程請至『會員中心』查詢。',
    wait:'目前尚未完成付款，匯款完成後，請等待1-2個工作天，系統會另行通知。'
}

let done = new Vue({
    el:'.done_wrap',
    data:{
        orderNum:'',
        payment:'',
        content:'',
        pay:'',
        done_list:[],
        total:0,
    },
    methods: {
        backShop(){
            location.href ="product/product.html"
        }
    },
    mounted() {
        let list = JSON.parse(localStorage.getItem("lists"));
        let total = localStorage.getItem("total");
        let payment = localStorage.getItem("payment");
        let orderNum = localStorage.getItem("orderNum");
        this.orderNum = orderNum;
        this.done_list = list;
        this.total = total;
        switch (payment) {
            case '信用卡':
                this.content = text.done;
                this.pay = '完成付款';
                this.payment = payment;
                break;
            case '匯款':
                this.content = text.wait;
                this.pay = '等待付款';
                this.payment = payment;
                break;
        }
        localStorage.clear();
    },
});