# Global DOM Listener

A global listener for current AND dynamically added elements.

## ⚙️ Usage

You can use the hosted CDN file directly in your browser/html :<br>
[https://cdn.jsdelivr.net/npm/@mattickx/global-dom-listener/dist/index.umd.js](https://cdn.jsdelivr.net/npm/@mattickx/global-dom-listener/dist/index.umd.js)

Or install through npm by using:<br>
`npm install --save @mattickx/global-dom-listener`

## 🔧 Example

### Example with custom attribute data-custom-attribute :
```js
window.GlobalDOMListener.on('click', '[data-custom-attribute]', (e) => {
  // Do something ...
});
```
This will work on any element with the data-custom-attribute attribute.
Even when such elements are dynamically added after this function call!

### Working example :

See a working examle in [this HTML file](./index.html)

## 🤝 Contribute
Continuous improvement is encouraged and your contributions are valuable!

If you identify areas for improvement, have suggestions or encounter issues, please create a GitHub issue.

## 📜 LICENSE

This is licensed under the MIT License, see [LICENSE](./LICENSE)
