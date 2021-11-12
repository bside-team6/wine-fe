import { css } from '@emotion/react';
import Spinner from '~/components/common/Spinner';
import WineNote from '~/components/wineNote/WineNote';
import useWineNotesQuery from '~/queries/useWineNotesQuery';

const WineNoteList = () => {
  // TODO: 무한 스크롤 방식으로 변경
  const { data, isLoading } = useWineNotesQuery();

  if (isLoading) {
    return <Spinner />;
  }

  if (data?.totalElements === 0) {
    return (
      <div
        css={css`
          margin: 20px auto;
        `}
      >
        <div
          css={css`
            width: 180px;
            height: 180px;
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto 24px;
          `}
        >
          <img src="https://via.placeholder.com/180" alt="no-wine-note" />
        </div>
        <div
          css={css`
            text-align: center;
            font-weight: 700;
            font-size: 18px;
          `}
        >
          아직 작성된 와인노트가 없습니다.
          <br />
          첫번째 작성자가 되어주세요!
        </div>
      </div>
    );
  }

  return (
    <div>
      {data?.wineNoteTimeLineResultList.map((item) => (
        <WineNote key={item.id} {...item} />
      ))}
    </div>
  );
};

export default WineNoteList;
