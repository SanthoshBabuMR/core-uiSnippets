define( [ "jquery"], function( $ ) {

	// set doc-wrap min-height to viewport's height
	$(window).on( "resize", function() {
		$(".doc-wrap").css( "minHeight", $(window).height() );
	} ).resize();

} );
