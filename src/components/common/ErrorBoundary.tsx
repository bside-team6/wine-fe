import { css } from '@emotion/react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from 'react-query';
import RoundButton from '~/components/common/RoundButton';

const ErrorBoundary: React.FC = ({ children }) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ReactErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <div
              css={css`
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                height: 100vh;
              `}
            >
              <div
                css={css`
                  font-size: 32px;
                  font-weight: 600;
                  margin-bottom: 32px;
                `}
              >
                오류가 발생했습니다.
              </div>
              <RoundButton size="large" onClick={resetErrorBoundary}>
                재시도
              </RoundButton>
            </div>
          )}
        >
          {children}
        </ReactErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default ErrorBoundary;
