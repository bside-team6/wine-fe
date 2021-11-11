import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import RoundButton from '~/components/common/RoundButton';
import { alignCenter } from '~/styles/common';

const WineNoteMainHeader = () => {
  const navigate = useNavigate();

  return (
    <div
      css={css`
        width: 1200px;
        max-width: 100%;
        margin: 80px auto 40px;
      `}
    >
      <h2
        css={css`
          color: #000;
          font-weight: 700;
          font-size: 40px;
          line-height: 57.92px;
        `}
      >
        와인노트를 작성하고
        <br />
        공유해보세요!
      </h2>
      <div
        css={css`
          margin-top: 80px;
          ${alignCenter}
        `}
      >
        <RoundButton
          onClick={() => navigate('/wine-note')}
          css={css`
            margin-right: 8px;
          `}
        >
          전체 노트
        </RoundButton>
        <RoundButton inactive onClick={() => navigate('/wine-note/my-note')}>
          나의 노트
        </RoundButton>
      </div>
    </div>
  );
};

export default WineNoteMainHeader;
