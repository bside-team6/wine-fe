import loadable from '@loadable/component';

const AdminPage = loadable(() => import('./pages/Admin'));

const Routes = {
  Home: <div>Home (// TODO)</div>,
  Admin: AdminPage,
};

export default Routes;
