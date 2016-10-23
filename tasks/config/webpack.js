/**
 * Bundles React App to a JavaScript file.
 *
 * ---------------------------------------------------------------
 *
 * Bundles React App file from `react/compiled` into Javascript and places them into
 * `js/bundle` directory.
 *
 */
var pageBase = "./react/compiled";
var entries = {};
var fs = require('fs'),
    entry = fs.readdirSync(pageBase).filter(function(file) {
      entries[file] = pageBase+"/"+file;
    });

module.exports = function(grunt) {
  grunt.config.set('webpack', {
    options: {
      entry: entries,
      output: {
        path: "./assets/js/bundle",
        filename: "[name]"
      },
      stats: {
        colors: true,
        modules: true,
        reasons: true
      },

      storeStatsTo: "xyz",

      progress: true,

      failOnError: true,

      watch: false,

      keepalive: false,

      inline: true
    },
    build:{}
  });
  grunt.loadNpmTasks('grunt-webpack');
};