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
import Style from "./Paging.css";

function AdminList() {
  const style = {
    marginTop: "10px",
    marginBottom: "10px",
    marginRight: "10px",
    float: "right",
  };
  const nodataStyle = {
    paddingTop: "10px",
    height: "35px",
  };

  const searchStyle = {
    width: "700px",
    height: "40px",
    marginTop: "10px",
    marginLeft: "20px",
    float: "left",
  };

  const selectStyle = {
    marginLeft: "10px",
  };

  const sortStyle = {
    fontSize: "10px",
    padding: "5px 5px",
    color: "secondary",
  };

  const [wineList, setWineList] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [sort, setSort] = useState("id,desc");
  const [wineName, setWineName] = useState("");
  const [searchText, setSearchText] = useState("");
  const [publicType, setPublicType] = useState("");
  const limit = 10;
  const pageNum = [];

  const handlePageChange = (page) => {
    setPage(page - 1);
  };

  const handlePublicTypeChange = (publicType) => {
    //와인목록 비공개/공개 선택자 변경
    setPublicType(publicType.target.value);
  };

  const handleWineNameChange = (e) => {
    //와인명 검색값 세팅
    setSearchText(e.target.value);
  };

  const setSearchWineName = (e) => {
    //와인명 검색 클릭 시
    console.log(searchText);
    setWineName(searchText);
    setPage(0);
  };

  useEffect(() => {
    fetch(
      `http://ec2-13-125-218-253.ap-northeast-2.compute.amazonaws.com:8082//api/v1/wine?size=10&page=${page}&sort=${sort}&isPublic=${publicType}&wineName=${wineName}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("page : " + page);
        console.log("setPublicType : " + publicType);
        console.log("sort : " + sort);
        console.log("wineName : " + wineName);
        if (data.result) {
          setWineList(data.data.wineList);
          console.log("wineList : " + wineList);
          console.log("totalPages" + data.data.totalPages);
          for (let i = 1; i <= data.data.totalPages; i++) {
            pageNum.push(i);
          }
          setTotal(data.data.totalElements);
          console.log(pageNum);
          //setPageCnt(data.data.totalPages);
        } else {
          console.log("false");
        }
      });
  }, [page, sort, publicType, wineName]);

  return (
    <div>
      <Header>Wineasy Admin-와인목록</Header>
      <CCard className="mb-4">
        <Link to="./admin/regist">
          <CButton style={style}> 와인 등록하기 </CButton>
        </Link>
        <CCardHeader>WINE LIST</CCardHeader>
        <CInputGroup className="mb-3" style={searchStyle}>
          <CInputGroupText id="basic-addon3">와인명(KR)</CInputGroupText>
          <CFormInput
            id="sWineName"
            aria-describedby="basic-addon3"
            onChange={handleWineNameChange}
          />
          <CButton style={selectStyle} onClick={setSearchWineName}>
            {" "}
            검색{" "}
          </CButton>
          <CInputGroupText id="basic-addon1" style={selectStyle}>
            공개여부
          </CInputGroupText>
          <CFormSelect
            aria-label="Default select example"
            onChange={handlePublicTypeChange}
          >
            <option value="">전체</option>
            <option value="true">공개</option>
            <option value="false">비공개</option>
          </CFormSelect>
        </CInputGroup>

        <CCardBody>
          <CTable hover responsive align="middle" className="mb-0 border">
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell className="text-center">
                  와인번호
                  <CButton
                    style={sortStyle}
                    color="secondary"
                    onClick={() => {
                      setSort("id,asc");
                    }}
                  >
                    ▲
                  </CButton>
                  <CButton
                    style={sortStyle}
                    color="secondary"
                    onClick={() => {
                      setSort("id,desc");
                    }}
                  >
                    ▼
                  </CButton>
                </CTableHeaderCell>
                <CTableHeaderCell className="text-center">
                  와인명 (KR)
                  <CButton
                    style={sortStyle}
                    color="secondary"
                    onClick={() => {
                      setSort("nameKr,asc");
                    }}
                  >
                    ▲
                  </CButton>
                  <CButton
                    style={sortStyle}
                    color="secondary"
                    onClick={() => {
                      setSort("nameKr,desc");
                    }}
                  >
                    ▼
                  </CButton>
                </CTableHeaderCell>
                <CTableHeaderCell className="text-center">
                  종류
                </CTableHeaderCell>
                <CTableHeaderCell className="text-center">
                  품종
                </CTableHeaderCell>
                <CTableHeaderCell className="text-center">
                  이미지 등록 여부
                </CTableHeaderCell>
                <CTableHeaderCell className="text-center">
                  공개여부
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {total === 0 ? (
                <CTableDataCell
                  className="text-center"
                  colSpan="6"
                  style={nodataStyle}
                >
                  {" "}
                  데이터가 존재하지 않습니다.
                </CTableDataCell>
              ) : (
                wineList.map((wine) => (
                  <CTableRow key={wine.id}>
                    <CTableDataCell className="text-center">
                      <Link to={`./admin/detail/${wine.id}`}>{wine.id}</Link>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <Link to={`./admin/detail/${wine.id}`}>
                        {wine.wineNameKr}
                      </Link>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <Link to={`./admin/detail/${wine.id}`}>
                        {wine.wineType}
                      </Link>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <Link to={`./admin/detail/${wine.id}`}>
                        {wine.wineVarietyName}
                      </Link>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <Link to={`./admin/detail/${wine.id}`}>
                        {wine.isImageRegistered === true ? "true" : "false"}
                      </Link>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <Link to={`./admin/detail/${wine.id}`}>
                        {wine.isPublic === true ? "true" : "false"}
                      </Link>
                    </CTableDataCell>
                  </CTableRow>
                ))
              )}
            </CTableBody>
          </CTable>
          <Pagination
            activePage={page + 1}
            itemsCountPerPage={10}
            totalItemsCount={total}
            pageRangeDisplayed={10}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
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
