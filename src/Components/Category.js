import Card from "../Common/Card";
import productList from "../Models/productListModel";
import categoriesList from "../Models/categoryListModel";
import { Col, Row } from "antd";

const Category = ({ category }) => {
  console.log("category: ", category);
  let currentCategories;

  if (category == "all") {
    currentCategories = categoriesList;
  } else {
    currentCategories = categoriesList.filter(
      (li) => li.id === parseInt(category)
    );
  }

  console.log("currentCategories: ", currentCategories);
  return (
    <div className="container">
      <Row gutter={16}>
        {currentCategories.map((cat) => {
          // Filter products based on the current category id
          const filterProduct = productList.filter(
            (product) => product.categoryId === cat.id
          );

          return (
            <Col span={24} key={cat.id}>
              <h1>{cat.name.toLocaleUpperCase()}</h1>
              <hr />
              <Card data={filterProduct} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Category;
