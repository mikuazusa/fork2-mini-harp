// Generated by CoffeeScript 1.6.3
(function() {
  var argv, command, createMiniHarp;

  createMiniHarp = require("../index");

  argv = require("minist")(process.argv.splice(2));

  command = function() {
    return console.log(createMiniHarp(argv.port));
  };

  module.exports = command;

}).call(this);