import React from "react";
import NavbarMain from "../NavbarMain";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import White from "./images/one.png";
import Black from "./images/two.png";
import Red from "./images/three.png";
import Gray from "./images/four.png";

import { ChevronDown } from "react-bootstrap-icons";

import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  console.log(items);
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
            {items &&
              items.map((item) => {
                if (!item.inCart) {
                  return;
                }
                return (
                  <Row key={item.id} className="py-5 ">
                    <Col>
                      <Image lg={8} src={item.name} fluid width={120} />
                    </Col>
                    <Col className="py-1" lg={1}>
                      <Row>^</Row>
                      <Row>
                        <ChevronDown size={20} />
                      </Row>
                    </Col>
                    <Col className="py-1" lg={1}>
                      <h3>{item.price}</h3>
                    </Col>
                  </Row>
                );
              })}
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
