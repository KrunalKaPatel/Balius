$(document).ready(function(){

	/* Menu Slide 
	------------------------------*/

	$( ".fa-times" ).hide();
     jQuery('.fa-bars').click(function(){
            $(".nav-menu").css("left" , "0%")
            $( ".fa-bars" ).hide();
            $( ".fa-times" ).show();        
    });

    jQuery(".fa-times" ).click(function() {
        $(".nav-menu").css("left" , "-35%")
            $( ".fa-times" ).hide();
            $( ".fa-bars" ).show();
          });

    $(".inner-section").mouseover(function(){
    	let index = $(this).index();
    	var x = $(".inner-section");
    	console.log(index);
    	$(".inner-section").css("width", "24.995%");
    	$(".inner-section").eq(index).css("width", "50%");

    	$(".inner-section").eq(index).find(".inner-caption").css("visibility","visible");
    });

    $(".inner-section").mouseout(function(){
        $(".inner-section").css("width", "33.33%");
    	$(".inner-section").find(".inner-caption").css("visibility", "hidden");
    });

});