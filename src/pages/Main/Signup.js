import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { KAKAO_SIGNUP_URL, NICKNAME_URL, RTOKEN_URL } from 'helpers/oauth';
import signupStep2 from 'assets/login/signup_step2.png'; 
import {loginStep, loginKrTitle, loginKrStr, nickNameInput, nickNameInputStr, btnArea, btnConfirm} from 'styles/login';

function Signup() {
  const [wineToken, setWineToken] = useState('');
  const [wineRToken, setWineRToken] = useState('');
  const [nickName, setNickName] = useState('');
  const [cKind, setCKind] = useState('');  
  const history = useHistory();
  //TO-DO : 로그인 , 회원가입 화면 나눌지 체크하기
  console.log('Signup page ');
  const { token } = useParams();
  useEffect(() => {
    
    fetch(`${KAKAO_SIGNUP_URL}`, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if(res.result){
          setWineToken(res.data.accessToken);
          setWineRToken(res.data.refreshToken);
        }
      })
      .catch((error) => console.log('error:', error));
  }, [token]);

  const nickNameInsert = async () => {
    fetch(`${NICKNAME_URL}`, {
      method: 'POST',
      headers: {
        'AccessToken': wineToken,
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: `nickName=${nickName}`
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCKind("nickName");
        console.log(res);
        if(res.result){
          history.push(`/signupComplete`);
        }else{
          if(res.status === '401'){
            console.log('토큰만료');
            tokenRefresh();
          }
        }
      })
      .catch((error) => console.log('error:', error));
  };

  const tokenRefresh = async () => {
    console.log("tokenRefresh","    cKind :",cKind);
    fetch(`${RTOKEN_URL}`, {
      method: 'POST',
      headers: {
        'RefreshToken' : wineRToken,
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if(res.result){
          console.log(res);
          setWineToken(res.data);
        }
      })
      .then((res) => {
        nickNameInsert();
      })
      .catch((error) => console.log('error:', error));
  };

  const handleInput = (e) => {
    //닉네임 입력감 세팅
    setNickName(e.target.value);
  };

  return (
    <div>
          <div style={loginStep}>
          <img src={signupStep2} alt=""></img>
        </div>
        <div style={loginKrTitle}>
          닉네임
        </div>
        <div style={loginKrStr}>
          환영합니다! 만나서 반가워요. 
          <br />
          와인이지에서 쓰실 닉네임을 정해주시면 가입 완료!
        </div>
        <div
        >
          <input 
            style={nickNameInput}
            type="text"
            placeholder="닉네임"
            id="nickName"
            onChange={handleInput}
          ></input>
          <span style={nickNameInputStr}>
            2-16자 국문/영문 대소문자/숫자
          </span>
        </div>
        <div style={btnArea}>
          <button 
            style={btnConfirm}
            onClick={nickNameInsert}>
            확인
          </button>
        </div>
      </div>
  );
  
}

export default Signup;