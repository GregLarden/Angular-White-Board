module.exports = function (grunt) {
    'use strict';
    // load Grunt plugins from NPM
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // configure plugins
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bowercopy: {
            options: {
                clean: false,
                runBower: true,
                report: true,
                srcPrefix: 'bower_components'
            },
            libs: {
                options: {
                    destPrefix: 'app/vendor'
                },
                files: {
                    'jquery': 'jquery/dist',
                    'angular': 'angular',
                    'angular-resource': 'angular-resource',
                    'angular-route': 'angular-route',
                    'angular-ui-router': 'angular-ui-router/release',
                    'bootstrap': 'bootstrap/dist/css',
                    'font-awesome': 'font-awesome/css'
               }  
            }
        },
        watch: {
            scripts: {
                files: ['App/**/*.js'],
                
            }
        }
    });                                      
    // define tasks
    grunt.registerTask('default', ['bowercopy', 'watch']);
};