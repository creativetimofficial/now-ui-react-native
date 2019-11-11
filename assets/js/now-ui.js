/*!

 =========================================================
 * Now UI Kit - v1.3.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
 
var big_image,navbar_initialized,nowuiKit,$navbar,scroll_distance,oVal,transparent=!0,transparentDemo=!0,fixedTop=!1,backgroundOrange=!1,toggle_initialized=!1;function debounce(o,a,n){var r;return function(){var l=this,t=arguments;clearTimeout(r),r=setTimeout(function(){r=null,n||o.apply(l,t)},a),n&&!r&&o.apply(l,t)}}$(document).ready(function(){$('[data-toggle="tooltip"], [rel="tooltip"]').tooltip(),$('[data-toggle="popover"]').each(function(){color_class=$(this).data("color"),$(this).popover({template:'<div class="popover popover-'+color_class+'" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'})}),$navbar=$(".navbar[color-on-scroll]"),scroll_distance=$navbar.attr("color-on-scroll")||500,0!=$(".navbar[color-on-scroll]").length&&(nowuiKit.checkScrollForTransparentNavbar(),$(window).on("scroll",nowuiKit.checkScrollForTransparentNavbar)),$(window).width()>=992&&(big_image=$('.page-header-image[data-parallax="true"]'),$(window).on("scroll",nowuiKitDemo.checkScrollForParallax))}),nowuiKitDemo={checkScrollForParallax:debounce(function(){$(this).scrollTop();oVal=$(window).scrollTop()/3,big_image.css({transform:"translate3d(0,"+oVal+"px,0)","-webkit-transform":"translate3d(0,"+oVal+"px,0)","-ms-transform":"translate3d(0,"+oVal+"px,0)","-o-transform":"translate3d(0,"+oVal+"px,0)"})},6)},$(window).on("resize",function(){nowuiKit.initNavbarImage()}),$(document).on("click",".navbar-toggler",function(){$toggle=$(this),1==nowuiKit.misc.navbar_menu_visible?($("html").removeClass("nav-open"),nowuiKit.misc.navbar_menu_visible=0,$("#bodyClick").remove(),setTimeout(function(){$toggle.removeClass("toggled")},550)):(setTimeout(function(){$toggle.addClass("toggled")},580),div='<div id="bodyClick"></div>',$(div).appendTo("body").click(function(){$("html").removeClass("nav-open"),nowuiKit.misc.navbar_menu_visible=0,setTimeout(function(){$toggle.removeClass("toggled"),$("#bodyClick").remove()},550)}),$("html").addClass("nav-open"),nowuiKit.misc.navbar_menu_visible=1)}),nowuiKit={misc:{navbar_menu_visible:0},checkScrollForTransparentNavbar:debounce(function(){$(document).scrollTop()>scroll_distance?transparent&&(transparent=!1,$(".navbar[color-on-scroll]").removeClass("navbar-transparent")):transparent||(transparent=!0,$(".navbar[color-on-scroll]").addClass("navbar-transparent"))},17)},nowuiKitDemo={checkScrollForParallax:debounce(function(){$(this).scrollTop();oVal=$(window).scrollTop()/3,big_image.css({transform:"translate3d(0,"+oVal+"px,0)","-webkit-transform":"translate3d(0,"+oVal+"px,0)","-ms-transform":"translate3d(0,"+oVal+"px,0)","-o-transform":"translate3d(0,"+oVal+"px,0)"})},6)};
