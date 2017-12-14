jQuery(function($) {
    "use strict";

    var gamba = window.gamba || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/
    gamba.mainFunction = function() {

        


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
