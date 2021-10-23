import React, { useState, useCallback } from 'react';
import { Router, withRouter } from 'react-router';
import { css } from '@emotion/react';
import { theme } from 'helpers/theme';

function MainSearchBar() {
  const handleMenu = () => {
    console.log('test');
  };
  return (
    <div
      css={() => css`
        display: flex;
        width: 100vw;
        height: calc(100vh - 10px);
        justify-content: center;
        align-items: center;
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
          <InnerSearch menuType={'메인음식'} className={'on'}></InnerSearch>
          <InnerSearch menuType={'가격대'}></InnerSearch>
          <InnerSearch menuType={'당도'}></InnerSearch>
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
              display: none;
            }
            .priceOptions {
              display: none;
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
          <BtnGrey text={'스테이크'} />
        </div>
      </div>
    </div>
  );
}

// export default withRouter(MainSearchBar);
export default MainSearchBar;

const InnerSearch = ({ menuType, className }) => {
  return (
    <div
      onClick={this.handleMenu}
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
      className={className}
    >
      {menuType}
    </div>
  );
};
const BtnGrey = ({ text }) => {
  return (
    <div
      css={(theme) => css`
        display: inline-block;
        padding: 11px 20px 10px;
        height: 40px;
        border: 2px solid #dfdfdf;
        box-sizing: border-box;
        border-radius: 20px;
        margin: 4px;
        :hover {
          border: 2px solid ${theme.primePurple};
        }
      `}
    >
      {text}
    </div>
  );
};
