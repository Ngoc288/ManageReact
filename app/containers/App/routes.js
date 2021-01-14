/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import AuthLayout from '../../components/MainLayout/components/Auth';
import ErrorLayout from '../../components/MainLayout/components/Error';
import DashboardLayout from '../../components/MainLayout/components/Dashboard';
import DashboardAnalyticsView from '../../components/DashboardAnalytics';
import DashboardDefaultView from '../../components/DashboardDefault';
import OverviewView from '../../components/Overview';
import PresentationView from '../../components/Presentation';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/presentation" />,
  },
  {
    path: '/auth',
    component: AuthLayout,
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: lazy(() => import('components/Login')),
      },
      {
        path: '/auth/register',
        exact: true,
        component: lazy(() => import('components/Register')),
      },
      {
        component: () => <Redirect to="/errors/error-404" />,
      },
    ],
  },
  {
    path: '/errors',
    component: ErrorLayout,
    routes: [
      {
        path: '/errors/error-401',
        exact: true,
        component: lazy(() => import('components/Error401')),
      },
      {
        path: '/errors/error-404',
        exact: true,
        component: lazy(() => import('components/Error404')),
      },
      {
        path: '/errors/error-500',
        exact: true,
        component: lazy(() => import('components/Error500')),
      },
      {
        component: () => <Redirect to="/errors/error-404" />,
      },
    ],
  },
  {
    route: '*',
    component: DashboardLayout,
    routes: [
      {
        path: '/calendar',
        exact: true,
        component: lazy(() => import('components/Calendar')),
      },
      {
        path: '/changelog',
        exact: true,
        component: lazy(() => import('components/Changelog')),
      },
      {
        path: '/chat',
        exact: true,
        component: lazy(() => import('components/Chat')),
      },
      {
        path: '/chat/:id',
        exact: true,
        component: lazy(() => import('components/Chat')),
      },
      {
        path: '/dashboards/analytics',
        exact: true,
        component: DashboardAnalyticsView,
      },
      {
        path: '/dashboards/default',
        exact: true,
        component: DashboardDefaultView,
      },
      {
        path: '/invoices/:id',
        exact: true,
        component: lazy(() => import('components/InvoiceDetails')),
      },
      {
        path: '/kanban-board',
        exact: true,
        component: lazy(() => import('components/KanbanBoard')),
      },
      {
        path: '/mail',
        exact: true,
        component: lazy(() => import('components/Mail')),
      },
      {
        path: '/management/customers',
        exact: true,
        component: lazy(() => import('components/CustomerManagementList')),
      },
      {
        path: '/management/customers/:id',
        exact: true,
        component: lazy(() => import('components/CustomerManagementDetails')),
      },
      {
        path: '/management/customers/:id/:tab',
        exact: true,
        component: lazy(() => import('components/CustomerManagementDetails')),
      },
      {
        path: '/management/projects',
        exact: true,
        component: lazy(() => import('components/ProjectManagementList')),
      },
      {
        path: '/management/orders',
        exact: true,
        component: lazy(() => import('components/OrderManagementList')),
      },
      {
        path: '/management/orders/:id',
        exact: true,
        component: lazy(() => import('components/OrderManagementDetails')),
      },
      {
        path: '/overview',
        exact: true,
        component: OverviewView,
      },
      {
        path: '/presentation',
        exact: true,
        component: PresentationView,
      },
      {
        path: '/profile/:id',
        exact: true,
        component: lazy(() => import('components/Profile')),
      },
      {
        path: '/profile/:id/:tab',
        exact: true,
        component: lazy(() => import('components/Profile')),
      },
      {
        path: '/projects/create',
        exact: true,
        component: lazy(() => import('components/ProjectCreate')),
      },
      {
        path: '/projects/:id',
        exact: true,
        component: lazy(() => import('components/ProjectDetails')),
      },
      {
        path: '/projects/:id/:tab',
        exact: true,
        component: lazy(() => import('components/ProjectDetails')),
      },
      {
        path: '/projects',
        exact: true,
        component: lazy(() => import('components/ProjectList')),
      },
      {
        path: '/settings',
        exact: true,
        component: lazy(() => import('components/Settings')),
      },
      {
        path: '/settings/:tab',
        exact: true,
        component: lazy(() => import('components/Settings')),
      },
      {
        path: '/social-feed',
        exact: true,
        component: lazy(() => import('components/SocialFeed')),
      },
      {
        path: '/getting-started',
        exact: true,
        component: lazy(() => import('components/GettingStarted')),
      },
      {
        component: () => <Redirect to="/errors/error-404" />,
      },
    ],
  },
];

export default routes;
