<div align="center">
  <img src="docs/assets/logo.svg" alt="has-disposable — Check if a value implements the Disposable or AsyncDisposable protocol" width="720">
</div>

<p align="center"><strong>Check if a value implements the Disposable or AsyncDisposable protocol</strong></p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT"></a>
  <a href="https://www.npmjs.com/package/has-disposable"><img src="https://img.shields.io/npm/v/has-disposable?label=npm" alt="npm"></a>
  <img src="https://img.shields.io/badge/node-%E2%89%A520-339933.svg" alt="Node 20+">
</p>

---
## Install

```sh
npm install has-disposable
```

## Usage

```js
import hasDisposable, {hasAsyncDisposable} from 'has-disposable';

const resource = {
	[Symbol.dispose]() {
		console.log('disposed');
	},
};

hasDisposable(resource);
//=> true

hasDisposable({});
//=> false

const asyncResource = {
	async [Symbol.asyncDispose]() {
		console.log('async disposed');
	},
};

hasAsyncDisposable(asyncResource);
//=> true
```

## API

### hasDisposable(value)

Returns `true` if the value has a `Symbol.dispose` method.

#### value

Type: `unknown`

The value to check.

### hasAsyncDisposable(value)

Returns `true` if the value has a `Symbol.asyncDispose` method.

#### value

Type: `unknown`

The value to check.

## Related

- [using](https://github.com/nicolo-ribaudo/tc39-proposal-explicit-resource-management) - TC39 Explicit Resource Management proposal

## License

MIT
