import { css, Theme } from '@emotion/react';
import { useParams } from 'react-router-dom';
import WineNote from '~/components/wineNote/WineNote';
import useRelatedWineNotesQuery from '~/queries/useRelatedWineNotesQuery';
import { alignCenter } from '~/styles/common';
import { emptyStyle } from '~/styles/wine-note';
import type { IWineNote } from '~/types';
import noDataImg from '~/assets/no_data_wine.png';

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
        {!data?.length ? <EmptyState /> : <RelatedNotes notes={data} />}
      </div>
    </div>
  );
};

export default RelatedWineNotes;

const EmptyState = () => {
  return (
    <div css={emptyStyle}>
      <img src={noDataImg} alt="empty" />
      <p>아직 작성된 관련 와인 노트가 없습니다.</p>
    </div>
  );
};

const RelatedNotes: React.VFC<{ notes: IWineNote[] }> = ({ notes }) => {
  return (
    <ul
      css={css`
        ${alignCenter}
        margin-top: 36px;
        li {
          margin-right: 36px;
          width: calc(50% - 18px);
          flex-basis: 50% - 18px;
        }
      `}
    >
      {notes.map((note) => (
        <li key={note.id}>
          <WineNote {...note} />
        </li>
      ))}
    </ul>
  );
};
