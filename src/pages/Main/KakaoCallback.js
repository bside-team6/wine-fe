<<<<<<< Updated upstream
import React, { useState } from 'react';
// import styled from '@emotion/styled';
// import { useQuery } from 'react-query';
import { css } from '@emotion/react';
// import { kakaoSignUp } from 'api/main';

// const style = {
//   width: '89px',
//   height: '46px',
//   left: '916px',
//   top: '241px',
// };

// const styleInfo = {
//   width: '304px',
//   height: '52px',
//   left: '804px',
//   top: '339px',
// };
=======
import React, { useEffect } from 'react';
import { css } from '@emotion/react';
import { useHistory } from 'react-router-dom';
import { KAKAO_TOKEN_URL} from 'helpers/oauth';
>>>>>>> Stashed changes

function KakaoCallback() {
  //TO-DO : 로그인 , 회원가입 화면 나눌지 체크하기

  const current = decodeURI(window.location.href);
  const search = current.split('?')[1];
  const params = new URLSearchParams(search);
  const code = params.get('code');
  const history = useHistory();

  console.log('code : ', code);
<<<<<<< Updated upstream
  //TO-DO: 가입 링크 404 해결
  //TO-DO: 닉네임 다음에,확인 시 동작 확인
  // const { data } = useQuery(
  //   ['kakao-signUp', code],
  //   () => kakaoSignUp(code),
  //   {},
  // );
=======
  const url = `${KAKAO_TOKEN_URL}&code=`+ code;
  
  console.log('url : ',`${KAKAO_TOKEN_URL}`,);
  console.log('Furl : ',url,);
  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      body: JSON.stringify({
        'grant_type':'authorization_code',
        'code':code
      })
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
      //window.open("history.push(`/login/:${userInfo}`);","_self");
      console.log(token);
      history.push(`/signup/${token}`);   
    });
    
  },[]);

  
>>>>>>> Stashed changes

  //const handleInput = (e) => {
    //닉네임 입력감 세팅
    //setNickName(e.target.value);
   // console.log('nickName:', nickName);
  //};

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
<<<<<<< Updated upstream
          `}
          type="text"
          placeholder="닉네임"
          id="nickName"
          onChange={handleInput}
        ></input>
=======
        `} type="text"
           placeholder="닉네임"
           id="nickName"
           ></input>
>>>>>>> Stashed changes
        <span
          css={(theme) => css`
            font-family: Noto Sans KR;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            color: rgba(168, 168, 168, 1);
          `}
        >
          2-16자 국문/영문 대소문자/숫자
        </span>
      </div>
      <div
        css={(theme) => css`
          display: block;
          margin: 0px auto;
          text-align: center;
          margin-top: 2px;
        `}
      >
        <button
          css={(theme) => css`
            height: 60px;
            width: 212px;
            left: 744px;
            top: 522px;
            border-radius: 8px;
            border: 1px solid rgba(197, 197, 197, 1);
            color: rgba(66, 66, 66, 1);
            background-color: rgba(255, 255, 255, 0.3); ;
          `}
        >
          다음에
        </button>
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
        >
          확인
        </button>
      </div>
    </div>
  );
}

export default KakaoCallback;
<<<<<<< Updated upstream

// const Header = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   padding-top: 40px;
//   font-size: 50px;
// `;
=======
>>>>>>> Stashed changes
