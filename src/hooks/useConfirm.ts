import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import type { ConfirmProps } from '~/components/common/Confirm';
import { confirmState } from '~/stores/common';

type useConfirmFn = (
  props: Omit<ConfirmProps, 'isOpen' | 'onClose'> & { onClose?: VoidFunction },
) => void;

/**
 * 공통 confirm을 사용할 수 있는 훅
 * @example
 *  const confirm = useConfirm();
 *  confirm({ content: '', onConfirm: () => {} });
 */
const useConfirm = () => {
  const setConfirm = useSetRecoilState(confirmState);

  return useCallback<useConfirmFn>(
    (props) => {
      const closeConfirm = () =>
        setConfirm((state) => ({
          ...state,
          isOpen: false,
        }));

      setConfirm({
        ...props,
        isOpen: true,
        onConfirm: () => {
          props?.onConfirm();
          closeConfirm();
        },
        onClose: () => {
          props?.onClose?.();
          closeConfirm();
        },
        onCancel: () => {
          props?.onCancel?.();
          closeConfirm();
        },
      });
    },
    [setConfirm],
  );
};

export default useConfirm;
