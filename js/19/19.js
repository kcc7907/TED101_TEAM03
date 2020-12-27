// let className = document.getElementsByClassName("className");
// let className2 = document.getElementsByClassName("className2");
// for(let i = 0; i < className.length; i++){
//     className[i].addEventListener("click",function(){
//         if(className2.classList.contains("on")){
//             className2.classList.remove("on");
//         }else{

//             className2.classList.add("on");
//         }
//     });
// }

// part1-1
let name11 = document.getElementsByClassName("name11")[0];
let part11 = document.getElementsByClassName("part11")[0];
let title11 = document.getElementsByClassName("title11")[0];
// name11[0].addEventListener("click", function(){
//     alert();
// });
name11.addEventListener("click",function(){
    if(part11.classList.contains("on")){
        part11.classList.remove("on");
        title11.innerText = "＋ 關於商品";
    }else{
        part11.classList.add("on");
        title11.innerText = "－ 關於商品";
    }
});


let name111 = document.getElementsByClassName("name111")[0];
let part111 = document.getElementsByClassName("part111")[0];
let title111 = document.getElementsByClassName("title111")[0];
name111.addEventListener("click",function(){
    if(part111.classList.contains("on")){
        part111.classList.remove("on");
        title111.innerText = "＋ 我在救世宅可以買到那些商品?";
    }else{
        part111.classList.add("on");
        title111.innerText = "－ 我在救世宅可以買到那些商品?";
    }
});


let name112 = document.getElementsByClassName("name112")[0];
let part112 = document.getElementsByClassName("part112")[0];
let title112 = document.getElementsByClassName("title112")[0];
name112.addEventListener("click",function(){
    if(part112.classList.contains("on")){
        part112.classList.remove("on");
        title112.innerText = "＋ 如何知道我想購買的商品有沒有貨?";
    }else{
        part112.classList.add("on");
        title112.innerText = "－ 如何知道我想購買的商品有沒有貨?";
    }
});


let name113 = document.getElementsByClassName("name113")[0];
let part113 = document.getElementsByClassName("part113")[0];
let title113 = document.getElementsByClassName("title113")[0];
name113.addEventListener("click",function(){
    if(part113.classList.contains("on")){
        part113.classList.remove("on");
        title113.innerText = "＋ 產品品質如何?有沒有品質保證?";
    }else{
        part113.classList.add("on");
        title113.innerText = "－ 產品品質如何?有沒有品質保證?";
    }
});



// part1-2
let name12 = document.getElementsByClassName("name12")[0];
let part12 = document.getElementsByClassName("part12")[0];
let title12 = document.getElementsByClassName("title12")[0];
name12.addEventListener("click",function(){
    if(part12.classList.contains("on")){
        part12.classList.remove("on");
        title12.innerText = "＋ 商品購買後問題";
    }else{
        part12.classList.add("on");
        title12.innerText = "－ 商品購買後問題";
    }
});


let name121 = document.getElementsByClassName("name121")[0];
let part121 = document.getElementsByClassName("part121")[0];
let title121 = document.getElementsByClassName("title121")[0];
name121.addEventListener("click",function(){
    if(part121.classList.contains("on")){
        part121.classList.remove("on");
        title121.innerText = "＋ 購買傢俱後可以提供組裝服務嗎?";
    }else{
        part121.classList.add("on");
        title121.innerText = "－ 購買傢俱後可以提供組裝服務嗎?";
    }
});


let name122 = document.getElementsByClassName("name122")[0];
let part122 = document.getElementsByClassName("part122")[0];
let title122 = document.getElementsByClassName("title122")[0];
name122.addEventListener("click",function(){
    if(part122.classList.contains("on")){
        part122.classList.remove("on");
        title122.innerText = "＋ 買到的商品如果有瑕疵怎麼辦?";
    }else{
        part122.classList.add("on");
        title122.innerText = "－ 買到的商品如果有瑕疵怎麼辦?";
    }
});


