define( [ "jquery" ], function( $ ) {
  "use strict";

  var uid = 0;

  function uniqueId() {
    uid = uid + 1
    return "uid-" + uid;
  }

  $.fn.accordion = function() {
    // add class names for targeting
    // add roles and properties
    // manage event
    var ele = $( this );
    ele
      .addClass( "accordion-handler" )
      .attr( "role", "tablist" )
      .find( ">h3" ).addClass( "header" ).attr( 
        {
          tabindex : 0,
        } )
      .end()
      .find( ">div" ).addClass( "panel" ).hide();

    applyAria.call( this );
    manageEvent.call( this );
  }

  function applyAria() {
    var headers = $(this).find(">h3");
    headers.each( function( index, header ) {
      $(header)
        .attr( "id", uniqueId )
        .next().attr( "id", uniqueId );
      var headerId = $(this).attr( "id" );
      var panelId = $(this).next().attr( "id" );
      $(this).attr( {
        "role": "tab",
        "aria-selected": "false",
        "aria-expanded": "false",
        "aria-controls": panelId
      } );
      $(this).next().attr( {
        "role": "tabpanel",
        "aria-hidden": "true",
        "aria-labelledby": headerId
      } );
      
    } );
  }

  function manageEvent() {
    $( this ).on( "click keypress", function( e ) {
      if( e.type !== "click" && ( e.which !== 13 || e.keyCode !== 13 ) ) {
        console.log(33)
        return;
      };
      var targetEle = $( e.target ),
          currentEle = $( e.currentTarget );
      if( targetEle.hasClass( "header" ) ) {
        currentEle
          .find( ".panel" )
          .attr( {
            "aria-hidden": "true"
          } )
          .hide()
          .end()
          .find( ".header" )
          .attr( {
            "aria-selected": "false",
            "aria-expanded": "false",
          } );
        targetEle.attr( {
          "aria-selected": "true",
          "aria-expanded": "true",
        } )
        .next()
        .attr( {
            "aria-hidden": "false",
        } )
        .show();
      } 
    } );
  }

  
  
} );
