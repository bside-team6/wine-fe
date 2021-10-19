import React from 'react';
import { css } from '@emotion/react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        css={css`
          min-height: 200px;
        `}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
