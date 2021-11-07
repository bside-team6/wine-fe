import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      `}
    >
      <Header />
      <div
        css={css`
          flex-grow: 1;
        `}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
