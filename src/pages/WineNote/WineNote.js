import React from 'react';
import styled from 'styled-components';

const WineNote = () => {
  return (
    <div>
      <WineNoteMainHeader />
      <WineNoteMainContent />
    </div>
  );
};

export default WineNote;

const MainHeader = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 80px auto 40px;
  h2 {
    color: #000;
    font-weight: 700;
    font-size: 40px;
    line-height: 57.92px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  height: 44px;
  box-sizing: border-box;
  border-radius: 22px;
  font-weight: 700;
  border: 2px solid;
  border-color: ${(props) => (props.isActive ? '#7430e4' : '#a8a8a8')};
  color: ${(props) => (props.isActive ? '#7430e4' : '#a8a8a8')};
`;

const ButtonGroup = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
  div button:last-child {
    margin-left: 8px;
  }
`;

const WriteButton = styled.button`
  cursor: pointer;
  background-color: #fff;
  margin-left: auto;
  box-sizing: border-box;
  border: 2px solid #dfdfdf;
  border-radius: 22px;
  height: 44px;
  font-size: 16px;
  font-weight: 700;
  color: #424242;
  padding-left: 20px;
  padding-right: 20px;
`;

const WineNoteMainHeader = () => {
  return (
    <MainHeader>
      <h2>
        와인노트를 작성하고
        <br />
        공유해보세요!
      </h2>
      <ButtonGroup>
        <div>
          <Button isActive>전체 노트</Button>
          <Button>나의 노트</Button>
        </div>
        <WriteButton>노트쓰러가기</WriteButton>
      </ButtonGroup>
    </MainHeader>
  );
};

const MainContent = styled.div`
  background: #fafafa;
`;

const WineNoteMainContent = () => {
  return (
    <MainContent>
      <div>
        <div>
          <div>총 80건</div>
          <div>작성날짜순</div>
        </div>
        <div>
          <div>
            <div>타임라인 아이템!</div>
          </div>
          <div>
            <h3>이달의 인기 노트</h3>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </MainContent>
  );
};
