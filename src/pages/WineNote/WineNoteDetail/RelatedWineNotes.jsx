import React from 'react';
import { css } from '@emotion/react';
import { alignCenter } from 'styles/common';
import WineNote from 'components/wineNote/WineNote';
import { wineNotes } from 'api/mocks/wine-note'; // FIXME: mock 데이터 삭제 필요

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
            <WineNote {...wineNotes[2]} />
          </li>
          <li>
            <WineNote {...wineNotes[1]} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RelatedWineNotes;
