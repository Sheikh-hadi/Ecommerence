import React, { useState } from "react";
import Category from "../Components/Category";
import FilterDropdown from "../Components/FilterDropdown";

const Home = () => {
  const [category, setCategory] = useState("Electronics"); // Default value
  const handleCategoryChange = (value) => {
    setCategory(value); // Update state
  };
  console.log("category: ", category)

  return (
    <>
      <FilterDropdown handleCategoryChange={handleCategoryChange} />
      <Category category={category}/> {/* Pass the selected category */}
    </>
  );
};

export default Home;
