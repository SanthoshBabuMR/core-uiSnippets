requirejs.config( {
	  baseUrl: "/public"
	, paths : {
		// external librarires
		"requireLib": "script/lib/requirejs/require"
		, "text": "script/lib/requirejs/plugin/text.2.0.12"
		, "jquery": "script/lib/jquery/jquery.2.1.1"
		, "google-code-prettify": "script/lib/googlePrettify/prettify"

		// modules
		, "init": "script/module/init"
		, "loader": "script/module/loader"

		// templates
		, "pageNavigation": "tmpl/module/pageNavigation.tmpl"
		, "pageHeader": "tmpl/module/pageHeader.tmpl"

		// html snippets
		, "htmlGrid" : "tmpl/uiSnippet/grid.tmpl"
		, "htmlTruncateTextWithEllipse" : "tmpl/uiSnippet/truncateTextWithEllipse.tmpl"

		// css snippets
		, "cssGrid" : "css/uiSnippet/grid.css"
		, "cssTruncateTextWithEllipse" : "css/uiSnippet/truncateTextWithEllipse.css"
	  }
	, shim: {
		
	  }
	, urlArgs : "bust=" + ( new Date() ).getTime()

} );