import { css, useTheme } from '@emotion/react';
import type { SerializedStyles, Theme } from '@emotion/react';
import Icon, { IconName } from '~/components/common/Icon';
import { buttonStyle } from '~/styles/common';

export interface IconButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  name: IconName;
  color?: string;
  css?: SerializedStyles | ((theme: Theme) => SerializedStyles);
}

const IconButton: React.VFC<IconButtonProps> = ({
  name,
  color,
  css: cssProps,
  ...restProps
}) => {
  const theme = useTheme();

  return (
    <button
      css={[
        buttonStyle,
        typeof cssProps === 'function' ? cssProps(theme) : cssProps,
      ]}
      {...restProps}
    >
      <Icon
        name={name}
        css={
          color
            ? css`
                color: ${color};
              `
            : undefined
        }
      />
    </button>
  );
};

export default IconButton;
