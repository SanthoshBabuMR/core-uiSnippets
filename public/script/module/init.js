/**
 * application initialization module
 * responsible for loading page-header, page-navigation templates
 * @module init
 */
define( [ "jquery", "util", "text!pageNavigation", "text!pageHeader", "text!wikiHeader", "text!wikiNavigation", "google-code-prettify" ] , function( $, util, pageNavigationTmpl, pageHeaderTmpl, wikiHeaderTmpl, wikiNavigationTmpl, codePrettify ) {
	"use strict";
	// application object
	var app = {};
	// list of DOM elements object in the page
	app.elPage = ".doc-wrap";
	app.elWikiPage = ".doc-wrap.wiki";
	app.elPageNav = ".page-navigation";
	app.elPageHeader = ".page-header";
	app.elPageLoader = ".loader";

	/**
	 * remove the "dot" prefix for css class names
	 * @method removeClassPrefix
	 * @return {object} app
	 */
	app.removeClassPrefix = function() {
		util.removeClassPrefix();
		return app;
	};

	/**
	 * encode "<" and ">" to "&lt;" and "&gt;"
	 * @method encodeHtml
	 * @param {string} markup
	 * @return {string}
	 */
	app.encodeHtml = function( markup ) {
		return util.encodeHtml( markup );
	};

	/**
	 * decode "&lt;" and "&gt;" to "<" and ">"
	 * @method decodeHtml
	 * @param {string} markup
	 * @return {string}
	 */
	app.decodeHtml = function( markup ) {
		return util.decodeHtml( markup );
	};

	/**
	 * code prettifier
	 * @method prettyPrint
	 * @return {object} app
	 */
	app.prettyPrint = function() {
		codePrettify.prettyPrint();
		return app;
	};

	/**
	 * enable tabbed navigation
	 * @method uiTabs
	 * @return {object} app
	 */
	app.uiTabs = function () {
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

		$(tabsContainer).each ( function( ) {
			var self = $( this );	
			active = self.find( ".active-tab" );
			if( active.length >= 1 ) {
				if( active[0].tagName === "A" ) {
					$( active[0] ).trigger("click");
				}
			}
			else {
				$( $( self.find( ".tabs-heading" ) ).find("a")[0] ).addClass( ".active-tab" ).trigger("click");
			}
		} );
		return app;
	};

	/**
	 * enable toggle navigation
	 * @method uiToggle
	 * @return {object} app
	 */
	app.uiToggle = function () {
		$(".toggle-title").on( "click keypress", function( e ) {
			if( e.type === "keypress" && e.keyCode !== 13 ) {
				return false;
		    }
			$(this).next(".toggle-content").slideToggle();
			return false;
		});
		return app;
	};

	/**
	 * insert page navigation template into DOM
	 * @method renderPageNavigation
	 * @return {object} app
	 */
	app.renderPageNavigation = function() {
		var nav = $( app.elPageNav );
		// check if page is wiki or not
		if( $( app.elWikiPage ).length === 0 ) {
			// add page-navigation template, if one is not avaiable
			if( nav.length !== 0 && nav.children().length === 0 ) {
				nav.html( pageNavigationTmpl );	
			}
		}
		else {
			// add wiki-navigation template, if one is not avaiable
			if( nav.length !== 0 && nav.children().length === 0 ) {
				nav.html( wikiNavigationTmpl );	
			}
		}
		return app;
	};

	/**
	 * insert page header template into DOM
	 * @method renderPageHeader
	 * @return {object} app
	 */
	app.renderPageHeader = function() {
		var header = $( app.elPageHeader );
		// check if page is wiki or not
		if( $( app.elWikiPage ).length === 0 ) {
			// add page-header template, if one is not avaiable
			if( header.length !== 0 && header.children().length === 0 ) {
				header.html( pageHeaderTmpl );	
			}
		}
		else {
			// add wiki-header template, if one is not avaiable
			if( header.length !== 0 && header.children().length === 0 ) {
				header.html( wikiHeaderTmpl );	
			}
		}
		return app;
	};

	/**
	 * hide page loader
	 * @method hideLoader
	 * @return {object} app
	 */
	app.hideLoader = function() {
		$( app.elPageLoader ).addClass("hide");	
		return app;
	};

	/**
	 * show page loader
	 * @method showLoader
	 * @return {object} app
	 */
	app.showLoader = function() {
		$( app.elPageLoader ).removeClass("hide");
		return app;
	};

	/**
	 * hide page loader and reveal page
	 * @method revealPage
	 * @return {object} app
	 */
	app.revealPage = function() {
		$( app.elPage ).addClass( "reveal" );
		app.hideLoader();
		return app;
	};

	/**
	 * perform pre initialization operation such as insert generic templates
	 * @method preInit
	* @return {object} app
	 */
	app.preInit = function() {
		app.renderPageHeader().renderPageNavigation();
		return app;
	};

	/**
	 * dynamically set minimum height of page to that of viewport's height
	 * @method setMinHeight
	 * @return {object} app
	 */
	app.setMinHeight = function() {
		$(window).on( "resize", function() {
			$(".doc-wrap").css( "minHeight", $(window).height() );
		} ).resize();
		return app;
	};

	/**
	 * perform post initialization operation such as rendering components
	 * @method postInit
	 * @return {object} app
	 */
	app.postInit = function() {
		app.uiTabs().uiToggle().prettyPrint().setMinHeight().revealPage();
		return app;
	};

	// expose the application object
	return app;

} );
