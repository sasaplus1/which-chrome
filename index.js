'use strict';

var fs = require('fs');

var karmaChromeLauncher = require('karma-chrome-launcher');

var chromePaths = {};

Object.keys(karmaChromeLauncher).forEach(function(key) {
  var info;

  if (key.indexOf('launcher:') !== 0) {
    return;
  }

  info = (
    karmaChromeLauncher[key] &&
    karmaChromeLauncher[key][1] &&
    karmaChromeLauncher[key][1].prototype
  );

  if (!info) {
    return;
  }

  chromePaths[info.name] = info.DEFAULT_CMD[process.platform] || null;
});

module.exports = chromePaths;
