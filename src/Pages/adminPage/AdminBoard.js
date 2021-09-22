import React from "react";
import { CContainer, CRow, CCol } from "@coreui/react";

function AdminBoard() {
  return (
    <CContainer>
      <CRow>
        <CCol lg="5" className="bg-success py-3">
          col-lg-5
        </CCol>
        <CCol md="4" className="bg-warning py-3">
          col-md-4
        </CCol>
        <CCol sm="3" className="bg-danger py-3">
          col-sm-3
        </CCol>
      </CRow>
    </CContainer>
  );
}

export default AdminBoard;
