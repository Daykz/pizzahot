jQuery(function($) {
    "use strict";

    var gamba = window.gamba || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/
    gamba.mainFunction = function() {

        // ----------------------- WOW-JS --------------------------- //
            new WOW().init();

        // ----------------------- DATEPICKER JS --------------------------- //
            // js for calendar
            $('.input-daterange, .archive-datepicker').datepicker({
                format: 'mm/dd/yy',
                maxViewMode: 0
            });

            // js for time
            $('.times-open').timepicker({ 
                'scrollDefault': 'now' 
            });

        // ----------------------- SLIDE BANNER --------------------------- //
            $('.background-slide').slick({
                dots: false,
                arrows: false,
                speed: 700,
                fade: true,
                autoplay: true,
                autoplaySpeed: 5000,
                cssEase: 'linear',
                pauseOnHover: false
            });
           
            $('.background-slide').on('afterChange', function(event, slick, currentSlide){
                $('.slick-active  .logo-images').addClass('animated fadeInDown');
                $('.slick-active  .group-btn-2').addClass('animated fadeInUp');
                $('.slick-active  .group-title').addClass('animated fadeInUp');
                $('.slick-active  .group-title-2').addClass('animated fadeInRight');
                $('.slick-active  .group-open-hours').addClass('animated fadeInRight');
                $('.slick-active  .btn-left').addClass('animated fadeInLeft');
                $('.slick-active  .btn-right').addClass('animated fadeInRight');
                $('.slick-active  .btn-center').addClass('animated zoomIn');
                $('.slick-active  .logo-images').removeClass('hidden');
                $('.slick-active  .group-btn-2').removeClass('hidden');
                $('.slick-active  .group-title').removeClass('hidden');
                $('.slick-active  .group-title-2').removeClass('hidden');
                $('.slick-active  .group-open-hours').removeClass('hidden');
                $('.slick-active  .btn-left').removeClass('hidden');
                $('.slick-active  .btn-right').removeClass('hidden');
                $('.slick-active  .btn-center').removeClass('hidden');
            });

            $('.background-slide').on('beforeChange', function(event, slick, currentSlide){
                $('.slick-active  .logo-images').removeClass('animated fadeInDown');
                $('.slick-active  .group-btn-2').removeClass('animated fadeInUp');
                $('.slick-active  .group-title').removeClass('animated fadeInUp');
                $('.slick-active  .group-title-2').removeClass('animated fadeInRight');
                $('.slick-active  .group-open-hours').removeClass('animated fadeInRight');
                $('.slick-active  .btn-left').removeClass('animated fadeInLeft');
                $('.slick-active  .btn-right').removeClass('animated fadeInRight');
                $('.slick-active  .btn-center').removeClass('animated zoomIn');
                $('.slick-active  .logo-images').addClass('hidden');
                $('.slick-active  .group-btn-2').addClass('hidden');
                $('.slick-active  .group-title').addClass('hidden');
                $('.slick-active  .group-title-2').addClass('hidden');
                $('.slick-active  .group-open-hours').addClass('hidden');
                $('.slick-active  .btn-left').addClass('hidden');
                $('.slick-active  .btn-right').addClass('hidden');
                $('.slick-active  .btn-center').addClass('hidden');
            });


        // ----------------------- SLIDE MENU --------------------------- //
            $('.special-menu .list-dish').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 500,
                dots: false,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 7000,
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            autoplay: false
                        }
                    },
                    {
                        breakpoint: 481,
                        settings: {
                            slidesToShow: 1,
                            autoplay: false
                        }
                    }
                ]
            });


        // ----------------------- SLIDE TESTIMONIAL --------------------------- //
            $('.slider-for').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  asNavFor: '.slider-nav'
            });
            $('.slider-nav').slick({
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  asNavFor: '.slider-for',
                  dots: false,
                  arrows: false,
                  centerMode: true,
                  focusOnSelect: true,
                  centerPadding: '0px'
            });


        // ----------------------- SLIDE OUR CHEFS  --------------------------- //
            $('.our-chefs-list').slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 4,
                speed: 900,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 8000,
                responsive: [
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoplay: false
                        }
                    },
                    {
                        breakpoint: 481,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false
                        }
                    }
                ]
            });


        // ----------------------- SLIDE INFOMATION  --------------------------- //
            $('.list-infomation').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 500,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 5000,
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoplay: false
                        }
                    },
                    {
                        breakpoint: 481,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false
                        }
                    }
                ]
            });


        // ----------------------- SLIDE GROUP LOGO  --------------------------- //
            $('.list-logo').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                speed: 500,
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 5000,
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 320,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });


        // ----------------------- FOOTER JS --------------------------- //
            // slide gallery footer
            $('.gamba-gallery .content-widget').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                speed: 500,
                dots: false,
                arrows:true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            autoplay: false
                        }
                    }
                ]
            });

            if ($(window).width() > 767) {
                $('.last-section').css('margin-bottom',$('.footer').height());
            }
    };

    gamba.event = function(){

        // js for calendar
        // set up time coming soon
        var target_date = new Date("December 30, 2016").getTime();
         
        // variables for time units
        var days, hours, minutes, seconds;
         
        var $days = $("#days"),
            $hours = $("#hours"),
            $minutes = $("#minutes"),
            $seconds = $("#seconds");
          
        var center = 0,
            canvas = document.getElementById('timer'),
            ctx = canvas.getContext("2d"),
            daySetup = {  
            },
            hourSetup = {
            },
            minSetup = {
            },
            secSetup = {
            },
            check = function(count, setup, ctx) {
                if (count < setup.old){
                  setup.counter++
                };
            };
         
        // update the tag with id "countdown" every 1 second
        setInterval(function () {
            // find the amount of "seconds" between now and target
            var current_date = new Date().getTime();
            var seconds_left = (target_date - current_date) / 1000;
         
            // do some time calculations
            days = parseInt(seconds_left / 86400);
            seconds_left = seconds_left % 86400;
             
            hours = parseInt(seconds_left / 3600);
            seconds_left = seconds_left % 3600;
             
            minutes = parseInt(seconds_left / 60);
            seconds = parseInt(seconds_left % 60);
             
            $days.text(days);
            $hours.text(hours);
            $minutes.text(minutes);
            $seconds.text(seconds);
        }, 1000);
    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        gamba.mainFunction();
        // gamba.event();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('load', function() {
    });

});
