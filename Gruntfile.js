module.exports = function( grunt ) {
	"use strict";
    // grunt config
    grunt.initConfig({
        connect: {
            appServer: {
                // server begin
                options: {
                    hostname: "localhost"
                    , port: 6234
                    , keepalive: true
                }
                // server begin
            }
        }
        , jshint: {
        	options: {
		        jshintrc: "gruntConfig/jshint/options.jshintrc"
                , reporter: require("jshint-stylish")
                //, reporter: "gruntConfig/jshint/customReporter"
                //, reporterOutput: 'buildLog/jshint/error.html'
		    }
            , gruntModules: [ "Gruntfile.js", "gruntConfig/**/*.js" ]
            , application: [ "public/script/module/**/*.js", "public/uiSnippet/**/*.js" ]
        }
    });

    // load task(s)
    grunt.loadNpmTasks( "grunt-contrib-connect" );
    grunt.loadNpmTasks( "grunt-contrib-jshint" );

    // register task(s)
    grunt.registerTask( "appServer", "connect:appServer" );
    grunt.registerTask( "lintApp", "jshint:application" );
    grunt.registerTask( "lintGrunt", "jshint:gruntModules" );
    grunt.registerTask( "lint", [ "jshint:gruntModules", "jshint:application" ] );

};
