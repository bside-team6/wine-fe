import { css, Theme } from '@emotion/react';
import { useParams } from 'react-router-dom';
import { wineNotes } from '~/api/mocks/wine-note';
import WineNote from '~/components/wineNote/WineNote';
import useRelatedWineNotesQuery from '~/queries/useRelatedWineNotesQuery';
import { alignCenter } from '~/styles/common';

// FIXME: 백엔드 스펙 수정 후 목데이터 삭제 및 재연결
// TODO: 관련 와인노트 없을때 처리 필요

const RelatedWineNotes = () => {
  const { wineNoteId } = useParams();
  const { data } = useRelatedWineNotesQuery(Number(wineNoteId), {
    suspense: true,
  });

  return (
    <div
      css={(theme: Theme) => css`
        background: ${theme.colors.white};
        padding-top: 80px;
        padding-bottom: 80px;
      `}
    >
      <div
        css={(theme: Theme) => css`
          width: ${theme.breakpoints.lg};
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
          {data?.map((note) => (
            <li
              key={note.id}
              css={css`
                margin-right: 36px;
              `}
            >
              <WineNote {...wineNotes[0]} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RelatedWineNotes;
