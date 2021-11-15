import { useMemo } from 'react';
import { css, useTheme } from '@emotion/react';
import { Link, useNavigate } from 'react-router-dom';
import Chip from '~/components/common/Chip';
import Divider from '~/components/common/Divider';
import IconButton from '~/components/common/IconButton';
import { formatDate } from '~/helpers/utils';
import useAuth from '~/hooks/useAuth';
import useConfirm from '~/hooks/useConfirm';
import useWineNoteLikeMutation from '~/queries/useWineNoteLikeMutation';
import { alignCenter } from '~/styles/common';
import type { IWineNote } from '~/types';

const WineNoteSlide: React.VFC<IWineNote> = ({
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
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isAuthenticated = useAuth();
  const confirm = useConfirm();

  const { mutate } = useWineNoteLikeMutation();

  const onClickLikeButton = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isAuthenticated) {
      mutate(id);
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
          width: 384px;
          height: 480px;
          border: 1px solid;
          border-color: ${theme.colors.border};
          border-radius: 20px;
          box-shadow: ${theme.colors.shadow};
          background: ${theme.colors.white};
          text-align: center;
          padding-top: 80px;
          padding-bottom: 80px;
          position: relative;
        `}
      >
        <IconButton
          onClick={onClickLikeButton}
          name={isLike ? 'heart-fill' : 'heart'}
          color={isLike ? theme.colors.black : theme.colors.black07}
          css={css`
            position: absolute;
            top: 32px;
            right: 32px;
            z-index: 1;
            transform: scale(1.5);
          `}
        />
        <div
          css={css`
            margin: 0 auto 48px;
            width: 120px;
            height: 120px;
            background-image: url(${imageUrl});
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 50%;
            overflow: hidden;
          `}
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 152px;
          `}
        >
          <div
            css={css`
              ${alignCenter}
              justify-content: center;
            `}
          >
            <Chip wineType={wineType} />
            <span
              css={css`
                color: ${theme.colors.black02};
                margin-left: 8px;
              `}
            >
              {wineName}
            </span>
          </div>
          <div
            css={css`
              font-size: 18px;
              line-height: 26px;
              color: ${theme.colors.black};
              margin-top: 12px;
              flex-grow: 1;
            `}
          >
            {description}
          </div>
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
              line-height: 17px;
            `}
          >
            by. {userNickName}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WineNoteSlide;