let name123 = document.getElementsByClassName("name123")[0];
let part123 = document.getElementsByClassName("part123")[0];
let title123 = document.getElementsByClassName("title123")[0];
name123.addEventListener("click",function(){
    if(part123.classList.contains("on")){
        part123.classList.remove("on");
        title123.innerText = "＋ 是否提供運送服務?";
    }else{
        part123.classList.add("on");
        title123.innerText = "－ 是否提供運送服務?";
    }
});


let name124 = document.getElementsByClassName("name124")[0];
let part124 = document.getElementsByClassName("part124")[0];
let title124 = document.getElementsByClassName("title124")[0];
name124.addEventListener("click",function(){
    if(part124.classList.contains("on")){
        part124.classList.remove("on");
        title124.innerText = "＋ 已購買的商品是否能退貨?";
    }else{
        part124.classList.add("on");
        title124.innerText = "－ 已購買的商品是否能退貨?";
    }
});

// part1-3
let name13 = document.getElementsByClassName("name13")[0];
let part13 = document.getElementsByClassName("part13")[0];
let title13 = document.getElementsByClassName("title13")[0];
name13.addEventListener("click",function(){
    if(part13.classList.contains("on")){
        part13.classList.remove("on");
        title13.innerText = "＋ 我們商品跟其他傢俱哪裡不同";
    }else{
        part13.classList.add("on");
        title13.innerText = "－ 我們商品跟其他傢俱哪裡不同";
    }
});


// part2-1
let name21 = document.getElementsByClassName("name21")[0];
let part21 = document.getElementsByClassName("part21")[0];
let title21 = document.getElementsByClassName("title21")[0];
name21.addEventListener("click",function(){
    if(part21.classList.contains("on")){
        part21.classList.remove("on");
        title21.innerText = "＋ 救世宅是否可使用振興三倍卷?";
    }else{
        part21.classList.add("on");
        title21.innerText = "－ 救世宅是否可使用振興三倍卷?";
    }
});


// part2-2
let name22 = document.getElementsByClassName("name22")[0];
let part22 = document.getElementsByClassName("part22")[0];
let title22 = document.getElementsByClassName("title22")[0];
name22.addEventListener("click",function(){
    if(part22.classList.contains("on")){
        part22.classList.remove("on");
        title22.innerText = "＋ 線上購物付款方式?";
    }else{
        part22.classList.add("on");
        title22.innerText = "－ 線上購物付款方式?";
    }
});


// part2-3
let name23 = document.getElementsByClassName("name23")[0];
let part23 = document.getElementsByClassName("part23")[0];
let title23 = document.getElementsByClassName("title23")[0];
name23.addEventListener("click",function(){
    if(part23.classList.contains("on")){
        part23.classList.remove("on");
        title23.innerText = "＋ 線上購物發票問題?";
    }else{
        part23.classList.add("on");
        title23.innerText = "－ 線上購物發票問題?";
    }
});

let name231 = document.getElementsByClassName("name231")[0];
let part231 = document.getElementsByClassName("part231")[0];
let title231 = document.getElementsByClassName("title231")[0];
name231.addEventListener("click",function(){
    if(part231.classList.contains("on")){
        part231.classList.remove("on");
        title231.innerText = "＋ 線上購物提供那些發票選擇?";
    }else{
        part231.classList.add("on");
        title231.innerText = "－ 線上購物提供那些發票選擇?";
    }
});


let name232 = document.getElementsByClassName("name232")[0];
let part232 = document.getElementsByClassName("part232")[0];
let title232 = document.getElementsByClassName("title232")[0];
name232.addEventListener("click",function(){
    if(part232.classList.contains("on")){
        part232.classList.remove("on");
        title232.innerText = "＋ 一筆訂單可以開立多張發票嗎?";
    }else{
        part232.classList.add("on");
        title232.innerText = "－ 一筆訂單可以開立多張發票嗎?";
    }
});



// part3-1
let name31 = document.getElementsByClassName("name31")[0];
let part31 = document.getElementsByClassName("part31")[0];
let title31 = document.getElementsByClassName("title31")[0];
name31.addEventListener("click",function(){
    if(part31.classList.contains("on")){
        part31.classList.remove("on");
        title31.innerText = "＋ 忘記帳號或密碼怎麼辦?";
    }else{
        part31.classList.add("on");
        title31.innerText = "－ 忘記帳號或密碼怎麼辦?";
    }
});


