import { useCallback, useContext, useEffect } from 'react';
import type { Blocker, History, Transition } from 'history';
import { UNSAFE_NavigationContext as NavigationContext } from 'react-router-dom';
import useConfirm from '~/hooks/useConfirm';

export const useBlocker = (blocker: Blocker, enabled = true) => {
  const { navigator } = useContext(NavigationContext);

  useEffect(() => {
    if (enabled) {
      const unblock = (navigator as History).block((tx) => {
        const unblockTx: Transition = {
          ...tx,
          retry() {
            unblock();
            tx.retry();
          },
        };
        blocker(unblockTx);
      });
      return unblock;
    }
  }, [blocker, enabled, navigator]);
};

export const usePrompt = (content: string, enabled = true) => {
  const confirm = useConfirm();

  const blocker = useCallback(
    (tx: Transition) => {
      confirm({
        content,
        onConfirm: tx.retry,
      });
    },
    [confirm, content],
  );

  useBlocker(blocker, enabled);
};
