import React, { useEffect, useState } from "react";

import styled from "styled-components";

import {
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CFormSwitch,
  CFormSelect,
  CButton,
  CForm,
  CFormFeedback,
} from "@coreui/react";
import RadioGroup from "../../Components/RadioGroup";

function AdminDetail() {
  const wineName = "새로운와인";
  const isChecked = true;

  return (
    <CForm className="row g-3 needs-validation" noValidate>
      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon3">
          <Required>*</Required>와인등록번호
        </CInputGroupText>
        <CFormInput id="basic-url" aria-describedby="basic-addon3" readOnly />
        <CInputGroupText>공개여부</CInputGroupText>
        <FormSwitch>
          <CFormSwitch id="formSwitchCheckDefault" size="lg" />
        </FormSwitch>
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon3">
          <Required>*</Required>와인명(한글)
        </CInputGroupText>
        <CFormInput value={wineName} />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon3">
          <Required>*</Required>와인명(영문)
        </CInputGroupText>
        <CFormInput value={wineName} />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon3">
          <Required>*</Required>종류
        </CInputGroupText>

        <RadioGroup
          name="wineType"
          checkedVal="RED"
          data={[
            { RED: "레드" },
            { WHITE: "화이트" },
            { SPARK: "스파클링" },
            { ROSE: "로제" },
          ]}
        />
      </CInputGroup>
      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon1">
          <Required>*</Required>품종
        </CInputGroupText>
        <CFormInput value={wineName} />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon1">
          <Required>*</Required>생산지
        </CInputGroupText>
        <CFormInput value={wineName} />
      </CInputGroup>
    </CForm>
  );
}

export default AdminDetail;

const Required = styled.span`
  color: red;
  margin-right: 5px;
`;

const FormSwitch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
`;
