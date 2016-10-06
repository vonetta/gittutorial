module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: "\n\n"
            },
            dist: {
                src: ['js/main.js', 'js/controller.js'],
                dest: 'bin/<%= pkg.name %>.js'
            }

        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'bin/js/<%= pkg.name %>.min.js': ['bin/<%= pkg.name %>.js']
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //task
    grunt.registerTask('default', ['concat', 'uglify']);

};
