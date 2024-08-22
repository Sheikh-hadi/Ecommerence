import { Col, Row } from "antd";
import React from "react";

const Card = ({ data }) => {
  console.log(data);
  return (
    <Row style={{ border: "2px solid grey", background: "red" }}>
      {data.map((product, index) => {
        return (
          <Col
            xs={12}
            sm={24}
            md={8}
            lg={6}
            key={index}
            style={{ padding: "10px", border: "2px solid black", }}
          >
            <img src="image.png" alt=""></img>
            <h2>-----</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <button> Add to Cart</button>
          </Col>
        );
      })}
    </Row>
  );
};

export default Card;
