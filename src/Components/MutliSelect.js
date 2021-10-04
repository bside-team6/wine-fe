import React, { useState, useCallback } from "react";
import Creatable from "react-select/creatable";

const aquaticCreatures = [
  { label: "롯데마트", value: "롯데마트" },
  { label: "이마트", value: "이마트" },
  { label: "홈플러스", value: "홈플러스" },
  { label: "코스트코", value: "코스트코" },
  { label: "트레이더스", value: "트레이더스" },
];

function MultiSelect(props) {
  return (
    <div className="App">
      <Creatable
        options={aquaticCreatures}
        isMulti
        onChange={(opt) => {
          props.handleInput(opt);
        }}
      />
    </div>
  );
}

export default MultiSelect;
