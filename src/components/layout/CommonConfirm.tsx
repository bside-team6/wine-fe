import { useRecoilValue } from 'recoil';
import Confirm from '~/components/common/Confirm';
import { confirmState } from '~/stores/common';

const CommonConfirm = () => {
  const confirm = useRecoilValue(confirmState);

  return <Confirm {...confirm} />;
};

export default CommonConfirm;
