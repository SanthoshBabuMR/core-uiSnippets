define( [ "jquery" ], function( $ ) {
    "use strict";
    // @namespace tabNav
    var tabNav = {};
    
    tabNav.elTabsContainer = $( ".tabs-container" );
    tabNav.classTabsHeader = "tabs-heading";
    tabNav.classTabsContent = "tabs-content";
    tabNav.classActiveTab = "active-tab";

    /**
     * configure custom class names and element
     * @method init
     * @param {object} config key-value pair containing configuration option
     * @property {object} config.tabsContainer dom node that references the tabbed navigation container
     * @property {string} config.tabsHeaderClass class name that references the tabbed navigation header
     * @property {string} config.tabsContentClass class name that references the tabbed navigation content
     * @property {string} config.activeTabClass class name that references the active tab heading and content
     * @return {object}
     */
    tabNav.init = function ( config ) {
        tabNav.elTabsContainer = config.elTabsContainer || tabNav.elTabsContainer;
        tabNav.classTabsHeader = config.classTabsHeader || tabNav.classTabsHeader;
        tabNav.classTabsContent = config.classTabsContent || tabNav.classTabsContent;
        tabNav.classActiveTab = config.classActiveTab || tabNav.classActiveTab;
        return tabNav;
    };

    /**
     * enable tabbed navigation
     * @method tabs
     * @return {object}
     */
    tabNav.tabs = function () {
        // tabbed navigation click, keypress handler
        tabNav.elTabsContainer.off( "click.tabbedNavigation keypress.tabbedNavigation" ).on( "click.tabbedNavigation keypress.tabbedNavigation", function( e ) {
            if( e.type === "keypress" && e.keyCode !== 13 ) {
              // continue with the default behaviour
            return true;
            }
            var tabs = $(this);
            var target = $(e.target);
            // handle click/keypress event only for anchor elements within tab header
            if( tabs.find( "."+tabNav.classTabsHeader).has( target ).length < 1 ) {
              // continue with the default behaviour
              return true;
            }
            var tabsContentRef = $( target.attr( "href" ) );
            if( tabsContentRef.length === 1 ) {
            tabs.find( "."+tabNav.classActiveTab ).removeClass( tabNav.classActiveTab ) ;
            target.addClass( tabNav.classActiveTab );
            tabsContentRef.addClass( tabNav.classActiveTab );
            return false;
            } 
            // continue with the default behaviour
            return true;
        } );

        // loop through list of tabbed navigation within the page
        $(tabNav.elTabsContainer).each ( function( /*index*/ ) {
            var self = $( this )
                , active = self.find( tabNav.classActiveTab );
            if( active.length >= 1 ) {
                if( active[0].tagName === "A" ) {
                    // trigger click event on the tab heading link with class referenced by "classActiveTab"
                    $( active[0] ).trigger( "click.tabbedNavigation" );
                }
            }
            else {
                // by default, trigger click event on the first tab heading link
                $( $( self.find( "."+tabNav.classTabsHeader ) ).find("a")[0] ).trigger( "click.tabbedNavigation" );
            }
        } );
        return tabNav;
    };

    // expose public properties
    return tabNav;
} );
