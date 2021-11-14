import { css, useTheme } from '@emotion/react';
import type { SerializedStyles, Theme } from '@emotion/react';
import { ReactComponent as BookmarkIcon } from '~/assets/icon/ic_bookmark.svg';
import { ReactComponent as CancelIcon } from '~/assets/icon/ic_cancel.svg';
import { ReactComponent as ArrowDownIcon } from '~/assets/icon/ic_dropdown.svg';
import { ReactComponent as FilterIcon } from '~/assets/icon/ic_filter.svg';
import { ReactComponent as HeartIcon } from '~/assets/icon/ic_heart.svg';
import { ReactComponent as FilledHeartIcon } from '~/assets/icon/ic_heart_on.svg';
import { ReactComponent as InfoIcon } from '~/assets/icon/ic_info.svg';
import { ReactComponent as LockIcon } from '~/assets/icon/ic_lock.svg';
import { ReactComponent as MyPageIcon } from '~/assets/icon/ic_mypage.svg';
import { ReactComponent as OptionIcon } from '~/assets/icon/ic_option.svg';
import { ReactComponent as RefreshIcon } from '~/assets/icon/ic_refresh.svg';
import { ReactComponent as SearchIcon } from '~/assets/icon/ic_search.svg';
import { ReactComponent as ShareIcon } from '~/assets/icon/ic_share.svg';
import { ReactComponent as ThumbsDownIcon } from '~/assets/icon/ic_thumbs_down.svg';
import { ReactComponent as ThumbsUpIcon } from '~/assets/icon/ic_thumbs_up.svg';
import { ReactComponent as WriteIcon } from '~/assets/icon/ic_write.svg';

export type IconName =
  | 'arrow-down'
  | 'arrow-up'
  | 'filter'
  | 'refresh'
  | 'share'
  | 'bookmark'
  | 'write'
  | 'heart'
  | 'heart-fill'
  | 'search'
  | 'info'
  | 'mypage'
  | 'cancel'
  | 'lock'
  | 'option'
  | 'thumbs-up'
  | 'thumbs-down';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  css?: SerializedStyles | ((theme: Theme) => SerializedStyles);
}

const Icon = ({ name, ...props }: IconProps) => {
  const theme = useTheme();

  if (name === 'arrow-down') {
    return <ArrowDownIcon {...props} />;
  }

  if (name === 'arrow-up') {
    return (
      <ArrowDownIcon
        {...props}
        css={[
          css`
            transform: rotate(180deg);
          `,
          typeof props.css === 'function' ? props.css(theme) : props.css,
        ]}
      />
    );
  }

  if (name === 'filter') {
    return <FilterIcon {...props} />;
  }

  if (name === 'refresh') {
    return <RefreshIcon {...props} />;
  }

  if (name === 'share') {
    return <ShareIcon {...props} />;
  }

  if (name === 'bookmark') {
    return <BookmarkIcon {...props} />;
  }

  if (name === 'write') {
    return <WriteIcon {...props} />;
  }

  if (name === 'heart') {
    return <HeartIcon {...props} />;
  }

  if (name === 'heart-fill') {
    return <FilledHeartIcon {...props} />;
  }

  if (name === 'search') {
    return <SearchIcon {...props} />;
  }

  if (name === 'info') {
    return <InfoIcon {...props} />;
  }

  if (name === 'mypage') {
    return <MyPageIcon {...props} />;
  }

  if (name === 'cancel') {
    return <CancelIcon {...props} />;
  }

  if (name === 'lock') {
    return <LockIcon {...props} />;
  }

  if (name === 'option') {
    return <OptionIcon {...props} />;
  }

  if (name === 'thumbs-up') {
    return <ThumbsUpIcon {...props} />;
  }

  if (name === 'thumbs-down') {
    return <ThumbsDownIcon {...props} />;
  }

  return null;
};

export default Icon;
