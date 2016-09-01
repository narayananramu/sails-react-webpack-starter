/**
 * Compile JSX files to JavaScript.
 *
 * ---------------------------------------------------------------
 *
 * Compiles jsx files from `react/source` into Javascript and places them into
 * `react/compiled` directory.
 *
 */
module.exports = function(grunt) {

  grunt.config.set('babel', {
    dev: {
      options: {
        presets: ['es2015','react']
      },
      files: [{
        expand: true,
        cwd: 'react/source/',
        src: ['**/*.jsx'],
        dest: 'react/compiled/',
        ext: '.js'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-babel');
};
