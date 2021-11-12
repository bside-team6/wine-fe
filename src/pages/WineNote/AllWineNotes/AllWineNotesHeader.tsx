import { css, Theme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import RoundButton from '~/components/common/RoundButton';
import { alignCenter } from '~/styles/common';

const AllWineNotesHeader = () => {
  const navigate = useNavigate();

  return (
    <div
      css={(theme: Theme) => css`
        width: ${theme.breakpoints.lg};
        max-width: 100%;
        margin: 80px auto 40px;
        flex-shrink: 0;
      `}
    >
      <h2
        css={css`
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
          variant="outlined"
          onClick={() => navigate('/wine-note')}
          css={css`
            margin-right: 8px;
          `}
        >
          전체 노트
        </RoundButton>
        <RoundButton
          variant="outlined"
          inactive
          onClick={() => navigate('/wine-note/timeline')}
        >
          나의 노트
        </RoundButton>
        <RoundButton
          icon="write"
          onClick={() => navigate('/wine-note/write')}
          css={css`
            margin-left: auto;
          `}
        >
          노트쓰러가기
        </RoundButton>
      </div>
    </div>
  );
};

export default AllWineNotesHeader;
