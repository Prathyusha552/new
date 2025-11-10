// JavaScript Document

/*  Fixed Header  */

$(window).scroll(function() {
    if ($(window).scrollTop() >= 30) {
        $('.header_div').addClass('fixed-header')
        $('.brandlogo').attr('src', 'https://www.sanskritischools.com/school/img/fixed_logo.png');
    } else {
        $('.header_div').removeClass('fixed-header')
        $('.brandlogo').attr('src', 'https://www.sanskritischools.com/school/img/logo.png');
    }
});

/*  Ends Here  */


/*  URL Activation  */

$(function() {
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $("#active_nav ul li a, .mobile_nav ul li a").each(function() {
        if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
            $(this).addClass("active")
    })
});

/*  Ends Here  */


/*  Mobile Navigation  */

$(document).ready(function() {
    $(".mobile_icon").click(function() {
        $(".mobile_div").addClass("right_0")
    });
    $(".nav_close").click(function() {
        $(".mobile_div").removeClass("right_0")
    });
});


/*  Ends Here  */


/*  Scroll to top  */

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(200)
    } else {
        $('#return-to-top').fadeOut(200)
    }
});
$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 500)
})

/*  Ends Here  */
