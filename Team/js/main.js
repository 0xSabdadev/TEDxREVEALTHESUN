jQuery(document).ready(function ($) {

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Header fixed on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Real view height for mobile devices
  if (window.matchMedia("(max-width: 767px)").matches) {
    $('#intro').css({
      height: $(window).height()
    });
  }

  // Initiate the wowjs animation library
  new WOW().init();

  // Initialize Venobox
  $('.venobox').venobox({
    bgcolor: '',
    overlayColor: 'rgba(6, 12, 34, 0.85)',
    closeBackground: '',
    closeColor: '#fff'
  });

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (!$('#header').hasClass('header-fixed')) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Gallery carousel (uses the Owl Carousel library)
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });

  // Buy tickets select the ticket type on click
  $('#buy-ticket-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var ticketType = button.data('ticket-type');
    var modal = $(this);
    modal.find('#ticket-type').val(ticketType);
  })

  // custom code

});

// hhhh
$(document).ready(function () {
  "use strict";

  /* Swiper
	-------------------------------------------------------*/
  //initialize swiper when document ready
  var mySwiper = new Swiper(".swiper-container", {
    // Navigation arrows
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    slidesPerView: 2.7,
    centeredSlides: true,
    breakpoints: {
      1440: {
        slidesPerView: 2.6
      },
      1439: {
        slidesPerView: 1.45
      },
      1024: {
        slidesPerView: 1.45
      },
      1023: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 2
      },
      568: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      414: {
        slidesPerView: 1.09,
        spaceBetween: 3
      },
      320: {
        slidesPerView: 1.09,
        spaceBetween: 3
      }
    }
  });

  /* Info Card
	-------------------------------------------------------*/
  var $revealCardContentBtn = $(".sl--card-nav-container"),
    $contentContainer = $(
      ".sl-card-wrapper .sl--content-wrapper .sl--content-container"
    ),
    $navGFX = $(
      ".sl-card-wrapper .sl--content-wrapper .sl--card-nav-container .sl--content-btn .card-nav-gfx"
    );

  $revealCardContentBtn.on("click", function () {
    var parent = $(this).closest(".swiper-slide");

    // IC Container
    parent
      .siblings()
      .find($contentContainer)
      .removeClass("sl--card-reveal");
    parent
      .siblings()
      .find($contentContainer)
      .addClass("sl--card-hide");
    parent.find($contentContainer).toggleClass("sl--card-hide sl--card-reveal");

    // IC Nav wrapper
    parent
      .siblings()
      .find(".sl--content-wrapper")
      .removeClass("sl--content-wrapper-active");
    parent
      .siblings()
      .find(".sl--content-wrapper")
      .addClass("sl--content-wrapper-inactive");
    parent
      .find(".sl--content-wrapper")
      .toggleClass("sl--content-wrapper-inactive sl--content-wrapper-active");

    // IC Nav GFX
    parent
      .siblings()
      .find($navGFX)
      .removeClass("sl--close-card-info");
    parent
      .siblings()
      .find($navGFX)
      .addClass("sl--show-card-info");
    parent.find($navGFX).toggleClass("sl--show-card-info sl--close-card-info");
  });

  /* Hide content on slide change 
	-------------------------------------------------------*/
  mySwiper.on("onSlideChangeStart", function () {
    if ($contentContainer.hasClass("sl--card-reveal")) {
      var $CI_ContentWrapper = $(".sl--content-wrapper");

      $contentContainer.removeClass("sl--card-reveal");
      $contentContainer.addClass("sl--card-hide");
      $navGFX.removeClass("sl--close-card-info");
      $navGFX.addClass("sl--show-card-info");
      $CI_ContentWrapper.removeClass("sl--content-wrapper-active");
      $CI_ContentWrapper.addClass("sl--content-wrapper-inactive");
    }
  });

  // Media Query
  var windowWidth = $(window).width();
  if (windowWidth === 320) {}
  if (windowWidth === 375) {}
  if (windowWidth === 414) {}
  if (windowWidth === 768) {}
  if (windowWidth === 1024) {}
}); //END: $(document)