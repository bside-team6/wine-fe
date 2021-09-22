import React from "react";
import { CContainer, CRow, CCol, CButton } from "@coreui/react";
import { Link } from "react-router-dom";

function AdminBoard() {
  return (
    <CContainer>
      <CRow>
        <CCol lg="5" className="bg-success py-3">
            <Link to="./admin/listWine"> 
                <CButton> 와인목록보기 </CButton>
            </Link>
        </CCol>
        <CCol md="5" className="bg-warning py-3">
            <Link to="./admin/registWine"> 
                <CButton> 와인 등록하기 </CButton>
            </Link>
        </CCol>
      </CRow>
    </CContainer>
  );
}

export default AdminBoard;