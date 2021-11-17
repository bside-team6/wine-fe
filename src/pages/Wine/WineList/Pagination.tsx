import { css } from '@emotion/react';
import { flexCenter } from '~/styles/common';

const Pagination = () => {
  return (
    <div
      css={css`
        margin-top: 100px;
        margin-bottom: 120px;
        ${flexCenter}
      `}
    >
      Pagination
    </div>
  );
};

export default Pagination;
