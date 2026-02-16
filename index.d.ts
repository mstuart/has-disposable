/**
Check if a value implements the `Disposable` protocol (`Symbol.dispose`).

@param value - The value to check.
@returns Whether the value has a `Symbol.dispose` method.

@example
```
import hasDisposable from 'has-disposable';

const resource = {
	[Symbol.dispose]() {
		console.log('disposed');
	},
};

hasDisposable(resource);
//=> true

hasDisposable({});
//=> false
```
*/
export default function hasDisposable(value: unknown): value is Disposable;

/**
Check if a value implements the `AsyncDisposable` protocol (`Symbol.asyncDispose`).

@param value - The value to check.
@returns Whether the value has a `Symbol.asyncDispose` method.

@example
```
import {hasAsyncDisposable} from 'has-disposable';

const resource = {
	async [Symbol.asyncDispose]() {
		console.log('async disposed');
	},
};

hasAsyncDisposable(resource);
//=> true

hasAsyncDisposable({});
//=> false
```
*/
export function hasAsyncDisposable(value: unknown): value is AsyncDisposable;
