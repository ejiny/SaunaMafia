$(function() {
    $('#nav-toggle').on('click', function() {
    $('header').toggleClass('open');
    });
    });
$(function() {
        $('#gloval-nav a[href^="#"]').on('click', function() {
        $('header').toggleClass('open');

   });
    });
    $(function(){
        $('a[href^="#"]' + 'a:not(".carousel-control")').click(function(){
        var speed = 1500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
        });
        });
