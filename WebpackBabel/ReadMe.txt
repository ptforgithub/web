Resources:
https://www.youtube.com/watch?v=iWUR04B42Hc
Use Babel & Webpack To Compile ES2015 - ES2017


(#) When we use Webpack with Babel, we have to use Presets
Presets are plugins

(#) Babel-Preset-env replaces es2015, es2016, es2017

(#) We will also use Pollyfill preset, later

> npm init -y
> npm install --save-dev webpack webpack-dev-server babel-core babel-loader babel-preset-env

Don't install Webpack globally

Add "build" under scripts in package.json

"build": "webpack"

(#) Create webpack.config.js
 - Specify Entry/Output and loader = babel-loader

(#) Write src/app.js

> npm run build
This gives some error
> npm install webpack-cli --save-dev
> npm run build
Still getting errors
In webpack.config.js, change 'loaders' to 'rules'
Still getting errors
Follow the build error message, change babel-loader from 8 to 7.
> npm install babel-loader@7
This builds fine and we have build/app.bundle.js created

(#) Checkout fetch -- its the new way to get data from server
const response = await fetch('https://something');
const data = await response.json();

(#) Babel Pollyfill
We need polyfill for 'fetch' - it can't be converted using a transformation to ES5, and needs something called polyfill - google it

> npm install --save-dev babel-polyfill babel-preset-stage-0
In webpack.config.js, in 'entry' section, add 'babel-polyfill' against app
and against presets, add 'stage-0'

> npm run build
