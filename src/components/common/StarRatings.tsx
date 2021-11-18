import { useMemo } from 'react';
import { css, useTheme } from '@emotion/react';
import { inlineFlexCenter } from '~/styles/common';
import { ReactComponent as HalfStar } from '~/assets/half_star.svg';
import { ReactComponent as Star } from '~/assets/star.svg';

const roundHalf = (num: number) => Math.round(num * 2) / 2;

export interface StarRatingsProps {
  rating: number;
  size?: number;
}

const StarRatings = ({ rating, size = 12 }: StarRatingsProps) => {
  const theme = useTheme();
  const score = useMemo(() => roundHalf(rating), [rating]);

  return (
    <div
      css={css`
        ${inlineFlexCenter}
        --star-active: ${theme.colors.main.primary};
        --star-inactive: ${theme.colors.black07};
        svg {
          fill: var(--star-inactive);
          width: ${size}px;
          height: ${size}px;
          &.active {
            fill: var(--star-active);
          }
        }
      `}
    >
      {score === 0.5 ? (
        <HalfStar />
      ) : (
        <Star className={score >= 1 ? 'active' : undefined} />
      )}
      {score === 1.5 ? (
        <HalfStar />
      ) : (
        <Star className={score >= 2 ? 'active' : undefined} />
      )}
      {score === 2.5 ? (
        <HalfStar />
      ) : (
        <Star className={score >= 3 ? 'active' : undefined} />
      )}
      {score === 3.5 ? (
        <HalfStar />
      ) : (
        <Star className={score >= 4 ? 'active' : undefined} />
      )}
      {score === 4.5 ? (
        <HalfStar />
      ) : (
        <Star className={score === 5 ? 'active' : undefined} />
      )}
    </div>
  );
};

export default StarRatings;
