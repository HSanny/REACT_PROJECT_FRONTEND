import { lazy } from 'react';

const Index = lazy(() => import('../views/Index/Index'));

const CommonRouter: any = [
    {
        path:'/',
        component: Index,
        exact: true,
        title: 'Home Page',
    },
];

export default CommonRouter;