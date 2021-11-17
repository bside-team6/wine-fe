import { css, useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';
import Chip from '~/components/common/Chip';
import Divider from '~/components/common/Divider';
import IconButton from '~/components/common/IconButton';
import SquareButton, {
  SquareButtonGroup,
} from '~/components/common/SquareButton';
import { formatDate } from '~/helpers/utils';
import useAuthConfirm from '~/hooks/useAuthConfirm';
import useWineNoteLikeMutation from '~/queries/useWineNoteLikeMutation';
import { alignCenter, maxTwoLines } from '~/styles/common';
import type { IWineNote } from '~/types';

export interface WineNoteProps extends IWineNote {
  isTimeline?: boolean;
}

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
  isTimeline,
  isPublic,
}: WineNoteProps) => {
  const theme = useTheme();

  const { mutate } = useWineNoteLikeMutation();

  const onClickLikeButton = useAuthConfirm({
    confirmContent: `좋아요만 보기는 로그인 후 이용할 수 있어요.\n로그인 페이지로 이동할까요?`,
    onSuccess: () => mutate(id),
  });

  const imageUrl =
    wineImages[0]?.imagePath || 'https://via.placeholder.com/160';

  return (
    <Link
      to={`/wine-note/${id}`}
      css={css`
        display: block;
        flex-grow: 1;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: stretch;
          max-width: 100%;
          padding: 32px;
          border: 1px solid;
          border-color: ${theme.colors.border};
          border-radius: 20px;
          background: ${theme.colors.white};
          &:hover {
            box-shadow: ${theme.colors.shadow};
          }
        `}
      >
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
            position: relative;
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
            {!isPublic && (
              <span
                css={css`
                  color: ${theme.colors.black06};
                  font-size: 12px;
                  margin-left: 8px;
                `}
              >
                (비공개)
              </span>
            )}
          </div>
          <h3
            css={css`
              font-size: 18px;
              margin-bottom: auto;
              ${maxTwoLines}
            `}
          >
            {descript}
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
          <IconButton
            onClick={onClickLikeButton}
            name={isLike ? 'heart-fill' : 'heart'}
            color={isLike ? theme.colors.black : theme.colors.black07}
            css={css`
              position: absolute;
              top: 0;
              right: 0;
              z-index: 1;
            `}
          />
        </div>
        {isTimeline && (
          <SquareButtonGroup
            align="vertical"
            css={css`
              flex-shrink: 0;
              padding-left: 40px;
              border-left: 1px solid #dfdfdf;
              margin-left: 38px;
              align-self: center;
            `}
          >
            <SquareButton variant="outlined" color="secondary">
              노트공유
              {/* TODO: 버튼 기능 작성 */}
            </SquareButton>
            <SquareButton variant="outlined" color="secondary">
              수정
            </SquareButton>
            <SquareButton variant="contained" color="secondary">
              삭제
            </SquareButton>
          </SquareButtonGroup>
        )}
      </div>
    </Link>
  );
};

export default WineNote;
