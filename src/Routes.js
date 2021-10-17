import loadable from '@loadable/component';

const AdminPage = loadable(() => import('./pages/Admin'));

const Routes = {
  Admin: AdminPage,
};

export default Routes;
