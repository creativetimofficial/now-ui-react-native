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


var transparent = true;
var big_image;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized,
  backgroundOrange = false,
  toggle_initialized = false;

var nowuiKit,
  $navbar,
  scroll_distance,
  oVal;

$(document).ready(function() {
  //  Activate the Tooltips
  $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

  // Activate Popovers and set color for popovers
  $('[data-toggle="popover"]').each(function() {
    color_class = $(this).data('color');
    $(this).popover({
      template: '<div class="popover popover-' + color_class + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    });
  });

  // Activate the image for the navbar-collapse

  $navbar = $('.navbar[color-on-scroll]');
  scroll_distance = $navbar.attr('color-on-scroll') || 500;

  // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.

  if ($('.navbar[color-on-scroll]').length != 0) {
    nowuiKit.checkScrollForTransparentNavbar();
    $(window).on('scroll', nowuiKit.checkScrollForTransparentNavbar)
  }

  if ($(window).width() >= 992) {
    big_image = $('.page-header-image[data-parallax="true"]');

    $(window).on('scroll', nowuiKitDemo.checkScrollForParallax);
  }

});

// Javascript just for Demo purpose, remove it from your project
nowuiKitDemo = {
  checkScrollForParallax: debounce(function() {
    var current_scroll = $(this).scrollTop();

    oVal = ($(window).scrollTop() / 3);
    big_image.css({
      'transform': 'translate3d(0,' + oVal + 'px,0)',
      '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-o-transform': 'translate3d(0,' + oVal + 'px,0)'
    });

  }, 6)

}

$(window).on('resize', function() {
  nowuiKit.initNavbarImage();
});

$(document).on('click', '.navbar-toggler', function() {
  $toggle = $(this);

  if (nowuiKit.misc.navbar_menu_visible == 1) {
    $('html').removeClass('nav-open');
    nowuiKit.misc.navbar_menu_visible = 0;
    $('#bodyClick').remove();
    setTimeout(function() {
      $toggle.removeClass('toggled');
    }, 550);
  } else {
    setTimeout(function() {
      $toggle.addClass('toggled');
    }, 580);
    div = '<div id="bodyClick"></div>';
    $(div).appendTo('body').click(function() {
      $('html').removeClass('nav-open');
      nowuiKit.misc.navbar_menu_visible = 0;
      setTimeout(function() {
        $toggle.removeClass('toggled');
        $('#bodyClick').remove();
      }, 550);
    });

    $('html').addClass('nav-open');
    nowuiKit.misc.navbar_menu_visible = 1;
  }
});

nowuiKit = {
  misc: {
    navbar_menu_visible: 0
  },

  checkScrollForTransparentNavbar: debounce(function() {
    if ($(document).scrollTop() > scroll_distance) {
      if (transparent) {
        transparent = false;
        $('.navbar[color-on-scroll]').removeClass('navbar-transparent');
      }
    } else {
      if (!transparent) {
        transparent = true;
        $('.navbar[color-on-scroll]').addClass('navbar-transparent');
      }
    }
  }, 17)
}

// Javascript just for Demo purpose, remove it from your project
nowuiKitDemo = {
  checkScrollForParallax: debounce(function() {
    var current_scroll = $(this).scrollTop();

    oVal = ($(window).scrollTop() / 3);
    big_image.css({
      'transform': 'translate3d(0,' + oVal + 'px,0)',
      '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-ms-transform': 'translate3d(0,' + oVal + 'px,0)',
      '-o-transform': 'translate3d(0,' + oVal + 'px,0)'
    });

  }, 6)

}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
};
