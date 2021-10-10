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
  CImage,
} from "@coreui/react";
import RadioGroup from "../../Components/RadioGroup";
import { BACKAPI } from "../../config";

function AdminDetail(props) {
  const [wineData, setWineData] = useState();
  // const [foods, setFoods] = useState();

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const id = props.match.params.id;
    const result = await fetch(`${BACKAPI}/v1/wine/${id}`, {})
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.data);
        return res.data;
        // setWineData(res.data);
        // setFoods(res.data.foods);
      });
    // console.log(result);
    setWineData(result);
  };

  if (wineData) {
    console.log(wineData);
  }
  // console.log(Object.keys(wineData.foods));
  // console.log(wineData.foods.hasOwnProperty("id"));

  // for (const item in wineData.foods) {
  //   console.log(item);
  // }

  return (
    <CForm className="row g-3 needs-validation" noValidate>
      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon3">
          <Required>*</Required>와인등록번호
        </CInputGroupText>
        <CFormInput
          id="basic-url"
          aria-describedby="basic-addon3"
          readOnly
          value={wineData && wineData.id}
        />
        <CInputGroupText>공개여부</CInputGroupText>
        <FormSwitch>
          <CFormSwitch
            id="formSwitchCheckDefault"
            size="lg"
            checked={wineData && wineData.public}
          />
        </FormSwitch>
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon3">
          <Required>*</Required>와인명(한글)
        </CInputGroupText>
        <CFormInput value={wineData && wineData.nameKr} />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon3">
          <Required>*</Required>와인명(영문)
        </CInputGroupText>
        <CFormInput value={wineData && wineData.nameEn} />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon3">
          <Required>*</Required>종류
        </CInputGroupText>

        <RadioGroup
          name="wineType"
          checkedVal={wineData && wineData.type}
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
        <CFormInput value={wineData && wineData.wineVariety.name} />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon">
          <Required>*</Required>생산지
        </CInputGroupText>
        <CFormInput value={wineData && wineData.wineRegion.nameKr} />
      </CInputGroup>

      {detailType.map((key, index) => {
        let detailType = 0;
        if (key.id === "sweet") detailType = wineData && wineData.sweet;
        else if (key.id === "acidity")
          detailType = wineData && wineData.acidity;
        else if (key.id === "body") detailType = wineData && wineData.body;
        else if (key.id === "tannin") detailType = wineData && wineData.tannin;
        return (
          <CInputGroup className="mb-3" key={index}>
            <CInputGroupText>
              <Required>*</Required>
              {key.name}
            </CInputGroupText>
            <RadioGroup
              name={key.id}
              type="wineSteps"
              checkedVal={detailType}
              data={[
                { 1: "1단계" },
                { 2: "2단계" },
                { 3: "3단계" },
                { 4: "4단계" },
                { 5: "5단계" },
              ]}
            />
          </CInputGroup>
        );
      })}

      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon3">알코올도수</CInputGroupText>
        <CFormInput value={wineData && wineData.alchol} />
      </CInputGroup>
      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon3">가격(한화)</CInputGroupText>
        <CFormInput value={wineData && wineData.priceMinKrw} />
      </CInputGroup>

      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon3">와인이미지</CInputGroupText>
        <div className="clearfix">
          <CImage
            fluid
            rounded
            thumbnail
            src={
              wineData &&
              (wineData.wineImage ? wineData.wineImage.imagePath : "")
            }
            width={200}
            height={200}
          />
        </div>
      </CInputGroup>
      <CInputGroup className="mb-3">
        <CInputGroupText id="basic-addon3">
          <Required>*</Required>어울리는 음식
        </CInputGroupText>
        <CFormInput
          value={
            wineData &&
            wineData.foods.map((key, index) => {
              return key.foodName;
            })
          }
        />
      </CInputGroup>
    </CForm>
  );
}

export default AdminDetail;

const detailType = [
  { id: "sweet", name: "당도", steps: 5 },
  { id: "acidity", name: "산도", steps: 5 },
  { id: "body", name: "바디", steps: 5 },
  { id: "tannin", name: "타닌", steps: 5 },
];

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
