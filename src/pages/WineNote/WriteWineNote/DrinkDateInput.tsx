import { css, Theme } from '@emotion/react';
import { getDate } from 'date-fns';
import DatePicker from 'react-date-picker';
import { Control, useController } from 'react-hook-form';
import Icon from '~/components/common/Icon';
import { alignCenter } from '~/styles/common';
import type { FormValues } from './helpers';

export interface DrinkDateInputProps {
  control: Control<FormValues>;
}

const DrinkDateInput = ({ control }: DrinkDateInputProps) => {
  const {
    field: { ref, ...field },
  } = useController({
    name: 'drinkDate',
    control,
  });

  return (
    <section>
      <p>언제 마셨나요?</p>
      <div css={alignCenter}>
        <DatePicker
          {...field}
          format="y년 M월 d일"
          maxDate={new Date()}
          locale="ko-KR"
          clearIcon={<Icon name="cancel" />}
          calendarIcon={<Icon name="calendar" />}
          prevLabel={<Icon name="prev" />}
          nextLabel={<Icon name="next" />}
          prev2Label={null}
          next2Label={null}
          formatDay={(_, date) => getDate(date).toString()}
          inputRef={(instance) => {
            ref(instance);
          }}
          css={(theme: Theme) => css`
            .react-date-picker {
              &__wrapper {
                width: 338px;
                height: 48px;
                padding: 10px 10px 10px 14px;
                max-width: 100%;
                border: 1px solid ${theme.colors.border};
                border-radius: 8px;
              }
              &__button {
                padding-top: 0;
                padding-bottom: 0;
              }
              &__calendar {
                width: 340px;
                top: calc(100% + 16px) !important;
                .react-calendar {
                  width: 340px;
                  border: 1px solid ${theme.colors.border};
                  box-shadow: ${theme.colors.shadow};
                  border-radius: 10px;
                  &__navigation {
                    margin: 11px 19px;
                    button {
                      &:focus,
                      &:active,
                      &:hover,
                      &:disabled {
                        background: none;
                      }
                    }
                  }
                  &__navigation__label {
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 22px;
                  }
                  &__viewContainer {
                    margin-left: 30px;
                    margin-right: 30px;
                    margin-bottom: 30px;
                  }
                  &__month-view__weekdays {
                    display: grid !important;
                    grid-template-columns: repeat(7, 1fr);
                    grid-auto-rows: 40px;
                    > div {
                      max-width: none !important;
                      flex-basis: auto !important;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    }
                    abbr {
                      text-decoration: none;
                      font-weight: normal;
                      font-size: 16px;
                      color: ${theme.colors.black06};
                    }
                  }
                  &__month-view__days {
                    display: grid !important;
                    grid-template-columns: repeat(7, 1fr);
                    grid-auto-rows: 40px;
                    button {
                      max-width: none !important;
                      flex-basis: auto !important;
                    }
                    abbr {
                      font-weight: normal;
                      font-family: Lato;
                      color: ${theme.colors.black02};
                      font-size: 16px;
                    }
                    button {
                      &:not(:disabled):hover {
                        border-radius: 50%;
                        background: #ececec;
                      }
                      &:disabled {
                        cursor: not-allowed;
                      }
                    }
                    .react-calendar {
                      &__tile--now {
                        border-radius: 50%;
                      }
                      &__tile--active {
                        border-radius: 50%;
                      }
                    }
                  }
                  &__tile--now {
                    background: #f1eafc;
                  }
                  &__tile--active {
                    background: #d7bfff;
                  }
                }
              }
            }
          `}
        />
      </div>
    </section>
  );
};

export default DrinkDateInput;
