$(document).ready(function(){
    $('.nav-item a').click(function(event){
        event.preventDefault();
        var target = $(this).attr('href');
        
        $('body>div').addClass('None').removeClass('Block');
        $(target).addClass('Block').removeClass('None');
    });
});