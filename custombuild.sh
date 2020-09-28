#!/bin/sh
ng build angular-custom-elements --prod --output-hashing=none && cat dist/angular-custom-elements/runtime-es5.js dist/angular-custom-elements/polyfills-es5.js dist/angular-custom-elements/main-es5.js > preview/vendor.bundle.js
