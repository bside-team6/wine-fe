import loadable from '@loadable/component';

const AdminPage = loadable(() => import('./pages/admin'));

const Routes = {
  Admin: AdminPage,
};

export default Routes;
