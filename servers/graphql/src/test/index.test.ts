/* eslint-disable @typescript-eslint/no-unused-expressions */
import { expect } from 'chai';
import { strict as assert } from 'node:assert';
import { ApolloServer } from '@apollo/server';
import { resolvers } from '../resolvers.js';
import { typeDefs } from '../typeDefs.js';
import { students as originalStudents } from '../data/all-data-typed.js';
import { type Student } from '../generated/graphql.js';

/*

describe('Apollo Server students test suite', () => {
	let testServer: ApolloServer<any>;

	beforeEach(() => {
		testServer = new ApolloServer({
			typeDefs,
			resolvers,
		});
	});

	describe('Read tests', () => {
		it('should run a basic Apollo test', async () => {
			const response = await testServer.executeOperation({
				query: 'query SayHelloWorld($name: String) { hello(name: $name) }',
				variables: { name: 'world' },
			});

			assert(response.body.kind === 'single');
			expect(response.body.singleResult.errors).to.be.undefined;
		});

		it('should retrieve a list of students', async () => {
			const response = await testServer.executeOperation({
				query: 'query { students{id} }',
			});

			// The asserts tell TypeScript to narrow the types asserted
			assert(response.body.kind === 'single');
			assert(response.body.singleResult.data);
			assert(response.body.singleResult.data.students);
			assert(Array.isArray(response.body.singleResult.data.students));
			expect(response.body.singleResult.data.students.length).to.equal(
				originalStudents.length,
			);
		});

		it('should filter on a single-value field', async () => {
			let testCountry = 'US';

			const response = await testServer.executeOperation({
				query: `query($country: String) {
				students(country: $country) {
					id
					firstName
					lastName
					country
				}
			}`,
				variables: { country: testCountry },
			});

			assert(response.body.kind === 'single');
			assert(response.body.singleResult.data);
			assert(response.body.singleResult.data.students);
			assert(Array.isArray(response.body.singleResult.data.students));
			let actualstudents = response.body.singleResult.data
				.students as Student[];
			expect(actualstudents.length).to.be.greaterThan(0);
			assert(actualstudents.every((m) => m.country === testCountry));
		});

		it('should filter on multiple single-value fields', async () => {
			let testCountry = 2001;
			let testProvince = 'Spirited Away';

			const response = await testServer.executeOperation({
				query: `query($province: String, $country: Int) {
				students(province: $province, country: $country) {
					id
					firstName
					lastName
					province
					country
				}
			}`,
				variables: {
					country: testCountry,
					province: testProvince,
				},
			});

			assert(response.body.kind === 'single');
			assert(response.body.singleResult.data);
			assert(response.body.singleResult.data.students);
			assert(Array.isArray(response.body.singleResult.data.students));
			let actualstudents = response.body.singleResult.data.students as Student[];
			expect(actualstudents.length).to.be.greaterThan(0);
			actualstudents.forEach(m => {
			// Write them this way to get better feedback on failure
				assert.equal(m.country, testCountry);
				assert.equal(m.province, testProvince);
			});
		});
	});
});

*/
