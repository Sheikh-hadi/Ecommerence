import Card from "../Common/Card";
import productList from "../Models/productList";
import categoriesList from "../Models/categoryList";
import { Col, Row } from "antd";

const Category = ({ category }) => {
  // Filter categories based on the passed category prop
  const currentCategories = categoriesList.filter((li) => li.id === parseInt(category));

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
              <h1>{cat.name}</h1>
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
