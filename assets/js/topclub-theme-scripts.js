jQuery(document).ready(function($) {
      'use strict';
    
    // Search Toggle
    $(function(){
        var $searchlink = $('#searchtoggl i');
        var $searchbar  = $('.searchbar');

        $('.menu-search-wrap a').on('click', function(e){
        e.preventDefault();

            if($(this).attr('id') == 'searchtoggl') {
                  $searchbar.slideToggle(300, function(){
                });
            }
        });
    });
    
    // Adding Lightbox
    $('a[data-rel^=lightcase]').lightcase();
    
    // Bootstrap Dropdown on Hover
    if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        function toggleDropdown (e) {
            var _d = $(e.target).closest('.dropdown'),
            _m = $('.dropdown-menu', _d);
          setTimeout(function(){
            var shouldOpen = e.type !== 'click' && _d.is(':hover');
            _m.toggleClass('show', shouldOpen);
            _d.toggleClass('show', shouldOpen);
            $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
          }, e.type === 'mouseleave' ? 0 : 0);
        }
        $('body')
          .on('mouseenter mouseleave','.dropdown',toggleDropdown)
          .on('click', '.dropdown-menu a', toggleDropdown);
    }
    
    // Sponsors Carousel
    $('.sponsors-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        items: 5,
        margin: 50,
        dots: false,
        navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        responsiveClass: true,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 2
            },
            767 : {
                items: 3
            },
            991 : {
                items: 4
            },
            1200 : {
                items: 5
            }
        }
    });
    
    $('.players-wrap').owlCarousel({
        loop: false,
        nav: true,
        items: 4,
        navContainer: '.players-nav-container',
        dots: false,
        navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        margin: 10,
        responsiveClass: true,
        responsive : {
            0 : {
                items: 1
            },
            480 : {
                items: 2
            },
            767 : {
                items: 3
            },
            991 : {
                items: 4
            },
            1200 : {
                items: 4
            }
        }
    });
    
    $('.shop-carousel').owlCarousel({
        loop: true,
        nav: true,
        items: 4,
        navContainer: '.shop-nav-container',
        dots: false,
        navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
        margin: 10,
        responsiveClass: true,
        responsive : {
            0 : {
                items: 1
            },
            550 : {
                items: 2
            },
            767 : {
                items: 2
            },
            991 : {
                items: 3
            },
            1200 : {
                items: 4
            }
        }
    });
    

    if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    
        jQuery('.afterload').addClass("hiddens").viewportChecker({
        classToAdd: 'visibles animated slideInUp',
        offset: 100
        });

        jQuery('.afterloadFadeIn').addClass("hiddens").viewportChecker({
        classToAdd: 'visibles animated fadeIn',
        offset: 100
        });
    }

    
});

