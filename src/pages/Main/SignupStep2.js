import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { KAKAO_SIGNUP_URL, NICKNAME_URL, RTOKEN_URL } from 'helpers/oauth';
import signupStep2 from 'assets/login/signup_step2.png'; 
import {loginStep, loginKrTitle, loginKrStr, nickNameInputArea, nickNameInput, nFalse, nTrue, nickNameInputStr, btnArea, btnConfirm, fBtnConfirm} from 'styles/login';
// nTrue, nFalse, 
function SignupStep2() {
  const [wineToken, setWineToken] = useState('');
  const [wineRToken, setWineRToken] = useState('');
  const [nickName, setNickName] = useState(''); 
  const history = useHistory();
  const [str, setStr] = useState('2-8자 국문/영문 대소문자/숫자');
  const [chk, setLChk] = useState('');
  const [cName, setCName] = useState(nickNameInput);
  const [bName, setBName] = useState(fBtnConfirm);
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
          if(!res.data.isNewUser){
            history.push(`/getUserInfo/${res.data.accessToken}/${res.data.refreshToken}`);
          }else{
            setWineToken(res.data.accessToken);
            setWineRToken(res.data.refreshToken);
          }
        }
      })
      .catch((error) => console.log('error:', error));
  });

  const nickNameInsert = async () => {
    if(chk === true){
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
          if(res.result){
            history.push(`/signupComplete`);
          }else{
            if(res.status === '401'){
              console.log('토큰만료');
              tokenRefresh();
            }
            if(res.message.length > 0){
              setStr(res.message); 
              setCName(nFalse);    
              setBName(fBtnConfirm);       
            }
          }
        })
        .catch((error) => console.log('error:', error));
    }    
  };

  const tokenRefresh = async () => {
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
          //console.log(res);
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
    
    //TODO:닉네임 길이에 따라 클래스 명 설정
    if(e.target.value.length < 2 || e.target.value.length > 16){
      setLChk(false);
      setCName(nFalse);
      setBName(fBtnConfirm);
      console.log(e.currentTarget);
    }else{
      setLChk(true);
      setCName(nTrue);
      setBName(btnConfirm);
      console.log(e.currentTarget);
    }
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
        <div style={nickNameInputArea}   
        >
          <input 
            style={cName}
            type="text"
            placeholder="닉네임"
            id="nickName"
            onChange={handleInput}
          ></input>
          <span style={nickNameInputStr}>
            {str}
          </span>
        </div>
        <div style={btnArea}>
            <button 
              style={bName}
              onClick={nickNameInsert}>
              확인
            </button>
          </div>
      </div>
  );
  
}

export default SignupStep2;