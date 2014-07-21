require( [ "slideBox" ], function( slideBox ) {
	slideBox({
	    el: $(".slide-box"),
	    duration: 600,
	    slideIn: {
	        marginTop: 0
	    },
	    slideOut: {
	        marginTop: "-220px"
	    }
	} );
} );


define( [ "jquery" ], function( $ ) {
	/**
	 * slide-box component to slide-in / slide-out ui layout(s)
	 * @function slideBox
	 * @param {object} config
	 * @property {object} config.el dom node to contain the animation
	 * @property {object} config.effect animation effect
	 * @property {object} config.duration animation duration
	 * @property {object} config.slideIn object literal containing css properties to be animated when sliding in ( show ) 
	 * @property {object} config.slideOut object literal containing css properties to be animated when sliding out ( hide )
	 * return {undefined}
	 */
	function slideBox(config) {
	    var options = config;
	    var elSlideBoxes = options.el || $(".slide-box"),
	        effect = options.effect || "linear",
	        duration = options.duration || 600;
	    elSlideBoxes.each( slide );
	    /**
	     * iterator to loop through all slide-box components in the web page
	     * @function slide
	     * @param {number} index
	     * return {undefined}
	     */
	    function slide(index) {
	    	// initialize slide-box once per component
	        if ($(this).hasClass("active") === true) {
	            return false;
	        }
	        var elSlideBox = $(this),
	            elSlideContainer = $(".slide-container", elSlideBox),
	            elSlideCtrl = $(".slide-ctrl", elSlideBox),
	            slideIn = options.slideIn || {
	                marginLeft: 0
	            },
	            slideOut = options.slideOut || {
	                marginLeft: "-220px"
	            },
	            hasSlided = function () {
	                return elSlideBox.hasClass("slide") === true;
	            },
	            callback = function () {
	                if (hasSlided() !== true) {
	                    elSlideBox.removeClass("prep slide");
	                }
	            };
	        
	        var handleSlide = function (e) {
	            if (e.type === "keypress" && e.keyCode !== 13 || $(e.target).hasClass( "slide-ctrl" ) === false) {
	                return;
	            }
	            elSlideBox.addClass("prep");
	            if (hasSlided() !== true) {
	                elSlideBox.addClass("slide");
	                elSlideContainer.animate(slideOut, duration, effect, callback);
	            } else {
	                elSlideBox.removeClass("slide");
	                elSlideContainer.animate(slideIn, duration, effect, callback);
	            }
	        }
	        elSlideBox.addClass("active").off().on("click keypress", handleSlide);
	    }
	}

	return {
		slideBox: slideBox
	};
} );

