<h1 align="center">Global DOM Listener</h1>

<p align="center">
  <a href="https://github.com/mattickx/global-dom-listener"><img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/mattickx/global-dom-listener/.github%2Fworkflows%2Fpublish.yaml"></a>
  &nbsp;
  <a href="https://www.npmjs.com/package/@mattickx/global-dom-listener"><img alt="NPM latest version" src="https://img.shields.io/npm/v/@mattickx/global-dom-listener"></a>
  &nbsp;
  <a href="https://cdn.jsdelivr.net/npm/@mattickx/global-dom-listener/dist/index.umd.js"><img alt="CDN Package size" src="https://img.shields.io/badge/CDN-<_2kB-blue"></a>
  &nbsp;
  <a href="https://www.npmjs.com/package/@mattickx/global-dom-listener"><img alt="NPM Downloads per week" src="https://img.shields.io/npm/dw/@mattickx/global-dom-listener"></a>
  &nbsp;
  <a href="https://github.com/mattickx/global-dom-listener/LICENSE.md"><img alt="License" src="https://img.shields.io/github/license/mattickx/global-dom-listener"></a>
</p>

<p align="center">
  A global listener for current AND dynamically added DOM elements in the browser.
</p>

<p align="center">
 <a href="#-quick-start">Getting Started</a> | <a href="./index.html">Example</a>
</p>

## ⚙️ Installation

### Using CDN

You can use the hosted CDN file directly in your browser/html :<br>

<a href="https://cdn.jsdelivr.net/npm/@mattickx/global-dom-listener/dist/index.umd.js">

```html
<script src="https://cdn.jsdelivr.net/npm/@mattickx/global-dom-listener/dist/index.umd.js"></script>
```

</a>

### Using the NPM package
You can install the npm package by using :<br>
```bash
pnpm add @mattickx/global-dom-listener
```
```bash
npm install @mattickx/global-dom-listener
```
```bash
yarn add @mattickx/global-dom-listener
```

## 🔧 Quick start
Listen to a DOM event using a selector.

### ID selector:
```js
window.GlobalDOMListener.on('click', '#custom-id', (event) => {
  // Do something ...
  // event.target will be an instance of an element matching the selector
});
```

### Class selector:
```js
window.GlobalDOMListener.on('keydown', '.custom-class', (event) => {
  // Do something ...
  // event.target will be an instance of an element matching the selector
});
```

### Data attribute selector:
```js
window.GlobalDOMListener.on('blur', '[data-custom-attribute]', (event) => {
  // Do something ...
  // event.target will be an instance of an element matching the selector
});
```


## 🔧 Working example

See a working examle in [this HTML file](./index.html)

## 🤝 Contribute
Continuous improvement is encouraged and your contributions are valuable!

If you identify areas for improvement, have suggestions or encounter issues, please create a GitHub issue.

## 📜 LICENSE

This is licensed under the MIT License, see [LICENSE](./LICENSE.md)
