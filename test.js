import test from 'ava';
import hasDisposable, {hasAsyncDisposable} from './index.js';

// HasDisposable tests

test('returns true for object with Symbol.dispose', t => {
	const resource = {
		[Symbol.dispose]() {},
	};

	t.true(hasDisposable(resource));
});

test('returns false for object without Symbol.dispose', t => {
	t.false(hasDisposable({}));
});

test('returns false for null', t => {
	t.false(hasDisposable(null));
});

test('returns false for undefined', t => {
	t.false(hasDisposable(undefined));
});

test('returns false for number', t => {
	t.false(hasDisposable(42));
});

test('returns false for string', t => {
	t.false(hasDisposable('hello'));
});

test('returns false for boolean', t => {
	t.false(hasDisposable(true));
});

test('returns false for symbol', t => {
	t.false(hasDisposable(Symbol('test')));
});

test('returns false when Symbol.dispose is not a function', t => {
	const resource = {
		[Symbol.dispose]: 'not a function',
	};

	t.false(hasDisposable(resource));
});

test('returns true for object with both Symbol.dispose and Symbol.asyncDispose', t => {
	const resource = {
		[Symbol.dispose]() {},
		[Symbol.asyncDispose]() {},
	};

	t.true(hasDisposable(resource));
});

// HasAsyncDisposable tests

test('returns true for object with Symbol.asyncDispose', t => {
	const resource = {
		async [Symbol.asyncDispose]() {},
	};

	t.true(hasAsyncDisposable(resource));
});

test('hasAsyncDisposable returns false for object without Symbol.asyncDispose', t => {
	t.false(hasAsyncDisposable({}));
});

test('hasAsyncDisposable returns false for null', t => {
	t.false(hasAsyncDisposable(null));
});

test('hasAsyncDisposable returns false for undefined', t => {
	t.false(hasAsyncDisposable(undefined));
});

test('hasAsyncDisposable returns false for number', t => {
	t.false(hasAsyncDisposable(42));
});

test('hasAsyncDisposable returns false for string', t => {
	t.false(hasAsyncDisposable('hello'));
});

test('hasAsyncDisposable returns false for boolean', t => {
	t.false(hasAsyncDisposable(false));
});

test('hasAsyncDisposable returns false when Symbol.asyncDispose is not a function', t => {
	const resource = {
		[Symbol.asyncDispose]: 123,
	};

	t.false(hasAsyncDisposable(resource));
});

test('hasAsyncDisposable returns true for object with both protocols', t => {
	const resource = {
		[Symbol.dispose]() {},
		async [Symbol.asyncDispose]() {},
	};

	t.true(hasAsyncDisposable(resource));
});

test('hasDisposable does not return true for only Symbol.asyncDispose', t => {
	const resource = {
		async [Symbol.asyncDispose]() {},
	};

	t.false(hasDisposable(resource));
});

test('hasAsyncDisposable does not return true for only Symbol.dispose', t => {
	const resource = {
		[Symbol.dispose]() {},
	};

	t.false(hasAsyncDisposable(resource));
});

test('works with class instances', t => {
	class Resource {
		[Symbol.dispose]() {}
	}

	t.true(hasDisposable(new Resource()));
});

test('works with async class instances', t => {
	class AsyncResource {
		async [Symbol.asyncDispose]() {}
	}

	t.true(hasAsyncDisposable(new AsyncResource()));
});
