import React from 'react';
import { css } from '@emotion/react';
import { KAKAO_AUTH_URL } from 'helpers/oauth';
import kakaoLoginImg from 'assets/login/kakao_login_large_wide.png';
import signupStep1 from 'assets/login/signup_step1.png';
import {loginStep, loginKrTitle, loginKrStr, loginIcon } from 'styles/login';

function Login() {
  return (
    <div>
      <div style={loginStep}>
        <img src={signupStep1} alt=""></img>
      </div>
      <div style={loginKrTitle}>
        로그인
      </div>
      <div style={loginKrStr}>
        아이디, 비밀번호 입력하기 귀찮으시죠?
        <br />
        카카오로 간편하고 빠르게 로그인 하세요
      </div>

      <div style={loginIcon}>
        <img
          src={kakaoLoginImg}
          alt="kakaoLoginImg"
          onClick={() => window.open(`${KAKAO_AUTH_URL}`, '_self')}
        />
      </div>
    </div>
  );
}

export default Login;
