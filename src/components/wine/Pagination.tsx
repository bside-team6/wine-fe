import { css, Theme } from '@emotion/react';
import RcPagination from 'rc-pagination';
import { buttonStyle } from '~/styles/common';
import type { IPageable } from '~/types';
import { ReactComponent as LeftArrow } from '~/assets/page_arrow.svg';

export interface PaginationProps extends Omit<IPageable<unknown>, 'content'> {
  onChange(page: number): void;
}

const Pagination: React.VFC<PaginationProps> = ({
  number,
  size,
  totalPages,
  totalElements,
  first,
  last,
  onChange,
}) => {
  return (
    <div css={paginationStyle}>
      <button
        className="rc-pagination-first"
        disabled={first}
        onClick={() => onChange(1)}
      >
        <LeftArrow />
        <LeftArrow />
      </button>
      <RcPagination
        onChange={onChange}
        current={number + 1}
        total={totalElements}
        pageSize={size}
        showTitle={false}
        jumpNextIcon={<span>...</span>}
        jumpPrevIcon={<span>...</span>}
        prevIcon={
          <button>
            <LeftArrow />
          </button>
        }
        nextIcon={
          <button>
            <LeftArrow />
          </button>
        }
      />
      <button
        className="rc-pagination-last"
        disabled={last}
        onClick={() => onChange(totalPages)}
      >
        <LeftArrow />
        <LeftArrow />
      </button>
    </div>
  );
};

export default Pagination;

const paginationStyle = (theme: Theme) => css`
  display: inline-flex;
  align-items: center;
  ul {
    display: inline-flex;
    align-items: center;
  }
  svg {
    color: ${theme.colors.black04};
    width: 4px;
    height: 12px;
  }
  a,
  button,
  span {
    ${buttonStyle};
    width: 24px;
    height: 24px;
    margin-left: 5px;
    margin-right: 5px;
  }
  a {
    font-size: 12px;
    font-family: ${theme.typography.lato};
    padding-top: 2px;
  }
  .rc-pagination-last,
  .rc-pagination-next {
    svg {
      transform: rotate(180deg);
    }
  }
  .rc-pagination-item-active {
    a {
      background: ${theme.colors.black};
      border-radius: 50%;
      cursor: default;
      color: ${theme.colors.white};
      font-weight: bold;
    }
  }
`;
