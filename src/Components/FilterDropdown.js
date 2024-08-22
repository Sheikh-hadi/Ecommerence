import React from "react";
import { Select } from "antd";

const { Option } = Select;

const FilterDropdown = ({ handleCategoryChange }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    handleCategoryChange(value); // Call the passed function
  };

  return (
    <Select
      defaultValue="Electronics" // Default value
      style={{ width: 120 }}
      onChange={handleChange} // Handle change
    >
      <Option value="1">Electronics</Option>
      <Option value="2">Clothing</Option>
      <Option value="3">Home Appliances</Option>
      <Option value="4">Books</Option>
    </Select>
  );
};

export default FilterDropdown;
