import React from 'react';
import { useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import useWineNoteQuery from 'queries/useWineNoteQuery';
import Spinner from 'components/common/Spinner';
import RelatedWineNotes from './RelatedWineNotes';
import ButtonGroup from './ButtonGroup';
import DetailNote from './DetailNote';

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
