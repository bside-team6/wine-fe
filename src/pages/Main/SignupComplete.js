import React, { useEffect } from 'react';
import { KAKAO_AUTH_URL } from 'helpers/oauth';
import kakaoLoginImg from 'assets/login/kakao_login_large_wide.png';
import signupStep2 from 'assets/login/signup_step2.png'; 
import {loginStep, loginKrStr, loginIcon} from 'styles/login';

function SignupComplete() {

  useEffect(() => {

  }, []);

  return (
      <div>
      <div style={loginStep}>
        <img src={signupStep2} alt=""></img>
      </div>
      <div style={loginKrStr}>
        환영합니다! 만나서 반가워요. 
        <br />
        가입 완료!
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

export default SignupComplete;
