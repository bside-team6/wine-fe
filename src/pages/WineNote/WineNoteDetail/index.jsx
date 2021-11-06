import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import ButtonGroup from './ButtonGroup';
import DetailNote from './DetailNote';
import RelatedWineNotes from './RelatedWineNotes';
import Spinner from '~/components/common/Spinner';
import useWineNoteQuery from '~/queries/useWineNoteQuery';

const WineNoteDetail = () => {
  const { wineNoteId } = useParams();

  const { data, isLoading } = useWineNoteQuery(wineNoteId);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div
      css={css`
        background: #fafafa;
        padding-top: 60px;
      `}
    >
      <DetailNote {...data} />
      <ButtonGroup />
      <RelatedWineNotes />
    </div>
  );
};

export default WineNoteDetail;
