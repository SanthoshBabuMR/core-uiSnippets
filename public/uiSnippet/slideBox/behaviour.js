define( [ "jquery" ], function( $ ) {

    // namespace sb
    var sb = {};

    sb.elSlideBox = $(".slide-box")
    sb.duration = 600;
    sb.effect = "linear";
    sb.classSlideEnabled = "active";
    sb.classCtrls = "slide-ctrl";
    sb.classSlideContainer = "slide-container";
    sb.classPrep = "prep";
    sb.classSlide = "slide";
    sb.slideOut = {
        marginLeft: "-220px"
    };
    sb.slideIn = {
        marginLeft: 0
    };
    sb.callback = function() {};
    

    /**
     * configure custom class names and element
     * @method init
     * @param {object} config
     * @property {object} config.elSlideBox dom node to contain the animation
     * @property {string} config.effect animation effect
     * @property {number} config.duration animation duration
     * @property {string} config.classSlideEnabled class reference to notify if the component is slide enabled
     * @property {string} config.classCtrls class reference to slide controller
     * @property {object} config.slideIn object literal containing css properties to be animated when sliding in ( show ) 
     * @property {object} config.slideOut object literal containing css properties to be animated when sliding out ( hide )
     * return {object}
     */
    sb.init = function ( config ) {
        sb.elSlideBox = config.elSlideBox || sb.elSlideBox
        sb.effect = config.effect || sb.effect;
        sb.duration = config.duration || sb.duration;
        sb.classSlideEnabled = config.classSlideEnabled || sb.classSlideEnabled;
        sb.classCtrls = config.classCtrls || sb.classCtrls;
        sb.slideOut = config.slideOut || sb.slideOut;
        sb.slideIn = config.slideIn || sb.slideIn;
        sb.callback = config.callback || sb.callback;
        return sb;
    }

    /**
     * apply slide behaviour to html component, by configuring respective events
     * @method slide
     * return {object}
     */
    sb.slide = function() {
        sb.elSlideBox.each( function( index) {
            var el = $(this)
                , elSlideContainer = $( "."+sb.classSlideContainer, el )
                , elSlideCtrl = $( "."+sb.classCtrls, el );
            // apply function only if behaviour is not previously applied
            if( el.hasClass( sb.classSlideEnabled ) === true ) {
                return false;
            }
            /**
             * let us know, if the component has slided out
             * @function hasSlided
             * return {boolean}
             */
            function hasSlided() {
              return el.hasClass( sb.classSlide ) === true;
            }
            /**
             * callback to execute once animation completes
             * @function callback
             * return {undefined}
             */
            function callback () {
                // remove overflow:hidden once component has returned to normal state
                if (hasSlided() !== true) {
                  el.removeClass( sb.classPrep + " " + sb.classSlide );
                }
                sb.callback();
            }
            /**
             * handle click/keypres event for slide controller
             * @function handleSlide
             * @param {object} e event object
             * return {undefined}
             */
            function handleSlide( e ) {
                if (e.type === "keypress.slideBox" && e.keyCode !== 13) {
                  return;
                }
                // add overflow:hidden while sliding in/out
                el.addClass( sb.classPrep );
                if ( hasSlided() !== true ) {
                    el.addClass( sb.classSlide );
                    elSlideContainer.animate( sb.slideOut, sb.duration, sb.effect, sb.callback );
                } else {
                    el.removeClass( sb.classSlide );
                    elSlideContainer.animate( sb.slideIn, sb.duration, sb.effect, sb.callback );
                }
            }
            // add "classSlideEnabled" class to indicate the component is initialized with slide behaviour
            el.addClass( sb.classSlideEnabled );
            elSlideCtrl.on( "click.slideBox keypress.slideBox", handleSlide );
        } );
    }
    
    // expose public properties
    return sb;
} );