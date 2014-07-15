requirejs.config( {
	  baseUrl: "/public"
	, paths : {
		// external librarires
		"requireLib" 					: "script/lib/requirejs/require"
		, "text" 						: "script/lib/requirejs/plugin/text.2.0.12"
		, "jquery" 						: "script/lib/jquery/jquery.2.1.1"
		, "google-code-prettify"		: "script/lib/googlePrettify/prettify"

		// modules
		, "init" 						: "script/module/init"
		, "util" 						: "script/module/util"
		, "loader" 						: "script/module/loader"

		// templates
		, "pageNavigation" 				: "tmpl/module/pageNavigation.tmpl"
		, "pageHeader" 					: "tmpl/module/pageHeader.tmpl"

		// snippets
		, "htmlGridTwoColumn" 			: "uiSnippet/grid/default/gridTwoColumn.tmpl"
		, "htmlGridThreeColumn" 		: "uiSnippet/grid/default/gridThreeColumn.tmpl"
		, "htmlGridFourColumn" 			: "uiSnippet/grid/default/gridFourColumn.tmpl"
		, "htmlGridFiveColumn" 			: "uiSnippet/grid/default/gridFiveColumn.tmpl"
		, "cssGrid" 					: "uiSnippet/grid/default/grid.css"
		, "notesGrid"		 			: "uiSnippet/grid/default/notes.tmpl"
		
		, "htmlTruncateTextWithEllipse" : "uiSnippet/truncateTextWithEllipse/default/truncateTextWithEllipse.tmpl"
		, "cssTruncateTextWithEllipse" 	: "uiSnippet/truncateTextWithEllipse/default/truncateTextWithEllipse.css"
		, "notesTruncateTextWithEllipse": "uiSnippet/truncateTextWithEllipse/default/notes.tmpl"

		, "htmlTabbedNavigation" 		: "uiSnippet/tabbedNavigation/default/tabbedNavigation.tmpl"
		, "cssTabbedNavigation" 		: "uiSnippet/tabbedNavigation/default/tabbedNavigation.css"
		, "scriptTabbedNavigation" 		: "uiSnippet/tabbedNavigation/default/tabbedNavigation"
		, "scriptTabbedNavigationtmpl" 	: "uiSnippet/tabbedNavigation/default/tabbedNavigation.js"
		, "notesTabbedNavigation"		: "uiSnippet/tabbedNavigation/default/notes.tmpl"

	  }
	, shim: {
		
	  }
	, urlArgs : "bust=" + ( new Date() ).getTime()

} );