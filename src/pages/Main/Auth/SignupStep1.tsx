import { css } from '@emotion/react';
import LoginStep from '~/components/auth/LoginStep';
import { kakaoLogin } from '~/helpers/auth';
import {
  imageButton,
  loginDescription,
  loginStepContainer,
  loginTitle,
} from '~/styles/login';
import kakaoLoginImg from '~/assets/login/kakao_login_large_wide.png';

function SignupStep1() {
  return (
    <div css={loginStepContainer}>
      <LoginStep step={1} />
      <div css={loginTitle}>로그인</div>
      <div css={loginDescription}>
        아이디, 비밀번호 입력하기 귀찮으시죠?
        <br />
        카카오로 간편하고 빠르게 로그인 하세요
      </div>
      <div>
        <button
          css={css`
            ${imageButton}
            height: 60px;
          `}
          onClick={kakaoLogin}
        >
          <img src={kakaoLoginImg} alt="kakaoLoginImg" />
        </button>
      </div>
    </div>
  );
}

export default SignupStep1;