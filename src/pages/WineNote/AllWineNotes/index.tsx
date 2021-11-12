import { css } from '@emotion/react';
import AllWineNotesContent from './AllWineNotesContent';
import AllWineNotesHeader from './AllWineNotesHeader';

const AllWineNotes: React.VFC = () => {
  return (
    <div
      css={css`
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      `}
    >
      <AllWineNotesHeader />
      <AllWineNotesContent />
    </div>
  );
};

export default AllWineNotes;
