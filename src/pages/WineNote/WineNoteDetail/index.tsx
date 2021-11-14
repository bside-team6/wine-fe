import { css, Theme } from '@emotion/react';
import { useParams } from 'react-router-dom';
import useWineNoteQuery from '~/queries/useWineNoteQuery';
import ButtonGroup from './ButtonGroup';
import DetailNote from './DetailNote';
import RelatedWineNotes from './RelatedWineNotes';

const WineNoteDetail: React.VFC = () => {
  const { wineNoteId } = useParams();
  const { data } = useWineNoteQuery({
    wineNoteId: Number(wineNoteId),
    isTimeline: false,
  });

  return (
    <div
      css={(theme: Theme) => css`
        background: ${theme.colors.black10};
        padding-top: 60px;
      `}
    >
      <DetailNote {...data!} />
      <ButtonGroup
        prevId={data?.previousWineNoteId}
        nextId={data?.nextWineNoteId}
      />
      <RelatedWineNotes />
    </div>
  );
};

export default WineNoteDetail;
