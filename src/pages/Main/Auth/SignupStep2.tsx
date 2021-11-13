import { useEffect } from 'react';
import { css, Theme } from '@emotion/react';
import { yupResolver } from '@hookform/resolvers/yup';
import debouncePromise from 'awesome-debounce-promise';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import * as yup from 'yup';
import { validateNickname } from '~/api/auth';
import LoginStep from '~/components/auth/LoginStep';
import SquareButton from '~/components/common/SquareButton';
import useSignupMutation from '~/queries/useSignupMutation';
import useUserInfoQuery from '~/queries/useUserInfoQuery';
import { isAuthenticatedState } from '~/stores/auth';
import {
  loginDescription,
  loginStepContainer,
  loginTitle,
} from '~/styles/auth';

interface FormValues {
  nickName: string;
}

const errorMessage = '2~16자, 국문/영문 대소문자/숫자';

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
        debouncePromise(
          async (value = '') => !(await validateNickname(value)).isPresent,
          500,
        ),
      ),
  })
  .required();

function SignupStep2() {
  const navigate = useNavigate();

  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);

  const { refetch: fetchUserInfo } = useUserInfoQuery({
    onSuccess: (userInfo) => setIsAuthenticated(!!userInfo),
  });

  const { mutate: signup } = useSignupMutation({
    onSuccess: () => fetchUserInfo(),
    onError: () => {
      // TODO: CASE 1. 중복가입
      // TODO: CASE 2. 카카오토큰 만료 (닉네임등록을 너무 늦게 한 경우)
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
    signup({
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
              type="text"
              autoComplete="off"
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
          <SquareButton
            size="large"
            bold
            fullWidth
            disabled={!isValid}
            css={css`
              height: 68px;
            `}
          >
            확인
          </SquareButton>
        </div>
      </form>
    </div>
  );
}

export default SignupStep2;
