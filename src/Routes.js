import loadable from '@loadable/component';

const AdminPage = loadable(() => import('./pages/Admin'));
const WineNotePage = loadable(() => import('./pages/WineNote'));
const MainPage = loadable(() => import('./pages/Main'));

const Routes = {
  Home: () => <div>Home</div>,
  Admin: AdminPage,
  WineNote: WineNotePage,
  Main: MainPage,
};

export default Routes;
