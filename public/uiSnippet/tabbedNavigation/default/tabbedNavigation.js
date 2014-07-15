define( [ "jquery" ], function( $ ) {

	var elTabs = ".tabs-container"
		, elTabsHeading = ".tabs-heading"
		, elTabsContent = ".tabs-content"
		, elTabsActive = ".active-tab";

	var removeClassPrefix = function ( clsName ) {
		return clsName.toString().replace(/^\./,"");
	}

	/**
	 * enable tabbed navigation
	 * @function tabs
	 * @return {undefined}
	 */
	function tabs() {
		var tabsContainer = $( elTabs );
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
		    tabs.find( elTabsActive ).removeClass( removeClassPrefix( elTabsActive ) ) ;
		    target.addClass( removeClassPrefix( elTabsActive ) );
		    tabsContent.addClass( removeClassPrefix( elTabsActive ) );
		    return false;
		  } 
		  return true;
		} );

		$(tabsContainer).each ( function( index ) {
			var self = $( this );	
			active = self.find( elTabsActive );
			if( active.length >= 1 ) {
				if( active[0].tagName === "A" ) {
					$( active[0] ).trigger("click");
				}
			}
			else {
				$( $( self.find( elTabsHeading ) ).find("a")[0] ).addClass( elTabsActive ).trigger("click");
			}
		} );
	}

	// expose public properties
	return {
		tabs: tabs
	};
} )
