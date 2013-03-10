module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      lib: {
        files: {
          'is.min.js' : ['lib/is.js']
        }
      }
    }
  })

  // Default task.
  grunt.registerTask('default', ['uglify'])

  // load the grunt task plugins
  grunt.loadNpmTasks('grunt-contrib-uglify')
};
