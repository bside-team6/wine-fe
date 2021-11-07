import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { KAKAO_TOKEN_URL } from '~/helpers/oauth';
import {
  btnArea,
  btnConfirm,
  loginKrStr,
  loginKrTitle,
  loginStep,
  nickNameInput,
  nickNameInputStr,
} from '~/styles/login';
import signupStep2 from '~/assets/login/signup_step2.png';

function KakaoCallback() {
  //카카오 토큰 가져와서 가입화면까지 넘어가야함

  const current = decodeURI(window.location.href);
  const search = current.split('?')[1];
  const params = new URLSearchParams(search);
  const code = params.get('code');
  const navigate = useNavigate();

  const url = `${KAKAO_TOKEN_URL}&code=` + code;

  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        code: code,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data !== '') {
          return data.access_token;
        }
      })
      .then((token) => {
        navigate(`/signupStep2/${token}`);
      });
  }, [code, navigate, url]);

  return (
    <div>
      <div style={loginStep}>
        <img src={signupStep2} alt=""></img>
      </div>
      <div style={loginKrTitle}>닉네임</div>
      <div style={loginKrStr}>
        환영합니다! 만나서 반가워요.
        <br />
        와인이지에서 쓰실 닉네임을 정해주시면 가입 완료!
      </div>
      <div>
        <input
          style={nickNameInput}
          type="text"
          placeholder="닉네임"
          id="nickName"
        ></input>
        <span style={nickNameInputStr}>2-16자 국문/영문 대소문자/숫자</span>
      </div>
      <div style={btnArea}>
        <button style={btnConfirm}>확인</button>
      </div>
    </div>
  );
}

export default KakaoCallback;
