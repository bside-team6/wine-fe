import { css } from '@emotion/react';
import { useMatch, useNavigate } from 'react-router-dom';
import RoundButton from '~/components/common/RoundButton';
import useAuthConfirm from '~/hooks/useAuthConfirm';
import {
  headerButtonGroupStyle,
  headerStyle,
  headerTitleStyle,
} from '~/styles/wine-note';

interface WineNotesHeaderProps {
  title: string;
}

const WineNotesHeader: React.VFC<WineNotesHeaderProps> = ({ title }) => {
  const navigate = useNavigate();
  const match = useMatch('/wine-note/timeline');
  const isTimeline = !!match;

  const onClickTimeline = useAuthConfirm({
    confirmContent: `나의 노트는 로그인 후 이용할 수 있어요.\n로그인 페이지로 이동할까요?`,
    onSuccess: () => navigate('/wine-note/timeline'),
  });

  const onClickWriteNote = useAuthConfirm({
    confirmContent: `노트 작성은 로그인 후 이용할 수 있어요.\n로그인 페이지로 이동할까요?`,
    onSuccess: () => navigate('/wine-note/write'),
  });

  return (
    <div css={headerStyle}>
      <h2 css={headerTitleStyle}>{title}</h2>
      <div css={headerButtonGroupStyle}>
        <RoundButton
          variant="outlined"
          inactive={isTimeline}
          onClick={() => navigate('/wine-note')}
          css={css`
            margin-right: 8px;
          `}
        >
          전체 노트
        </RoundButton>
        <RoundButton
          variant="outlined"
          inactive={!isTimeline}
          onClick={onClickTimeline}
        >
          나의 노트
        </RoundButton>
        <RoundButton
          icon="write"
          onClick={onClickWriteNote}
          css={css`
            margin-left: auto;
          `}
        >
          노트쓰러가기
        </RoundButton>
      </div>
    </div>
  );
};

export default WineNotesHeader;
