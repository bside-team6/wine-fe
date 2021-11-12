import { Suspense } from 'react';
import { css, Theme } from '@emotion/react';
import PopularNoteList from './PopularNoteList';
import WineNoteList from './WineNoteList';

const AllWineNotesContent = () => {
  return (
    <div
      css={(theme: Theme) => css`
        background: ${theme.colors.black10};
        padding: 80px 0 120px;
        flex-grow: 1;
      `}
    >
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
        <Suspense fallback={<></>}>
          <WineNoteList />
          <PopularNoteList />
        </Suspense>
      </div>
    </div>
  );
};

export default AllWineNotesContent;
