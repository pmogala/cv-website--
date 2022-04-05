$(document).ready(function(){

    $('#Menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');

    });

    $(window).on('scroll load',function(){

        $(this).removeClass('fa-times');
        $('header').removeClass('toggle');

    });


    $('a[href*="#"').on('click' ,function(e){

        e.preventDefault();

        $('html, body').animate({

            scrollTop : $($(this).attr('href')).offset().top,

        },

        500,
        'linear'

        );

    });

});