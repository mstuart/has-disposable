/** @type {import('xo').FlatXoConfig} */
const xoConfig = [
	{
		files: ['test.js'],
		rules: {
			// Symbol.dispose / Symbol.asyncDispose are the TC39 Explicit Resource
			// Management proposal (Stage 3+), documented on MDN and natively supported
			// since TypeScript 5.2 / current V8 & Node. eslint-plugin-unicorn's allowlist
			// for this rule hasn't been updated to include them yet, so every hit in this
			// file is a false positive — testing this exact protocol is the point of the
			// file. Scoped to test.js only; index.js keeps per-line disables instead.
			'unicorn/no-nonstandard-builtin-properties': 'off',
		},
	},
];

export default xoConfig;