// part3-2
let name32 = document.getElementsByClassName("name32")[0];
let part32 = document.getElementsByClassName("part32")[0];
let title32 = document.getElementsByClassName("title32")[0];
name32.addEventListener("click",function(){
    if(part32.classList.contains("on")){
        part32.classList.remove("on");
        title32.innerText = "＋ 帳號被盜用時該如何處置?";
    }else{
        part32.classList.add("on");
        title32.innerText = "－ 帳號被盜用時該如何處置?";
    }
});


// part4-1
let name41 = document.getElementsByClassName("name41")[0];
let part41 = document.getElementsByClassName("part41")[0];
let title41 = document.getElementsByClassName("title41")[0];
name41.addEventListener("click",function(){
    if(part41.classList.contains("on")){
        part41.classList.remove("on");
        title41.innerText = "＋ 救世宅的聯絡方式?";
    }else{
        part41.classList.add("on");
        title41.innerText = "－ 救世宅的聯絡方式?";
    }
});


// part4-2
let name42 = document.getElementsByClassName("name42")[0];
let part42 = document.getElementsByClassName("part42")[0];
let title42 = document.getElementsByClassName("title42")[0];
name42.addEventListener("click",function(){
    if(part42.classList.contains("on")){
        part42.classList.remove("on");
        title42.innerText = "＋ 如何報名比賽?比賽須知?";
    }else{
        part42.classList.add("on");
        title42.innerText = "－ 如何報名比賽?比賽須知?";
    }
});




let select1 = document.getElementsByClassName("select1")[0];
let select2 = document.getElementsByClassName("select2")[0];
let select3 = document.getElementsByClassName("select3")[0];
let select4 = document.getElementsByClassName("select4")[0];
let select5 = document.getElementsByClassName("select5")[0];
let aaa = document.getElementsByClassName("aaa")[0];
let bbb = document.getElementsByClassName("bbb")[0];
let ccc = document.getElementsByClassName("ccc")[0];
let ddd = document.getElementsByClassName("ddd")[0];
let eee = document.getElementsByClassName("eee")[0];

function reset(){
    aaa.classList.remove("on");
    bbb.classList.remove("on");
    ccc.classList.remove("on");
    ddd.classList.remove("on");
    eee.classList.remove("on");
    select1.classList.remove("on");
    select2.classList.remove("on");
    select3.classList.remove("on");
    select4.classList.remove("on");
    select5.classList.remove("on");
    select1.classList.remove("color");
    select2.classList.remove("color");
    select3.classList.remove("color");
    select4.classList.remove("color");
    select5.classList.remove("color");
}

select1.addEventListener("click",function(){

    if(!(select1.classList.contains("on"))){
    reset();
        select1.classList.add("color");
        select1.classList.add("on");
        bbb.classList.add("on");
        ccc.classList.add("on");
        ddd.classList.add("on");
        eee.classList.add("on");
    }else{
        select1.classList.remove("color");
        select1.classList.remove("on");
        bbb.classList.remove("on");
        ccc.classList.remove("on");
        ddd.classList.remove("on");
        eee.classList.remove("on");
    }
});

select2.addEventListener("click",function(){

    if(!(select2.classList.contains("on"))){
    reset();
        select2.classList.add("color");
        select2.classList.add("on");
        aaa.classList.add("on");
        ccc.classList.add("on");
        ddd.classList.add("on");
        eee.classList.add("on");
    }else{
        select2.classList.remove("color");
        select2.classList.remove("on");
        aaa.classList.remove("on");
        ccc.classList.remove("on");
        ddd.classList.remove("on");
        eee.classList.remove("on");
    }
});

select3.addEventListener("click",function(){

    if(!(select3.classList.contains("on"))){
    reset();
        select3.classList.add("color");
        select3.classList.add("on");
        aaa.classList.add("on");
        bbb.classList.add("on");
        ddd.classList.add("on");
        eee.classList.add("on");
    }else{
        select3.classList.remove("color");
        select3.classList.remove("on");
        aaa.classList.remove("on");
        bbb.classList.remove("on");
        ddd.classList.remove("on");
        eee.classList.remove("on");
    }
});

