import { useState } from 'react';
import { css, Theme, useTheme } from '@emotion/react';
import { useNavigate, useParams } from 'react-router-dom';
import Divider from '~/components/common/Divider';
import IconButton from '~/components/common/IconButton';
import RoundButton from '~/components/common/RoundButton';
import Spinner from '~/components/common/Spinner';
import StarRatings from '~/components/common/StarRatings';
import Pagination from '~/components/wine/Pagination';
import { DetailNoteSummary } from '~/components/wineNote/DetailNote';
import { formatDate } from '~/helpers/utils';
import useAuthConfirm from '~/hooks/useAuthConfirm';
import useWineNoteQuery from '~/queries/useWineNoteQuery';
import useWineNotesByWineIdQuery from '~/queries/useWineNotesByWineIdQuery';
import { alignCenter, flexCenter } from '~/styles/common';
import { emptyStyle } from '~/styles/wine-note';
import type { IWineNote } from '~/types';
import noDataImg from '~/assets/no_data_wine.png';
import wineNoteLogoImg from '~/assets/wine_note.png';

const WineNote = () => {
  const { wineId } = useParams();

  const [page, setPage] = useState(0);

  const { data, isLoading, isFetching } = useWineNotesByWineIdQuery({
    wineId: Number(wineId),
    page,
  });

  const navigate = useNavigate();

  const onClickWriteNote = useAuthConfirm({
    confirmContent: `노트 작성은 로그인 후 이용할 수 있어요.\n로그인 페이지로 이동할까요?`,
    onSuccess: () => navigate('/wine-note/write'),
  });

  return (
    <div
      css={css`
        position: relative;
        margin-top: 120px;
        &::before {
          position: absolute;
          top: 10px;
          display: block;
          content: url(${wineNoteLogoImg});
          width: 152px;
          height: 25px;
        }
      `}
    >
      <div
        css={css`
          ${alignCenter}
          justify-content: flex-end;
        `}
      >
        <RoundButton icon="write" onClick={onClickWriteNote}>
          노트쓰러가기
        </RoundButton>
      </div>
      <Divider
        type="vertical"
        css={css`
          margin-top: 16px;
          margin-bottom: 0;
        `}
      />
      {isLoading ? (
        <Spinner />
      ) : data?.empty ? (
        <EmptyNote />
      ) : (
        <>
          <ul>
            {data?.content?.map((item) => (
              <WineNoteItem key={item.id} {...item} />
            ))}
          </ul>
          <div
            css={css`
              margin-top: 60px;
              ${flexCenter}
            `}
          >
            <Pagination
              {...data!}
              disabled={isFetching}
              onChange={(page) => setPage(page - 1)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default WineNote;

const EmptyNote = () => {
  return (
    <div
      css={(theme: Theme) => css`
        ${emptyStyle(theme)};
        margin-top: 100px;
        margin-bottom: 23px;
      `}
    >
      <img src={noDataImg} alt="empty" />
      <p>
        아직 작성된 와인노트가 없습니다.
        <br />
        첫번째 작성자가 되어주세요!
      </p>
    </div>
  );
};

const WineNoteItem = ({
  id,
  score,
  userNickName,
  regDate,
  viewCount,
  likeCount,
  isLike,
  descript,
}: IWineNote) => {
  const theme = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li
        onClick={() => setIsOpen((state) => !state)}
        css={css`
          position: relative;
          padding: 24px 8px;
          border-bottom: 1px solid
            ${isOpen ? theme.colors.main.primary : theme.colors.border};
          cursor: pointer;
        `}
      >
        <div
          css={css`
            ${alignCenter}
            margin-bottom: 10px;
          `}
        >
          <span
            css={css`
              color: ${theme.colors.black02};
              margin-right: 12px;
            `}
          >
            by. {userNickName}
          </span>
          <StarRatings rating={score} />
        </div>
        {descript && <div>{descript}</div>}
        <div
          css={css`
            ${alignCenter}
            font-family: ${theme.typography.lato};
            color: ${theme.colors.black04};
            font-size: 12px;
            margin-top: 15px;
          `}
        >
          <span>{formatDate(regDate)}</span>
          <Divider />
          <span>조회 {viewCount}</span>
          <Divider />
          <span>좋아요 {likeCount}</span>
        </div>
        <IconButton
          name={isLike ? 'heart-fill' : 'heart'}
          color={isLike ? theme.colors.black : theme.colors.black07}
          css={css`
            position: absolute;
            top: 15px;
            right: 12px;
            z-index: 1;
          `}
        />
      </li>
      {isOpen && <DetailNote wineNoteId={id} />}
    </>
  );
};

const DetailNote = ({ wineNoteId }: { wineNoteId: number }) => {
  const theme = useTheme();

  const { data, isLoading } = useWineNoteQuery(
    {
      wineNoteId,
      isTimeline: false,
    },
    {
      suspense: false,
    },
  );

  return (
    <li
      css={css`
        position: relative;
        padding: 32px 20px;
        border-bottom: 1px solid ${theme.colors.border};
        display: flex;
      `}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div
            css={css`
              flex-shrink: 0;
              margin-right: 40px;
            `}
          >
            <img
              src={data?.wineImages[0].imagePath}
              alt={data?.wineImages[0].imageName}
            />
          </div>
          <div
            css={css`
              flex-grow: 1;
              display: flex;
              flex-direction: column;
            `}
          >
            <div
              css={css`
                flex-grow: 1;
              `}
            >
              {data?.descript || ''}
            </div>
            <DetailNoteSummary {...data!} />
          </div>
        </>
      )}
    </li>
  );
};
