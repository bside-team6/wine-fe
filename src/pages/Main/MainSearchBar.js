import React, { useState, useCallback } from 'react';
import { Router, withRouter } from 'react-router';
import { css } from '@emotion/react';
import { getFood } from 'api/admin';
import { useQuery } from 'react-query';
import { ReactComponent as Search } from 'assets/ic_search.svg';
import { ReactComponent as ArrowDown } from 'assets/Vector.svg';
import { ReactComponent as Info } from 'assets/ic_info.svg';

function MainSearchBar() {
  const [clickedId, setClickedId] = useState('0');
  const [foodId, setFoodId] = useState();
  const [priceInfo, setPriceInfo] = useState({
    strId: 1,
    endId: 0,
    min: 0,
    max: null,
  });
  const [sortBy, setSortBy] = useState();
  // const [searchData, setSearchData] = useState({
  //   page: 0,
  //   count: 16,
  //   foodId: 0,
  //   minPrice: null,
  //   maxPrice: null,
  //   sortBy: 'sweet',
  // });

  const handleClickFood = (e, id) => {
    if (id === foodId) {
      setFoodId(null);
    } else {
      setFoodId(id);
    }
  };
  const handleClickPrice = (e, price) => {
    // setPrice(id);
    setPriceInfo((prevState) => ({
      strId: Math.min(prevState.strId, price.id),
    }));
    console.log(priceInfo);
  };
  const handleClickSweet = (e, id) => {
    if (id === sortBy) {
      setSortBy(null);
    } else {
      setSortBy(id);
    }
  };
  const handleClickMenu = (e, id) => {
    setClickedId(id);
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
        css={() => css`
          display: flex;
          position: relative;
          flex-direction: column;
          align-items: center;
          min-width: 486px;
          min-height: 322px;
        `}
      >
        <div css={() => SearchMenuStyle}>
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
          <div css={(theme) => RoundBtnStyle(theme)}>
            <Search />
          </div>
        </div>
        {clickedId !== '0' && (
          <div css={(theme) => OptBox(theme)}>
            {clickedId === '1' && (
              <div className="foodOptions">
                <div css={(theme) => divOptStyle(theme)}>
                  <span>메인음식</span>
                  <span>
                    <Info
                      css={css`
                        margin-right: 3px;
                        position: relative;
                        top: 2px;
                      `}
                    />
                    한 가지 음식만 선택해주세요
                  </span>
                </div>
                {foodsList?.map((foods, idx) => {
                  return (
                    <BtnFood
                      key={idx}
                      id={foods.id}
                      foodId={foodId}
                      data={foods.foodName}
                      handleClickButton={handleClickFood}
                    />
                  );
                })}
              </div>
            )}

            {clickedId === '2' && (
              <div className="PriceOptions">
                <div css={(theme) => divOptStyle(theme)}>
                  <span>가격대</span>
                  <span>
                    <Info
                      css={css`
                        margin-right: 3px;
                        position: relative;
                        top: 2px;
                      `}
                    />
                    복수 선택이 가능해요
                  </span>
                </div>
                {priceList?.map((price, idx) => {
                  return (
                    <BtnPrice
                      key={idx}
                      id={price.id}
                      price={price}
                      handleClickButton={handleClickPrice}
                    />
                  );
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
                  <BtnSweet
                    data={'네'}
                    id="sweet"
                    sortBy={sortBy}
                    handleClickButton={handleClickSweet}
                  />
                  <BtnSweet
                    data={'아니요'}
                    id=""
                    sortBy={sortBy}
                    handleClickButton={handleClickSweet}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// export default withRouter(MainSearchBar);
export default MainSearchBar;

const SearchMenuStyle = (theme) => css`
  display: flex;
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  top: 0;
  border-radius: 30px;
  border: 2px solid ${theme.primePurple};
  box-shadow: 0px 4px 8px 0px #0000000d;
`;
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

const OptBox = (theme) => css`
  word-break: break-all;
  width: 486px;
  border: 1px solid ${theme.colors.border};
  box-shadow: 0px 4px 8px 0px #0000000d;
  border-radius: 20px;
  margin-top: 15px;
  padding: 20px;

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
`;
const BtnFood = ({ id, data, foodId, handleClickButton }) => {
  return (
    <div
      id={id}
      onClick={(e) => handleClickButton(e, id)}
      className={id === foodId && 'on'}
      css={() => BtnGreyStyle}
    >
      {data}
    </div>
  );
};
const BtnPrice = ({ id, price, handleClickButton }) => {
  return (
    <div
      id={id}
      onClick={(e) => handleClickButton(e, price)}
      // className={id === foodId && 'on'}
      css={() => BtnGreyStyle}
    >
      {price.name}
    </div>
  );
};
const BtnSweet = ({ id, data, sortBy, handleClickButton }) => {
  return (
    <div
      id={id}
      // sweet={sweet}
      className={id === sortBy && 'on'}
      onClick={(e) => handleClickButton(e, id)}
      css={() => BtnGreyStyle}
    >
      {data}
    </div>
  );
};
const BtnGreyStyle = (theme) => css`
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
  &.on {
    border: 2px solid ${theme.colors.purple};
    color: ${theme.colors.purple};
  }
`;
const divOptStyle = (theme) => css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  span:first-of-type {
    font-size: 18px;
    font-weight: 700;
  }
  span:nth-of-type(2) {
    font-size: 12px;
    color: ${theme.colors.black06};
  }
`;

const RoundBtnStyle = (theme) => css`
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
`;

const priceList = [
  { id: 1, name: '1만원 이하', min: 0, max: 10000 },
  { id: 2, name: '1~3만원', min: 10000, max: 30000 },
  { id: 3, name: '3~5만원', min: 10000, max: 30000 },
  { id: 4, name: '5~10만원', min: 10000, max: 30000 },
  { id: 5, name: '10~20만원', min: 10000, max: 30000 },
  { id: 6, name: '20~50만원', min: 10000, max: 30000 },
  { id: 7, name: '50만원 이상', min: 500000, max: null },
];
