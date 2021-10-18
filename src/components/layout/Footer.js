import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterContainer>
      <LinkGroup>
        <Link to="/">공지사항</Link>
        <Link to="/">제휴문의</Link>
        <Link to="/">이용약관</Link>
        <Link to="/">개인정보처리방침</Link>
      </LinkGroup>
      <Copyright>Ⓒ2021 Dionysus6. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  border-top: 1px solid #dfdfdf;
`;

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #424242;
    font-size: 16px;
    margin-right: 56px;
    &:last-child {
      font-weight: 700;
      margin-right: 0;
    }
  }
`;

const Copyright = styled.div`
  margin-left: 505px;
  font-family: Lato;
  color: #757575;
`;
