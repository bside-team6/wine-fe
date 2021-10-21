import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { alignCenter } from 'styles/common';

const Footer = () => {
  return (
    <div
      css={css`
        ${alignCenter}
        justify-content: center;
        height: 80px;
        border-top: 1px solid #dfdfdf;
      `}
    >
      <div
        css={(theme) => css`
          ${alignCenter}
          a {
            color: ${theme.colors.black02};
            font-size: 16px;
            margin-right: 56px;
            &:last-child {
              font-weight: 700;
              margin-right: 0;
            }
          }
        `}
      >
        <Link to="/">공지사항</Link>
        <Link to="/">제휴문의</Link>
        <Link to="/">이용약관</Link>
        <Link to="/">개인정보처리방침</Link>
      </div>
      <div
        css={(theme) => css`
          margin-left: 505px;
          font-family: ${theme.typography.lato};
          color: ${theme.colors.black04};
        `}
      >
        Ⓒ2021 Dionysus6. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;