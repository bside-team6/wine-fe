import { css, Theme } from '@emotion/react';
import PopularNoteList from './PopularNoteList';
import WineNoteList from './WineNoteList';

const AllWineNotesContent = () => {
  return (
    <div
      css={(theme: Theme) => css`
        background: ${theme.colors.black10};
        padding: 80px 0 120px;
        min-height: 568px;
      `}
    >
      <div
        css={(theme: Theme) => css`
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
          width: ${theme.breakpoints.lg};
          max-width: 100%;
          margin: 0 auto;
        `}
      >
        <WineNoteList />
        <PopularNoteList />
      </div>
    </div>
  );
};

export default AllWineNotesContent;
