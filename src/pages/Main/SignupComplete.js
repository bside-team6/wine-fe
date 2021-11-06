import { useEffect } from 'react';
import { loginKrStr, loginStep } from '~/styles/login';
import signupStep2 from '~/assets/login/signup_step2.png';

function SignupComplete() {
  useEffect(() => {}, []);

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
    </div>
  );
}

export default SignupComplete;
