import { Image, Row, Col, Button } from "antd";
import React from "react";

const Header = () => {
  return (
    <>
      <Row
        align={"middle"}
        style={{
          border: "2px solid black",
          padding: "20px",
          background: "grey",
        }}
      >
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <Image src="logo512.png" alt="" width={60} />
        </Col>
        <Col md={10} lg={10} xl={10}>
          <Row gutter={28} justify={"center"}>
            <Col>
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  fontSize: "22px",
                  color: "wheat",
                }}
              >
                Home
              </a>
            </Col>
            <Col>
              <a
                href="/about"
                style={{
                  textDecoration: "none",
                  fontSize: "22px",
                  color: "wheat",
                }}
              >
                {" "}
                About
              </a>
            </Col>
            <Col>
              <a
                href="/poduct"
                style={{
                  textDecoration: "none",
                  fontSize: "22px",
                  color: "wheat",
                }}
              >
                Product
              </a>
            </Col>
          </Row>
        </Col>
        <Col md={6} lg={6} xl={6}>
          <Row gutter={10} justify={"end"}>
            <Col>
              <Button> Login </Button>
            </Col>
            <Col>
              <Button> SignUp</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Header;
