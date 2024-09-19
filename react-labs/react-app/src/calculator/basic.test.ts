
// describe is a group or "suite" of tests
describe('Basic Suite', () => {

	// "test()" or "it()" is an individual test
	test('Basic Test', () => {

		// All "expect"ations must pass for a test to pass
		expect(1 + 2).toBe(3);
	});
});
