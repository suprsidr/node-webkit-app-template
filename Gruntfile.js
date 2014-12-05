module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      dist: {
        options: {
          sourceMap: 'build/js/main.map',
          outputStyle: 'compressed'
        },
        files: {
          //'../js/main.min.js': 'js/main.js',
          'build/js/foundation.min.js': 'js/foundation.concat.js'
        }
      }
    },

    sass: {
      options: {
        includePaths: ['css/scss/foundation']
      },
      dev: {
        files: {
          'css/main.css': 'css/scss/main.scss'
        }        
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'build/css/main.min.css': 'css/scss/main.scss'
        }        
      }
    },
    
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/foundation/foundation.js',
              //'js/foundation/foundation.abide.js',
              //'js/foundation/foundation.accordion.js',
              //'js/foundation/foundation.alert.js',
              //'js/foundation/foundation.clearing.js',
              //'js/foundation/foundation.dropdown.js',
              //'js/foundation/foundation.equalizer.js',
              //'js/foundation/foundation.interchange.js',
              //'js/foundation/foundation.joyride.js',
              //'js/foundation/foundation.magellan.js',
              //'js/foundation/foundation.offcanvas.js',
              //'js/foundation/foundation.orbit.js',
              //'js/foundation/foundation.reveal.js',
              'js/foundation/foundation.tab.js',
              //'js/foundation/foundation.tooltip.js',
              'js/foundation/foundation.topbar.js'
              ],
        dest: 'js/foundation.concat.js',
      },
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },
      
      uglify: {
        files: [/*'js/main.js', */'js/foundation.concat.js'],
        tasks: ['uglify'],
        options: {
          //livereload: true,
        }
      },
      
      sass: {
        files: 'css/scss/**/*.scss',
        tasks: ['sass'],
        options: {
          //livereload: true,
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('build', ['concat', 'sass', 'uglify']);
  grunt.registerTask('default', ['build','watch']);
}