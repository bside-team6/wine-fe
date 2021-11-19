import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import Icon from '~/components/common/Icon';
import { stepState } from '~/stores/wine';
import { alignCenter } from '~/styles/common';
import { MAIN_STEP } from '~/types';

export interface StepButtonProps {
  label: string;
  width: number;
  step: MAIN_STEP;
}

/**
 * 스텝 선택 버튼
 */
const StepButton: React.VFC<StepButtonProps> = ({
  label,
  width,
  step: buttonStep,
}) => {
  const [currentStep, setStep] = useRecoilState(stepState);
  const active = buttonStep === currentStep;

  const onClickStepButton = () => {
    setStep((step) => (step === buttonStep ? undefined : buttonStep));
  };

  return (
    <div
      onClick={onClickStepButton}
      className={active ? `active-step` : undefined}
      css={css`
        cursor: pointer;
        width: ${width}px;
        padding-left: 27px;
        user-select: none;
      `}
    >
      <div
        css={css`
          ${alignCenter}
          border-right: 1px solid;
          border-color: ${getBorderColor(buttonStep, currentStep)};
          height: 36px;
          margin-top: 10px;
          margin-bottom: 10px;
          span {
            margin-right: 8px;
          }
          .active-step & {
            font-weight: bold;
          }
        `}
      >
        <span>{label}</span>
        <Icon
          name="arrow-down"
          css={css`
            transition: transform 200ms;
            .active-step & {
              transform: rotate(180deg);
            }
          `}
        />
      </div>
    </div>
  );
};

export default StepButton;

/**
 * 현재스텝으로부터 스텝버튼의 borderColor를 계산하는 함수
 * @param buttonStep 스텝버튼 지정스텝
 * @param currentStep 현재스텝
 * @returns borderColor
 */
function getBorderColor(
  buttonStep: MAIN_STEP,
  currentStep: MAIN_STEP | undefined,
) {
  if (buttonStep === MAIN_STEP.SWEET) return 'transparent';

  if (currentStep === undefined) {
    if (buttonStep === MAIN_STEP.FOOD) return '#dfdfdf';
    else if (buttonStep === MAIN_STEP.PRICE) return '#dfdfdf';
  }
  if (currentStep === MAIN_STEP.FOOD) {
    if (buttonStep === MAIN_STEP.FOOD) return 'transparent';
    else if (buttonStep === MAIN_STEP.PRICE) return '#dfdfdf';
  }
  if (currentStep === MAIN_STEP.PRICE) {
    if (buttonStep === MAIN_STEP.FOOD) return 'transparent';
    else if (buttonStep === MAIN_STEP.PRICE) return 'transparent';
  }
  if (currentStep === MAIN_STEP.SWEET) {
    if (buttonStep === MAIN_STEP.FOOD) return '#dfdfdf';
    else if (buttonStep === MAIN_STEP.PRICE) return 'transparent';
  }
}
