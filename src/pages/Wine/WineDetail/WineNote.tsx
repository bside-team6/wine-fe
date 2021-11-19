import { css } from '@emotion/react';
import { useNavigate, useParams } from 'react-router-dom';
import Divider from '~/components/common/Divider';
import RoundButton from '~/components/common/RoundButton';
import Pagination from '~/components/wine/Pagination';
import useAuthConfirm from '~/hooks/useAuthConfirm';
import useWineNotesByWineIdQuery from '~/queries/useWineNotesByWineIdQuery';
import { alignCenter } from '~/styles/common';
import wineNoteLogoImg from '~/assets/wine_note.png';

const WineNote = () => {
  const { wineId } = useParams();

  const navigate = useNavigate();

  const { data } = useWineNotesByWineIdQuery({
    wineId: Number(wineId),
    page: 0,
  });

  const onClickWriteNote = useAuthConfirm({
    confirmContent: `노트 작성은 로그인 후 이용할 수 있어요.\n로그인 페이지로 이동할까요?`,
    onSuccess: () => navigate('/wine-note/write'),
  });

  const { content, ...paginationProps } = data!;

  return (
    <div
      css={css`
        position: relative;
        margin-top: 135px;
        &::before {
          position: relative;
          top: -47px;
          display: block;
          content: url(${wineNoteLogoImg});
          width: 171px;
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
      <Divider type="vertical" />
      <ul>
        {content.map((item) => (
          <li key={item.id}>{item.descript}</li>
        ))}
      </ul>
      <Pagination {...paginationProps} onChange={(page) => {}} />
    </div>
  );
};

export default WineNote;
