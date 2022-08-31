import React from "react";
import NavbarMain from "../NavbarMain";
import Shoe_one from "./images/one.png";
import Shoe_two from "./images/two.png";
import Shoe_three from "./images/three.png";
import Shoe_four from "./images/four.png";

import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const Order = () => {
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
          <Col lg={3}></Col>
          <Col lg={6}>
            <Row className="py-5 border-bottom">
              <Col>
                <Image lg={6} src={Shoe_one} fluid width={200} />
              </Col>
              <Col className="py-3" lg={3}>
                <h1>R220</h1>
              </Col>
              <Col className="py-3" lg={3}>
                <Button size="lg">Add the Cart</Button>
              </Col>
            </Row>
            <Row className="py-5 border-bottom">
              <Col>
                <Image lg={6} src={Shoe_two} rounded fluid width={200} />
              </Col>
              <Col className="py-3" lg={3}>
                <h1>R300</h1>
              </Col>
              <Col className="py-3" lg={3}>
                <Button size="lg">Add the Cart</Button>
              </Col>
            </Row>
            <Row className="py-5 border-bottom">
              <Col lg={6}>
                <Image src={Shoe_three} rounded fluid width={200} />
              </Col>
              <Col className="py-3" lg={3}>
                <h1>R250</h1>
              </Col>
              <Col className="py-3" lg={3}>
                <Button size="lg">Add the Cart</Button>
              </Col>
            </Row>
            <Row className="py-5">
              <Col lg={6}>
                <Image src={Shoe_four} rounded fluid width={200} />
              </Col>
              <Col className="py-3" lg={3}>
                <h1>R200</h1>
              </Col>
              <Col className="py-3" lg={3}>
                <Button size="lg">Add the Cart</Button>
              </Col>
            </Row>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Stack>
    </Container>
  );
};

export default Order;
