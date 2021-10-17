import React, { useState } from 'react';
import styled from 'styled-components';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CFormSelect,
  CButton,
  CSpinner,
} from '@coreui/react';
import Pagination from 'react-js-pagination';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getAllWines } from 'helpers/api';

const style = {
  marginTop: '10px',
  marginBottom: '10px',
  marginRight: '10px',
  float: 'right',
};
const nodataStyle = {
  paddingTop: '10px',
  height: '35px',
};

const searchStyle = {
  width: '700px',
  height: '40px',
  marginTop: '10px',
  marginLeft: '20px',
  float: 'left',
};

const selectStyle = {
  marginLeft: '10px',
};

const sortStyle = {
  fontSize: '10px',
  padding: '5px 5px',
  color: 'secondary',
};

function AdminList() {
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState('id,desc');
  const [wineName, setWineName] = useState('');
  const [searchText, setSearchText] = useState('');
  const [publicType, setPublicType] = useState('');

  const handlePageChange = (page) => setPage(page - 1);

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
    setWineName(searchText);
    setPage(0);
  };

  const { data, isLoading } = useQuery(
    ['get-all-wines', sort, 10, wineName, publicType, page],
    () => getAllWines(sort, 10, wineName, publicType, page),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      select: (data) => data.data,
    },
  );

  return (
    <div>
      <Header>Wineasy Admin-와인목록</Header>
      <CCard className="mb-4">
        <Link to="/admin/regist">
          <CButton style={style}> 와인 등록하기 </CButton>
        </Link>
        <CCardHeader>WINE LIST</CCardHeader>
        <CInputGroup className="mb-3" style={searchStyle}>
          <CInputGroupText>와인명(KR)</CInputGroupText>
          <CFormInput id="sWineName" onChange={handleWineNameChange} />
          <CButton style={selectStyle} onClick={setSearchWineName}>
            검색
          </CButton>
          <CInputGroupText style={selectStyle}>공개여부</CInputGroupText>
          <CFormSelect onChange={handlePublicTypeChange}>
            <option value="">전체</option>
            <option value="true">공개</option>
            <option value="false">비공개</option>
          </CFormSelect>
        </CInputGroup>
        {isLoading ? (
          <div className="my-5 d-flex justify-content-center">
            <CSpinner color="primary" />
          </div>
        ) : (
          <CCardBody>
            <CTable hover responsive align="middle" className="mb-0 border">
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell className="text-center">
                    와인번호
                    <CButton
                      style={sortStyle}
                      color="secondary"
                      onClick={() => setSort('id,asc')}
                    >
                      ▲
                    </CButton>
                    <CButton
                      style={sortStyle}
                      color="secondary"
                      onClick={() => setSort('id,desc')}
                    >
                      ▼
                    </CButton>
                  </CTableHeaderCell>
                  <CTableHeaderCell className="text-center">
                    와인명 (KR)
                    <CButton
                      style={sortStyle}
                      color="secondary"
                      onClick={() => setSort('nameKr,asc')}
                    >
                      ▲
                    </CButton>
                    <CButton
                      style={sortStyle}
                      color="secondary"
                      onClick={() => setSort('nameKr,desc')}
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
                {data?.totalElements === 0 ? (
                  <CTableRow>
                    <CTableDataCell
                      className="text-center"
                      colSpan="6"
                      style={nodataStyle}
                    >
                      데이터가 존재하지 않습니다.
                    </CTableDataCell>
                  </CTableRow>
                ) : (
                  data?.wineList.map((wine) => (
                    <CTableRow key={wine.id}>
                      <CTableDataCell className="text-center">
                        <Link to={`/admin/detail/${wine.id}`}>{wine.id}</Link>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {wine.wineNameKr}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {wine.wineType}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {wine.wineVarietyName}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {String(wine.isImageRegistered)}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {String(wine.isPublic)}
                      </CTableDataCell>
                    </CTableRow>
                  ))
                )}
              </CTableBody>
            </CTable>
            <Pagination
              activePage={data?.currentPage + 1}
              totalItemsCount={data?.totalElements}
              itemsCountPerPage={10}
              pageRangeDisplayed={10}
              prevPageText="‹"
              nextPageText="›"
              onChange={handlePageChange}
            />
          </CCardBody>
        )}
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
