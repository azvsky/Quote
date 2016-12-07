module.exports = function(grunt) {
    
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        less: {
            style: {
                files: {
                "dist/css/style.css": ["app/less/style.less"]
                }
            }
        },
        watch: {
          less: {
            files: ["app/less/**/*.less"],
            tasks: ["less"]
      }
    },
        autoprefixer: {
                options: {
                browsers: ["last 2 version", "ie 10"]
                },
            style: {
                src:"dist/css/style.css"
            }
        },
       cmq: {
           style: {
                files: {
                "dist/css.style.css": ["dist/css/style.css"]
                }
           }
       },
        cssmin: {
            style: {
                options: {
                   keepSpecialComments: 0,
                   report: "gzip"
                },
                files: {
                    "dist/css/style.min.css": ["dist/css/style.css"]
                }
            }
        },
        csscomb: {
            style: {
                expand: true,
                src: ["app/less/**/*.less"]
            }
        },
        imagemin: {
            images: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    src: ["dist/img/**/*.{png,jpg,gif}"]
                }]
                }
            },
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true,
                caseSensitive: true,
                keepClosingSlash: false
            },
            html: {
                files: {
                    "dist/index.min.html": "dist/index.html"
                }
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: "app",
                    src: [
                        "img/**",
                        "pic/**",
                        "font/**",
                        "js/**",
                        "*.html",
                        "fonts/**"
                    ],
                    dest: "dist"
                }]
            }
        },
        clean: {
            dist: ["dist"]
        },
        /*browserSync: {
          server: {
            bsFiles:{
              src: ["*.html", "css/*.css"]
            },
            options: {
              server: "."
            }
          }
        },*/
        svgmin:{
          symbols: {
            files: [{
              expand: true,
              src: ["app/img/*.svg"]
            }]
          }
        },
        svgstore: {
          options: {
            svg: {
              style: "display: none"
            }
          },
        symbols: {
          files: {
            "app/img/symbols.svg": ["app/img/*.svg"]
          }
        }
        }
   
    });
    grunt.registerTask("symbols",["svgmin", "svgstore"]);
    grunt.registerTask("build", [
    "clean",
    "copy",
    "less",
    "autoprefixer",
    "cmq",
    "cssmin",
    "symbols",
    "imagemin",
    "htmlmin"
    //"browserSync"
    ]);
    
};
//grunt.loadNpmTasks("grunt-contrib-watch");
    //grunt.loadNpmTasks("grunt-contrib-less");
    //grunt.loadNpmTasks('grunt-autoprefixer');
   //grunt.loadNpmTasks('grunt-combine-media-queries');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');