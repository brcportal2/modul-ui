import DashboardContainer from './DashboardContainer';


export const getRoutes = () => ([
	{
		exact: true,
		path: '/',
		component: DashboardContainer
	}
]);