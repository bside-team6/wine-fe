import React from 'react';
import { CFormCheck } from '@coreui/react';
import styled from '@emotion/styled';

function RadioGroup({ type, id, handleInput, data, checkedVal, name }) {
  if (type === 'wineSteps') {
    return (
      <FormCheckGroup id={id} onChange={handleInput}>
        {data.map((key, index) => (
          <CFormCheck
            inline
            key={index}
            id={name + index}
            value={Object.keys(key)}
            label={Object.values(key)}
            type="radio"
            name={name}
            checked={
              checkedVal
                ? checkedVal === Object.keys(key) && 'checked'
                : undefined
            }
            required
          />
        ))}
      </FormCheckGroup>
    );
  }

  return (
    <FormCheckGroup id="wineType" onChange={handleInput}>
      {data.map((key, index) => (
        <CFormCheck
          inline
          key={index}
          id={name + index}
          value={Object.keys(key)}
          label={Object.values(key)}
          type="radio"
          name={name}
          checked={
            checkedVal
              ? checkedVal === Object.keys(key) && 'checked'
              : undefined
          }
          required={!checkedVal}
        />
      ))}
    </FormCheckGroup>
  );
}

export default RadioGroup;

const FormCheckGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    display: flex;
    margin: 0px 5px;
  }
`;
