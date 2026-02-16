# has-disposable

> Check if a value implements the Disposable or AsyncDisposable protocol

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
