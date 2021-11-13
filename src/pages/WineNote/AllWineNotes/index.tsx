import WineNotesHeader from '~/components/wineNote/WineNotesHeader';
import { containerStyle } from '~/styles/wine-note';
import AllWineNotesContent from './AllWineNotesContent';

const AllWineNotes: React.VFC = () => {
  return (
    <div css={containerStyle}>
      <WineNotesHeader title={`와인노트를 작성하고\n공유해보세요!`} />
      <AllWineNotesContent />
    </div>
  );
};

export default AllWineNotes;
