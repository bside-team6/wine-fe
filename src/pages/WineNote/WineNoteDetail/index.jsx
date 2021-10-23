import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { css } from '@emotion/react';
import useWineNoteQuery from 'queries/useWineNoteQuery';
import { alignCenter } from 'styles/common';
import { formatDate } from 'helpers/utils';
import Chip from 'components/common/Chip';
import Divider from 'components/common/Divider';
import RoundButton from 'components/common/RoundButton';
import Spinner from 'components/common/Spinner';
import { ReactComponent as Heart } from 'assets/ic_heart.svg';
import { ReactComponent as HeartOn } from 'assets/ic_heart_on.svg';

const WineNoteDetail = () => {
  const history = useHistory();

  const { wineNoteId } = useParams();

  const { data, isLoading } = useWineNoteQuery(wineNoteId);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div
      css={css`
        background: #fafafa;
        padding-top: 60px;
      `}
    >
      <div
        css={(theme) => css`
          position: relative;
          display: flex;
          width: 1200px;
          background: #fff;
          margin: 0 auto;
          padding: 20px;
          box-shadow: ${theme.colors.shadow};
        `}
      >
        <div
          css={css`
            width: 420px;
            margin-right: 40px;
            flex-shrink: 0;
          `}
        >
          <img
            src={
              data.wineNoteWineImages[0]?.imagePath ||
              'https://via.placeholder.com/420'
            }
            alt="note"
          />
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            flex-grow: 1;
          `}
        >
          <Chip color="red" label={data.wineType} />
          <div
            css={css`
              font-weight: 700;
              font-size: 24px;
              margin-top: 8px;
              margin-bottom: 12px;
            `}
          >
            {data.wineName}
          </div>
          <div
            css={(theme) => css`
              ${alignCenter}
              font-family: ${theme.typography.lato};
              color: ${theme.colors.black06};
              font-size: 12px;
              margin-bottom: 32px;
            `}
          >
            <span>by. {data.wineasyUserNickName}</span>
            <Divider />
            <span>{formatDate(data.regDate)}</span>
            <Divider />
            <span>조회 {data.viewCount}</span>
          </div>
          <div
            css={(theme) => css`
              color: ${theme.colors.black02};
            `}
          >
            {data.descript}
          </div>
          <div
            css={css`
              margin-top: auto;
              align-self: stretch;
              background: #fafafa;
              border-radius: 20px;
            `}
          >
            <div>
              <div>님의 평가</div>
              <div>님의 평가</div>
            </div>
            <div>별점 어쩌구 저쩌구</div>
          </div>
        </div>
        <button
          css={css`
            cursor: pointer;
            background: #fff;
            border: 0;
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 1;
            text-align: center;
          `}
        >
          <div>{data.isLike ? <HeartOn /> : <Heart />}</div>
          <div
            css={(theme) => css`
              color: ${theme.colors.black04};
              font-size: 12px;
              font-family: ${theme.typography.lato};
            `}
          >
            {data.wineNoteLikeCount}
          </div>
        </button>
      </div>
      <div
        css={css`
          width: 1200px;
          margin: 24px auto 80px;
          display: flex;
          align-items: center;
        `}
      >
        <div
          css={css`
            margin-right: auto;
            button {
              margin-right: 8px;
              &::last-child {
                margin-right: 0;
              }
            }
          `}
        >
          <RoundButton color="secondary">이전글</RoundButton>
          <RoundButton color="secondary">다음글</RoundButton>
          <RoundButton
            color="secondary"
            onClick={() => history.push('/wine-note')}
          >
            목록으로
          </RoundButton>
        </div>
        <RoundButton>와인냉장고에 담기</RoundButton>
      </div>
      <div
        css={css`
          background: #ffffff;
          padding-top: 80px;
          padding-bottom: 80px;
        `}
      >
        <div
          css={css`
            width: 1200px;
            margin: 0 auto;
          `}
        >
          <h2
            css={css`
              font-size: 32px;
              font-weight: 700;
            `}
          >
            관련 와인 노트
          </h2>
          <ul>
            <div>노트 컴포넌트</div>
            <div>노트 컴포넌트</div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WineNoteDetail;
