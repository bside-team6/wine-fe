import React from 'react';
import { css } from '@emotion/react';
import Chip from 'components/common/Chip';
import Divider from 'components/common/Divider';
import sprites from 'assets/sprites-24.png';

const Timeline = () => {
  return (
    <div>
      <TimelineHeader />
      <TimelineList />
    </div>
  );
};

export default Timeline;

const TimelineHeader = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 22px;
      `}
    >
      <div
        css={css`
          font-weight: 700;
        `}
      >
        총 80건
      </div>
      <div
        css={css`
          padding-right: 20px;
          position: relative;
          &:after {
            position: absolute;
            top: 0px;
            content: ' ';
            width: 24px;
            height: 24px;
            background-color: transparent;
            background-image: url('${sprites}');
            background-repeat: no-repeat;
            background-position: -436px 0px;
            background-size: 658px 24px;
          }
        `}
      >
        작성날짜순
      </div>
    </div>
  );
};

const TimelineList = () => {
  return (
    <div>
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
    </div>
  );
};

const TimelineItem = () => {
  return (
    <div
      css={css`
        display: flex;
        width: 792px;
        border: 1px solid #dfdfdf;
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
        padding: 32px;
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      `}
    >
      <div
        css={css`
          position: relative;
          flex-shrink: 0;
          margin-right: 32px;
        `}
      >
        <img
          src="https://via.placeholder.com/160"
          alt="thumb"
          css={css`
            width: 160px;
            height: 160px;
          `}
        />
        <button
          css={css`
            cursor: pointer;
            position: absolute;
            top: 12px;
            right: 12px;
            z-index: 1;
            background-color: rgba(0, 0, 0, 0.3);
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 0;
            background-image: url('${sprites}');
            background-repeat: no-repeat;
            background-size: 658px 24px;
            background-position: -132px 4px; // filled: -166px
          `}
        />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          margin-top: 8px;
          margin-bottom: 8px;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            margin-bottom: 11px;
          `}
        >
          <Chip color="red" label="RED" />
          <div
            css={css`
              font-size: 14px;
              color: #424242;
              letter-spacing: -3%;
              margin-left: 8px;
            `}
          >
            장 로롱, 꼬또 뒤 리오네
          </div>
        </div>
        <h3
          css={css`
            font-size: 18px;
            margin-bottom: auto;
          `}
        >
          와인 초보의 첫 와인
        </h3>
        <div
          css={(theme) => css`
            display: flex;
            align-items: center;
            font-family: ${theme.typography.lato};
            color: #757575;
            font-size: 12px;
          `}
        >
          <span>Oct 1. 2021</span>
          <Divider />
          <span>조회 82</span>
          <Divider />
          <span>좋아요 5</span>
        </div>
        <div
          css={(theme) => css`
            font-family: ${theme.typography.lato};
            color: #424242;
          `}
        >
          by. Wineasy
        </div>
      </div>
    </div>
  );
};
