$(document).ready((function(){$(".jk_authority .menu .item").click((function(){$(this).parent("ul").parent("li").hasClass("-on")?($(this).parent("ul").children("li:not(.item)").slideUp(),$(".jk_authority .menu .item").parent("ul").parent("li").removeClass("-on")):($(this).parent("ul").children("li:not(.item)").slideDown(),$(".jk_authority .menu .item").parent("ul").parent("li").removeClass("-on"),$(this).parent("ul").parent("li").addClass("-on"),$(".jk_authority .menu .item").parent("ul").parent("li:not(.-on)").find("li:not(.item)").slideUp())})),$(".jk_authority .sideMenu .arrow>i").click((function(){$(this).hasClass("-rotate")?($(".jk_authority .sideMenu").removeClass("-close"),$(".jk_authority .sideMenu .arrow>i").removeClass("-rotate")):($(".jk_authority .sideMenu").addClass("-close"),$(".jk_authority .sideMenu .arrow>i").addClass("-rotate"))})),$("#jk_authorityChange").click((function(){$(".jk_authority main").css("display","block")})),$("#sam_authorityChange1").click((function(){$("main.sam_class").css("display","block")})),$("#sam_authorityChange2").click((function(){$("div.sam_jump").addClass("-on")})),$("img.cancel-icon").click((function(){$("div.sam_jump").addClass("-opacity-zero"),setTimeout((function(){$("div.sam_jump").removeClass("-on -opacity-zero")}),1e3)})),$("button.cancel").click((function(i){confirm("是否下架此商品")?(this.innerText="已下架",this.closest("tr").style.background="rgba(120,120,120,.3)"):i.preventDefault()})),$("#kcc_authorityChange1").click((function(){$("main.kcc_class").css("display","block")})),$("#kcc_authorityChange2").click((function(){$("div.kcc_jump").addClass("-on")})),$("img.cancel-icon").click((function(){$("div.kcc_jump").addClass("-opacity-zero"),setTimeout((function(){$("div.kcc_jump").removeClass("-on -opacity-zero")}),1e3)})),$("#jane_authorityChange1").click((function(){$("main.jane_class").css("display","block")}))}));