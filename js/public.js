function myBrowser(){
   var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
   var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
   var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
   var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
   var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
   if (isIE) {
      var IE5 = IE55 = IE6 = IE7 = IE8 = false;
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var fIEVersion = parseFloat(RegExp["$1"]);
      IE55 = fIEVersion == 5.5;
      IE6 = fIEVersion == 6.0;
      IE7 = fIEVersion == 7.0;
      IE8 = fIEVersion == 8.0;
      if (IE55) {
         return "IE55";
      }
      if (IE6) {
         return "IE6";
      }
      if (IE7) {
         return "IE7";
      }
      if (IE8) {
         return "IE8";
      }
   }//isIE end
   if (isFF) {
      return "FF";
   }
   if (isOpera) {
      return "Opera";
   }
}//myBrowser() end
//以下是调用上面的函数
if (myBrowser() == "FF") {
   alert("我是 Firefox");
}
if (myBrowser() == "Opera") {
   alert("我是 Opera");
}
if (myBrowser() == "Safari") {
   alert("我是 Safari");
}
if (myBrowser() == "IE55") {
   alert("我是 IE5.5");
}
if (myBrowser() == "IE6") {
   alert("我是 IE6");
}
if (myBrowser() == "IE7") {
   alert("我是 IE7");
}

/*-*-*-*-*-*-*-*-*-*-*-*-*-*- 顶部微信/新浪分享 -*-*-*-*-*-*-*-*-*-*-*-*-*-*/
$("header .top .left a").mouseenter(function(){
   $(this).stop().animate({
      top:"-24px"
   },100);
}).mouseleave(function(){
   $(this).stop().animate({
      top:"0px"
   },500);
});
/*-*-*-*-*-*-*-*-*-* 头部搜索栏右侧点击更改placeholder事件 *-*-*-*-*-*-*-*-*-*/
$(".top_nav").find("li").find("a").click(function(){
   var title = this.innerHTML;
   $(".top_nav_title").text(title)
});
/*-*-*-*-*-*-*-*-*-*-*-*-*-* nav右侧下拉菜单 *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*/
$(".account_center").mouseenter(function(){
   $(this).find(".glyphicon").addClass("animateUP");
   $(".user_info").stop().slideDown();
}).mouseleave(function(){
   $(this).find(".glyphicon").removeClass("animateUP");
   $(".user_info").stop().slideUp();
});

