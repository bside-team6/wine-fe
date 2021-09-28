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

import React, { useEffect, useState } from "react";
import RadioGroup from "../../Components/RadioGroup";
import ToggleBtnGroup from "../../Components/ToggleBtnGroup";

function AdminRegist(props) {
  const pageType = props.match.url.split("/")[2];
  const [foodsList, setfoodsList] = useState([{}]);
  const [regionsList, setRegionsList] = useState([{}]);
  const [varietyList, setVarietyList] = useState([{}]);
  const [validated, setValidated] = useState(false);
  const [readOnly, setReadOnly] = useState(true);

  const [wineData, setWineData] = useState({
    id: 0,
    nameKr: "",
    nameEn: "",
    wineVarietyId: 0,
    foods: [],
    wineRegionId: 5,
    type: "RED",
    sweet: 4,
    acidity: 3,
    body: 1,
    tannin: 1,
    capacity: 350,
    alchol: 13.5,
    priceKrw: 95000,
    priceUsd: 100,
    place: "ssg",
    score: 2,
    isPublic: "true",
    file: {},
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    console.log("wineData : ", wineData);
  };

  const onChangePicture = (e) => {
    setWineData((prevState) => ({
      ...prevState,
      file: e.target.files[0],
    }));
  };

  const handleFoodsInput = (e) => {
    let checkedFoods = wineData.foods;
    if (e.target.checked) {
      checkedFoods.push(e.target.id);
    } else {
      checkedFoods.splice(checkedFoods.indexOf(e.target.id), 1);
    }
    setWineData((prevState) => ({
      ...prevState,
      foods: checkedFoods,
    }));
  };
  const handleInput = (e) => {
    console.log("******:", e);

    switch (e.target.id) {
      case "nameKr":
        setWineData((prevState) => ({
          ...prevState,
          nameKr: e.target.value,
        }));
        break;
      case "nameEn":
        setWineData((prevState) => ({
          ...prevState,
          nameEn: e.target.value,
        }));
        break;
      case "wineVarietyId":
        setWineData((prevState) => ({
          ...prevState,
          wineVarietyId: e.target.value,
        }));
        break;
      case "wineType":
        setWineData((prevState) => ({
          ...prevState,
          type: e.target.value,
        }));
        break;
      case "alchol":
        setWineData((prevState) => ({
          ...prevState,
          alchol: e.target.value,
        }));
        break;
      case "priceKrw":
        setWineData((prevState) => ({
          ...prevState,
          priceKrw: e.target.value,
        }));
        break;
      case "wineVarietyId":
        setWineData((prevState) => ({
          ...prevState,
          wineVarietyId: e.target.value,
        }));
        break;
      case "wineRegionId":
        setWineData((prevState) => ({
          ...prevState,
          wineRegionId: e.target.value,
        }));
        break;
      case "place":
        if (e.target.value == 0) {
          //직접입력
          setReadOnly(false);
          break;
        }
        setReadOnly(true);

        setWineData((prevState) => ({
          ...prevState,
          place: e.target.value,
        }));
        break;
    }
    console.log("wineData:", wineData);
  };

  useEffect(() => {
    fetch(
      `http://ec2-13-125-218-253.ap-northeast-2.compute.amazonaws.com:8082//api/v1/food`
    )
      .then((res) => res.json())
      .then((res) => {
        setfoodsList(res.data);
      });
    fetch(
      `http://ec2-13-125-218-253.ap-northeast-2.compute.amazonaws.com:8082/api/v1/wine-regions`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("RegionsList", res.data);
        setRegionsList(res.data);
      });

    fetch(
      `http://ec2-13-125-218-253.ap-northeast-2.compute.amazonaws.com:8082/api/v1/wine-varieties`
    )
      .then((res) => res.json())
      .then((res) => {
        setVarietyList(res.data);
      });
  }, []);

  return (
    <div>
      <Header>Wineasy Admin-와인등록</Header>
      {foodsList.map((value, index) => {
        return <span key={index}>{value.foodNm}</span>;
      })}
      <Form className="inputContainer">
        <CForm
          className="row g-3 needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon3">
              <Required>*</Required>와인등록번호
            </CInputGroupText>
            <CFormInput
              id="basic-url"
              aria-describedby="basic-addon3"
              readOnly
            />
            <CInputGroupText>공개여부</CInputGroupText>
            <FormSwitch>
              <CFormSwitch
                id="formSwitchCheckDefault"
                size="lg"
                defaultChecked
              />
            </FormSwitch>
          </CInputGroup>

          <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon3">
              <Required>*</Required>와인명(한글)
            </CInputGroupText>
            <CFormInput
              id="nameKr"
              aria-describedby="basic-addon3"
              required
              onChange={handleInput}
            />
          </CInputGroup>

          <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon3">
              <Required>*</Required>와인명(영문)
            </CInputGroupText>
            <CFormInput
              id="nameEn"
              aria-describedby="basic-addon3"
              required
              onChange={handleInput}
            />
          </CInputGroup>

          <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon3">
              <Required>*</Required>종류
            </CInputGroupText>

            <RadioGroup
              name="wineType"
              data={[
                { RED: "레드" },
                { WHITE: "화이트" },
                { SPARK: "스파클링" },
                { ROSE: "로제" },
              ]}
              handleInput={handleInput}
            />
          </CInputGroup>

          <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon1">
              <Required>*</Required>품종
            </CInputGroupText>

            <CFormSelect
              aria-label="Default select example"
              required
              onChange={handleInput}
              id="wineVarietyId"
            >
              {varietyList.map((key, index) => {
                return (
                  <option key={index} value={key.id}>
                    {key.name}
                  </option>
                );
              })}
            </CFormSelect>
            <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
          </CInputGroup>

          <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon1">
              <Required>*</Required>생산지
            </CInputGroupText>

            <CFormSelect
              aria-label="Default select example"
              id="wineRegionId"
              onChange={handleInput}
            >
              {regionsList.map((key, index) => {
                return (
                  <option key={index} value={key.id}>
                    {key.nameKr}
                  </option>
                );
              })}
            </CFormSelect>
          </CInputGroup>

          <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon3">
              <Required>*</Required>당도
            </CInputGroupText>
            <RadioGroup
              name="wineSteps_sweet"
              data={["1단계", "2단계", "3단계", "4단계", "5단계"]}
              handleInput={handleInput}
            />
          </CInputGroup>

          <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon3">
              <Required>*</Required>산도
            </CInputGroupText>
            <RadioGroup
              name="wineSteps_acidic"
              data={["1단계", "2단계", "3단계", "4단계", "5단계"]}
            />
          </CInputGroup>

          <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon3">
              <Required>*</Required>바디
            </CInputGroupText>
            <RadioGroup
              name="wineSteps_body"
              data={["1단계", "2단계", "3단계", "4단계", "5단계"]}
            />
          </CInputGroup>

          <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon3">
              <Required>*</Required>타닌
            </CInputGroupText>
            <RadioGroup
              name="wineSteps_tanin"
              data={["1단계", "2단계", "3단계", "4단계", "5단계"]}
            />
          </CInputGroup>

          <CInputGroup className="mb-3">
            <CInputGroupText>알코올도수</CInputGroupText>
            <CFormInput
              id="alchol"
              type="number"
              onChange={handleInput}
              onKeyDown={(e) => e.key === "e" && e.preventDefault()}
            />
            <CInputGroupText id="basic-addon2">%</CInputGroupText>
          </CInputGroup>

          <CInputGroup className="mb-3">
            <CInputGroupText>가격(한화)</CInputGroupText>
            <CFormInput
              id="priceKrw"
              type="number"
              onChange={handleInput}
              onKeyDown={(e) => e.key === "e" && e.preventDefault()}
            />
            <CInputGroupText>원</CInputGroupText>
          </CInputGroup>

          <CInputGroup className="mb-3">
            <CFormInput
              type="file"
              id="inputGroupFile02"
              onChange={onChangePicture}
            />
            <CInputGroupText component="label" htmlFor="inputGroupFile02">
              Upload
            </CInputGroupText>
          </CInputGroup>
          <FormBtnsGroup className="mb-3">
            <CInputGroupText>
              <Required>*</Required>어울리는 음식
            </CInputGroupText>
            <ToggleBtnGroup
              data={foodsList}
              handleFoodsInput={handleFoodsInput}
            />
          </FormBtnsGroup>
          <CInputGroup className="mb-3">
            <CInputGroupText id="basic-addon1">출몰매장</CInputGroupText>

            <CFormSelect onChange={handleInput} id="place">
              <option>선택</option>
              <option value="롯데마트">롯데마트</option>
              <option value="이마트">이마트</option>
              <option value="이마트트레이더스">이마트트레이더스</option>
              <option value="홈플러스">홈플러스</option>
              <option value="0">직접입력</option>
            </CFormSelect>
            <CFormInput
              type="text"
              placeholder="매장을 입력해주세요"
              readOnly={readOnly}
            />
          </CInputGroup>

          <EditBtnGroup>
            <CButton type="submit" color="primary">
              목록
            </CButton>
            <div>
              <CButton type="submit" color="primary">
                수정
              </CButton>
              <CButton type="submit" color="primary">
                삭제
              </CButton>
            </div>

            <CButton type="submit" color="primary">
              등록
            </CButton>
          </EditBtnGroup>
        </CForm>
      </Form>
    </div>
  );
}

export default AdminRegist;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 40px;
  font-size: 50px;
`;
const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5%;
`;

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

const FormBtnsGroup = styled.div`
  display: flex;
`;
const FormBtnGroup = styled.div`
  button {
    margin: 5px 0 5px 10px;
    justify-content: space-between;
  }
`;
const EditBtnGroup = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0px;
  align-items: center;
  justify-content: space-between;
  div button {
    display: none;
    margin: 0px 10px;
  }
`;
