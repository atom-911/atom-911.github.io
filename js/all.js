$(document).ready(function(){
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
    $('.fancybox').fancybox();
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
