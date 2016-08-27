/**
 * Bundles React App to a JavaScript file.
 *
 * ---------------------------------------------------------------
 *
 * Bundles React App file from `react/compiled` into Javascript and places them into
 * `js/bundle` directory.
 *
 */
module.exports = function(grunt) {
  grunt.config.set('webpack', {
    options: {
      entry: "./react/compiled/index.js",
      output: {
        path: "./assets/js/bundle",
        filename: "[name].js"
      },
      stats: {
        // Configure the console output
        colors: true,
        modules: true,
        reasons: true
      },

      storeStatsTo: "xyz",

      progress: true,

      failOnError: true,

      watch: false,

      keepalive: false,

      inline: true,

      hot: true
    },
    build:{}
  });
  grunt.loadNpmTasks('grunt-webpack');
};
