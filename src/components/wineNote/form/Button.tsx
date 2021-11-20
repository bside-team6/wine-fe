import type { SerializedStyles, Theme } from '@emotion/react';
import RoundButton from '~/components/common/RoundButton';

export interface ButtonProps {
  selected?: boolean;
  onClick?: VoidFunction;
  css?: SerializedStyles | ((theme: Theme) => SerializedStyles);
}

const Button: React.FC<ButtonProps> = ({
  selected,
  onClick,
  css,
  children,
}) => {
  return (
    <RoundButton
      type="button"
      variant="outlined"
      size="small"
      onClick={onClick}
      color={selected ? 'primary' : 'secondary'}
      bold={selected === true}
      css={css}
    >
      {children}
    </RoundButton>
  );
};

export default Button;
