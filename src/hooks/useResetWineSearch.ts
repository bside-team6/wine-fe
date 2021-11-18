import { useEffect } from 'react';
import { matchPath } from 'react-router-dom';
import { useRecoilCallback } from 'recoil';
import {
  foodIdState,
  priceState,
  sortState,
  wineNameState,
  wineTypeState,
} from '~/stores/wine';

/**
 * 와인 검색에서 사용하는 전역 store를 reset하는 훅
 */
const useResetWineSearch = () => {
  const onReset = useRecoilCallback(
    ({ set }) =>
      () => {
        set(foodIdState, undefined);
        set(priceState, {
          minIndex: -1,
          maxIndex: -1,
        });
        set(wineTypeState, undefined);
        set(wineNameState, undefined);
        set(sortState, undefined);
      },
    [],
  );

  useEffect(() => {
    // 이동하는 라우트가 와인리스트/와인상세가 아닌 경우 스토어를 리셋
    return () => {
      if (!matchPath('/wine/*', window.location.pathname)) {
        onReset();
      }
    };
  }, [onReset]);
};

export default useResetWineSearch;
