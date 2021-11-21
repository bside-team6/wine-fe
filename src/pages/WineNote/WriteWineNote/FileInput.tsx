import { useRef } from 'react';
import { css, useTheme } from '@emotion/react';
import { Control, useController, UseFormSetValue } from 'react-hook-form';
import IconButton from '~/components/common/IconButton';
import { buttonStyle } from '~/styles/common';
import type { FormValues } from './helpers';
import { ReactComponent as Camera } from '~/assets/camera.svg';

export interface FileInputProps {
  control: Control<FormValues>;
  setValue: UseFormSetValue<FormValues>;
}

const FileInput = ({ control, setValue }: FileInputProps) => {
  const theme = useTheme();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    field: { value, name, ...field },
  } = useController({
    name: 'image',
    control,
  });

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files?.[0]) {
      field.onChange(e.target.files[0]);
    }
  };

  return (
    <div
      css={css`
        position: relative;
        width: 120px;
        height: 120px;
        margin-top: 8px;
        overflow: hidden;
        span {
          color: ${theme.colors.black07};
        }
        input {
          display: none;
        }
      `}
    >
      {value ? (
        <>
          <IconButton
            onClick={() => setValue(name, undefined)}
            name="cancel"
            css={css`
              position: absolute;
              top: 6px;
              right: 6px;
              z-index: 1;
              border-radius: 50%;
              background: rgba(236, 236, 236, 0.8);
              padding: 2px;
              svg {
                width: 16px;
                height: 16px;
              }
            `}
          />
          <img
            src={URL.createObjectURL(value)}
            alt="preview"
            onLoad={(e) => URL.revokeObjectURL(e.currentTarget.src)}
            css={css`
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 8px;
            `}
          />
        </>
      ) : (
        <label
          css={css`
            ${buttonStyle}
            display: flex;
            height: 100%;
            flex-direction: column;
            font-weight: bold;
            border: 1px solid ${theme.colors.border};
            border-radius: 8px;
            span {
              color: ${theme.colors.black07};
            }
            input {
              display: none;
            }
            svg {
              color: ${theme.colors.black07};
              margin-bottom: 8px;
            }
          `}
        >
          <Camera />
          <span>사진 추가하기</span>
          <input
            type="file"
            accept="image/*"
            {...field}
            name={name}
            onChange={onChange}
            ref={(instance) => {
              field.ref(instance);
              inputRef.current = instance;
            }}
          />
        </label>
      )}
    </div>
  );
};

export default FileInput;
