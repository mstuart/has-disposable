/**
Check if a value implements the `Disposable` protocol (`Symbol.dispose`).

@param {unknown} value - The value to check.
@returns {boolean} Whether the value has a `Symbol.dispose` method.
*/
export default function hasDisposable(value) {
	if (value === null || value === undefined) {
		return false;
	}

	return typeof value[Symbol.dispose] === 'function'; // eslint-disable-line no-use-extend-native/no-use-extend-native
}

/**
Check if a value implements the `AsyncDisposable` protocol (`Symbol.asyncDispose`).

@param {unknown} value - The value to check.
@returns {boolean} Whether the value has a `Symbol.asyncDispose` method.
*/
export function hasAsyncDisposable(value) {
	if (value === null || value === undefined) {
		return false;
	}

	return typeof value[Symbol.asyncDispose] === 'function'; // eslint-disable-line no-use-extend-native/no-use-extend-native
}
