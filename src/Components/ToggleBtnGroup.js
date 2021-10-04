import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { CFormCheck, CButton } from "@coreui/react";

function ToggleBtnGroup(props) {
  const foodList = props.data;
  return (
    <FormBtnGroup>
      {foodList.map((key, index) => {
        return (
          <CFormCheck
            button={{ color: "primary", variant: "outline" }}
            id={key.id}
            autoComplete="off"
            label={key.foodName}
            key={index}
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
