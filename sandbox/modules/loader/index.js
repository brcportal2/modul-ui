import LoaderContainer from './LoaderContainer';


export const getRoutes = () => ([
    {
        exact: true,
        path: '/loader',
        component: LoaderContainer
    }
]);