module.exports = function ( grunt ) {
    "use strict";
    // grunt config
    grunt.initConfig( {
        connect: {
            appServer: {
                // server begin
                options: {
                    hostname: "localhost",
                    port: 6234,
                    keepalive: true
                }
                // server begin
            }
        },
        jshint: {
            options: {
                jshintrc: "gruntConfig/jshint/options.jshintrc",
                reporter: require( "jshint-stylish" )
                //, reporter: "gruntConfig/jshint/customReporter"
                //, reporterOutput: 'buildLog/jshint/error.html'
            },
            gruntModules: [ "Gruntfile.js", "gruntConfig/**/*.js" ],
            application: [ "public/script/module/**/*.js", "public/uiSnippet/**/*.js" ]
        },
        jsbeautifier: {
            all: [ "Gruntfile.js", "view/**/*", "public/tmpl/**/*", "public/css/**/*", "public/script/**/*", "public/uiSnippet/**/*", ],
            options: { // @ref: https://github.com/beautify-web/js-beautify#options
                html: {
                    braceStyle: "collapse", // [collapse|expand|end-expand]
                    indentChar: " ",
                    indentScripts: "keep", // [keep|separate|normal]
                    indentSize: 4,
                    maxPreserveNewlines: 10,
                    preserveNewlines: false,
                    unformatted: [ ], // List of tags (defaults to inline) that should not be reformatted
                    wrapLineLength: 0, // (0 disables)
                    fileTypes: [ ".html.tmpl" ]
                },
                css: {
                    indentChar: " ",
                    indentSize: 4,
                    fileTypes: [ ".css.scss,less,sass" ]
                },
                js: {
                    braceStyle: "collapse", // [collapse|expand|end-expand]
                    breakChainedMethods: false,
                    e4x: false,
                    evalCode: false,
                    indentChar: " ",
                    indentLevel: 0,
                    indentSize: 4,
                    indentWithTabs: false,
                    jslintHappy: true,
                    keepArrayIndentation: false,
                    keepFunctionIndentation: false,
                    maxPreserveNewlines: 10,
                    preserveNewlines: false,
                    spaceBeforeConditional: true,
                    spaceInParen: true,
                    unescapeStrings: false,
                    wrapLineLength: 0 // (0 disables)
                }
            }
        }
    } );
    // load task(s)
    grunt.loadNpmTasks( "grunt-contrib-connect" );
    grunt.loadNpmTasks( "grunt-contrib-jshint" );
    grunt.loadNpmTasks( "grunt-jsbeautifier" );
    // register task(s)
    grunt.registerTask( "appServer", "connect:appServer" );
    grunt.registerTask( "lintApp", "jshint:application" );
    grunt.registerTask( "lintGrunt", "jshint:gruntModules" );
    grunt.registerTask( "lint", [ "jshint:gruntModules", "jshint:application" ] );
    grunt.registerTask( "beautify", "jsbeautifier" );
    grunt.registerTask( "build", [ "jshint:gruntModules", "jshint:application", "jsbeautifier" ] );
};
