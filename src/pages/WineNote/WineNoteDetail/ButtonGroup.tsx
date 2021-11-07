import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import RoundButton from '~/components/common/RoundButton';

const ButtonGroup = () => {
  const navigate = useNavigate();

  return (
    <div
      css={css`
        width: 1200px;
        margin: 24px auto 80px;
        display: flex;
        align-items: center;
      `}
    >
      <div
        css={css`
          margin-right: auto;
          button {
            margin-right: 8px;
            &::last-child {
              margin-right: 0;
            }
          }
        `}
      >
        <RoundButton color="secondary">이전글</RoundButton>
        <RoundButton color="secondary">다음글</RoundButton>
      </div>
      <RoundButton color="secondary" onClick={() => navigate('/wine-note')}>
        목록으로
      </RoundButton>
    </div>
  );
};

export default ButtonGroup;
