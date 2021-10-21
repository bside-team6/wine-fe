import loadable from '@loadable/component';

const MainPage = loadable(() => import('./pages/Main'));
const AdminPage = loadable(() => import('./pages/Admin'));
const WineNotePage = loadable(() => import('./pages/WineNote'));

const Routes = {
  Main: MainPage,
  Admin: AdminPage,
  WineNote: WineNotePage,
};

export default Routes;
