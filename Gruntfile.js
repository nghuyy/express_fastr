module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {
                    'dist/index.js': ['index.js']
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            package: {
                src: ["src/package.json"],
                dest: "dist/package.json"
            },
            readme: {
                src: ["src/README.md"],
                dest: "dist/README.md"
            }
        },
        run: {
            options: {
            },
            build: {
                cmd: 'node',
                args: [
                    'src/build-touch.js'
                ]
            },
            publish: {
                cmd: 'node',
                args: [
                    'src/publish.js'
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask('default', ['run:build', 'uglify', 'concat', 'run:publish']);
};