import { css } from '@emotion/react';
import { useMatch, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import RoundButton from '~/components/common/RoundButton';
import { isAuthenticatedState } from '~/stores/auth';
import {
  headerButtonGroupStyle,
  headerStyle,
  headerTitleStyle,
} from '~/styles/wine-note';

interface WineNotesHeaderProps {
  title: string;
}

const WineNotesHeader: React.VFC<WineNotesHeaderProps> = ({ title }) => {
  const isAuthenticated = useRecoilValue(isAuthenticatedState);

  const navigate = useNavigate();
  const match = useMatch('/wine-note/timeline');
  const isTimeline = !!match;

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
          onClick={() => navigate('/wine-note/timeline')}
        >
          나의 노트
        </RoundButton>
        {isAuthenticated && (
          <RoundButton
            icon="write"
            onClick={() => navigate('/wine-note/write')}
            css={css`
              margin-left: auto;
            `}
          >
            노트쓰러가기
          </RoundButton>
        )}
      </div>
    </div>
  );
};

export default WineNotesHeader;
