import React, { useState , Button } from 'react';
import styled from '@emotion/styled';
import { Link,  useHistory, useParams  } from 'react-router-dom';
import { useQuery } from 'react-query';
import { kakaoSignUp } from 'api/main';

const style = {
  width: '89px',
  height: '46px',
  left: '916px',
  top: '241px',
};
const styleInfo = {
  width: '304px',
  height: '52px',
  left: '804px',
  top: '339px',
};

function kakaoCallback() {
  //const { KakaoAccessToken } = useParams();

 // const { data, isLoading } = useQuery(['kakao-signUp', KakaoAccessToken], () => kakaoSignUp(KakaoAccessToken), {
 //   select: (data) => data.data,
 // });
  
  

  return (
    <div>
      <Header>Wineasy</Header>
        <h1 class={style}>로그인</h1>
        <h2 class={styleInfo}>아이디, 비밀번호 입력하기 귀찮으시죠?<br/>
                           카카오로 간편하고 빠르게 로그인 하세요.</h2>
        <button style={style} onClick={kakaoCallback} > 카카오로 시작하기 </button>
                
    </div>
  );
}

export default kakaoCallback;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 40px;
  font-size: 50px;
`;
