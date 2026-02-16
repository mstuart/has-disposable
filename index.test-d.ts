import {expectType, expectError} from 'tsd';
import hasDisposable, {hasAsyncDisposable} from './index.js';

const value: unknown = {};

if (hasDisposable(value)) {
	expectType<Disposable>(value);
}

if (hasAsyncDisposable(value)) {
	expectType<AsyncDisposable>(value);
}

expectType<boolean>(hasDisposable({}));
expectType<boolean>(hasDisposable(null));
expectType<boolean>(hasAsyncDisposable({}));
expectType<boolean>(hasAsyncDisposable(undefined));
