import React from 'react';
import { css } from '@emotion/react';
import Divider from 'components/common/Divider';

const PopularNote = () => {
  return (
    <div
      css={css`
        position: absolute;
        top: 43px;
        right: 0;
        z-index: 1;
        width: 384px;
        border: 1px solid #dfdfdf;
        background: #ffffff;
        border-radius: 20px;
        padding: 36px 32px;
      `}
    >
      <h2
        css={css`
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 32px;
        `}
      >
        이달의 인기 노트
      </h2>
      <ul>
        <PopularNoteItem />
        <PopularNoteItem />
        <PopularNoteItem />
      </ul>
    </div>
  );
};

export default PopularNote;

const PopularNoteItem = () => {
  return (
    <li
      css={css`
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        &:last-child {
          margin-bottom: 0;
        }
      `}
    >
      <div
        css={css`
          flex-shrink: 0;
          border-radius: 50%;
          margin-right: 12px;
          overflow: hidden;
        `}
      >
        <img
          src="https://via.placeholder.com/48"
          alt="thumb"
          css={css`
            width: 48px;
            height: 48px;
          `}
        />
      </div>
      <div
        css={css`
          flex-grow: 1;
          min-width: 0;
        `}
      >
        <h3
          css={css`
            color: #424242;
            font-size: 16px;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          `}
        >
          와인 초보의 첫 와인
        </h3>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <span
            css={(theme) => css`
              font-family: ${theme.typography.lato};
              color: #424242;
            `}
          >
            by. Wineasy
          </span>
          <Divider />
          <span
            css={(theme) => css`
              font-family: ${theme.typography.lato};
              color: #757575;
              font-size: 12px;
            `}
          >
            Oct 1. 2021
          </span>
        </div>
      </div>
    </li>
  );
};
