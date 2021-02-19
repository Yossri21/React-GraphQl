import { lazy } from 'react';

export const routes = [
  {
    component: lazy(() => import('pages/Login/Login')),
    exact: true,
    label: 'Login',
    path: '/',
  },
  {
    component: lazy(() => import('pages/Home/Home')),
    exact: true,
    label: 'Home',
    path: '/home',
  },
];

export default routes;
