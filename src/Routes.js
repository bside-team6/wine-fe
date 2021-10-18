import loadable from '@loadable/component';

const AdminPage = loadable(() => import('./pages/Admin'));
const WineNotePage = loadable(() => import('./pages/WineNote'));

const Routes = {
  Home: () => <div>Home</div>,
  Admin: AdminPage,
  WineNote: WineNotePage,
};

export default Routes;
