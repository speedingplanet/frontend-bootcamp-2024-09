import React from 'react';

// Available through Vite, NOT standard JS
import { countries } from '../data/countries-table.json';

function IterativeContent() {
	let formatter = new Intl.NumberFormat();

	return (
		<section className="row">
			<div className="col">
				<h3>Countries ranked by population</h3>
				<ul>
					{countries.map((country) => (
						<li key={country.id}>
							{country.country}: {formatter.format(country.pop2022)}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default IterativeContent;
