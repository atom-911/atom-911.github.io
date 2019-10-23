
$(document).ready(function() {
    $(".banner a").click(function() {  
        $('html,body').stop().animate({
        scrollTop: $("form").offset().top
        }, 1000);    
        event.preventDefault();
        });
        $('.fancybox').fancybox();
    var submit = $("button[type='submit']");
    submit.click(function(e)
        {   
        e.preventDefault();
        var data = $('form#google-form').serialize();
        var name = $('#name').val();
        var phone = $('#phone').val();
        if (name == '' || phone == ''){
            alert('Xin mời điền đầy đủ thông tin của quý khách ở mục có dấu (*)');                 
        }
        else{
            $.ajax({
                type : 'get', 
                url : 'https://script.google.com/macros/s/AKfycbyUvlSEG5GT0_8I-A3oDA6K5nYlnvprNSeoKbpXX810JzHyPgM/exec',
                dataType:'json',
                data : data
            });
        
            alert('Cám ơn quý khánh đã gửi thông tin. Nhân viên bán hàng sẽ sớm liên hệ với quý khách ! ');                
        }      
    });
  
});