import { css, Theme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import RoundButton from '~/components/common/RoundButton';

export interface ButtonGroupProps {
  prevId?: number;
  nextId?: number;
}

const ButtonGroup = ({ prevId, nextId }: ButtonGroupProps) => {
  const navigate = useNavigate();

  return (
    <div
      css={(theme: Theme) => css`
        width: ${theme.breakpoints.lg};
        margin: 24px auto 80px;
        display: flex;
        align-items: center;
      `}
    >
      <RoundButton
        variant="outlined"
        color="secondary"
        bold={false}
        onClick={() => navigate('/wine-note')}
      >
        목록으로
      </RoundButton>
      <div
        css={css`
          margin-left: auto;
          button {
            margin-left: 8px;
            &::last-child {
              margin-left: 0;
            }
          }
        `}
      >
        <RoundButton
          variant="outlined"
          color="secondary"
          bold={false}
          disabled={!prevId}
          onClick={() => navigate(`/wine-note/${prevId}`)}
        >
          이전글
        </RoundButton>
        <RoundButton
          variant="outlined"
          color="secondary"
          bold={false}
          disabled={!nextId}
          onClick={() => navigate(`/wine-note/${nextId}`)}
        >
          다음글
        </RoundButton>
      </div>
    </div>
  );
};

export default ButtonGroup;
