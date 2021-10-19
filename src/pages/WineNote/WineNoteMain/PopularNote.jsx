import React from 'react';
import { css } from '@emotion/react';
import { useQuery } from 'react-query';
import { getWineNotePopular } from 'api/wine-note';
import { formatDate } from 'helpers/utils';
import Divider from 'components/common/Divider';
import Spinner from 'components/common/Spinner';

const PopularNote = () => {
  const { data, isLoading } = useQuery(
    'wine-note-popular',
    getWineNotePopular,
    {
      staleTime: 1000 * 60 * 5, // 5min
    },
  );

  // TODO: 노트가 0개인 경우 디자인 추가
  return (
    <div
      css={css`
        position: absolute;
        top: 43px;
        right: 0;
        z-index: 1;
        width: 384px;
        border: 1px solid #dfdfdf;
        background: #ffffff;
        border-radius: 20px;
        padding: 36px 32px;
      `}
    >
      <h2
        css={css`
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 32px;
        `}
      >
        이달의 인기 노트
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {data.map(
            ({
              id,
              descript,
              wineasyUserNickName,
              regDate,
              wineNoteWineImages,
            }) => (
              <PopularNoteItem
                key={id}
                description={descript}
                userName={wineasyUserNickName}
                date={regDate}
                imageUrl={wineNoteWineImages[0]?.imagePath}
              />
            ),
          )}
        </ul>
      )}
    </div>
  );
};

export default PopularNote;

const PopularNoteItem = ({ description, userName, date, imageUrl }) => {
  return (
    <li
      css={css`
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        &:last-child {
          margin-bottom: 0;
        }
      `}
    >
      <div
        css={css`
          flex-shrink: 0;
          border-radius: 50%;
          margin-right: 12px;
          overflow: hidden;
        `}
      >
        <img
          src={imageUrl || 'https://via.placeholder.com/48'}
          alt="thumb"
          css={css`
            width: 48px;
            height: 48px;
          `}
        />
      </div>
      <div
        css={css`
          flex-grow: 1;
          min-width: 0;
        `}
      >
        <h3
          css={css`
            color: #424242;
            font-size: 16px;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          `}
        >
          {description}
        </h3>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <span
            css={(theme) => css`
              font-family: ${theme.typography.lato};
              color: #424242;
            `}
          >
            by. {userName}
          </span>
          <Divider />
          <span
            css={(theme) => css`
              font-family: ${theme.typography.lato};
              color: #757575;
              font-size: 12px;
            `}
          >
            {formatDate(date)}
          </span>
        </div>
      </div>
    </li>
  );
};
