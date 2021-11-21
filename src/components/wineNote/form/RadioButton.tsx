import { forwardRef } from 'react';
import { css, useTheme } from '@emotion/react';
import { buttonStyle } from '~/styles/common';

export type RadioButtonProps = React.InputHTMLAttributes<HTMLInputElement>;

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ children, ...props }, ref) => {
    const theme = useTheme();

    return (
      <label
        css={css`
          position: relative;
          input {
            position: absolute;
            appearance: none;
            opacity: 0;
            &:checked + .button {
              border-color: ${theme.colors.main.primary};
              color: ${theme.colors.main.primary};
              font-weight: bold;
            }
          }
          .button {
            ${buttonStyle}
            height: 40px;
            position: relative;
            padding: 0 20px;
            font-size: 14px;
            font-weight: normal;
            border-radius: 20px;
            height: 40px;
            background: #ffffff;
            border: 2px solid;
            border-color: ${theme.colors.black08};
            color: ${theme.colors.black02};
          }
        `}
      >
        <input type="radio" {...props} ref={ref} />
        <span className="button">
          <span>{children}</span>
        </span>
      </label>
    );
  },
);

export default RadioButton;
