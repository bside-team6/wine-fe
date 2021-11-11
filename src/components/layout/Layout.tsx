import { css } from '@emotion/react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import useUserInfoQuery from '~/queries/useUserInfoQuery';
import { isAuthenticatedState } from '~/stores/auth';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);

  useUserInfoQuery({
    enabled: true,
    suspense: true,
    onSuccess: (userInfo) => setIsAuthenticated(!!userInfo),
  });

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
      <Toaster />
    </div>
  );
};

export default Layout;
