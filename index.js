'use strict';

var fs = require('fs');

var karmaChromeLauncher = require('karma-chrome-launcher');

var chromePaths = {};

Object.keys(karmaChromeLauncher).forEach(function(key) {
  var info, fullPath;

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

  try {
    fullPath = info.DEFAULT_CMD[process.platform];

    fs.accessSync(fullPath);

    chromePaths[info.name] = fullPath;
  } catch(e) {
    chromePaths[info.name] = null;
  }
});

module.exports = chromePaths;
