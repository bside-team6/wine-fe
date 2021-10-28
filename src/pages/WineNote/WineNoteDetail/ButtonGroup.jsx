import React from 'react';
import { useHistory } from 'react-router-dom';
import { css } from '@emotion/react';
import RoundButton from 'components/common/RoundButton';

const ButtonGroup = () => {
  const history = useHistory();

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
        <RoundButton
          color="secondary"
          onClick={() => history.push('/wine-note')}
        >
          목록으로
        </RoundButton>
      </div>
      <RoundButton>와인냉장고에 담기</RoundButton>
    </div>
  );
};

export default ButtonGroup;
