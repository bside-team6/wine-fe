import React, { useState, useCallback } from 'react';
import { Router, withRouter } from 'react-router';
import { css } from '@emotion/react';
import { getFood } from 'api/admin';
import { useQuery } from 'react-query';

function MainSearchBar() {
  const [clickedId, setClickedId] = useState('1');

  const handleClickMenu = (e, id) => {
    setClickedId(id);
    // console.log('test', e.target.classList, id);
    // e.target.classList.add('on');
    // e.target.className = 'on';
  };

  const { data: foodsList } = useQuery('get-food', getFood, {
    staleTime: Infinity,
    select: (data) => data.data,
  });
  return (
    <div
      css={() => css`
        display: flex;
        width: 100vw;
        height: calc(100vh - 10px);
        justify-content: center;
        position: relative;
        top: calc(100vh / 5);
      `}
    >
      <div
        css={(theme) => css`
          display: flex;
          position: relative;
          flex-direction: column;
          align-items: center;
          min-width: 486px;
          min-height: 322px;
        `}
      >
        <div
          css={(theme) => css`
            display: flex;
            width: 100%;
            height: 60px;
            flex-direction: row;
            justify-content: space-between;
            top: 0;
            border-radius: 30px;
            border: 2px solid ${theme.primePurple};
            box-shadow: 0px 4px 8px 0px #0000000d;
          `}
        >
          <InnerSearch
            menuType={'메인음식'}
            handleClickMenu={(e) => handleClickMenu(e, '1')}
            menuId="1"
            clickedId={clickedId}
          ></InnerSearch>
          <InnerSearch
            menuType={'가격대'}
            handleClickMenu={(e) => handleClickMenu(e, '2')}
            menuId="2"
            clickedId={clickedId}
          ></InnerSearch>
          <InnerSearch
            menuType={'당도'}
            handleClickMenu={(e) => handleClickMenu(e, '3')}
            menuId="3"
            clickedId={clickedId}
          ></InnerSearch>
          <div
            css={(theme) => css`
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              background-color: ${theme.primePurple};
              width: 44px;
              height: 44px;
              top: 6px;
              right: 6px;
              border-radius: 50%;
              margin: 2px 4px;
              color: white;
              svg {
                font-size: 1.6em;
              }
            `}
          >
            버튼
          </div>
        </div>
        <div
          css={(theme) => css`
            word-break: break-all;
            width: 486px;
            border: 1px solid ${theme.colors.border};
            box-shadow: 0px 4px 8px 0px #0000000d;
            border-radius: 20px;
            margin-top: 15px;
            padding: 20px;
            .foodOptions {
              /* display: none; */
            }
            .priceOptions {
              /* display: none; */
            }
            .sweetOptions {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .bold {
                font-size: 16px;
                font-weight: 700;
              }
              div {
                width: 100%;
                margin: 8px 0px;
                text-align: center;
              }
            }
          `}
        >
          {clickedId === '1' && (
            <div className="foodOptions">
              <div css={(theme) => divOptStyle(theme)}>
                <span>메인음식</span>
                <span>한 가지 음식만 선택해주세요</span>
              </div>
              {foodsList?.map((foods) => {
                return <BtnGrey data={foods.foodName} />;
              })}
            </div>
          )}

          {clickedId === '2' && (
            <div className="PriceOptions">
              <div css={(theme) => divOptStyle(theme)}>
                <span>가격대</span>
                <span>복수 선택이 가능해요</span>
              </div>
              {foodsList?.map((foods) => {
                return <BtnGrey data={foods.foodName} />;
              })}
            </div>
          )}

          {clickedId === '3' && (
            <div className="PriceOptions">
              <div css={(theme) => divOptStyle(theme)}>
                <span>달달한 순서대로 보여드릴까요?</span>
              </div>
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                `}
              >
                <BtnGrey data={'네'} />
                <BtnGrey data={'아니요'} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// export default withRouter(MainSearchBar);
export default MainSearchBar;

const InnerSearch = ({ menuType, menuId, handleClickMenu, clickedId }) => {
  return (
    <div
      onClick={handleClickMenu}
      id={menuId}
      className={clickedId === menuId && 'on'}
      css={(theme) => css`
        display: flex;
        justify-content: left;
        align-items: center;
        width: 33%;
        padding-left: 25px;
        border-radius: 30px;
        svg {
          margin: 0px 8px;
        }
        &.on {
          background-color: ${theme.lightPurple2};
        }
      `}
    >
      {menuType}
    </div>
  );
};

const BtnGrey = ({ data }) => {
  return (
    <div
      css={(theme) => css`
        display: inline-block;
        padding: 8px 20px;
        min-height: 40px;
        border: 2px solid #dfdfdf;
        box-sizing: border-box;
        border-radius: 20px;
        margin: 4px;
        color: ${theme.colors.black06};
        text-align: center;
        :hover {
          border: 2px solid ${theme.colors.purple};
          color: ${theme.colors.purple};
        }
      `}
    >
      {data}
    </div>
  );
};

const divOptStyle = (theme) => css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  span:first-child {
    font-size: 18px;
    font-weight: 700;
  }
  span:nth-child(2) {
    font-size: 12px;
    color: ${theme.colors.black06};
  }
`;
