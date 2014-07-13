/**
 * application initialization module
 * responsible for loading page-header, page-navigation templates
 * @module init
 */
define( [ "jquery", "text!pageNavigation", "text!pageHeader" ] , function( $, pageNavigation, pageHeader ) {
	
	var el = {};
	el.page = $(".doc-wrap");
	el.pageNav = $(".page-navigation", el.page);
	el.pageHeader = $(".page-header", el.page);
	
	// add page-navigation template, if one is not avaiable
	if( el.pageNav.length !== 0 && el.pageNav.children().length === 0 ) {
		el.pageNav.html( pageNavigation );	
		// reset el.pageNav
		el.pageNav = 0;
	}
	// add page-header template, if one is not avaiable
	if( el.pageHeader.length !== 0 && el.pageHeader.children().length === 0 ) {
		el.pageHeader.html( pageHeader );
		// reset el.pageHeader
		el.pageHeader = 0;
	}

	/**
	 * public method to hide loader
	 * @function hideLoader
	 * @return {undefined}
	 */
	var hideLoader = function() {
		$(".loader").addClass("hide");	
	};

	/**
	 * public method to show loader
	 * @function showLoader
	 * @return {undefined}
	 */
	var showLoader = function() {
		$(".loader").removeClass("hide");	
	};

	/**
	 * public method to show page loader
	 * @function show
	 * @return {undefined}
	 */
	var revealPage = function() {
		el.page.addClass( "show" );
		hideLoader();
	};

	return {
		hideLoader: hideLoader
		, showLoader: showLoader
		, revealPage: revealPage
	};

} );
