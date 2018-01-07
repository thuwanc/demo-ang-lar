module.exports = function(grunt){

    // Load grunt tasks automatically
	require('jit-grunt')(grunt);

	// grunt.registerTask("default", "", function(){
	// 	grunt.log.write("this grunt task is useless");

	// });


	//configure main project settings
	grunt.initConfig({

		//basic settings and info about our plugins
		// pkg: grunt.file.readJSON('package.json');

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