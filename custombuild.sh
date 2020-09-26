#!/bin/sh
ng build angular-custom-elements --prod --output-hashing=none && cat dist/angular-custom-elements/runtime-es2015.js dist/angular-custom-elements/polyfills-es2015.js dist/angular-custom-elements/main-es2015.js > preview/vendor.bundle.js
