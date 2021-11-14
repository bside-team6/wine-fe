import WineNotesHeader from '~/components/wineNote/WineNotesHeader';
import { containerStyle } from '~/styles/wine-note';
import WineNoteTimelineContent from './WineNoteTimelineContent';

const WineNoteTimeline = () => {
  return (
    <div css={containerStyle}>
      <WineNotesHeader title={`와인노트를 작성하고\n공유해보세요!`} />
      <WineNoteTimelineContent />
    </div>
  );
};

export default WineNoteTimeline;
