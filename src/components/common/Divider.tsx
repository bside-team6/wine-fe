import { css, useTheme } from '@emotion/react';
import type { SerializedStyles, Theme } from '@emotion/react';

interface DividerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHRElement>,
    HTMLHRElement
  > {
  type?: 'vertical' | 'horizontal';
  css?: SerializedStyles | ((theme: Theme) => SerializedStyles);
}

const Divider: React.VFC<DividerProps> = ({
  type = 'horizontal',
  css: cssProps,
  ...restProps
}) => {
  const theme = useTheme();

  if (type === 'vertical') {
    return (
      <hr
        css={[
          css`
            width: 100%;
            height: 1px;
            border: 0;
            border-bottom: 1px solid ${theme.colors.black09};
          `,
          typeof cssProps === 'function' ? cssProps(theme) : cssProps,
        ]}
        {...restProps}
      />
    );
  }

  return (
    <hr
      css={[
        css`
          width: 0;
          height: 12px;
          border: 0;
          border-right: 1px solid;
          border-color: ${theme.colors.border};
          margin-left: 8px;
          margin-right: 8px;
          align-self: stretch;
          flex-shrink: 0;
        `,
        typeof cssProps === 'function' ? cssProps(theme) : cssProps,
      ]}
      {...restProps}
    />
  );
};

export default Divider;
