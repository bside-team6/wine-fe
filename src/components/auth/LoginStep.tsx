import { ReactComponent as Step1 } from '~/assets/login/step1.svg';
import { ReactComponent as Step2 } from '~/assets/login/step2.svg';

export interface LoginStepProps {
  step: 1 | 2;
}

const LoginStep = ({ step }: LoginStepProps) => {
  return step === 1 ? <Step1 /> : <Step2 />;
};

export default LoginStep;
