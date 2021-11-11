import { css, Theme } from '@emotion/react';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { kakaoLogin } from '~/helpers/auth';
import useLogoutMutation from '~/queries/useLogoutMutation';
import { isAuthenticatedState } from '~/stores/auth';
import { alignCenter, spritesStyle } from '~/styles/common';
import { ReactComponent as KakaoSmallLogo } from '~/assets/ic_kakao.svg';
import logo from '~/assets/logo.png';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] =
    useRecoilState(isAuthenticatedState);

  const { mutate: logout } = useLogoutMutation({
    onSuccess: () => {
      setIsAuthenticated(false);
      toast.success('로그아웃에 성공했습니다.', {
        position: 'bottom-center',
      });
    },
  });

  return (
    <div
      css={(theme: Theme) => css`
        border-bottom: 1px solid ${theme.colors.black08};
        flex-shrink: 0;
      `}
    >
      <div
        css={css`
          width: 1200px;
          margin: 0 auto;
          ${alignCenter}
          justify-content: center;
          height: 80px;
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
          css={(theme: Theme) => css`
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
          <NavLink to="/">홈</NavLink>
          <NavLink to="/wine-list">와인리스트</NavLink>
          <NavLink to="/wine-note">와인노트</NavLink>
          <NavLink to="/wine-check">와인이 어렵다면?</NavLink>
        </div>
        <div
          css={css`
            margin-left: auto;
            ${alignCenter}
            a {
              margin-right: 13px;
              &::last-child {
                margin-right: 0;
              }
            }
            button {
              cursor: pointer;
              border: 0;
              background: none;
              padding: 10px 0;
              margin-right: 6px;
              width: 138px;
            }
          `}
        >
          {isAuthenticated ? (
            <button onClick={() => logout()}>로그아웃</button>
          ) : (
            <>
              <button onClick={kakaoLogin}>
                <div
                  css={css`
                    ${alignCenter}
                    justify-content: center;
                  `}
                >
                  <KakaoSmallLogo />
                  <span
                    css={css`
                      margin-left: 6px;
                      font-size: 12px;
                    `}
                  >
                    카카오로 로그인
                  </span>
                </div>
              </button>
            </>
          )}
          {/* TODO: 로그인 했을때 경로 변경 */}
          <NavLink to={isAuthenticated ? '/signup/step1' : '/signup/step1'}>
            <span
              css={css`
                ${spritesStyle}
                display: block;
                background-position: -68px 0px;
                margin-left: 10px;
                margin-right: 10px;
              `}
            />
          </NavLink>
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
    </div>
  );
};

export default Header;
