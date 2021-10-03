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
  CInputGroup, 
  CInputGroupText, 
  CFormInput,
  CFormSelect,
  CTableFoot,
  CButton,
} from "@coreui/react";
import Pagination from "react-js-pagination"; // install 해주어야 함.
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Style from './Paging.css';

function AdminList() {
  const style = {
    marginTop: "10px",
    marginBottom: "10px",
    marginRight: "10px",
    float:"right"
  };
  const nodataStyle = {
    paddingTop: "10px",
    height: "35px"
  };
  
  const searchStyle = {
    width:"700px",
    height:"40px",
    marginTop: "10px",
    marginLeft: "20px",
    float:"left"
  };

  const selectStyle = {
    marginLeft: "10px"
  };

  const [wineList, setWineList] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [sort, setSort] = useState("id,desc");
  const [wineNm, setWineNm] = useState("");
  const [publicType, setPublicType] = useState("");
  const limit = 10;
  const pageNum = [];
  
  const handlePageChange = (page) => { 
    setPage(page-1); 
  };

  const handleSortChange = (sort) => { 
    //setSort(); 
  };

  const handlePublicTypeChange = (publicType) => {
    console.log("******publicType : " + publicType); 
    setPublicType(publicType); 
  };

  useEffect(() => {
    fetch(
      `http://ec2-13-125-218-253.ap-northeast-2.compute.amazonaws.com:8082//api/v1/wine?size=10&page=${page}&sort=${sort}&isPublic=${publicType}`
    )
      .then((res) => {return res.json();})
      .then((data) => {
        console.log("page : " + page)
        console.log("publicType : "  + publicType)
        console.log("sort : "  + sort)
        if(data.result){
          setWineList(data.data.wineList);
          console.log('wineList : '+ wineList);
          console.log('totalPages'+data.data.totalPages);
          for(let i = 1 ; i <= data.data.totalPages ; i++) {
            pageNum.push(i);
          }
          setTotal(data.data.totalElements);
          console.log(pageNum)
          //setPageCnt(data.data.totalPages);
        }else{
          console.log('false');
        }
        

      });
  }, [page, sort, publicType, wineNm]);

  return (
    <div>
      <Header>Wineasy Admin-와인목록</Header>
      <CCard className="mb-4">
        <Link to="./admin/registWine"> 
            <CButton style={style}> 와인 등록하기 </CButton>
        </Link>
        <CCardHeader>WINE LIST</CCardHeader>
        <CInputGroup className="mb-3" style={searchStyle}>
          <CInputGroupText id="basic-addon3">
            와인명(KR)
          </CInputGroupText>
          <CFormInput id="sWineName" aria-describedby="basic-addon3" />
          <CInputGroupText id="basic-addon1" style={selectStyle}>
            공개여부
          </CInputGroupText>
          <CFormSelect aria-label="Default select example">
            <option>선택</option>
            <option value="true">공개</option>
            <option value="false">미공개</option>
          </CFormSelect>
          <CButton style={selectStyle}> 검색 </CButton>
        </CInputGroup>
        
        <CCardBody>
          <CTable hover responsive align="middle" className="mb-0 border">
            <CTableHead color="light">
              <CTableRow>
                <Link> <CTableHeaderCell className="text-center">와인번호</CTableHeaderCell></Link>
                <CTableHeaderCell className="text-center">와인명 (KR)</CTableHeaderCell>
                <CTableHeaderCell className="text-center">종류</CTableHeaderCell>
		            <CTableHeaderCell className="text-center">품종</CTableHeaderCell>
                <CTableHeaderCell className="text-center">이미지 등록 여부</CTableHeaderCell>
		            <CTableHeaderCell className="text-center">공개여부</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              { total === 0
                ? <CTableDataCell className="text-center" colSpan='4' style={nodataStyle}> 데이터가 존재하지 않습니다.</CTableDataCell>
                :
                wineList.map(wine => (
                  <CTableRow key={wine.id}>
                    <CTableDataCell className="text-center"><Link to={`./admin/registWine?wineNo=${wine.id}`}>{wine.id}</Link></CTableDataCell>
                    <CTableDataCell className="text-center"><Link to={`./admin/registWine?wineNo=${wine.id}`}>{wine.wineNameKr}</Link></CTableDataCell>
                    <CTableDataCell className="text-center"><Link to={`./admin/registWine?wineNo=${wine.id}`}>{wine.wineType}</Link></CTableDataCell>
                    <CTableDataCell className="text-center"><Link to={`./admin/registWine?wineNo=${wine.id}`}>{wine.wineVarietyName}</Link></CTableDataCell>
                    <CTableDataCell className="text-center"><Link to={`./admin/registWine?wineNo=${wine.id}`}>{wine.isImageRegistered}</Link></CTableDataCell>
                    <CTableDataCell className="text-center"><Link to={`./admin/registWine?wineNo=${wine.id}`}>{wine.isPublic}</Link></CTableDataCell>
                  </CTableRow>
                ))
              }
             </CTableBody>
          </CTable>
          <Pagination activePage={page+1} itemsCountPerPage={10} totalItemsCount={total} pageRangeDisplayed={10} prevPageText={"‹"} nextPageText={"›"} onChange={handlePageChange} />
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
