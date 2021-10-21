import React, { useState, Button } from 'react';
import styled from '@emotion/styled';
import { Link, useHistory, useParams } from 'react-router-dom';
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

function KakaoCallback() {
  const { code } = useParams();

  const { data, isLoading } = useQuery(['kakao-signUp', code], () =>
    kakaoSignUp(code),
  );

  return (
    //따로 화면이 아닌데...??
    <div>
      <Header>Wineasy</Header>
      <h1 className={style}>별명</h1>
    </div>
  );
}

export default KakaoCallback;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 40px;
  font-size: 50px;
`;
