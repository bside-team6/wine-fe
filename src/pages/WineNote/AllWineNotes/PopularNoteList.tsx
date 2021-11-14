import { css, Theme } from '@emotion/react';
import { Link } from 'react-router-dom';
import Divider from '~/components/common/Divider';
import { formatDate } from '~/helpers/utils';
import usePopularWineNotesQuery from '~/queries/usePopularWineNotesQuery';
import useWineNotesQuery from '~/queries/useWineNotesQuery';
import { alignCenter } from '~/styles/common';
import type { IWineNote } from '~/types';

const PopularNoteList = () => {
  const { data: wineNotes } = useWineNotesQuery(
    {
      isTimeline: false,
    },
    {
      enabled: false,
    },
  );
  const hasWineNotes = !wineNotes?.pages[0]?.empty;

  // Dependent Queries
  const { data } = usePopularWineNotesQuery({
    enabled: hasWineNotes,
    suspense: true,
  });

  if (!hasWineNotes) {
    // 와인노트가 아예 없는 경우 이달의 인기노트 출력할 필요 X
    return null;
  }

  return (
    <div
      css={(theme: Theme) => css`
        margin-left: 24px;
        flex-shrink: 0;
        width: 384px;
        border: 1px solid ${theme.colors.black08};
        background: ${data?.length !== 0
          ? theme.colors.white
          : theme.colors.black09};
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
      <PopularNotes notes={data!} />
    </div>
  );
};

export default PopularNoteList;

const PopularNotes = ({ notes }: { notes: IWineNote[] }) => {
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
  IWineNote,
  'id' | 'descript' | 'userNickName' | 'regDate' | 'wineImages'
>;

const PopularNoteItem = ({
  id,
  descript,
  wineImages,
  userNickName,
  regDate,
}: PopularNoteItemProps) => {
  const imageUrl = wineImages[0]?.imagePath || 'https://via.placeholder.com/48';

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
            width: 48px;
            height: 48px;
            background-image: url(${imageUrl});
            background-size: cover;
            background-repeat: no-repeat;
          `}
        />
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
              by. {userNickName}
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
