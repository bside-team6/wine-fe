import { css, useTheme } from '@emotion/react';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Icon from '~/components/common/Icon';
import { kakaoLogin } from '~/helpers/auth';
import useLogoutMutation from '~/queries/useLogoutMutation';
import { isAuthenticatedState } from '~/stores/auth';
import { alignCenter, buttonStyle, inlineFlexCenter } from '~/styles/common';
import { ReactComponent as KakaoSmallLogo } from '~/assets/ic_kakao.svg';
import logo from '~/assets/logo.png';

const Header = () => {
  const theme = useTheme();

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
      css={css`
        border-bottom: 1px solid ${theme.colors.black08};
        flex-shrink: 0;
      `}
    >
      <div
        css={css`
          width: ${theme.breakpoints.lg};
          margin: 0 auto;
          ${alignCenter}
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
          css={css`
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
          <NavLink to="/wine">와인리스트</NavLink>
          <NavLink to="/wine-note">와인노트</NavLink>
        </div>
        <div
          css={css`
            margin-left: auto;
            ${alignCenter}
            a {
              ${inlineFlexCenter}
              padding: 0 10px;
              &:last-of-type {
                margin-left: 3px;
              }
            }
            button {
              padding: 0 10px;
              margin-right: 16px;
            }
          `}
        >
          {isAuthenticated ? (
            <button css={buttonStyle} onClick={() => logout()}>
              로그아웃
            </button>
          ) : (
            <button css={buttonStyle} onClick={kakaoLogin}>
              <KakaoSmallLogo />
              <span
                css={css`
                  margin-left: 6px;
                  font-size: 12px;
                `}
              >
                카카오로 로그인
              </span>
            </button>
          )}
          {/* TODO: 로그인 했을때 경로 변경 */}
          <NavLink to={isAuthenticated ? '/signup/step1' : '/signup/step1'}>
            <Icon name="mypage" />
          </NavLink>
          <NavLink to="/">
            <Icon name="bookmark" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
