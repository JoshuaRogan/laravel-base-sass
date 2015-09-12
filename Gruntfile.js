sassFiles = {
    'public/style/style.css': 'resources/assets/sass/main.scss'
}

postcssFiles = {
    "public/style/style.min.css": ['public/style/style.css']
}

scriptOutput = 'public/js/app.min.js';
scriptFiles = {
    src: ['bower_components/jquery/dist/jquery.min.js', 'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js'],
    dest: scriptOutput
}

module.exports = function(grunt) {

    grunt.initConfig({
        postcss: {
            prod: {
                options: {
                    map: {
                        inline: false, // save all sourcemaps as separate files...
                        annotation: 'resources/assets/sass/maps' // ...to the specified directory
                    },
                    // safe: true,
                    processors: [
                        // require('pixrem')(), // add fallbacks for rem units
                        require('autoprefixer')({
                            browsers: 'last 2 versions'
                        }), // add vendor prefixes
                        require('cssnano')(), // minify the result
                        require('cssnext')() // Plugins to use future CSS features now by adding backwards compatibility css processing
                    ]
                },
                files: postcssFiles
            },
            dev: {
                options: {
                    map: {
                        inline: false, // save all sourcemaps as separate files...
                        annotation: 'resources/assets/sass/maps' // ...to the specified directory
                    },
                    // safe: true,
                    processors: [
                        // require('pixrem')(), // add fallbacks for rem units
                        require('autoprefixer')({
                            browsers: 'last 2 versions'
                        }), // add vendor prefixes
                        require('cssnext')() // Plugins to use future CSS features now by adding backwards compatibility css processing
                    ]
                },
                files: postcssFiles
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: sassFiles
            }
        },
        uglify: {
            dist: {
                options: {

                },
                files: {
                    'public/js/app.min.js': [scriptOutput]
                }
            }
        },
        concat: {
            options: {
                separator: ';\n',
            },
            dist: scriptFiles,
        },
        watch: {
            configFiles: {
                files: ['Gruntfile.js', 'package.json'],
                options: {
                    reload: true
                }
            },
            styles: {
                files: 'resources/assets/sass/**/*.scss',
                tasks: ['sass:dist', 'postcss:dev'],
                options: {
                    nospawn: true
                }
            },
            scripts: {
                files: 'resources/assets/js/**/*.js',
                tasks: ['concat'],
                options: {
                    nospawn: true
                }
            },
        }
    });



    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('prod', ['sass:dist', 'postcss:prod', 'concat', 'uglify']);
    grunt.registerTask('dev', ['sass:dist', 'postcss:dev']);

};