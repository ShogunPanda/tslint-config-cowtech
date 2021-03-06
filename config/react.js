/*
 * This file is part of the tslint-config-cowtech npm package. Copyright (C) 2017 and above Shogun <shogun@cowtech.it>.
 * Licensed under the MIT license, which can be found at http://www.opensource.org/licenses/mit-license.php.
 */

module.exports = {
  extends: "./node.js",
  // The following rules need tslint-react to be added in the devDependencies.
  rules: {
    "jsx-alignment": false,
    "jsx-ban-props": false,
    "jsx-curly-spacing": false,
    "jsx-no-bind": false,
    "jsx-no-lambda": false,
    "jsx-no-multiline-js": false,
    "jsx-no-string-ref": true,
    "jsx-use-translation-function": false,
    "jsx-self-close": true,
    "jsx-wrap-multiline": true
  }
}