/**
Check if a value implements the `Disposable` protocol (`Symbol.dispose`).

@param {unknown} value - The value to check.
@returns {boolean} Whether the value has a `Symbol.dispose` method.
*/
export default function hasDisposable(value) {
	if (value === null || value === undefined) {
		return false;
	}

	// Symbol.dispose is TC39 Explicit Resource Management (Stage 3+); eslint-plugin-unicorn's allowlist hasn't caught up yet.
	// eslint-disable-next-line unicorn/no-nonstandard-builtin-properties
	return typeof value[Symbol.dispose] === 'function';
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

	// Symbol.asyncDispose is TC39 Explicit Resource Management (Stage 3+); eslint-plugin-unicorn's allowlist hasn't caught up yet.
	// eslint-disable-next-line unicorn/no-nonstandard-builtin-properties
	return typeof value[Symbol.asyncDispose] === 'function';
}
