import loadable from '@loadable/component';

export const Main = loadable(
  () =>
    import(
      /* webpackChunkName: "main-page" */
      './pages/Main'
    ),
);

export const Admin = loadable(
  () => import(/* webpackChunkName: "admin-page" */ './pages/Admin'),
);

export const WineNote = loadable(
  () => import(/* webpackChunkName: "wine-note-page" */ './pages/WineNote'),
);
