import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { css } from '@emotion/react';
import { spritesStyle, alignCenter } from 'styles/common';
import logo from 'assets/logo.png';
import { KAKAO_AUTH_URL } from 'helpers/oauth';

const Header = () => {
  // TODO: search form 추가
  // TODO: auth 상태에 따라 분기 추가
  const [isLogin, setIsLogin] = useState('');
  const [nickName, setNickName] = useState('');
  useEffect(() => {
    setIsLogin(sessionStorage.getItem("isAuthorized"));
    setNickName(sessionStorage.getItem("nickName"));
    console.log("isLogin >>> ",sessionStorage.getItem("isAuthorized"));
    console.log("sessionStorage >> " , sessionStorage);
  }, []);
  
  return (
    <div
      css={(theme) => css`
        ${alignCenter}
        justify-content: center;
        height: 80px;
        border-bottom: 1px solid ${theme.colors.black08};
      `}
    >
      <div
        css={css`
          margin-right: 42px;
        `}
      >
        <img
          src={logo}
          alt="logo"
          css={css`
            width: 110px;
            height: 34px;
          `}
        />
      </div>
      <div
        css={(theme) => css`
          ${alignCenter}
          a {
            padding: 5px 30px;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            color: ${theme.colors.black06};
            &.active {
              color: ${theme.colors.black02};
            }
            &:last-child {
              padding: 5px 16px;
            }
          }
        `}
      >
    
        <NavLink exact to="/">
          홈
        </NavLink>
        <NavLink to="/wine-list">와인리스트</NavLink>
        <NavLink to="/wine-note">와인노트</NavLink>
        <NavLink to="/wine-check">와인이 어렵다면?</NavLink>
      </div>
      <div
        css={css`
          margin-left: 460px;
          ${alignCenter}
          a {
            margin-right: 32px;
            &::last-child {
              margin-right: 0;
            }
          }
        `}
      >
      {isLogin === 'true'
       ? <NavLink to="/logOut">로그아웃</NavLink>
       : <NavLink to="/" onClick={() => window.open(`${KAKAO_AUTH_URL}`, '_self')}>카카오로 로그인</NavLink>
      }
      {isLogin !== 'true'
       ? <NavLink to="/signupStep1">
          <span
            css={css`
              ${spritesStyle}
              display: block;
              background-position: -68px 0px;
              margin-left : 10px
              margin-right : 10px
            `}
          />
        </NavLink> 
       : <span 
            css={css`
            display: block;
            background-position: -68px 0px;
          `}>{nickName}님 환영합니다.</span> 
      }
       
        <NavLink to="/">
          <span
            css={css`
              ${spritesStyle}
              display: block;
              background-position: -272px 0px;
            `}

          />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
