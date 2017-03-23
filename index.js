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

  fullPath = info.DEFAULT_CMD[process.platform];

  // NOTE: fs.existsSync is not deprecated in node.js 6.x or above
  chromePaths[info.name] = fs.existsSync(fullPath) ? fullPath : null;
});

module.exports = chromePaths;
