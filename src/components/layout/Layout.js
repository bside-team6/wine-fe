import { css } from '@emotion/react';
import Footer from './Footer';
import Header from './Header';

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
