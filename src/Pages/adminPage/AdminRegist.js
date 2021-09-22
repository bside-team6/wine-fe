import styled from "styled-components";
import {
  CInputGroup,
  CInputGroupText,
  CFormLabel,
  CFormInput,
  CFormTextarea,
  CFormSwitch,
  CFormCheck,
  CRow,
  CCol,
  CFormSelect,
  CButton,
} from "@coreui/react";

import React, { useEffect, useState } from "react";

function AdminRegist() {
  const [foodsList, setfoodsList] = useState([{}]);

  useEffect(() => {
    fetch(
      `http://ec2-3-35-222-71.ap-northeast-2.compute.amazonaws.com:8082/api/v1/food`
    )
      .then((res) => res.json())
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div>
      <Header>Wineasy Admin-와인등록</Header>
      {foodsList.map((value, index) => {
        return <span>{value.foodNm}</span>;
      })}
      <Form className="inputContainer">
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
          <CFormInput id="basic-url" aria-describedby="basic-addon3" />
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CInputGroupText id="basic-addon3">
            <Required>*</Required>와인명(영문)
          </CInputGroupText>
          <CFormInput id="basic-url" aria-describedby="basic-addon3" />
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CInputGroupText id="basic-addon3">
            <Required>*</Required>종류
          </CInputGroupText>
          <FormCheckGroup>
            <CFormCheck
              inline
              id="inlineCheckbox1"
              value="option1"
              label="레드"
            />
            <CFormCheck
              inline
              id="inlineCheckbox2"
              value="option2"
              label="화이트"
            />
            <CFormCheck
              inline
              id="inlineCheckbox3"
              value="option3"
              label="스파클링"
            />
            <CFormCheck
              inline
              id="inlineCheckbox4"
              value="option4"
              label="로제"
            />
          </FormCheckGroup>
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CInputGroupText id="basic-addon1">
            <Required>*</Required>품종
          </CInputGroupText>

          <CFormSelect aria-label="Default select example">
            <option>선택</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </CFormSelect>
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CInputGroupText id="basic-addon1">
            <Required>*</Required>생산지
          </CInputGroupText>

          <CFormSelect aria-label="Default select example">
            <option>선택</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </CFormSelect>
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CInputGroupText id="basic-addon3">
            <Required>*</Required>당도
          </CInputGroupText>
          <FormCheckGroup>
            <CFormCheck
              inline
              id="inlineCheckbox1"
              value="option1"
              label="1단계"
            />
            <CFormCheck
              inline
              id="inlineCheckbox2"
              value="option2"
              label="2단계"
            />
            <CFormCheck
              inline
              id="inlineCheckbox3"
              value="option3"
              label="3단계"
            />
            <CFormCheck
              inline
              id="inlineCheckbox4"
              value="option4"
              label="4단계"
            />
          </FormCheckGroup>
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CInputGroupText id="basic-addon3">
            <Required>*</Required>산도
          </CInputGroupText>
          <FormCheckGroup>
            <CFormCheck
              inline
              id="inlineCheckbox1"
              value="option1"
              label="1단계"
            />
            <CFormCheck
              inline
              id="inlineCheckbox2"
              value="option2"
              label="2단계"
            />
            <CFormCheck
              inline
              id="inlineCheckbox3"
              value="option3"
              label="3단계"
            />
            <CFormCheck
              inline
              id="inlineCheckbox4"
              value="option4"
              label="4단계"
            />
          </FormCheckGroup>
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CInputGroupText id="basic-addon3">
            <Required>*</Required>바디
          </CInputGroupText>
          <FormCheckGroup>
            <CFormCheck
              inline
              id="inlineCheckbox1"
              value="option1"
              label="1단계"
            />
            <CFormCheck
              inline
              id="inlineCheckbox2"
              value="option2"
              label="2단계"
            />
            <CFormCheck
              inline
              id="inlineCheckbox3"
              value="option3"
              label="3단계"
            />
            <CFormCheck
              inline
              id="inlineCheckbox4"
              value="option4"
              label="4단계"
            />
          </FormCheckGroup>
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CInputGroupText id="basic-addon3">
            <Required>*</Required>타닌
          </CInputGroupText>
          <FormCheckGroup>
            <CFormCheck
              inline
              id="inlineCheckbox1"
              value="option1"
              label="1단계"
            />
            <CFormCheck
              inline
              id="inlineCheckbox2"
              value="option2"
              label="2단계"
            />
            <CFormCheck
              inline
              id="inlineCheckbox3"
              value="option3"
              label="3단계"
            />
            <CFormCheck
              inline
              id="inlineCheckbox4"
              value="option4"
              label="4단계"
            />
          </FormCheckGroup>
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CInputGroupText>알코올도수</CInputGroupText>

          <CFormInput />
          <CInputGroupText id="basic-addon2">%</CInputGroupText>
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CInputGroupText>가격(한화)</CInputGroupText>
          <CFormInput aria-label="Amount (to the nearest dollar)" />
          <CInputGroupText>원</CInputGroupText>
        </CInputGroup>

        <CInputGroup className="mb-3">
          <CFormInput type="file" id="inputGroupFile02" />
          <CInputGroupText component="label" htmlFor="inputGroupFile02">
            Upload
          </CInputGroupText>
        </CInputGroup>
        <FormBtnsGroup className="mb-3">
          <CInputGroupText>
            <Required>*</Required>어울리는 음식
          </CInputGroupText>
          <FormBtnGroup>
            <CButton color="primary" disabled>
              스테이크
            </CButton>
            <CButton color="secondary">양고기</CButton>
            <CButton color="success">돼지고기</CButton>
            <CButton color="success">닭고기</CButton>
            <CButton color="success">생선</CButton>
            <CButton color="success">회</CButton>
            <CButton color="success">카레</CButton>
            <CButton color="success">빵</CButton>
            <CButton color="success">샐러드</CButton>
            <CButton color="success">과일</CButton>
            <CButton color="success">케익</CButton>
            <CButton color="success">디저트</CButton>
            <CButton color="success">치즈</CButton>
          </FormBtnGroup>
        </FormBtnsGroup>

        <CInputGroup className="mb-3">
          <CInputGroupText id="basic-addon1">출몰매장</CInputGroupText>

          <CFormSelect aria-label="Default select example">
            <option>선택</option>
            <option value="1">롯데마트</option>
            <option value="2">이마트</option>
            <option value="3">이마트트레이더스</option>
            <option value="4">홈플러스</option>
            <option value="5">직접입력</option>
          </CFormSelect>
          <CFormInput type="text" placeholder="매장을 입력해주세요" readOnly />
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
