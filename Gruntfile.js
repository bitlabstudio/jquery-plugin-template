module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            min: {
                options: {
                    paths:  ["css/"],
                    compress: true
                },
                files: {
                    "css/MYPLUGIN_FILENAME.min.css": "css/MYPLUGIN_FILENAME.less"
                }
            },
            max: {
                options: {
                    paths:  ["css/"]
                },
                files: {
                    "css/MYPLUGIN_FILENAME.css": "css/MYPLUGIN_FILENAME.less"
                }
            }
        },
        jshint: {
            files  : ['js/MYPLUGIN_FILENAME.js', 'test/MYPLUGIN_FILENAME-tests.js'],
            options: {
                globals: {
                    jQuery  : true,
                    console : true,
                    document: true
                }
            }
        },
        blanket_qunit: {
            all: {
                options: {
                    urls     : ['http://localhost:8000/test/MYPLUGIN_FILENAME-tests.html?coverage=true&gruntReport'],
                    threshold: 70
                }
            }
        },
        qunit: {
            all: {
                options: {
                    urls: [
                        'http://localhost:8000/test/MYPLUGIN_FILENAME-tests.html'
                    ]
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.',
                    hostname: 'localhost'
                }
            }
        },
        uglify: {
            compress: {
                options: {
                    mangle: false
                },
                files: {
                    "js/MYPLUGIN_FILENAME.min.js": ["js/MYPLUGIN_FILENAME.js"]
                }
            }
        },
        watch: {
            uglify: {
                files: ['js/MYPLUGIN_FILENAME.js'],
                tasks: ['jshint', 'uglify']
            },
            jshint: {
                files: ['js/MYPLUGIN_FILENAME.js', 'test/MYPLUGIN_FILENAME-tests.js'],
                tasks: ['jshint']
            },
            css: {
                files: ['css/*.less'],
                tasks: ['less']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-blanket-qunit');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['connect', 'jshint', 'qunit']);
    grunt.registerTask('blanket_test', ['connect', 'jshint', 'blanket_qunit']);
};
