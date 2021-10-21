import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { KAKAO_AUTH_URL } from 'helpers/oauth';

const style = {
  marginTop: '10px',
  marginBottom: '10px',
  marginRight: '10px',
  float: 'right',
};

const styleInfo = {
  width: '304px',
  height: '52px',
  left: '804px',
  top: '339px',
};

function Login() {
  const history = useHistory();

  const handleLogin = async () => {
    await fetch(`${KAKAO_AUTH_URL}`)
      .then((res) => res.json())
      .then((res) => {
        if (!res.result) alert(res.message);
        else {
          //결과가 에러일때 뒤로가기 말고 다른 처리 필요
          history.push('/kakaoCallback');
        }
      });
  };

  return (
    //현재 그려지는 화면이 없음
    <div>
      <Header>Wineasy</Header>
      <h1 className={style}>로그인</h1>
      <h2 className={styleInfo}>
        아이디, 비밀번호 입력하기 귀찮으시죠?
        <br />
        카카오로 간편하고 빠르게 로그인 하세요
      </h2>
      <button style={style} onClick={handleLogin}>
        카카오로 시작하기
      </button>
    </div>
  );
}

export default Login;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 40px;
  font-size: 50px;
`;
