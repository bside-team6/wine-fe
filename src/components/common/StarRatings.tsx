import { forwardRef, useCallback, useState } from 'react';
import { css, Theme } from '@emotion/react';
import { motion } from 'framer-motion';
import { hiddenStyle } from '~/styles/common';
import { ReactComponent as StarIcon } from '~/assets/star.svg';

const roundHalf = (num: number) => Math.round(num * 2) / 2;

export interface StarRatingsProps {
  size?: number;
  value: number;
  onChange?: (...event: any[]) => void;
}

const StarRatings = forwardRef<HTMLInputElement, StarRatingsProps>(
  ({ size = 12, value: currentValue, onChange, ...inputProps }, ref) => {
    const [value, setValue] = useState(roundHalf(currentValue));

    const onHover = onChange ? setValue : undefined;

    const onTap = useCallback(
      (value: number) => {
        if (onChange) {
          if (currentValue === value) {
            onChange(0);
            setValue(0);
          } else {
            onChange(value);
          }
        }
      },
      [onChange, currentValue],
    );

    return (
      <motion.span
        role="img"
        aria-label={`${currentValue} Stars`}
        onHoverEnd={() => onHover?.(currentValue)}
        css={(theme: Theme) => css`
          display: inline-flex;
          align-items: center;
          position: relative;
          cursor: pointer;
          color: ${theme.colors.black07};
          -webkit-tap-highlight-color: transparent;
          svg {
            width: ${size}px;
            height: ${size}px;
          }
          .star-container {
            position: relative;
            .star {
              display: block;
              &:first-of-type {
                width: 50%;
                overflow: hidden;
                position: absolute;
              }
              span {
                display: flex;
                svg {
                  fill: currentColor;
                  flex-shrink: 0;
                }
              }
            }
          }
        `}
      >
        <span className="star-container">
          <Star data={0.5} value={value} onHover={onHover} onTap={onTap} />
          <Star data={1} value={value} onHover={onHover} onTap={onTap} />
        </span>
        <span className="star-container">
          <Star data={1.5} value={value} onHover={onHover} onTap={onTap} />
          <Star data={2} value={value} onHover={onHover} onTap={onTap} />
        </span>
        <span className="star-container">
          <Star data={2.5} value={value} onHover={onHover} onTap={onTap} />
          <Star data={3} value={value} onHover={onHover} onTap={onTap} />
        </span>
        <span className="star-container">
          <Star data={3.5} value={value} onHover={onHover} onTap={onTap} />
          <Star data={4} value={value} onHover={onHover} onTap={onTap} />
        </span>
        <span className="star-container">
          <Star data={4.5} value={value} onHover={onHover} onTap={onTap} />
          <Star data={5} value={value} onHover={onHover} onTap={onTap} />
        </span>
        {onChange && (
          <input
            type="number"
            ref={ref}
            value={currentValue}
            onChange={onChange}
            {...inputProps}
            css={hiddenStyle}
          />
        )}
      </motion.span>
    );
  },
);

export default StarRatings;

interface StarProps {
  data: number; // 현재 star 지정값
  value: number;
  onTap: (value: number) => void;
  onHover?: (value: number) => void;
}

const Star = ({ data, value, onHover, onTap }: StarProps) => {
  return (
    <motion.span
      className="star"
      onHoverStart={() => onHover?.(data)}
      onTap={() => onTap(data)}
      css={(theme: Theme) => value >= data && fillStyle(theme)}
    >
      <span>
        <StarIcon />
      </span>
    </motion.span>
  );
};

const fillStyle = (theme: Theme) => css`
  color: ${theme.colors.main.primary};
`;
