<div align="center">
  <h1>
    Palawan
  </h1>

  <p>
    <strong>Works for Chrome, Opera, Edge & Firefox.</strong>
  </p>
  <p>
  This is the Gmail Extension for tracking e-mail and creating sequences.
  </p>
</div>

## Features

<dl>
  <dt>Write in your favourite framework - React! :) </dt>
  <dd>
    Now you can create part of your exstensions in React framework - as you wish ;)
  </dd>
</dl>

<dl>
  <dt>Write once and deploy to Chrome, Opera, Edge & Firefox</dt>
  <dd>
    Based on WebExtensions. It also includes a tiny polyfill to bring uniformity to the APIs exposed by different browsers.
  </dd>
</dl>

<dl>
  <dt>Live-reload</dt>
  <dd>
    Your changes to CSS, HTML & JS files will be relayed instantly without having to manually reload the extension. This ends up saving a lot of time and improving the developer experience. Based on https://github.com/xpl/crx-hotreload
  </dd>
</dl>

## Installation

1. Clone the repository
2. Run `npm install` or `yarn install`
3. Run `npm run build` or `yarn build`

##### Load the extension in Chrome & Opera

1. Open Chrome/Opera browser and navigate to chrome://extensions
2. Select "Developer Mode" and then click "Load unpacked extension..."
3. From the file browser, choose to `/dev/chrome` or (`/dev/opera`)

##### Load the extension in Firefox

1. Open Firefox browser and navigate to about:debugging
2. Click "Load Temporary Add-on" and from the file browser, choose `/dev/firefox`

##### Load the extension in Edge

https://docs.microsoft.com/en-us/microsoft-edge/extensions/guides/adding-and-removing-extensions

## Developing

The following tasks can be used when you want to start developing the extension and want to enable live reload -

- `npm run watch-dev` or `yarn watch-dev`

## Packaging

Run `npm run build` or `yarn build` to create a zipped, production-ready extension for each browser. You can then upload that to the appstore.

---

This project is licensed under the MIT license.

If you have any questions or comments, please create a new issue. I'd be happy to hear your thoughts.
