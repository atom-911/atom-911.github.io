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
})  
