import { css, useTheme } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';
import IconButton from '~/components/common/IconButton';
import SquareButton, {
  SquareButtonGroup,
} from '~/components/common/SquareButton';
import { flexCenter } from '~/styles/common';

export interface ConfirmProps {
  isOpen: boolean;
  title?: string;
  content: string;
  ok?: string;
  cancel?: string;
  onConfirm: VoidFunction;
  onClose: VoidFunction;
  onCancel?: VoidFunction;
}

const Confirm = ({
  isOpen,
  title = '알림',
  content,
  ok = '확인',
  cancel = '취소',
  onConfirm,
  onClose,
  onCancel,
}: ConfirmProps) => {
  const theme = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeOut', duration: 0.15 }}
          css={css`
            position: fixed;
            z-index: 1300;
            inset: 0px;
          `}
        >
          <div
            onClick={onClose}
            css={css`
              ${flexCenter}
              position: fixed;
              inset: 0px;
              background-color: rgba(0, 0, 0, 0.5);
              -webkit-tap-highlight-color: transparent;
            `}
          />
          <div
            css={css`
              height: 100%;
              outline: 0px;
              ${flexCenter}
            `}
          >
            <div
              css={css`
                background-color: ${theme.colors.white};
                margin: 32px;
                position: relative;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                max-height: calc(100% - 64px);
                max-width: 460px;
                min-width: 460px;
              `}
            >
              <div
                css={css`
                  position: relative;
                  text-align: center;
                  padding-top: 16px;
                  padding-bottom: 15px;
                  border-bottom: 1px solid;
                  border-color: ${theme.colors.black09};
                `}
              >
                <span
                  css={css`
                    font-size: 18px;
                    font-weight: 700;
                  `}
                >
                  {title}
                </span>
                <IconButton
                  name="cancel"
                  onClick={onClose}
                  css={css`
                    position: absolute;
                    top: 17px;
                    right: 17px;
                  `}
                />
              </div>
              <div
                css={css`
                  color: ${theme.colors.black02};
                  white-space: pre-wrap;
                  text-align: center;
                  padding-top: 40px;
                  padding-bottom: 40px;
                `}
              >
                {content}
              </div>
              <SquareButtonGroup
                css={css`
                  margin: 0 40px 40px 40px;
                `}
              >
                <SquareButton
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={onCancel || onClose}
                >
                  {cancel}
                </SquareButton>
                <SquareButton
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={onConfirm}
                >
                  {ok}
                </SquareButton>
              </SquareButtonGroup>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Confirm;
