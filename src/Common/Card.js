import { Button, Col, Image, Row } from "antd";
import React from "react";
import "./Card.css";
const Card = ({ data }) => {
  console.log(data);
  return (
    <Row justify={"center"} style={{ margin: "10px 0px" }}>
      {data.map((product, index) => {
        return (
          <Col
            className="card"
            xs={12}
            sm={24}
            md={8}
            lg={5}
            key={index}
            style={{
              padding: "20px",
              border: "2px solid black",
              margin: "10px",
              borderRadius: "8px",
            }}
          >
            <Image src="download.jpeg" alt="Product Image" preview={false} />
            <h2
              style={{
                padding: "4px",
              }}
            >
              {product.title}
            </h2>
            <h4
              style={{
                padding: "4px",
              }}
            >
              `price:${product.price}`
            </h4>
            <p
              style={{
                padding: "4px",
              }}
            >
              {product.description}
            </p>
            <Button
              className="btn-card"
              size={"large"}
              block={true}
              style={{
                border: "2px solid grey",
                background: "red",
                color: "white",
                fontSize: "18px",
                borderRadius: "none",
              }}
            >
              Add to Cart
            </Button>
          </Col>
        );
      })}
    </Row>
  );
};

export default Card;
