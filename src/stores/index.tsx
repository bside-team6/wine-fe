import { useEffect } from 'react';
import { RecoilRoot, useRecoilSnapshot } from 'recoil';
import { isProduction } from '~/helpers/constants';

export const RecoilProvider: React.FC = ({ children }) => {
  return (
    <RecoilRoot>
      {children}
      {!isProduction && <RecoilDevtools />}
    </RecoilRoot>
  );
};

function RecoilDevtools() {
  const snapshot = useRecoilSnapshot();

  useEffect(() => {
    const nodes = snapshot.getNodes_UNSTABLE({ isModified: true });
    let nodeIterator = nodes[Symbol.iterator]();
    while (true) {
      let { value, done } = nodeIterator.next();
      if (done) break;
      console.log(`[RECOIL]`, value.key, snapshot.getLoadable(value));
    }
  }, [snapshot]);

  return null;
}
