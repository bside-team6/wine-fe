import { css } from '@emotion/react';
import Icon from '~/components/common/Icon';
import { alignCenter } from '~/styles/common';
import { STEP } from './helpers';

export interface StepButtonProps {
  label: string;
  width: number;
  step: STEP;
  currentStep: STEP | undefined;
  onClick(step: STEP): void;
}

/**
 * 스텝 선택 버튼
 */
const StepButton: React.VFC<StepButtonProps> = ({
  label,
  width,
  step,
  currentStep,
  onClick,
}) => {
  const active = step === currentStep;
  return (
    <div
      onClick={() => onClick(step)}
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
          border-color: ${getBorderColor(step, currentStep)};
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
 * @param step 스텝버튼 지정스텝
 * @param currentStep 현재스텝
 * @returns borderColor
 */
function getBorderColor(step: STEP, currentStep: STEP | undefined) {
  if (currentStep === undefined) {
    if (step === STEP.FOOD) return '#dfdfdf';
    else if (step === STEP.PRICE) return '#dfdfdf';
    else if (step === STEP.SWEET) return 'transparent';
  }
  if (currentStep === STEP.FOOD) {
    if (step === STEP.FOOD) return 'transparent';
    else if (step === STEP.PRICE) return '#dfdfdf';
    else if (step === STEP.SWEET) return 'transparent';
  }
  if (currentStep === STEP.PRICE) {
    if (step === STEP.FOOD) return 'transparent';
    else if (step === STEP.PRICE) return 'transparent';
    else if (step === STEP.SWEET) return 'transparent';
  }
  if (currentStep === STEP.SWEET) {
    if (step === STEP.FOOD) return '#dfdfdf';
    else if (step === STEP.PRICE) return 'transparent';
    else if (step === STEP.SWEET) return 'transparent';
  }
}
