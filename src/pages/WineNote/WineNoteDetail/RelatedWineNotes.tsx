import { css, Theme } from '@emotion/react';
import { useParams } from 'react-router-dom';
import { wineNotes } from '~/api/mocks/wine-note';
import Spinner from '~/components/common/Spinner';
import WineNote from '~/components/wineNote/WineNote';
import useRelatedWineNotesQuery from '~/queries/useRelatedWineNotesQuery';
import { alignCenter } from '~/styles/common';

// FIXME: 백엔드 스펙 수정 후 목데이터 삭제 및 재연결

const RelatedWineNotes = () => {
  // TODO: 관련 와인노트 없을때

  const { wineNoteId } = useParams();
  const { data, isLoading } = useRelatedWineNotesQuery(Number(wineNoteId));

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
        {isLoading ? (
          <Spinner />
        ) : (
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
                key={note.wineNoteId}
                css={css`
                  margin-right: 36px;
                `}
              >
                <WineNote {...wineNotes[0]} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RelatedWineNotes;
