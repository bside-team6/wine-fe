import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
//import { useQuery } from 'react-query';
import { css } from '@emotion/react';
//import { kakaoSignUp } from 'api/main';
import { KAKAO_SIGNUP_URL, NICKNAME_URL, USERINFO_URL, RTOKEN_URL } from 'helpers/oauth';
import signupStep2 from 'assets/login/signup_step2.png'; 
import {loginStep, loginKrTitle, loginKrStr, nickNameInput, nickNameInputStr, btnArea, btnConfirm} from 'styles/login';

function Signup() {
  const [wineToken, setWineToken] = useState('');
  const [wineRToken, setWineRToken] = useState('');
  const [nickName, setNickName] = useState('');
  const [isNewUser, setIsNewUser] = useState('');
  const [cKind, setCKind] = useState('');  
  const history = useHistory();
  //TO-DO : 로그인 , 회원가입 화면 나눌지 체크하기
  console.log('Signup page ');
  const { token } = useParams();
  console.log('Signup page token : ', token);
  //const { data } = useQuery(['sign-up', token], () => kakaoSignUp(token), {
  //  select: (data) => data.data,
  //});

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
          setIsNewUser(res.data.isNewUser);
        }
      })
      .then((res) => { 
        if(!isNewUser){
          getUserInfo();
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
          //getUserInfo();
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
        console.log(res);
        if(cKind === 'userInfo'){
          getUserInfo();
        }else{
          nickNameInsert();
        }
      })
      .catch((error) => console.log('error:', error));
  };

  const getUserInfo = async () => {
    console.log("getUserInfo");
    fetch(`${USERINFO_URL}`, {
      headers: {
        'AccessToken': wineToken
      }})
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCKind("userInfo");
        console.log(res);
        if(res.result){
          console.log("ture");
        }else{
          console.log("false");
          console.log(res.status);
          if(res.status === 401){
            console.log('토큰만료');
            //tokenRefresh();
          }
        }
      })
      .catch((error) => console.log('error:', error));
  };

  const handleInput = (e) => {
    //닉네임 입력감 세팅
    setNickName(e.target.value);
  };

  if(isNewUser){
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
        ></input>
        <span style={nickNameInputStr}>
          2-16자 국문/영문 대소문자/숫자
        </span>
      </div>
      <div style={btnArea}>
        <button style={btnConfirm}>
          확인
        </button>
      </div>
    </div>
    );
  }else{
    return (
      <div>
        <div
          css={(theme) => css`
            font-family: Noto Sans KR;
            font-size: 32px;
            font-style: normal;
            font-weight: 700;
            line-height: 46px;
            letter-spacing: 0em;
            text-align: center;
            display: block;
            margin: 0px auto;
            height: 46px;
            width: 89px;
            left: 916px;
            top: 241px;
            border-radius: 0;
            margin-bottom: 0;
          `}
        >
          닉네임
        </div>
        <div
          css={(theme) => css`
            font-family: Noto Sans KR;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            color: rgba(168, 168, 168, 1);
            line-height: 26.06px;
            letter-spacing: 0em;
            text-align: center;
            margin-top: 52px;
          `}
        >
          축하합니다! 가입이 완료 되었습니다.
          <br />
          와인이지에서 쓰실 닉네임을 정해보세요.
        </div>
        <div
          css={(theme) => css`
            display: block;
            margin: 0px auto;
            margin-top: 24px;
            height: 83px;
            width: 432px;
            left: 744px;
            top: 415px;
            border-radius: 8px;
          `}
        >
          <input
            css={(theme) => css`
              font-size: 18px;
              display: block;
              margin: 0px auto;
              margin-top: 24px;
              height: 63px;
              width: 432px;
              left: 744px;
              top: 415px;
              border-radius: 8px;             
            `}
            type="text"
            placeholder="닉네임"
            id="nickName"
            value={nickName}
            onChange={handleInput}
          ></input>
          <span
            css={(theme) => css`
              font-family: Noto Sans KR;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              color: rgba(168, 168, 168, 1);
            `}
            id="nickNameStr"
          >
            2-16자 국문/영문 대소문자/숫자
          </span>
        </div>
        <div>값 :     {nickName}</div>
        <div
          css={(theme) => css`
            display: block;
            margin: 0px auto;
            text-align: center;
            margin-top: 5px;
            margin-bottom: 5px;
          `}
        >
          <button
            css={(theme) => css`
              height: 60px;
              width: 212px;
              left: 964px;
              top: 522px;
              border-radius: 8px;
              color: rgba(255, 255, 255, 1);
              background-color: rgba(0, 0, 0, 1);
            `} 
            onClick={nickNameInsert}
          >
            확인
          </button>
        </div>
      </div>
    );
   /* return (
      <div>
          가입 완료
      </div>
    );*/
  }
  
}

export default Signup;
