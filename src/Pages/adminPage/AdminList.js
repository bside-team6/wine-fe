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

  const [wineList, setWineList] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const limit = 10;
  const pageNum = [];
  
  const handlePageChange = (page) => { 
    setPage(page-1); 
  };

  useEffect(() => {
    fetch(
      `http://ec2-13-125-218-253.ap-northeast-2.compute.amazonaws.com:8082//api/v1/wine?sort=id,desc&size=10&isPublic=true&page=${page}`
    )
      .then((res) => {return res.json();})
      .then((data) => {
        console.log(data)
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
  }, [page]);

  return (
    <div>
      <Header>Wineasy Admin-와인목록</Header>
      <CCard className="mb-4">
        <Link to="./admin/registWine"> 
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
		            <CTableHeaderCell className="text-center">Wine Variety Name</CTableHeaderCell>
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