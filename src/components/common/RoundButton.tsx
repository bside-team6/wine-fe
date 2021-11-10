import { css, Theme } from '@emotion/react';
import { spritesStyle } from '~/styles/common';

const dropdownStyle = css`
  padding-right: 40px;
  &:after {
    position: absolute;
    top: 6px;
    right: 14px;
    content: ' ';
    ${spritesStyle}
    background-position: -436px 0px;
    translate: transform 200ms;
  }
`;

const dropdownCloseStyle = css`
  &:after {
    transform: rotate(180deg);
  }
`;

const inactiveStyle = (theme: Theme) => css`
  color: ${theme.colors.black06};
  border-color: ${theme.colors.black08};
`;

export interface RoundButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: 'primary' | 'secondary';
  dropdown?: 'open' | 'close';
  inactive?: boolean;
}

const RoundButton: React.FC<RoundButtonProps> = ({
  children,
  color = 'primary',
  dropdown,
  inactive,
  ...restProps
}) => {
  return (
    <button
      css={(theme: Theme) => css`
        cursor: pointer;
        position: relative;
        font-weight: bold;
        padding: 11px 20px;
        background: #ffffff;
        border-radius: 22px;
        border: 2px solid;
        border-color: ${color === 'primary'
          ? theme.colors.main.primary
          : theme.colors.black08};
        color: ${color === 'primary'
          ? theme.colors.main.primary
          : theme.colors.black02};
        ${dropdown && dropdownStyle}
        ${dropdown === 'close' && dropdownCloseStyle}
        &:disabled {
          cursor: not-allowed;
          color: ${theme.colors.black06};
          border-color: ${theme.colors.black08};
        }
        ${inactive && inactiveStyle(theme)}
      `}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default RoundButton;
