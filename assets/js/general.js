$(document).ready(function(){

    $(".nav-menu").css("left" , "-100%");

    $(window).resize(function(){
        let width = $(window).width()
        if(width <= 768 ){
            $(".inner-section").css("height", "50vh");
            $(".inner-section").css("width", "100%");
        }
        else{
            $(".inner-section").css("height", "100vh");
            $(".inner-section").css("width", "33.33%");
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
        if(width <= 768){
            let index = $(this).index();
            $(".inner-section").css("width", "100%");
            $(".inner-section").eq(index).css("height", "75vh");
            $(".inner-section").css("height", "50vh");
    	    $(".inner-section").eq(index).find(".inner-caption").css("visibility","visible");
        }
        else{
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
        if(width <= 768){
            $(".inner-section").css("height", "50vh");
            $(".inner-section").find(".inner-caption").css("visibility", "hidden");
        }
        else{
            $(".inner-section").css("width", "33.33%");
            $(".inner-section").find(".inner-caption").css("visibility", "hidden");
        }

    });
    
});