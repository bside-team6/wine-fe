import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '~/hooks/useAuth';
import useConfirm from '~/hooks/useConfirm';

export interface useAuthConfirmOptions {
  confirmPath?: string;
  confirmContent?: string;
  onSuccess(): void;
}

const useAuthConfirm = ({
  onSuccess,
  confirmContent,
  confirmPath,
}: useAuthConfirmOptions) => {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();
  const confirm = useConfirm();

  // memo onSuccess
  const onSuccessRef = useRef(onSuccess);

  return useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      if (isAuthenticated) {
        onSuccessRef.current();
      } else {
        confirm({
          content:
            confirmContent ||
            `로그인 후 이용할 수 있어요.\n로그인 페이지로 이동할까요?`,
          onConfirm: () => navigate(confirmPath || '/signup/step1'),
        });
      }
    },
    [confirm, confirmContent, confirmPath, isAuthenticated, navigate],
  );
};

export default useAuthConfirm;
