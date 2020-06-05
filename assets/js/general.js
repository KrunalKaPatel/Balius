$(document).ready(function(){

	/* JS For mobile view menu */
	$( ".fa-times" ).hide();
    $( ".nav-menu" ).hide();
    jQuery('.fa-bars').click(function(){
        jQuery('.nav-menu').slideToggle(function() {
            $( ".fa-bars" ).hide();
            $( ".fa-times" ).show();        
          });
    });

    jQuery(".fa-times" ).click(function() {
        jQuery( ".nav-menu" ).slideToggle(function() {
            $( ".fa-times" ).hide();
            $( ".fa-bars" ).show();
          });
    });

});