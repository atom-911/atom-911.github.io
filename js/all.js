$(document).ready(function(){
    new WOW().init();
    $("body").niceScroll();
    // loading
    $(window).on('load', function() {
        $('.loading').delay(3000).fadeOut('fast');
     });
      // count text
    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    count = function(start, value, id) {
        var localStart = start;
        setInterval( function() {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            }
        },10);
    }
    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j)
    }
    
    // scroll active
    var posNav = $('.menu').offset().top 
    $(window).on("scroll",function(){
        var pos = $(document).scrollTop() 
        if(pos >= posNav)
        {
            $('.btt').addClass("active")
             $('nav').addClass("scaleMenu")
        }
        else
        {
            $('.btt').removeClass("active")
             $('nav').removeClass("scaleMenu")
             
        }

        $('nav .menu ul li').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.data("link"));
            if (refElement.offset().top - 60 <= pos) {
                $('nav .menu ul li').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    
    })  
// active click
    $("#home .bg .content a").click (function (){
       
        $("html,body").animate({ scrollTop: $("#contact").offset().top }, 1000); 
        event.preventDefault();
    })
    $('.open-nav').bind({
        
        mousedown : function(){
            $('.open-nav').css( "transform","translateX(-10px) translateY(-50%) rotate(45deg)" )
        },
        mouseout : function(){
            $('.open-nav').css( "transform","translateX(0px) translateY(-50%) rotate(45deg)" )
         
        },
        mouseup : function(){
            $('.open-nav').css( "transform","translateX(0px) translateY(-50%) rotate(45deg)"  )
            $('.menu-responsive ul li a').removeClass('active-list')
               $('.menu-responsive').addClass('show-menu')
           } 
    })
    $('.menu-responsive ul li:last-child a').click(function(){
    $('.menu-responsive').removeClass('show-menu') 
        event.preventDefault();
    }) 

    $('.menu-responsive ul li a:not(.menu-responsive ul li:last-child a)').click(function(){
       
        $('.menu-responsive ul li a').removeClass('active-list')
        $(this).addClass('active-list')
        let target = $(this).data("link");
        $('html,body').stop().animate({
        scrollTop: $(target).offset().top
        }, 1000);    
        event.preventDefault();
    })


    $('.btt i').click(function(){
        $("html,body").animate({ scrollTop: 0 }, 1000); 
    })

   $(' nav .menu ul li ').click(function() {
    $('nav .menu ul li').removeClass('active')
    $(this).addClass("active")
    let target = $(this).data("link");
        $('html,body').stop().animate({
        scrollTop: $(target).offset().top - 40
        }, 1000);    
        event.preventDefault();
   })

//    filter
    $('.block-content ul li a').click(function(){
        $('.block-content ul li a').removeClass('active')
        $(this).addClass("active")
        var group = $(this).data("filter")
        if(group == '.all'){
            $('.column').isotope({
                filter: "*"
                });
        }
        else{
            $('.column').isotope({
                filter: group
                }); 
        }
    
    })
    // fancybox
    $('.fancybox').fancybox();


    // submit form
    var submit = $("button[type='submit']");
    submit.click(function(e)
    {   
    e.preventDefault();
    var data = $('form#google-form').serialize();
    var name = $('#name').val();
    var phone = $('#phone').val();
    var email = $('#email').val();
    if (name == '' || phone == '' || email == ''){
        alert('Please fill in the information (*)');                 
    }
    else{
        $.ajax({
            type : 'get', 
            url : 'https://script.google.com/macros/s/AKfycbyYiNm-OUSsBY8UGGwajJM9qQgZ13P44CSdaapLwT71q-or8rIh/exec',
            dataType:'json',
            data : data
        });
    
        alert('Thank you !');                
    }
            
    });
    // https://script.google.com/macros/s/AKfycbyYiNm-OUSsBY8UGGwajJM9qQgZ13P44CSdaapLwT71q-or8rIh/exec

    // Slick slider
    
    var sickPrimary = {
    autoplay: true,
    autoplaySpeed: 2400,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    asNavFor: '.text-slider',
    centerMode: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
    }

    var sickSecondary = {
    autoplay: true,
    autoplaySpeed: 2400,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1800,
    cssEase: 'cubic-bezier(.84, 0, .08, .99)',
    asNavFor: '.image-slider',
    prevArrow: $('.prev'),
    nextArrow: $('.next')
    }

    $('.image-slider').slick(sickPrimary);
    $('.text-slider').slick(sickSecondary);
    
})  
