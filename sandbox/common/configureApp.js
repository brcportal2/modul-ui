import modules from '../modules';


const routes = (modules => modules
	.filter(m => m && typeof m.getRoutes === 'function')
	.reduce((accumulator, currentValue) => [
		...accumulator,
		...(currentValue.getRoutes())
	], []))(modules);

export {
	routes
};