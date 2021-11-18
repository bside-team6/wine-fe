import { useState } from 'react';
import { css, useTheme } from '@emotion/react';
import { isEqual } from 'lodash-es';
import { useRecoilState, useRecoilValue } from 'recoil';
import Icon from '~/components/common/Icon';
import { sortList } from '~/helpers/constants';
import { sortLabelSelector, sortState } from '~/stores/wine';
import { buttonStyle } from '~/styles/common';

const SortOrder = () => {
  const theme = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const [sort, setSort] = useRecoilState(sortState);
  const sortLabel = useRecoilValue(sortLabelSelector);

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <button
        onClick={() => setIsOpen((state) => !state)}
        css={css`
          ${buttonStyle}
        `}
      >
        <span
          css={css`
            margin-right: 8px;
          `}
        >
          {sortLabel}
        </span>
        <Icon
          name="arrow-down"
          css={css`
            transition: transform 200ms;
            ${isOpen
              ? css`
                  transform: rotate(180deg);
                `
              : undefined}
          `}
        />
      </button>
      <div
        css={css`
          display: ${isOpen ? 'block' : 'none'};
          position: absolute;
          top: 24px;
          right: 0;
          z-index: 1;
          background: ${theme.colors.white};
          border: 1px solid ${theme.colors.border};
          padding: 16px 0;
          margin: 0 auto;
          width: 111px;
          text-align: center;
          button {
            ${buttonStyle}
            line-height: 20px;
            color: ${theme.colors.black04};
            &.active {
              color: ${theme.colors.black};
            }
          }
        `}
      >
        {sortList.map(({ label, value }) => (
          <button
            key={label}
            onClick={() => setSort(value)}
            className={isEqual(value, sort) ? 'active' : undefined}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortOrder;
