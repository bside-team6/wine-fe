import { forwardRef } from 'react';
import { css, Theme } from '@emotion/react';

export type SwitchProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Switch = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <label
      css={(theme: Theme) => css`
        position: relative;
        display: inline-block;
        width: 64px;
        height: 32px;
        input {
          opacity: 0;
          width: 0;
          height: 0;
          &:checked + span {
            background-color: ${theme.colors.main.primary};
            &:before {
              transform: translateX(32px);
            }
          }
        }
        span {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: ${theme.colors.black08};
          transition: 300ms;
          border-radius: 99px;
          &:before {
            position: absolute;
            content: '';
            width: 24px;
            height: 24px;
            left: 4px;
            bottom: 4px;
            background-color: ${theme.colors.white};
            transition: 300ms;
            border-radius: 50%;
          }
        }
      `}
    >
      <input type="checkbox" {...props} ref={ref} />
      <span />
    </label>
  );
});

export default Switch;
