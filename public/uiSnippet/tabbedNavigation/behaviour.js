define( [ "jquery" ], function( $ ) {

	/**
	 * enable tabbed navigation
	 * @function tabs
	 * @return {undefined}
	 */
	function tabs() {
		var tabsContainer = $( ".tabs-container" );
		var active;
		// tabbed navigation click, keypress handler
		tabsContainer.off().on( "click keypress", function( e ) {
		  if( e.type === "keypress" && e.keyCode !== 13 ) {
		    return false;
		  }
		  var tabs = $(this);
		  var target = $(e.target);
		  var tabsContent = $( target.attr( "href" ) );
		  if( tabsContent.length === 1 ) {
		    tabs.find( ".active-tab" ).removeClass( "active-tab" ) ;
		    target.addClass( "active-tab" );
		    tabsContent.addClass( "active-tab" );
		    return false;
		  } 
		  return true;
		} );

		$(tabsContainer).each ( function( index ) {
			var self = $( this );	
			active = self.find( ".active-tab" );
			if( active.length >= 1 ) {
				if( active[0].tagName === "A" ) {
					$( active[0] ).trigger( "click" );
				}
			}
			else {
				$( $( self.find( ".tabs-heading" ) ).find("a")[0] ).addClass( ".active-tab" ).trigger( "click" );
			}
		} );
	}

	// expose public properties
	return {
		tabs: tabs
	};
} )
