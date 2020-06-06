$(document).ready(function(){

    $(".nav-menu").css("left" , "-100%");

    $(window).resize(function(){
        let width = $(window).width()
        if(width <= 768 ){
            $(".inner-section").css("height", "50vh");
            $(".inner-section").css("width", "100%");
            $(".pull-down-height").css("display", "block");
        }
        else{
            $(".inner-section").css("height", "100vh");
            $(".inner-section").css("width", "33.33%");
            $(".pull-down-height").css("display", "none");
        }
    })

	/* Menu Slide 
	------------------------------*/

	$( ".fa-times" ).hide();
     jQuery('.fa-bars').click(function(){
            $(".nav-menu").css("left" , "0%")
            $( ".fa-bars" ).hide();
            $( ".fa-times" ).show();        
    });

    jQuery(".fa-times" ).click(function() {
        let width = $(window).width();
        if(width <= 768){
            $(".nav-menu").css("left" , "-100%")
        }
        else{
            $(".nav-menu").css("left" , "-35%")
        }
            $( ".fa-times" ).hide();
            $( ".fa-bars" ).show();
          });

    $(".inner-section").mouseover(function(){
        let width = $(window).width();
        if(width > 768){
            let index = $(this).index();
            let x = $(".inner-section");
            // console.log(index);
            $(".inner-section").css("width", "24.995%");
            $(".inner-section").eq(index).css("width", "50%");
        	$(".inner-section").eq(index).find(".inner-caption").css("visibility","visible");
        }
    });

    $(".inner-section").mouseout(function(){
        let width = $(window).width();
        if(width > 768){
            $(".inner-section").css("width", "33.33%");
            $(".inner-section").find(".inner-caption").css("visibility", "hidden");
        }
    });

    $(".pull-down-height").click(function(){
        let width = $(window).width();
        console.log(width)
        if(width <= 768){
            let index = $(this).parent()
            console.log(index)
            $(".inner-section").css("height", "50vh");
            $(this).parent().css("height", "75vh");
            $(".inner-section").find(".inner-caption").css("visibility", "hidden");
            $(this).parent().find(".inner-caption").css("visibility","visible");
        }
    })
    
});