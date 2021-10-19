import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import logo from 'assets/logo.png';
import user from 'assets/user.svg';
import bookmark from 'assets/bookmark.svg';

const Header = () => {
  // TODO: search form 추가
  // TODO: auth 상태에 따라 분기 추가
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <Nav>
        <NavLink exact to="/">
          홈
        </NavLink>
        <NavLink to="/wine-list">와인리스트</NavLink>
        <NavLink to="/wine-note">와인노트</NavLink>
        <NavLink to="/wine-check">와인이 어렵다면?</NavLink>
      </Nav>
      <UserLinkGroup>
        <NavLink to="/">카카오로 로그인</NavLink>
        <NavLink to="/">
          <img src={user} alt="user icon" />
        </NavLink>
        <NavLink to="/">
          <img src={bookmark} alt="bookmark icon" />
        </NavLink>
      </UserLinkGroup>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  border-bottom: 1px solid #dfdfdf;
`;

const Logo = styled.div`
  margin-right: 42px;
  img {
    width: 110px;
    height: 34px;
    vertical-align: middle;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  a {
    padding: 5px 30px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #ababab;
    &.active {
      color: #424242;
    }
    &:last-child {
      padding: 5px 16px;
    }
  }
`;

const UserLinkGroup = styled.div`
  margin-left: 460px;
  display: flex;
  align-items: center;
  a {
    margin-right: 32px;
    &::last-child {
      margin-right: 0;
    }
    img {
      width: 24px;
      height: 24px;
    }
  }
`;
