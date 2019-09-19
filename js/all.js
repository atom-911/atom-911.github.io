$(document).ready(function(){
   
    $(document).scroll(function(){
        var pos = $('body,html').scrollTop() ;
        
        if(pos >=580 )
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
            var refElement = $(currLink.attr("data"));
            if (refElement.position().top - 20 <= pos) {
                $('nav .menu ul li').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    
    })
    $('body').on({
        'touchmove': function(e) { 
            var pos = $('body,html').scrollTop() ;
        
            if(pos >=580 )
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
                var refElement = $(currLink.attr("data"));
                if (refElement.position().top - 20 <= pos) {
                    $('nav .menu ul li').removeClass("active");
                    currLink.addClass("active");
                }
                else{
                    currLink.removeClass("active");
                }
            });
        }
        });
    $('.btt i').click(function(){
        $("html,body").animate({ scrollTop: 0 }, 1000); 
    })
   $(' nav .menu ul li ').click(function() {
    $('nav .menu ul li').removeClass('active')
    $(this).addClass("active")
    let target = $(this).attr("data");
        $('html,body').stop().animate({
        scrollTop: $(target).offset().top
        }, 1000);    
        event.preventDefault();
   })
   $('.grid').isotope({
        // options
        itemSelector: '.grid-item'
      });
    $('.block-content ul li a').click(function(){
        $('.block-content ul li a').removeClass('active')
        $(this).addClass("active")
        var group = $(this).data("filter")
        if(group == '.all'){
            $('.grid').isotope({
                filter: "*"
                });
        }
        else{
            $('.grid').isotope({
                filter: group
                }); 
        }
    
    })
    // fancybox
    $('.fancybox').fancybox();

    // count text
    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
        if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
        }
        }, 0.5);
    }

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
})  
