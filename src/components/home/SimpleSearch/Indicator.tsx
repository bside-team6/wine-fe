import { css, useTheme } from '@emotion/react';
import { motion } from 'framer-motion';
import { indicatorPosX, STEP } from './helpers';

/**
 * 인디케이터
 */
const Indicator: React.VFC<{ step: STEP }> = ({ step }) => {
  const theme = useTheme();
  return (
    <motion.div
      initial={false}
      animate={{ x: indicatorPosX[step] }}
      transition={{ ease: 'easeOut', duration: 0.3 }}
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
  );
};

export default Indicator;
