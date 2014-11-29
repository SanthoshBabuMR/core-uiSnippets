require.config( {
    baseUrl: "/public",
    paths: {
        // external librarires
        "requireLib": "script/lib/requirejs/require",
        "text": "script/lib/requirejs/plugin/text.2.0.12",
        "jquery": "script/lib/jquery/jquery.2.1.1",
        "google-code-prettify": "script/lib/googlePrettify/prettify"
        // modules
        ,
        "init": "script/module/init",
        "util": "script/module/util",
        "loader": "script/module/loader"
        // templates
        ,
        "pageNavigation": "tmpl/module/pageNavigation.tmpl",
        "pageHeader": "tmpl/module/pageHeader.tmpl",
        "wikiHeader": "tmpl/module/wikiHeader.tmpl",
        "wikiNavigation": "tmpl/module/wikiNavigation.tmpl",
        "pageMarkup": "tmpl/module/pageMarkup.tmpl",
        "demoMarkup": "tmpl/module/demoMarkup.tmpl",
        "wikiMarkup": "tmpl/module/wikiMarkup.tmpl"
        // snippets
        ,
        "htmlSample": "uiSnippet/sample/markup.tmpl",
        "cssSample": "uiSnippet/sample/style.css",
        "scriptSample": "uiSnippet/sample/behaviour",
        "scriptSampletmpl": "uiSnippet/sample/behaviour.js",
        "notesSample": "uiSnippet/sample/notes.tmpl"
        // Grid Using Float
        ,
        "htmlGridUsingFloatTwoColumn": "uiSnippet/gridUsingFloat/markupTwoColumn.tmpl",
        "htmlGridUsingFloatThreeColumn": "uiSnippet/gridUsingFloat/markupThreeColumn.tmpl",
        "htmlGridUsingFloatFourColumn": "uiSnippet/gridUsingFloat/markupFourColumn.tmpl",
        "htmlGridUsingFloatFiveColumn": "uiSnippet/gridUsingFloat/markupFiveColumn.tmpl",
        "cssGridUsingFloat": "uiSnippet/gridUsingFloat/style.css",
        "notesGridUsingFloat": "uiSnippet/gridUsingFloat/notes.tmpl"
        // Truncate Text With Ellipse
        ,
        "cssTruncateTextWithEllipse": "uiSnippet/truncateTextWithEllipse/style.css",
        "notesTruncateTextWithEllipse": "uiSnippet/truncateTextWithEllipse/notes.tmpl"
        // Tabbed Navigation
        ,
        "htmlTabbedNavigation": "uiSnippet/tabbedNavigation/markup.tmpl",
        "cssTabbedNavigation": "uiSnippet/tabbedNavigation/style.css",
        "scriptTabbedNavigation": "uiSnippet/tabbedNavigation/behaviour",
        "scriptTabbedNavigationtmpl": "uiSnippet/tabbedNavigation/behaviour.js",
        "notesTabbedNavigation": "uiSnippet/tabbedNavigation/notes.tmpl"
        // Slide Box
        ,
        "htmlSlideBox": "uiSnippet/SlideBox/markup.tmpl",
        "cssSlideBox": "uiSnippet/SlideBox/style.css",
        "scriptSlideBox": "uiSnippet/SlideBox/behaviour",
        "scriptSlideBoxtmpl": "uiSnippet/SlideBox/behaviour.js",
        "scriptInitSlideBoxtmpl": "uiSnippet/SlideBox/initialize.js",
        "notesSlideBox": "uiSnippet/SlideBox/notes.tmpl"
        // Accordion
        ,
        "htmlAccordion": "uiSnippet/accordion/markup.tmpl",
        "cssAccordion": "uiSnippet/accordion/style.css",
        "scriptAccordion": "uiSnippet/accordion/behaviour",
        "scriptAccordiontmpl": "uiSnippet/accordion/behaviour.js",
        "notesAccordion": "uiSnippet/accordion/notes.tmpl"
    },
    shim: {
        "scriptAccordion": [ "jquery" ]
    },
    urlArgs: "bust=" + ( new Date() ).getTime()
} );
