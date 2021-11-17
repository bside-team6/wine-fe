import { css } from '@emotion/react';
import Icon from '~/components/common/Icon';
import { alignCenter } from '~/styles/common';

const OrderDropdown = () => {
  return (
    <div
      css={css`
        ${alignCenter}
      `}
    >
      <span
        css={css`
          margin-right: 8px;
        `}
      >
        당도 높은 순
      </span>
      <Icon name="arrow-down" />
    </div>
  );
};

export default OrderDropdown;
