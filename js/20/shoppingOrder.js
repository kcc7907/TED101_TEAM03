let buy= document.querySelector('.buy');
let title= document.querySelectorAll('.title');
title[1].classList.add('-onColor');
buy.addEventListener('click',()=>{
    location.href ="shoppingdone.html"
});

let left2 = new Vue({
    el:'#left2',
    data:{

    },
    methods: {
    },
    created() {
    },
});