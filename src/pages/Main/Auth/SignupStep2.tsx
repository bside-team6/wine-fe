import { useEffect } from 'react';
import { css, Theme } from '@emotion/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import * as yup from 'yup';
import { validateNickname } from '~/api/auth';
import LoginStep from '~/components/auth/LoginStep';
import { setAccessToken, setRefreshToken } from '~/helpers/auth';
import useKakaoSignUpMutation from '~/queries/useKakaoSignUpMutation';
import useUserInfoQuery from '~/queries/useUserInfoQuery';
import { isAuthenticatedState } from '~/stores/auth';
import {
  loginDescription,
  loginStepContainer,
  loginTitle,
} from '~/styles/login';

interface FormValues {
  nickName: string;
}

const errorMessage = '2~16자, 국문/영문 대소문자/숫자';

// TODO: 사용중인 닉네임 체크 validation 추가 필요
const schema = yup
  .object({
    nickName: yup
      .string()
      .min(2, errorMessage)
      .max(16, errorMessage)
      .matches(/^[가-힣a-zA-Z0-9]+$/g, errorMessage)
      .test(
        'is-valid-nickname',
        '이미 사용중인 닉네임입니다.',
        async (value) => !(await validateNickname(value || '')).data.isPresent,
      ),
  })
  .required();

function SignupStep2() {
  const navigate = useNavigate();

  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);

  const { refetch: fetchUserInfo } = useUserInfoQuery({
    enabled: false,
    onSuccess: () => {
      setIsAuthenticated(true);
      navigate('/', { replace: true });
    },
    onError: () => {
      // TODO: 가입성공 직후 세팅했던 와인이지 토큰 삭제
    },
  });

  const { mutate: kakaoSignUp } = useKakaoSignUpMutation({
    onSuccess: ({ accessToken, refreshToken }) => {
      // KakaoCallback.useLoginMutation 과 동일한 로직
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);

      fetchUserInfo();
    },
    onError: () => {
      // TODO: 1. 중복가입
      // TODO: 2. 카카오토큰 만료 (닉네임등록을 너무 늦게 한 경우)
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty, isValidating },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      nickName: '',
    },
  });

  const onSubmit = ({ nickName }: FormValues) =>
    kakaoSignUp({
      nickName,
      kakaoAccessToken: window.Kakao?.Auth?.getAccessToken()!,
    });

  useEffect(() => {
    // 카카오토큰이 없으면 되돌아간다
    if (!window.Kakao?.Auth?.getAccessToken()) {
      navigate('/signup/step1', { replace: true });
    }
  }, [navigate]);

  const valid = isValid && isDirty && !isValidating;
  const invalid = (!isValid && isDirty) || isValidating;

  return (
    <div css={loginStepContainer}>
      <LoginStep step={2} />
      <div css={loginTitle}>닉네임</div>
      <div css={loginDescription}>
        환영합니다! 만나서 반가워요.
        <br />
        와인이지에서 쓰실 닉네임을 정해주시면 가입 완료!
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          css={css`
            display: block;
            width: 432px;
            max-width: 100%;
            margin: 0 auto;
          `}
        >
          <div
            css={css`
              margin-bottom: 24px;
            `}
          >
            <input
              autoComplete="off"
              type="text"
              {...register('nickName')}
              placeholder="닉네임"
              css={(theme: Theme) => css`
                display: block;
                width: 100%;
                font-size: 16px;
                border-radius: 8px;
                border: 1px solid;
                border-color: ${theme.colors.border};
                padding: 18px 20px;
                height: 60px;
                outline: none;
                &::placeholder {
                  color: ${theme.colors.black04};
                }
                ${valid &&
                css`
                  border-color: #1cc82d;
                `}
                ${invalid &&
                css`
                  border-color: #ff0000;
                `}
              `}
            />
            <div
              css={(theme: Theme) => css`
                text-align: left;
                margin-top: 6px;
                padding-left: 20px;
                font-size: 12px;
                font-family: ${theme.typography.lato};
                color: ${theme.colors.black06};
                ${valid &&
                css`
                  color: #1cc82d;
                `}
                ${invalid &&
                css`
                  color: #ff0000;
                `}
              `}
            >
              {valid
                ? '사용 가능한 닉네임입니다.'
                : errors.nickName?.message || '2~16자, 국문/영문 대소문자/숫자'}
            </div>
          </div>
          {/* TODO: 추후 버튼 컴포넌트화 필요 */}
          <button
            disabled={!isValid}
            css={(theme: Theme) => css`
              display: block;
              width: 100%;
              height: 68px;
              font-weight: 700;
              font-size: 16px;
              background: #000000;
              color: #fff;
              cursor: pointer;
              border: none;
              border-radius: 8px;
              &:disabled {
                background: ${theme.colors.black07};
                cursor: not-allowed;
              }
            `}
          >
            확인
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupStep2;
