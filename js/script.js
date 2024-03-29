// Import Owl Carousel library
// import '../node_modules/owl.carousel';
// import $ from 'jquery'; // Import jQuery



// Initialize Owl Carousel
$(document).ready(function(){
  $('.global-section-left .owl-carousel').owlCarousel({
    loop: true
    , margin: 0
    , mouseDrag: true
    , autoplay: true
    // , nav: true
    , responsive: {
        0: {
            items: 2
        }
        , 600: {
            items: 3
        }
        , 1000: {
            items: 6
        }
    },
    rewind: true 
    ,rtl: true
  });

  $('.global-section-right .owl-carousel').owlCarousel({
    loop: true
    , margin: 0
    , mouseDrag: true
    , autoplay: true
    , nav: true
    , dots: true
    , responsive: {
        0: {
            items: 2
        }
        , 600: {
            items: 3
        }
        , 1000: {
            items: 7
        }
    },
    rewind: true 
    // ,rtl: true
  });


  $('.burger-strip').on('click', function (e) {
    var $this = $(this);
    e.preventDefault();
    toggleMenu();
  });

  $('.dropdown-nav').on('click', function (e) {
    console.log("saDszdzsdfzf");
    var $this = $(this);
    e.preventDefault();
    dropdown();
  });

  $(document).on('keydown', function (e) {
    if (e.keyCode === 27) { // Check if the "Esc" key is pressed
        if ($('body').hasClass('menu-open')) {
            toggleMenu();
        }
    }
  });


  function dropdown(){
    var $body = $('body');
    var $dropdown = $('.dropdown-nav');
    var $dropdown_list = $('.dropdown-list');

    if ($body.hasClass('menu-open')) {
        $dropdown.removeClass('active');
        $dropdown_list.removeClass('active');
        $dropdown_list.each(function (i) {
            var $menuItem = $(this);
            setTimeout(function () {
                $menuItem.removeClass('open');
            }, i * 100);
        });
        setTimeout(function () {
            $('.bauen-header').removeClass('bauen-wrap-show');
            $body.removeClass('menu-open');
        }, 300);
    } else {
        $('.bauen-header').addClass('bauen-wrap-show');
        $dropdown.addClass('active');
        $dropdown_list.addClass('active');
        $body.addClass('menu-open');
        setTimeout(function () {
            $dropdown_list.each(function (i) {
                var $menuItem = $(this);
                setTimeout(function () {
                    $menuItem.addClass('open');
                }, i * 100);
            });
        }, 200);
    }
  }

  function toggleMenu() {

    var $body = $('body');
    var $menuToggle = $('.links-menu');
    var $menuItems = $('.bauen-header  ul > li');

    if ($body.hasClass('menu-open')) {
        $menuToggle.removeClass('active');
        $menuItems.each(function (i) {
            var $menuItem = $(this);
            setTimeout(function () {
                $menuItem.removeClass('open');
            }, i * 100);
        });
        setTimeout(function () {
            $('.bauen-header').removeClass('bauen-wrap-show');
            $body.removeClass('menu-open');
        }, 300);
    } else {
        $('.bauen-header').addClass('bauen-wrap-show');
        $menuToggle.addClass('active');
        $body.addClass('menu-open');
        setTimeout(function () {
            $menuItems.each(function (i) {
                var $menuItem = $(this);
                setTimeout(function () {
                    $menuItem.addClass('open');
                }, i * 100);
            });
        }, 200);
    }
  }

});
