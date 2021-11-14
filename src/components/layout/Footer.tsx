import { css, useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import { alignCenter } from '~/styles/common';

const Footer = () => {
  const theme = useTheme();

  return (
    <div
      css={css`
        border-top: 1px solid;
        border-color: ${theme.colors.border};
        flex-shrink: 0;
      `}
    >
      <div
        css={css`
          width: ${theme.breakpoints.lg};
          margin: 0 auto;
          ${alignCenter}
          justify-content: center;
          height: 80px;
        `}
      >
        <div
          css={css`
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
          css={css`
            margin-left: auto;
            font-family: ${theme.typography.lato};
            color: ${theme.colors.black04};
          `}
        >
          Ⓒ2021 Dionysus6. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
