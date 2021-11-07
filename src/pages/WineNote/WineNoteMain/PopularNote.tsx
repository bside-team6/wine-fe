import { css, Theme } from '@emotion/react';
import { Link } from 'react-router-dom';
import Divider from '~/components/common/Divider';
import Spinner from '~/components/common/Spinner';
import { formatDate } from '~/helpers/utils';
import usePopularWineNotesQuery from '~/queries/usePopularWineNotesQuery';
import useWineNoteTimelineQuery from '~/queries/useWineNoteTimelineQuery';
import { alignCenter } from '~/styles/common';
import type { IWineNoteDetail } from '~/types';

const PopularNote = () => {
  const { data: wineNotes } = useWineNoteTimelineQuery();
  const hasWineNotes = !!wineNotes?.totalElements;

  // Dependent Queries
  const { data, isLoading } = usePopularWineNotesQuery({
    enabled: hasWineNotes,
  });

  if (!hasWineNotes) {
    // 와인노트가 아예 없는 경우 이달의 인기노트 출력할 필요 X
    return null;
  }

  return (
    <div
      css={(theme: Theme) => css`
        width: 384px;
        border: 1px solid ${theme.colors.black08};
        background: ${isLoading || data?.length !== 0 ? '#ffffff' : '#ececec'};
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
      {isLoading ? <Spinner /> : <PopularNotes notes={data!} />}
    </div>
  );
};

export default PopularNote;

const PopularNotes = ({ notes }: { notes: IWineNoteDetail[] }) => {
  if (notes.length === 0) {
    return (
      <div
        css={(theme: Theme) => css`
          font-size: 16px;
          color: ${theme.colors.black04};
        `}
      >
        서비스 준비중입니다. 조금만 기다려주세요!
      </div>
    );
  }

  return (
    <ul>
      {notes.map((note) => (
        <PopularNoteItem key={note.id} {...note} />
      ))}
    </ul>
  );
};

type PopularNoteItemProps = Pick<
  IWineNoteDetail,
  'id' | 'descript' | 'wineasyUserNickName' | 'regDate' | 'wineNoteWineImages'
>;

const PopularNoteItem = ({
  id,
  descript,
  wineNoteWineImages,
  wineasyUserNickName,
  regDate,
}: PopularNoteItemProps) => {
  const imageUrl =
    wineNoteWineImages[0]?.imagePath || 'https://via.placeholder.com/48';

  return (
    <li
      css={css`
        margin-bottom: 24px;
        &:last-child {
          margin-bottom: 0;
        }
      `}
    >
      <Link
        to={`/wine-note/${id}`}
        css={css`
          ${alignCenter}
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
            src={imageUrl}
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
            css={(theme: Theme) => css`
              color: ${theme.colors.black02};
              font-size: 16px;
              margin-bottom: 4px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            `}
          >
            {descript}
          </h3>
          <div css={alignCenter}>
            <span
              css={(theme: Theme) => css`
                font-family: ${theme.typography.lato};
                color: ${theme.colors.black02};
              `}
            >
              by. {wineasyUserNickName}
            </span>
            <Divider />
            <span
              css={(theme: Theme) => css`
                font-family: ${theme.typography.lato};
                color: ${theme.colors.black04};
                font-size: 12px;
              `}
            >
              {formatDate(regDate)}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};
