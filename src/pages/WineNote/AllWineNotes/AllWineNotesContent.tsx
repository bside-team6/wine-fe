import { Suspense } from 'react';
import { css, Theme } from '@emotion/react';
import { contentStyle } from '~/styles/wine-note';
import PopularNoteList from './PopularNoteList';
import WineNoteList from './WineNoteList';

const AllWineNotesContent = () => {
  return (
    <div css={contentStyle}>
      <div
        css={(theme: Theme) => css`
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: ${theme.breakpoints.lg};
          max-width: 100%;
          margin: 0 auto;
        `}
      >
        <Suspense fallback={null}>
          <WineNoteList />
          <PopularNoteList />
        </Suspense>
      </div>
    </div>
  );
};

export default AllWineNotesContent;
