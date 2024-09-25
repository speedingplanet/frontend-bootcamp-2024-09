import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { fetchAllCountries } from './countries-dao';
import { Country } from '../demo-types';

const ReactQuery = () => {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<RenderQuery />
		</QueryClientProvider>
	);
};

const RenderQuery = () => {
	const {
		isPending, // is the request still in flight?
		isError, // did the request fail?
		error, // Failure information
		data, // Actual data retrieved by the request
	} = useQuery({ queryKey: ['countries'], queryFn: fetchAllCountries });

	if (isPending) {
		return <span>Loading....</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	// Assume success!
	return (
		<>
			<div className="row">
				<div className="col">
					<h3>Async React Query</h3>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<table className="table table-striped">
						<thead>
							<tr>
								<th>Country</th>
								<th>Population</th>
							</tr>
						</thead>
						<tbody>
							{data.map((country: Country) => (
								<tr key={country.id}>
									<td>{country.country}</td>
									<td>{country.pop2022}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
};

export default ReactQuery;
