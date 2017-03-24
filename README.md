# which-chrome

[![Build Status](https://travis-ci.org/sasaplus1/which-chrome.svg)](https://travis-ci.org/sasaplus1/which-chrome)
[![Dependency Status](https://gemnasium.com/badges/github.com/sasaplus1/which-chrome.svg)](https://gemnasium.com/github.com/sasaplus1/which-chrome)
[![npm version](https://badge.fury.io/js/which-chrome.svg)](https://badge.fury.io/js/which-chrome)

get Google Chrome path

## Installation

### npm

```sh
$ npm install which-chrome karma-chrome-launcher
```

## Usage

```js
var whichChrome = require('which-chrome');

console.log(whichChrome.Chrome);        // => "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
console.log(whichChrome.ChromeCanary);  // => "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary"
console.log(whichChrome.Chromium);      // => null
console.log(whichChrome.Dartium);       // => null
```

## CLI

```sh
$ which-chrome Chrome
/Applications/Google Chrome.app/Contents/MacOS/Google Chrome
$ which-chrome ChromeCanary
/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary
$ which-chrome Chromium
$ echo $?
1
$ which-chrome Dartium
$ echo $?
1
```

## License

The MIT license. Please see LICENSE file.