select4.addEventListener("click",function(){

    if(!(select4.classList.contains("on"))){
    reset();
        select4.classList.add("color");
        select4.classList.add("on");
        aaa.classList.add("on");
        bbb.classList.add("on");
        ccc.classList.add("on");
        eee.classList.add("on");
    }else{
        select4.classList.remove("color");
        select4.classList.remove("on");
        aaa.classList.remove("on");
        bbb.classList.remove("on");
        ccc.classList.remove("on");
        eee.classList.remove("on");
    }
});

select5.addEventListener("click",function(){

    if(!(select5.classList.contains("on"))){
        reset();
        select5.classList.add("color");
        select5.classList.add("on");
        aaa.classList.add("on");
        bbb.classList.add("on");
        ddd.classList.add("on");
        ccc.classList.add("on");
    }else{
        select5.classList.remove("color");
        select5.classList.remove("on");
        aaa.classList.remove("on");
        bbb.classList.remove("on");
        ddd.classList.remove("on");
        ccc.classList.remove("on");
    }
});



// let select1 = document.getElementsByClassName("select2");
// let aaa = document.getElementsByClassName("aaa")[0];
// let bbb = document.getElementsByClassName("bbb")[0];
// let ccc = document.getElementsByClassName("ccc")[0];
// let ddd = document.getElementsByClassName("ddd")[0];
// let eee = document.getElementsByClassName("eee")[0];
// for(let i = 0; i < select1.length; i++){
//     select1[i].addEventListener("click",function(){
//         if(bbb.classList.contains("on")){
//             aaa.classList.remove("on");
//             ccc.classList.remove("on");
//             ddd.classList.remove("on");
//             eee.classList.remove("on");
//         }else{
//             aaa.classList.add("on");
//             ccc.classList.add("on");
//             ddd.classList.add("on");
//             eee.classList.add("on");
//         }
//     });
// }
let first = document.getElementsByClassName("first")[0];
let second = document.getElementsByClassName("second")[0];
let third = document.getElementsByClassName("third")[0];
let fourth = document.getElementsByClassName("fourth")[0];
let fifth = document.getElementsByClassName("fifth")[0];
let part1 = document.getElementsByClassName("part1")[0];
let part2 = document.getElementsByClassName("part2")[0];
let part3 = document.getElementsByClassName("part3")[0];
let part4 = document.getElementsByClassName("part4")[0];
let paper1 = document.getElementsByClassName("paper1")[0];
let paper2 = document.getElementsByClassName("paper2")[0];
let paper3 = document.getElementsByClassName("paper3")[0];



if(window.innerWidth<=768){
first.addEventListener("click",function(){

    if(part1.classList.contains("on")){
        part1.classList.remove("on");
    }else{
        part1.classList.add("on");
    }
});

second.addEventListener("click",function(){

    if(part2.classList.contains("on")){
        part2.classList.remove("on");
    }else{
        part2.classList.add("on");
    }
});

third.addEventListener("click",function(){

    if(part3.classList.contains("on")){
        part3.classList.remove("on");
    }else{
        part3.classList.add("on");
    }
});

fourth.addEventListener("click",function(){

    if(part4.classList.contains("on")){
        part4.classList.remove("on");
    }else{
        part4.classList.add("on");
    }
});

fifth.addEventListener("click",function(){

    if(paper2.classList.contains("on")){
        paper2.classList.remove("on");
    }else{
        paper2.classList.add("on");
    }
});

fifth.addEventListener("click",function(){

    if(paper3.classList.contains("on")){
        paper3.classList.remove("on");

    }else{
        paper3.classList.add("on");
    }
});
}


var inputFile = document.getElementById('file-upload');
inputFile.addEventListener('change', function(event) {
  var fileData = event.target.files[0]; // 檔案資訊
});

var fileData = e.target.files[0]; // 檔案資訊
var fileName = fileData.name; // 檔案名稱
var fileType = fileData.type; // 檔案類型
var fileSize = Math.floor(fileData.size * 0.001); // 檔案大小轉成kb
var fileTime = fileData.lastModifiedDate;