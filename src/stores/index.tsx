import { useEffect } from 'react';
import { matchPath } from 'react-router-dom';
import { MutableSnapshot, RecoilRoot, useRecoilSnapshot } from 'recoil';
import { isProduction } from '~/helpers/constants';
import { priceToIndex } from '~/helpers/utils';
import {
  foodIdState,
  priceState,
  sortState,
  wineNameState,
  wineTypeState,
} from '~/stores/wine';
import { ISort, WINE_TYPE } from '~/types';

export const RecoilProvider: React.FC = ({ children }) => {
  return (
    <RecoilRoot initializeState={initializeState}>
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

/**
 * 최초 앱 접속시 initialize 하고 싶은 상태를 정의하는 함수
 */
const initializeState = ({ set }: MutableSnapshot) => {
  // 와인리스트 접속할때 location 으로부터 state를 세팅한다
  if (matchPath('/wine', window.location.pathname)) {
    const searchParams = new URLSearchParams(window.location.search);

    const foodId = searchParams.get('foodId');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const wineType = searchParams.get('wineType');
    const wineName = searchParams.get('wineName');
    const sort = searchParams.getAll('sort');

    if (foodId) {
      set(foodIdState, Number(foodId));
    }
    set(
      priceState,
      priceToIndex(
        minPrice ? Number(minPrice) : undefined,
        maxPrice ? Number(maxPrice) : undefined,
      ),
    );
    if (wineType) {
      set(wineTypeState, wineType as WINE_TYPE);
    }
    if (wineName) {
      set(wineNameState, wineName);
    }
    if (sort.length > 0) {
      set(sortState, sort as ISort);
    }
  }
};
