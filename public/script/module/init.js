/**
 * application initialization module
 * responsible for loading page-header, page-navigation templates
 * @module init
 */
define( [ "jquery", "util", "text!pageNavigation", "text!pageHeader", "scriptTabbedNavigation", "google-code-prettify" ] , function( $, util, pageNavigationTmpl, pageHeaderTmpl, tabbedNavigation, codePrettify ) {
	// application object
	var app = {}
	// list of DOM elements object in the page
	app.elPage = ".doc-wrap";
	app.elPageNav = ".page-navigation";
	app.elPageHeader = ".page-header";
	app.elPageLoader = ".loader";

	/**
	 * remove the "dot" prefix for css class names
	 */
	app.removeClassPrefix = util.removeClassPrefix;

	/**
	 * encode "<" and ">" to "&lt;" and "&gt;"
	 */
	app.encodeHtml = util.encodeHtml

	/**
	 * decode "&lt;" and "&gt;" to "<" and ">"
	 */
	app.decodeHtml = util.encodeHtml

	/**
	 * enable tabbed navigation functionality via application object
	 */
	app.tabs = tabbedNavigation.tabs

	/**
	 * insert page navigation template into DOM
	 * @function renderPageNavigation
	 * @return {undefined}
	 */
	app.renderPageNavigation = function() {
		var nav = $( app.elPageNav );
		// add page-navigation template, if one is not avaiable
		if( nav.length !== 0 && nav.children().length === 0 ) {
			nav.html( pageNavigationTmpl );	
		}	
	}

	/**
	 * insert page header template into DOM
	 * @function renderPageHeader
	 * @return {undefined}
	 */
	app.renderPageHeader = function() {
		var header = $( app.elPageHeader );
		// add page-header template, if one is not avaiable
		if( header.length !== 0 && header.children().length === 0 ) {
			header.html( pageHeaderTmpl );	
		}	
	}

	/**
	 * hide page loader
	 * @function hideLoader
	 * @return {undefined}
	 */
	app.hideLoader = function() {
		$( app.elPageLoader ).addClass("hide");	
	};

	/**
	 * show page loader
	 * @function showLoader
	 * @return {undefined}
	 */
	app.showLoader = function() {
		$( app.elPageLoader ).removeClass("hide");	
	};

	/**
	 * hide page loader and reveal page
	 * @function revealPage
	 * @return {undefined}
	 */
	app.revealPage = function() {
		$( app.elPage ).addClass( "reveal" );
		app.hideLoader();
	};

	/**
	 * perform pre initialization operation such as insert generic templates
	 * @function preInit
	 * @return {undefined}
	 */
	app.preInit = function() {
		app.renderPageHeader();
		app.renderPageNavigation();
	}


	/**
	 * perform post initialization operation such as rendering components
	 * @function postInit
	 * @return {undefined}
	 */
	app.postInit = function() {
		app.tabs();
		codePrettify.prettyPrint();
		app.revealPage();
	}

	// expose the application object
	return app;

} );
