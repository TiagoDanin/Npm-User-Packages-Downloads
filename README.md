# Npm-User-Packages-Downloads
Get npm packages per author with download counts

## Usage

```javascript
const npmUserPackagesDownloads = require('mpm-user-packages-downloads')
npmUserPackagesDownloads('tiagodanin', '2017-12-03:2018-12-11')
	.then((data) => console.log(data))
```

## Installation

This is a [Node.js](https://nodejs.org/) module available through the
[npm registry](https://www.npmjs.com/). It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
npm install npm-user-packages-downloads --save
```

## Dependencies

- [axios](https://ghub.io/axios): Promise based HTTP client for the browser and node.js
- [npm-user-packages](https://ghub.io/npm-user-packages): Get packages by a npm user

## License

MIT
