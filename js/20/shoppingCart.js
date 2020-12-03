let delAll= document.querySelector('.delAll');
let checkAll= document.querySelector('.checkAll');

let allCheck = ()=>{
    console.log('test');
}

checkAll.addEventListener('click',()=>{
    let x = document.querySelectorAll('.pick');
    if(checkAll.checked){
        for(let a in x){
            x[a].checked = true;
        }
    }else{
        for(let a in x){
            x[a].checked = false;
        }
    }
});

let buy= document.querySelector('.buy');

buy.addEventListener('click',()=>{
    location.href ="shoppingorder.html"
});