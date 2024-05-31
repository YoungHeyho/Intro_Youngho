$(document).ready(function(){
    $('.nav-item a').click(function(event){
        event.preventDefault();
        var target = $(this).attr('href');
        
        $('body>div').addClass('None').removeClass('Block');
        $(target).addClass('Block').removeClass('None');
    });
    $('#menu a').click(function(event){
        event.preventDefault();
        var target = $(this).attr('href');
        
        $('body>div').addClass('None').removeClass('Block');
        $(target).addClass('Block').removeClass('None');
    });
    
    $('.menubut').click(function(){
        $('#menu').slideToggle('500');
    });
});
