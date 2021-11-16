import { css, useTheme } from '@emotion/react';
import ReactStartRatings from 'react-star-ratings';

export interface StarRatingsProps {
  rating: number;
}

const StarRatings = ({ rating }: StarRatingsProps) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        height: 12px;
        line-height: 12px;
        .star-ratings {
          display: inline-flex !important;
        }
        .star-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
      `}
    >
      <ReactStartRatings
        rating={rating}
        starDimension="12px"
        starSpacing="0px"
        starRatedColor={theme.colors.main.primary}
        starEmptyColor={theme.colors.black07}
      />
    </div>
  );
};

export default StarRatings;
