# Minimal SVG Loader for Webpack
This webpack loader works together with [Minimal SVG Plugin](https://github.com/playbuzz/webpack-minimal-svgstore-plugin). 
It allows you to combine multiple SVG files into one using <symbol> elements which you may <use> in your markup.

## Install

```bash
    npm install minimal-svg-loader -D
```
or
```bash
    yarn add minimal-svg-loader -D
```

## Configuration

1. Require dependencies:
```js
const MinimalSvgstoreWebpackPlugin = require('minimal-svg-plugin');
```
2. Add configuration object to module.rules like this:
```javascript
module: {
    rules: [
        {
            test: /\.svg$/,
            loader: 'minimal-svg-loader'
        }
    ]
}
```
3. Add plugin:
```js
new MinimalSvgstoreWebpackPlugin({
    // optional prefix
    // given file 'some-icon.svg' you'll be able to reference it like this:
    // <use xlink:href="#icon-prefix-some-icon" />
    prefix: 'icon-prefix-',
    // optional fileName where runtime will be added to 
    // (if you want to have all icon extracted from resulting bundles into single file)
    fileName: `${element}/${element}.svg.bundle.js`,
}),
```

## Usage example

Import svg file from javascript like this:
```js
import './star.svg';
```

or require:
```js
require('./star.svg');
```

And you may use it from your html like this:
```html
<svg>
    <use xlink:href="#star" />
</svg>
```

## LICENSE

Copyright (c) Playbuzz Ltd. All rights reserved.

Licensed under the [MIT](LICENSE) License.
