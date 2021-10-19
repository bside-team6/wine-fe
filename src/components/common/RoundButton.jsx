import React from 'react';
import { css } from '@emotion/react';
import sprites from 'assets/sprites-24.png';

const dropdownStyle = css`
  padding-right: 40px;
  &:after {
    position: absolute;
    top: 6px;
    right: 14px;
    content: ' ';
    width: 24px;
    height: 24px;
    background-color: transparent;
    background-image: url('${sprites}');
    background-repeat: no-repeat;
    background-position: -436px 0px;
    background-size: 658px 24px;
    translate: transform 200ms;
  }
`;

const dropdownCloseStyle = css`
  &:after {
    transform: rotate(180deg);
  }
`;

const RoundButton = ({
  children,
  color = 'primary',
  dropdown,
  ...restProps
}) => {
  return (
    <button
      css={(theme) => css`
        cursor: pointer;
        position: relative;
        font-weight: bold;
        padding: 11px 20px;
        background: #ffffff;
        border-radius: 22px;
        border: 2px solid;
        border-color: ${color === 'primary'
          ? theme.colors.purple
          : theme.colors.black08};
        color: ${color === 'primary'
          ? theme.colors.purple
          : theme.colors.black06};
        ${dropdown && dropdownStyle}
        ${dropdown === 'close' && dropdownCloseStyle}
      `}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default RoundButton;
