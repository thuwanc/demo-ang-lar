module.exports = function(grunt){

    // Load grunt tasks automatically
	require('jit-grunt')(grunt);

	// grunt.registerTask("default", "", function(){
	// 	grunt.log.write("this grunt task is useless");

	// });

    // Configurable paths for the angular
    var angularConfig = {
        angular: 'angular',
        dist: 'public'
    };


	//grunt configure for main project settings
	grunt.initConfig({

		//basic settings and info about our plugins
		// pkg: grunt.file.readJSON('package.json');

        // Project settings
        adminlte : angularConfig,

        // The grunt server settings
        connect: {
            options: {
                port: 7555,
                hostname: 'localhost',
                livereload: 35729
            },
            server2: {
                proxies: [
                    {
                        context: '/uploads',
                        host: 'localhost',
                        port: 8000,
                        https: false
                    },
                    {
                        context: '/api',
                        host: 'localhost',
                        port: 8000,
                        https: false
                    },
                    {
                        context: '/oauth',
                        host: 'localhost',
                        port: 8000,
                        https: false
                    }

                ]
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect) {
                        return [proxySnippet,
                            lrSnippet,
                            connect.static('<%= inspinia.angular %>/.tmp'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static(angularConfig.angular)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    port: 4000,
                    hostname: 'localhost',
                    open: true,
                    base: '<%= inspinia.dist %>'
                }
            }
        },

		less:{
			development: {
				options: {
					compress: true,
                    yuicompress: true,
					optimization: 2
				},
				files: {
                    // "css/main.css": "less/main.less"
                    "angular/styles/style.css": "angular/less/style.less"// destination file and source file
				}
			}
		},
        // Watch for changes in live edit
        watch: {
            styles: {
                files: ['angular/less/**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }



	});

	//load the plugin
	//grunt.loadNpmTasks('grunt-contrib-cssmin')

    grunt.registerTask('default', ['less', 'watch']);


};