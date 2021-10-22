import React from 'react';
<<<<<<< Updated upstream
// import styled from '@emotion/styled';
=======
>>>>>>> Stashed changes
import { css } from '@emotion/react';
import { KAKAO_AUTH_URL } from 'helpers/oauth';
import kakaoLoginImg from 'assets/kakao_login_large_wide.png';

<<<<<<< Updated upstream
// const style = {
//   marginTop: '10px',
//   marginBottom: '10px',
//   marginRight: '10px',
//   float: 'right',
// };

// const styleInfo = {
//   width: '304px',
//   height: '52px',
//   left: '804px',
//   top: '339px',
// };

=======
>>>>>>> Stashed changes
function Login() {
  console.log('ddddd : ', `${KAKAO_AUTH_URL}`);
  return (
    //현재 그려지는 화면이 없음
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
        로그인
      </div>
      <div
        css={(theme) => css`
          font-family: Noto Sans KR;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 26px;
          letter-spacing: 0em;
          text-align: center;
          margin-top: 52px;
        `}
      >
        아이디, 비밀번호 입력하기 귀찮으시죠?
        <br />
        카카오로 간편하고 빠르게 로그인 하세요
      </div>

      <div
        css={(theme) => css`
          height: 60px;
          width: 432px;
          left: 744px;
          top: 415px;
          display: block;
          margin: 0px auto;
          margin-top: 24px;
<<<<<<< Updated upstream
        `}
      >
        <img
          src={kakaoLoginImg}
          alt="kakaoLoginImg"
          onClick={() => window.open(`${KAKAO_AUTH_URL}`)}
        />
=======
      `}>
      <img
        src={kakaoLoginImg}
        alt="kakaoLoginImg"
        onClick={() => window.open(`${KAKAO_AUTH_URL}`,"_self")}
      />
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default Login;

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
