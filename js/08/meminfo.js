function memSetStyle(){$(window).width()<576?$(".jk_meminfo .pwd_warn").text("6~12字元"):$(".jk_meminfo .pwd_warn").text("密碼長度限制6~12字元")}function getCookie(e){let s=document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));return null!=s?unescape(s[2]):null}function delCookie(e){var s=new Date;s.setTime(s.getTime()-1);var a=getCookie(e);null!=a&&(document.cookie=e+"="+a+";expires="+s.toGMTString()+";path=/")}$(document).ready((function(){$("body").on("click","#sureGoHome",(function(){delCookie("loging"),location.href="home2D.php"})),sessionStorage.getItem("reset")&&(sessionStorage.removeItem("reset"),$("#jk_point").css("display","flex"),setTimeout((function(){$("#jk_point").fadeOut(1500,(function(){$("#jk_point").hide()}))}),1e3)),memSetStyle(),$(window).resize((function(){memSetStyle()})),$(".jk_meminfo form>div>div>span").click((function(e){$(this).hide();let s=e.target.className;if("btn_pwd"==s)$("#changePassword input").attr({value:"",disabled:!1,className:"able"}),$("#changePassword").css({display:"flex"}),$("#password").hide();else if("address"==s)$("input#address").attr("disabled",!1).focus(),$(".jk_meminfo #memberInfo select").attr("disabled",!1);else{let e=$("input#"+s);$(e).attr({disabled:!1,className:"able"}).focus()}$("#btn").css({display:"flex"})})),$(".jk_meminfo .input").focus((function(){$(this).css({backgroundColor:"#ddd"})})),$(".jk_meminfo .input").blur((function(){$(this).css({backgroundColor:"rgba(0,0,0,0)"})})),$("#phone").keydown((function(e){e.which>=48&&e.which<=57||8==e.which||46==e.which||37==e.which||39==e.which||13==e.which||e.preventDefault()})),$("#phone").keyup((function(e){let s=e.target.value.replace(/\D/g,"");e.target.value=s})),$("#memberInfo").submit((function(e){let s=!0,a=document.getElementById("email");$(a).removeClass("-error"),$('.jk_meminfo form>div>div>label[for="email"]+span.warn').remove(),""==a.value.trim()&&(s=!1,a.value="",$('.jk_meminfo label[for="email"]').after('<span class="warn" style="color:red;">*欄位不可為空</sapn>'),$(a).addClass("-error"));let r=document.getElementById("phone");$(r).removeClass("-error"),$('.jk_meminfo form>div>div>label[for="phone"]+span.warn').remove(),""==r.value&&(s=!1,$('.jk_meminfo label[for="phone"]').after('<span class="warn" style="color:red;">*欄位不可為空</sapn>'),$(r).addClass("-error"));let o=document.getElementById("name");$(o).removeClass("-error"),$('.jk_meminfo form>div>div>label[for="name"]+span.warn').remove(),""==o.value.trim()&&(s=!1,o.value="",$('.jk_meminfo label[for="name"]').after('<span class="warn" style="color:red;">*欄位不可為空</sapn>'),$(o).addClass("-error"));let n=document.getElementById("address");$(n).removeClass("-error"),$('.jk_meminfo form>div>div>label[for="address"]+span.warn').remove(),""==n.value.trim()&&(s=!1,n.value="",$('.jk_meminfo label[for="address"]').after('<span class="warn" style="color:red;">*欄位不可為空</sapn>'),$(n).addClass("-error"));let t=document.querySelectorAll("#changePassword input"),l=document.getElementById("changePassword");for(let e=0;e<t.length;e++)""==t[e].value.trim()?(s=!1,t[e].classList.contains("-error")?l.classList.contains("-er")||($('.jk_meminfo label[for="password"]').after('<span class="warn" style="color:red;">*欄位不可為空</sapn>'),$("#changePassword").addClass("-er")):(l.classList.contains("-er")||($('.jk_meminfo label[for="password"]').after('<span class="warn" style="color:red;">*欄位不可為空</sapn>'),$("#changePassword").addClass("-er")),t[e].classList.add("-error"))):(t[e].classList.remove("-error"),t[0].classList.contains("-error")||t[1].classList.contains("-error")||t[2].classList.contains("-error")||($("#changePassword").removeClass("-er"),$('.jk_meminfo form>div>div>label[for="password"]+span.warn').remove(),t[1].value===t[2].value?($("#changePassword").removeClass("-er"),$('.jk_meminfo form>div>div>label[for="password"]+span.warn').remove()):(s=!1,t[e].classList.contains("-error")?l.classList.contains("-er")?$('.jk_meminfo label[for="password"]+span').replace("欄位不可為空","確認密碼不正確"):($('.jk_meminfo label[for="password"]').after('<span class="warn" style="color:red;">*確認密碼不正確</sapn>'),$("#changePassword").addClass("-er")):(l.classList.contains("-er")?$('.jk_meminfo label[for="password"]+span').replace("欄位不可為空","確認密碼不正確"):($('.jk_meminfo label[for="password"]').after('<span class="warn" style="color:red;">*確認密碼不正確</sapn>'),$("#changePassword").addClass("-er")),t[2].classList.add("-error")))));s||e.preventDefault()})),document.getElementById("memberInfo").addEventListener("reset",(function(){$(".jk_meminfo form>div>div>span.warn").remove(),$("#changePassword").removeClass("-er"),$(".jk_meminfo form input.-error").removeClass("-error"),$(".jk_meminfo form>div>div>span:hidden").show(),$("#changePassword input").attr({value:"********"}),$("#changePassword").hide(),$("#btn").hide(),$("#password").show(),$('.jk_meminfo input[className="able"]').attr({disabled:!0,className:""})}))}));