import { useEffect } from 'react';
import { matchPath } from 'react-router-dom';
import { useRecoilCallback } from 'recoil';
import {
  foodIdState,
  priceState,
  sortState,
  stepState,
  wineNameState,
  wineTypeState,
} from '~/stores/wine';

/**
 * 와인 검색에서 사용하는 전역 store를 reset하는 훅
 */
const useResetWineSearch = (excludePath = '/wine/*') => {
  const onReset = useRecoilCallback(
    ({ reset }) =>
      () => {
        reset(foodIdState);
        reset(priceState);
        reset(wineTypeState);
        reset(wineNameState);
        reset(sortState);
        reset(stepState);
      },
    [],
  );

  useEffect(() => {
    // 이동하는 라우트가 `excludePath`가 아닌 경우 관련 스토어를 리셋
    return () => {
      if (!matchPath(excludePath, window.location.pathname)) {
        onReset();
      }
    };
  }, [onReset, excludePath]);
};

export default useResetWineSearch;
