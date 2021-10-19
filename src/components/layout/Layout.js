import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;

const Content = styled.div`
  min-height: 200px;
`;
