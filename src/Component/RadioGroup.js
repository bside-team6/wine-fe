import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CFormCheck } from "@coreui/react";

function RadioGroup(props) {
  console.log("radio group props:", props.name);
  return (
    <FormCheckGroup>
      {props.data.map((key, index) => {
        return (
          <CFormCheck
            inline
            id={props.name + index}
            value={index}
            label={key}
            type="radio"
            name={props.name}
            required
          />
        );
      })}
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
