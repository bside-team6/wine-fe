import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <div
        css={css`
          min-height: 200px;
        `}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
