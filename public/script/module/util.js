define( [ "jquery" ] , function( $ ) {

	"use strict";

	// utility object
	var util = {};

	/**
	 * remove the "dot" prefix for css class names
	 * @method removeClassPrefix
	 * @param {string} clsName
	 * @return {string}
	 *
	 * @usage
	 * util.removeClassPrefix( ".show" )
	 * "show"
	 */
	util.removeClassPrefix = function ( clsName ) {
		return clsName.toString().replace(/^\./,"");
	};

	/**
	 * encode "<" and ">" to "&lt;" and "&gt;"
	 * @method encodeHtml
	 * @param {string} markup
	 * @return {string}
	 */
	util.encodeHtml = function ( markup ) {
		if ( markup !== undefined ) {
	        return $( "<div />" ).text( markup ).html();
	    } else {
	        return "";
	    }
	};

	/**
	 * decode "&lt;" and "&gt;" to "<" and ">"
	 * @method decodeHtml
	 * @param {string} markup
	 * @return {string}
	 */
	util.decodeHtml = function ( markup ) {
		if ( markup !== undefined ) {
	        return $( "<div />" ).html( markup ).html();
	    } else {
	        return "";
	    }
	};

	// expose the utility object
	return util;

} );