$(".user_btn").mouseenter(function(){
   $(this).find("span").css("color","#fff");
   if($(this).find("img").attr("src") == "images/icon/icon_user_center_a.png"){
      $(this).find("img").attr("src","images/icon/icon_user_center_b.png");
   }else{
      $(this).find("img").attr("src","images/icon/icon_trusts_c.png");
   }
}).mouseleave(function(){
   $(this).find("span").css("color","#f27f00");
   if($(this).find("img").attr("src") == "images/icon/icon_user_center_b.png"){
      $(this).find("img").attr("src","images/icon/icon_user_center_a.png");
   }else{
      $(this).find("img").attr("src","images/icon/icon_trusts_a.png");
   }

});
/*-*-*-*-*-*-*-*-*-*-*-*-* 搜索查询-选项列表-展开/收起按钮 *-*-*-*-*-*-*-*-*-*/
$(".search_list").mouseenter(function(){
	$(this).find(".glyphicon").addClass("animateUP");
	$(".search_list").find("ul").stop().slideDown();
}).mouseleave(function(){
	$(this).find(".glyphicon").removeClass("animateUP");
	$(".search_list").find("ul").stop().slideUp();
});
$(".quick_search").find("a").click(function(){
	var quickTxt = $(".quick_search").find("a").text();
	$(".info_search").val(quickTxt)
});
/*-*-*-*-*-*-*-*-*-*-*-*-*-* 右侧内容-机构报单-分页 *-*-*-*-*-*-*-*-*-*-*-*-*/
$(".page_btn").find("a").mouseover(function(){
   $(this).stop().animate({
      "top": -33
   },100)
}).mouseout(function(){
   $(this).stop().animate({
      "top":0
   },100)
});
/*-*-*-*-*-*-*-*-*-*-*-*-* 机构-会员中心-显示更多 *-*-*-*-*-*-*-*-*-*-*-*-*-*/
$(".add_table_btn").find("a").mousemove(function(){
   $(this).find(".glyphicon").addClass("add_btn_animate");
}).mouseout(function(){
   $(this).find(".glyphicon").removeClass("add_btn_animate");
})
$(".add_table_btn").find("a").click(function(){
   var tableHeight = parseInt($(".appointment").css("height"));
   $(".appointment").stop().animate({
      "height":(tableHeight + 460)
   })
});
/*-*-*-*-*-*-*-*-*-**-*-* 机构会员中心左侧导航菜单 *-*-*-*-*-*-*-*-*-*-*-*-*-*/
$(".menu_title_off").mouseenter(function(){
   if (myBrowser() == "IE8") {
      $(this).find("a").css("color","#f27f00");
      $(this).find(".icon_a").css("display","block");
      $(this).find(".icon_b").css("display","none");
   }else{
      $(this).find("a").stop().animate({
         color:'#f27f00'
      },300);
      $(this).find(".icon_a").stop().animate({
         opacity: 1,
         filter: "alpha(opacity = 100)"
      },300);
      $(this).find(".icon_b").stop().animate({
         opacity: 0,
         filter: "alpha(opacity = 0)"
      },300);
   }
}).mouseleave(function(){
   if (myBrowser() == "IE8") {
      $(this).find("a").css("color","#333333");
      $(this).find(".icon_a").css("display","none");
      $(this).find(".icon_b").css("display","block");
   }else{
      $(this).find("a").stop().animate({
         color:'#333333'
      },300);
      $(this).find(".icon_b").stop().animate({
         opacity: 1,
         filter: "alpha(opacity = 100)"
      },300);
      $(this).find(".icon_a").stop().animate({
         opacity: 0,
         filter: "alpha(opacity = 0)"
      },300);
   }
});
$(".list_title").mouseenter(function(){
   $(this).find(".glyphicon").addClass("animateUP");
   if (myBrowser() == "IE8") {
      $(this).find(".menu_header").css("color","#ffffff");
      $(this).find(".icon_c").css("display","block");
      $(this).find(".icon_b").css("display","none");
   }else{
      $(this).find(".menu_header").stop().animate({
         color:'#ffffff'
      },300);
      $(this).find(".icon_c").stop().animate({
         opacity: 1,
         filter: "alpha(opacity = 100)"
      },300);
      $(this).find(".icon_b").stop().animate({
         opacity: 0,
         filter: "alpha(opacity = 0)"
      },300);
   }
}).mouseleave(function(){
   $(this).find(".glyphicon").removeClass("animateUP");
   if (myBrowser() == "IE8") {
      $(this).find(".menu_header").css("color","#333333");
      $(this).find(".icon_c").css("display","none");
      $(this).find(".icon_b").css("display","block");
   }else{
      $(this).find(".menu_header").stop().animate({
         color:'#333333'
      },300);
      $(this).find(".icon_b").stop().animate({
         opacity: 1,
         filter: "alpha(opacity = 100)"
      },300);
      $(this).find(".icon_c").stop().animate({
         opacity: 0,
         filter: "alpha(opacity = 0)"
      },300);
   }
});
$(".list_title").click(function(){
   $(".menu_list").find(".menu_down_list").stop().slideUp();
   $(".menu_list").find(".glyphicon").attr("class","glyphicon glyphicon-chevron-up");
   $(this).siblings(".menu_down_list").stop().slideDown();
   $(this).find(".glyphicon").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
});
$(".menu_on .list_title").mouseover(function () {
   if (myBrowser() == "IE8") {
      $(this).find("span").css("color","#fff");
      $(this).find(".menu_header_on").css("color","#fff");
   }else{
      $(this).find("span").stop().animate({
         color:'#fff'
      },300);
      $(this).find(".menu_header_on").stop().animate({
         color:'#fff'
      },300);
   }
}).mouseout(function(){
   if (myBrowser() == "IE8") {
      $(this).find("span").css("color","#f27f00");
      $(this).find(".menu_header_on").css("color","#f27f00");
   }else{
      $(this).find("span").stop().animate({
         color:'#f27f00'
      },300);
      $(this).find(".menu_header_on").stop().animate({
         color:'#f27f00'
      },300);
   }
});
/*-*-*-*-*-*-*-*-*-*-*-* 产品系列卡片-下载/收藏/邮件 *-*-*-*-*-*-*-*-*-*-*-*-*/
$(".card_img_header").find("a").mouseover(function(){
   $(this).stop().animate({
      marginTop: "-27px"
   },100)
})
$(".card_img_header").find("a").mouseout(function(){
   $(this).stop().animate({
      marginTop: "0px"
   },100)
})
$(".product_img_header").find("a").mouseover(function(){
   $(this).stop().animate({
      marginTop: "-27px"
   },100)
})
$(".product_img_header").find("a").mouseout(function(){
   $(this).stop().animate({
      marginTop: "0px"
   },100)
});
/*-*-*-*-*-*-*-*-*-*-*-* 系统消息-消息通知-删除消息事件 *-*-*-*-*-*-*-*-*-*-*-*/
$(".notice_news").find("li").mouseenter(function(){
   if (myBrowser() == "IE8") {
      $(this).css("borderColor","#f27f00");
      $(this).find(".glyphicon").css("color","#f27f00");
   }else{
      $(this).stop().animate({
         borderColor:'#f27f00'
      },300);
      $(this).find(".glyphicon").stop().animate({
         color:'#f27f00'
      },300);
   }
}).mouseleave(function(){
   if (myBrowser() == "IE8") {
      $(this).css("borderColor","#dddddd");
      $(this).find(".glyphicon").css("color","#999999");
   }else{
      $(this).stop().animate({
         borderColor:'#dddddd'
      },300);
      $(this).find(".glyphicon").stop().animate({
         color:'#999999'
      },300);
   }
});
$(".notice_news").find(".glyphicon").click(function(){
   $(this).parents("li").remove();
});
/*-*-*-*-*-*-*-*-*-*-*-* 产品详情底部-下载/收藏/邮件 *-*-*-*-*-*-*-*-*-*-*-*-*/
$(".icon_down").mouseover(function () {
   $(this).find("img").attr("src","images/icon/icon_down_a.png")
}).mouseout(function () {
   $(this).find("img").attr("src","images/icon/icon_down_b.png")
});
$(".icon_star").mouseover(function () {
   $(this).find("img").attr("src","images/icon/icon_star_a.png")
}).mouseout(function () {
   $(this).find("img").attr("src","images/icon/icon_star_b.png")
});
$(".icon_email").mouseover(function () {
   $(this).find("img").attr("src","images/icon/icon_email_a.png")
}).mouseout(function () {
   $(this).find("img").attr("src","images/icon/icon_email_b.png")
});
/*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* 搜索查询选项列表 *-*-*-*-*-*-*-*-*-*-*-*-*-*/

