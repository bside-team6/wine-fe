import { forwardRef } from 'react';
import { css, useTheme } from '@emotion/react';
import { inlineFlexCenter } from '~/styles/common';

export type SwitchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, ...props }, ref) => {
    const theme = useTheme();

    return (
      <div css={inlineFlexCenter}>
        {label && (
          <span
            css={css`
              font-weight: bold;
              font-size: 12px;
              margin-right: 8px;
              color: ${theme.colors.black02};
            `}
          >
            {label}
          </span>
        )}
        <label
          css={css`
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
      </div>
    );
  },
);

export default Switch;
