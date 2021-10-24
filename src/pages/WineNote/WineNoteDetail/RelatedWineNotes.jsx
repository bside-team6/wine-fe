import React from 'react';
import { css } from '@emotion/react';
import { alignCenter } from 'styles/common';
import WineNote from 'components/wineNote/WineNote';

const tempWindNoteItemData = {
  id: 10,
  descript: '와인 초보의 첫 와인',
  wineName: '장 로롱, 꼬또 뒤 리오네',
  isLike: false,
  wineType: 'RED',
  wineasyUserNickName: 'Wineasy',
  regDate: '2021-10-01',
  viewCount: 82,
  wineNoteLikeCount: 5,
  wineNoteWineImagePath: null,
};

const RelatedWineNotes = () => {
  return (
    <div
      css={css`
        background: #ffffff;
        padding-top: 80px;
        padding-bottom: 80px;
      `}
    >
      <div
        css={css`
          width: 1200px;
          margin: 0 auto;
        `}
      >
        <h2
          css={css`
            font-size: 32px;
            font-weight: 700;
          `}
        >
          관련 와인 노트
        </h2>
        <ul
          css={css`
            ${alignCenter}
            margin-top: 36px;
            li {
              width: calc(50% - 18px);
              flex-basis: 50% - 18px;
            }
          `}
        >
          <li
            css={css`
              margin-right: 36px;
            `}
          >
            <WineNote {...tempWindNoteItemData} />
          </li>
          <li>
            <WineNote {...tempWindNoteItemData} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RelatedWineNotes;
