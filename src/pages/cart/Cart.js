import React from "react";
import NavbarMain from "../NavbarMain";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Shoe_one from "./images/one.png";
import Shoe_two from "./images/two.png";
import Shoe_three from "./images/three.png";
import Shoe_four from "./images/four.png";

const Cart = () => {
  return (
    <Container fluid>
      <Stack gap={5}>
        <Row>
          <Col bg="white"></Col>
        </Row>
        <Row>
          <Col>
            <NavbarMain fluid />
          </Col>
        </Row>
        <Row>
          <Col lg={4}></Col>
          <Col lg={4}>
            <Row className="py-5 ">
              <Col>
                <Image lg={8} src={Shoe_one} fluid width={120} />
              </Col>
              <Col className="py-1" lg={1}>
                <Row>^</Row>
                <Row>^</Row>
              </Col>
              <Col className="py-1" lg={1}>
                <h3>R200</h3>
              </Col>
            </Row>
            <Row className="py-5">
              <Col>
                <Image lg={8} src={Shoe_two} rounded fluid width={120} />
              </Col>
              <Col className="py-1" lg={1}>
                <Row>^</Row>
                <Row>^</Row>
              </Col>
              <Col className="py-1" lg={1}>
                <h3>R200</h3>
              </Col>
            </Row>
            <Row className="py-5">
              <Col>
                <Image lg={8} src={Shoe_three} rounded fluid width={120} />
              </Col>
              <Col className="py-1" lg={1}>
                <Row>^</Row>
                <Row>^</Row>
              </Col>
              <Col className="py-1" lg={1}>
                <h3>R200</h3>
              </Col>
            </Row>
            <Row className="py-5">
              <Col>
                <Image lg={8} src={Shoe_four} rounded fluid width={120} />
              </Col>
              <Col className="py-1" lg={1}>
                <Row>^</Row>
                <Row>^</Row>
              </Col>
              <Col className="py-1" lg={1}>
                <h3>R200</h3>
              </Col>
            </Row>
          </Col>
          <Row className=" py-2">
            <Col lg={4}></Col>
            <Col lg={5}>
              <Row className="py-5 border-top">
                <Col lg={3}>
                  <h1>Total:</h1>
                </Col>
                <Col lg={6}></Col>
                <Col variant="Primary" lg={3}>
                  <h1>XXX</h1>
                </Col>
              </Row>
              <Row>
                <Col lg={3}></Col>
                <Col lg={6}></Col>
                <Col variant="Primary" lg={3}>
                  <Button>Pay Now</Button>
                </Col>
              </Row>
            </Col>
            <Col lg={3}></Col>
          </Row>

          <Col lg={4}></Col>
        </Row>
      </Stack>
    </Container>
  );
};

export default Cart;
