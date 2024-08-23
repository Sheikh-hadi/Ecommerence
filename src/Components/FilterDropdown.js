import React, { useState } from "react";
import { Select } from "antd";
import categoryOptionList from "../Models/categoryOptionModel";

const FilterDropdown = ({ handleCategoryChange }) => {
  // console.log("categoryOptionList: ", categoryOptionList);
  const [value, setValue] = useState("all");
  handleCategoryChange(value);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setValue(value);
  };

  return (
    <Select
      defaultValue="all"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={categoryOptionList}
    />
  );
};

export default FilterDropdown;