$(".options_row_a").find("a").bind({
   click:function(){
      $(this).parents(".options_row_a").find("a").removeClass("active");
      $(this).addClass("active");
   }
});
$(".options_row_b").find("a").bind({
   click:function(){
      $(this).parents(".options_row_b").find("a").removeClass("active");
      $(this).addClass("active");
   }
});
$(".options_row_c").find("a").bind({
   click:function(){
      $(this).parents(".options_row_c").find("a").removeClass("active");
      $(this).addClass("active");
   }
});
$(".options_row_d").find("a").bind({
   click:function(){
      $(this).parents(".options_row_d").find("a").removeClass("active");
      $(this).addClass("active");
   }
});
$(".options_row_e").find("a").bind({
   click:function(){
      $(this).parents(".options_row_e").find("a").removeClass("active");
      $(this).addClass("active");
   }
});
$(".options_row_f").find("a").bind({
   click:function(){
      $(this).parents(".options_row_f").find("a").removeClass("active");
      $(this).addClass("active");
   }
});
$(".options_row_g").find("a").bind({
   click:function(){
      $(this).parents(".options_row_g").find("a").removeClass("active");
      $(this).addClass("active");
   }
});
$(".options_row_h").find("a").bind({
   click:function(){
      $(this).parents(".options_row_h").find("a").removeClass("active");
      $(this).addClass("active");
   }
});
$(".options_row_i").find("a").bind({
   click:function(){
      $(this).parents(".options_row_i").find("a").removeClass("active");
      $(this).addClass("active");
   }
});
$(".options_row_j").find("a").bind({
   click:function(){
      $(this).parents(".options_row_j").find("a").removeClass("active");
      $(this).addClass("active");
   }
});
$(".options_row_k").find("a").bind({
   click:function(){
      $(this).parents(".options_row_k").find("a").removeClass("active");
      $(this).addClass("active");
   }
});
$(".options_row_l").find("a").bind({
   click:function(){
      $(this).parents(".options_row_l").find("a").removeClass("active");
      $(this).addClass("active");
   }
});
$(".options_row_m").find("a").bind({
   click:function(){
      $(this).parents(".options_row_m").find("a").removeClass("active");
      $(this).addClass("active");
   }
});
$(".options_row_n").find("a").bind({
   click:function(){
      $(this).parents(".options_row_n").find("a").removeClass("active");
      $(this).addClass("active");
   }
});
$(".options_row_o").find("a").bind({
   click:function(){
      $(this).parents(".options_row_o").find("a").removeClass("active");
      $(this).addClass("active");
   }
});

/*-*-*-*-*-*-*-*-*-*-*-* jquery-placeholder插件 *-*-*-*-*-*-*-*-*-*-*-*-*/
$(function(){
   $("input,textarea").placeholder();
});