import { atom } from 'recoil';
import type { ConfirmProps } from '~/components/common/Confirm';

export const confirmState = atom<ConfirmProps>({
  key: 'confirmState',
  default: {
    isOpen: false,
    content: ``,
    onConfirm: () => {},
    onClose: () => {},
  },
});
