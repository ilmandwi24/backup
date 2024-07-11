import MainLayout from '@layouts/MainLayout';

import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import SampleSelectPlan from '@pages/SampleSelectPlan';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/sample-select-plan',
    name: 'Sample Select Plan',
    protected: false,
    component: SampleSelectPlan,
    layout: MainLayout,
  },

  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
