import React from 'react';
import styled from 'styled-components';
import { CFormCheck } from '@coreui/react';

function ToggleBtnGroup(props) {
  const foodList = props.data;
  return (
    <FormBtnGroup>
      {foodList.map((key, index) => {
        return (
          <CFormCheck
            button={{ color: 'primary', variant: 'outline' }}
            key={index}
            id={key.id}
            autoComplete="off"
            label={key.foodName}
            onChange={props.handleFoodsInput}
          />
        );
      })}
    </FormBtnGroup>
  );
}

export default ToggleBtnGroup;

const FormBtnGroup = styled.div`
  button {
    margin: 5px 0 5px 10px;
    justify-content: space-between;
  }
`;
