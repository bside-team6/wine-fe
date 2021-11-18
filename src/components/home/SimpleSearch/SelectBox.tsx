import { css, SerializedStyles, Theme, useTheme } from '@emotion/react';
import Icon from '~/components/common/Icon';
import { alignCenter } from '~/styles/common';

export interface SelectBoxProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  info?: string;
  css?: SerializedStyles | ((theme: Theme) => SerializedStyles);
}

/**
 * 각 스텝 별 세부 선택 창
 */
const SelectBox: React.FC<SelectBoxProps> = ({
  title,
  info,
  children,
  css: cssProps,
  ...restProps
}) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        position: absolute;
        top: 76px;
        width: 100%;
        border: 1px solid ${theme.colors.border};
        box-shadow: ${theme.colors.shadow};
        border-radius: 20px;
        padding: 28px;
      `}
    >
      <div
        css={css`
          ${alignCenter}
          margin-bottom: 20px;
          ${!info &&
          css`
            justify-content: center;
          `}
        `}
      >
        <h3
          css={css`
            font-weight: bold;
            font-size: 18px;
            line-height: 26px;
            ${info &&
            css`
              margin-right: auto;
            `}
          `}
        >
          {title}
        </h3>
        {info && (
          <div
            css={css`
              color: ${theme.colors.black06};
              font-size: 12px;
              ${alignCenter}
            `}
          >
            <Icon name="info" />
            <span
              css={css`
                margin-left: 4px;
              `}
            >
              {info}
            </span>
          </div>
        )}
      </div>
      <div
        css={[typeof cssProps === 'function' ? cssProps(theme) : cssProps]}
        {...restProps}
      >
        {children}
      </div>
    </div>
  );
};

export default SelectBox;
