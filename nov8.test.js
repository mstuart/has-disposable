import test from "ava";
import hasDisposable, { hasAsyncDisposable } from "./index.js";

test.serial(
  "boxed primitive methods do not make primitive resources disposable",
  (t) => {
    const syncDescriptor = Object.getOwnPropertyDescriptor(
      Number.prototype,
      Symbol.dispose
    );
    const asyncDescriptor = Object.getOwnPropertyDescriptor(
      Number.prototype,
      Symbol.asyncDispose
    );
    Object.defineProperty(Number.prototype, Symbol.dispose, {
      configurable: true,
      value: () => undefined,
    });
    Object.defineProperty(Number.prototype, Symbol.asyncDispose, {
      configurable: true,
      value: () => undefined,
    });
    try {
      t.false(hasDisposable(1));
      t.false(hasAsyncDisposable(1));
      t.true(hasDisposable(Reflect.construct(Number, [1])));
      t.true(hasAsyncDisposable(Reflect.construct(Number, [1])));
      const callable = () => undefined;
      callable[Symbol.dispose] = () => undefined;
      t.true(hasDisposable(callable));
    } finally {
      for (const [key, descriptor] of [
        [Symbol.dispose, syncDescriptor],
        [Symbol.asyncDispose, asyncDescriptor],
      ]) {
        if (descriptor) {
          Object.defineProperty(Number.prototype, key, descriptor);
        } else {
          Reflect.deleteProperty(Number.prototype, key);
        }
      }
    }
  }
);
