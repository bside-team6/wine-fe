import React from 'react';
import { CFormCheck } from '@coreui/react';
import styled from 'styled-components';

function ToggleBtnGroup({ data, handleFoodsInput }) {
  return (
    <FormBtnGroup>
      {data.map((key) => (
        <CFormCheck
          button={{ color: 'primary', variant: 'outline' }}
          key={key.id}
          id={key.foodName}
          label={key.foodName}
          onChange={handleFoodsInput}
          autoComplete="off"
        />
      ))}
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
