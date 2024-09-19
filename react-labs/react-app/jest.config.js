/** @type {import('ts-jest').JestConfigWithTsJest} **/

export default {
	// Switch this from the default "node"
	// see https://stackoverflow.com/a/69228464
	testEnvironment: 'jsdom',
	transform: {
		'^.+.tsx?$': ['ts-jest', {}],
	},

	moduleNameMapper: {
		// Suggested here: https://stackoverflow.com/a/54117206
		// This is a bad solution which Jest should be criticized for
		'^lodash-es$': 'lodash',

		// Mock out imports of CSS files
		// see https://jestjs.io/docs/webpack#handling-static-assets
		'\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
	},
};
