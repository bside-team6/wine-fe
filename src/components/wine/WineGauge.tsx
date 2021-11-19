import { css, useTheme } from '@emotion/react';
import { motion } from 'framer-motion';
import { flexCenter } from '~/styles/common';
import cubeImg from '~/assets/cube.png';

export interface WineGaugeProps {
  label: string;
  minTick: string;
  maxTick: string;
  value: number;
}

const WineGauge: React.VFC<WineGaugeProps> = ({
  label,
  minTick,
  maxTick,
  value,
}) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <div
        css={css`
          flex-shrink: 0;
          font-size: 15px;
          position: relative;
          padding-left: 40px;
          padding-right: 56px;
          &:before {
            position: absolute;
            top: 0;
            left: 0;
            content: url(${cubeImg});
            width: 28px;
            height: 28px;
          }
        `}
      >
        {label}
      </div>
      <div
        aria-roledescription="slider"
        css={css`
          position: relative;
          flex-grow: 1;
          height: 4px;
          width: 100%;
          border-radius: 16px;
          box-sizing: content-box;
          padding: 6px 0;
          margin-top: 2px;
          margin-bottom: 40px;
          margin-right: 20px;
        `}
      >
        <div
          aria-roledescription="rail"
          css={css`
            display: block;
            position: absolute;
            border-radius: inherit;
            background: ${theme.colors.black09};
            width: 100%;
            height: inherit;
            top: 50%;
            transform: translateY(-50%);
          `}
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(value - 1) * 25}%` }}
          style={{ y: '-50%' }}
          transition={{ ease: 'easeOut', duration: 0.3 }}
          aria-roledescription="track"
          css={css`
            display: block;
            position: absolute;
            width: 100%;
            top: 50%;
            left: 0;
            height: inherit;
            border-radius: inherit;
            border: 1px solid ${theme.colors.main.light1};
            background-color: ${theme.colors.main.light1};
          `}
        />
        <motion.div
          initial={{ left: 0 }}
          animate={{ left: `${(value - 1) * 25}%` }}
          style={{ x: `-50%`, y: '-50%' }}
          transition={{ ease: 'easeOut', duration: 0.3 }}
          aria-roledescription="thumb"
          css={css`
            position: absolute;
            top: 50%;
            left: 0;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            outline: 0px;
            background-color: ${theme.colors.main.primary};
            ${flexCenter}
          `}
        />
        {[1, 2, 3, 4, 5].map((v) => (
          <span
            key={v}
            aria-roledescription="marker"
            css={css`
              position: absolute;
              top: 26px;
              left: ${(v - 1) * 25}%;
              font-family: ${theme.typography.lato};
              font-size: 11px;
              line-height: 13px;
              color: ${theme.colors.black05};
              transform: translateX(-50%);
              white-space: nowrap;
              ${v === value &&
              css`
                font-size: 14px;
                font-weight: bold;
                color: ${theme.colors.main.primary};
              `}
            `}
          >
            {v}
          </span>
        ))}
        <span
          css={css`
            white-space: nowrap;
            position: absolute;
            top: 41px;
            left: 0;
            letter-spacing: -0.03em;
            font-size: 11px;
            line-height: 16px;
            color: ${theme.colors.black05};
            transform: translateX(-50%);
          `}
        >
          {minTick}
        </span>
        <span
          css={css`
            white-space: nowrap;
            position: absolute;
            top: 41px;
            left: 100%;
            letter-spacing: -0.03em;
            font-size: 11px;
            line-height: 16px;
            color: ${theme.colors.black05};
            transform: translateX(-50%);
          `}
        >
          {maxTick}
        </span>
      </div>
    </div>
  );
};

export default WineGauge;
