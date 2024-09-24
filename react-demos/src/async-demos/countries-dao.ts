let baseUrl = 'http://localhost:8000/countries';

function fetchAllCountriesPromise() {
	return fetch(baseUrl)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw Error(`Bad response: ${response.status}`);
			}
		})
		.catch((error) => {
			console.error('countries-dao: Error:', error);
			throw error;
		});
}

async function fetchAllCountries() {
	try {
		let response = await fetch(baseUrl);
		if (response.ok) {
			let results = await response.json();
			return results;
		} else {
			throw Error(`Bad response: ${response.status}`);
		}
	} catch (error) {
		console.error('countries-dao: Error:', error);
		throw error;
	}
}

export { fetchAllCountries, fetchAllCountriesPromise };
