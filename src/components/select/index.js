import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import { options } from "../../data/data";
import { colourStyles } from "../../styles/Select";
const animatedComponents = makeAnimated();

export default function DropDown({ onChange }) {
  return (
    <div className="content" style={{ borderBottom: " 2px solid #f0f0f0" }}>
      <Select
        styles={colourStyles}
        closeMenuOnSelect={false}
        components={animatedComponents}
        placeholder="Selecione..."
        menuColor="red"
        onChange={onChange}
        components={{
          IndicatorSeparator: () => null,
        }}
        // defaultValue={[options[0], options[0]]}
        isMulti
        options={options}
      />
    </div>
  );
}
