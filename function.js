$(function() {
    /**
    * Smooth scrolling to a specific element 
    **/
    function scrollTo( target ) {
        if( target.length ) {
            $("html, body").stop().animate( { scrollTop: target.offset().top }, 1500);
        }
    }
    // exemple
    scrollTo( $("#mon-id") );
});