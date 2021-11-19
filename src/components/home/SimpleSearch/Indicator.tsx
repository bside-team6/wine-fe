import { css, useTheme } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRecoilValue } from 'recoil';
import { stepState } from '~/stores/wine';
import { MAIN_STEP } from '~/types';

const indicatorPosX: Record<MAIN_STEP, number> = {
  [MAIN_STEP.FOOD]: 0,
  [MAIN_STEP.PRICE]: 163,
  [MAIN_STEP.SWEET]: 326,
};

/**
 * 인디케이터
 */
const Indicator = () => {
  const theme = useTheme();

  const step = useRecoilValue(stepState);

  return (
    <AnimatePresence>
      {step && (
        <motion.div
          initial={{ x: indicatorPosX[step], scale: 0 }}
          animate={{ x: indicatorPosX[step], scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ ease: 'easeOut', duration: 0.2 }}
          aria-roledescription="indicator"
          css={css`
            position: absolute;
            width: 163px;
            height: 56px;
            background: ${theme.colors.main.light2};
            border-radius: 28px;
            z-index: -1;
          `}
        />
      )}
    </AnimatePresence>
  );
};

export default Indicator;
