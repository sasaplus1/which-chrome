# which-chrome

get Google Chrome path

## Installation

### npm

```sh
$ npm install which-chrome
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
