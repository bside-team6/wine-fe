import { useMemo } from 'react';
import { css, useTheme } from '@emotion/react';
import { Link, useNavigate } from 'react-router-dom';
import Chip from '~/components/common/Chip';
import Divider from '~/components/common/Divider';
import IconButton from '~/components/common/IconButton';
import { formatDate } from '~/helpers/utils';
import useAuth from '~/hooks/useAuth';
import useConfirm from '~/hooks/useConfirm';
import { alignCenter } from '~/styles/common';
import type { IWineNote } from '~/types';

const WineNote = ({
  id,
  descript,
  wineName,
  wineType,
  userNickName,
  regDate,
  viewCount,
  likeCount,
  wineImages,
  isLike,
}: IWineNote) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isAuthenticated = useAuth();
  const confirm = useConfirm();

  const onClickLikeButton = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isAuthenticated) {
      // TODO: 와인노트 좋아요 mutation 기능 추가
    } else {
      confirm({
        content: `좋아요만 보기는 로그인 후 이용할 수 있어요.\n로그인 페이지로 이동할까요?`,
        onConfirm: () => navigate('/signup/step1'),
      });
    }
  };

  const imageUrl =
    wineImages[0]?.imagePath || 'https://via.placeholder.com/160';

  const description = useMemo(() => {
    return descript && descript.length > 80
      ? descript.substring(0, 80) + '...'
      : descript;
  }, [descript]);

  return (
    <Link
      to={`/wine-note/${id}`}
      css={css`
        display: block;
      `}
    >
      <div
        css={css`
          position: relative;
          display: flex;
          width: 792px;
          max-width: 100%;
          padding: 32px;
          border: 1px solid;
          border-color: ${theme.colors.border};
          border-radius: 20px;
          box-shadow: ${theme.colors.shadow};
          background: ${theme.colors.white};
          &:hover {
            background: ${theme.colors.black10};
          }
        `}
      >
        <IconButton
          onClick={onClickLikeButton}
          name={isLike ? 'heart-fill' : 'heart'}
          color={isLike ? theme.colors.black : theme.colors.black07}
          css={css`
            position: absolute;
            top: 40px;
            right: 40px;
            z-index: 1;
          `}
        />
        <div
          css={css`
            position: relative;
            flex-shrink: 0;
            margin-right: 32px;
          `}
        >
          <div
            css={css`
              width: 160px;
              height: 160px;
              background-image: url(${imageUrl});
              background-size: cover;
              background-repeat: no-repeat;
            `}
          />
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            margin-top: 8px;
            margin-bottom: 8px;
          `}
        >
          <div
            css={css`
              ${alignCenter}
              margin-bottom: 11px;
            `}
          >
            <Chip wineType={wineType} />
            <div
              css={css`
                font-size: 14px;
                color: ${theme.colors.black02};
                letter-spacing: -3%;
                margin-left: 8px;
              `}
            >
              {wineName}
            </div>
          </div>
          <h3
            css={css`
              font-size: 18px;
              margin-bottom: auto;
            `}
          >
            {description}
          </h3>
          <div
            css={css`
              ${alignCenter}
              font-family: ${theme.typography.lato};
              color: ${theme.colors.black04};
              font-size: 12px;
            `}
          >
            <span>{formatDate(regDate)}</span>
            <Divider />
            <span>조회 {viewCount}</span>
            <Divider />
            <span>좋아요 {likeCount}</span>
          </div>
          <div
            css={css`
              font-family: ${theme.typography.lato};
              color: ${theme.colors.black02};
            `}
          >
            by. {userNickName}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WineNote;
