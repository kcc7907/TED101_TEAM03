function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie(cname) {
    var cookie_value = getCookie(cname);
    if (cookie_value != "") {
        return true;
    } else {
        return false;
    }
}

let pop = new Vue({
    el:'.kc_popup',
    data:{
        show:false,
        text:'',
        confirm:''
    },
    methods: {
        close(){
            this.show = false;
        },
        popSwitch(){
            switch (this.confirm) {
                case 'deleteChecked':
                    all.deleteAll();
                    break;
                case 'buy':
                    right.buy();
                    break;
                case 'sendData':
                    right.sendData();
                    break;
                case 'backShop':
                    location.href ="product/product.html";
                    break;
                case 'backCart':
                    location.href ="shoppingCart.php";
                    break;
            }
            this.show = false;
        }
    },
});