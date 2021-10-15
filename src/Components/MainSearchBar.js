import React, { useState, useCallback } from "react";
import { Router, withRouter } from "react-router";
import styled from "styled-components";

function MainSearchBar(props) {
  return (
    <Wrap>
      <SearchContainer>
        <SearchForm>
          <InnerSearch className="on">음식</InnerSearch>
          <InnerSearch>가격대</InnerSearch>
          <InnerSearch>당도</InnerSearch>
          <SearchButton>버튼</SearchButton>
        </SearchForm>
        <SearchOpt></SearchOpt>
      </SearchContainer>
    </Wrap>
  );
}

// export default withRouter(MainSearchBar);
export default MainSearchBar;

const Wrap = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 10px);
  justify-content: center;
  align-items: center;
`;
const SearchContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 486px;
  min-height: 322px;
  /* background-color: ${(props) => props.theme.primePurple}; */
`;
const SearchForm = styled.div`
  display: flex;

  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 0;
  border-radius: 30px;
  border: 3px solid ${(props) => props.theme.primePurple};
`;

const InnerSearch = styled.div`
  display: flex;
  width: 33%;
  border-radius: 30px;
  &.on {
    background-color: ${(props) => props.theme.lightPurple2};
  }
`;

const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: ${(props) => props.theme.primePurple};
  width: 50px;
  height: 50px;
  right: 0;
  border-radius: 50%;
  margin: 2px 4px;
`;

const SearchOpt = styled.div`
  display: flex;
`;
