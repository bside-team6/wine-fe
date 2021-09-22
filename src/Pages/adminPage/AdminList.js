import styled from "styled-components";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableCaption,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CTableFoot,
  CButton,
} from "@coreui/react";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function AdminList() {
  const style = {
    marginTop: "10px",
    marginBottom: "10px",
    marginRight: "10px",
    float:"right"
  };

  const [wineList, setWineList] = useState([{}]);

  useEffect(() => {
    fetch(
      `http://ec2-3-35-222-71.ap-northeast-2.compute.amazonaws.com:8082/api/v1/wine`
    )
      .then((res) => res.json())
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div>
      <Header>Wineasy Admin-와인목록</Header>
      <CCard className="mb-4">
        <Link to="./registWine"> 
            <CButton style={style}> 와인 등록하기 </CButton>
        </Link>
        <CCardHeader>WINE LIST</CCardHeader>
        <CCardBody>
          <CTable hover responsive align="middle" className="mb-0 border">
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell className="text-center">Wine No</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Wine Name</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Type</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Acidity</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Sweet</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Body</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Tannin</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell className="text-center">1</CTableDataCell>
                <CTableDataCell className="text-center">A</CTableDataCell>
                <CTableDataCell className="text-center">red</CTableDataCell>
                <CTableDataCell className="text-center">1</CTableDataCell>
                <CTableDataCell className="text-center">2</CTableDataCell>
                <CTableDataCell className="text-center">3</CTableDataCell>
                <CTableDataCell className="text-center">4</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell className="text-center">2</CTableDataCell>
                <CTableDataCell className="text-center">B</CTableDataCell>
                <CTableDataCell className="text-center">white</CTableDataCell>
                <CTableDataCell className="text-center">2</CTableDataCell>
                <CTableDataCell className="text-center">4</CTableDataCell>
                <CTableDataCell className="text-center">2</CTableDataCell>
                <CTableDataCell className="text-center">1</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell className="text-center">3</CTableDataCell>
                <CTableDataCell className="text-center">C</CTableDataCell>
                <CTableDataCell className="text-center">rose</CTableDataCell>
                <CTableDataCell className="text-center">2</CTableDataCell>
                <CTableDataCell className="text-center">4</CTableDataCell>
                <CTableDataCell className="text-center">1</CTableDataCell>
                <CTableDataCell className="text-center">2</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell className="text-center">4</CTableDataCell>
                <CTableDataCell className="text-center">D</CTableDataCell>
                <CTableDataCell className="text-center">red</CTableDataCell>
                <CTableDataCell className="text-center">2</CTableDataCell>
                <CTableDataCell className="text-center">1</CTableDataCell>
                <CTableDataCell className="text-center">3</CTableDataCell>
                <CTableDataCell className="text-center">4</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell className="text-center">5</CTableDataCell>
                <CTableDataCell className="text-center">E</CTableDataCell>
                <CTableDataCell className="text-center">Sparkling</CTableDataCell>
                <CTableDataCell className="text-center">3</CTableDataCell>
                <CTableDataCell className="text-center">4</CTableDataCell>
                <CTableDataCell className="text-center">1</CTableDataCell>
                <CTableDataCell className="text-center">1</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
  );
}

export default AdminList;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 40px;
  font-size: 50px;
`;