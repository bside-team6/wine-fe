import React from 'react';
import styled from 'styled-components';
import { CFormCheck } from '@coreui/react';

function RadioGroup(props) {
  if (props.type === 'wineSteps') {
    return (
      <FormCheckGroup id={props.id} onChange={props.handleInput}>
        {props.data.map((key, index) => {
          if (props.checkedVal) {
            return (
              <CFormCheck
                inline
                key={index}
                id={props.name + index}
                value={Object.keys(key)}
                label={Object.values(key)}
                type="radio"
                name={props.name}
                checked={props.checkedVal === Object.keys(key) && 'checked'}
                required
              />
            );
          } else {
            return (
              <CFormCheck
                inline
                key={index}
                id={props.name + index}
                value={Object.keys(key)}
                label={Object.values(key)}
                type="radio"
                name={props.name}
                required
              />
            );
          }
        })}
      </FormCheckGroup>
    );
  } else {
    return (
      <FormCheckGroup id="wineType" onChange={props.handleInput}>
        {props.data.map((key, index) => {
          if (props.checkedVal) {
            return (
              <CFormCheck
                inline
                key={index}
                id={props.name + index}
                value={Object.keys(key)}
                label={Object.values(key)}
                type="radio"
                name={props.name}
                checked={props.checkedVal === Object.keys(key) && 'checked'}
              />
            );
          } else {
            return (
              <CFormCheck
                inline
                key={index}
                id={props.name + index}
                value={Object.keys(key)}
                label={Object.values(key)}
                type="radio"
                name={props.name}
                required
              />
            );
          }
        })}
      </FormCheckGroup>
    );
  }
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
