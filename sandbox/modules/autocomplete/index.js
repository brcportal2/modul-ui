import Autocomplete from './AutocompleteContainer';


export const getRoutes = () => ([
	{
		exact: true,
		path: '/autocomplete',
		component: Autocomplete
	}
]);