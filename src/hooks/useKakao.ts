import { useLayoutEffect } from 'react';
import { KAKAO_JS_APP_KEY } from '~/helpers/auth';

const useKakao = () => {
  useLayoutEffect(() => {
    if (!window.Kakao?.isInitialized()) {
      window.Kakao?.init(KAKAO_JS_APP_KEY);
      return () => window.Kakao?.cleanup();
    }
  }, []);
};

export default useKakao;
