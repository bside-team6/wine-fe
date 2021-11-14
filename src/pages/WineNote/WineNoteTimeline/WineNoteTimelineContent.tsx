import { Suspense } from 'react';
import { contentStyle } from '~/styles/wine-note';
import WineNoteTimeline from './WineNoteTimeline';

const WineNoteTimelineContent = () => {
  return (
    <div css={contentStyle}>
      <Suspense fallback={null}>
        <WineNoteTimeline />
      </Suspense>
    </div>
  );
};

export default WineNoteTimelineContent;
