import React from "react";
import NavbarMain from "../NavbarMain";
import White from "./images/one.png";
import Black from "./images/two.png";
import Red from "./images/three.png";
import Gray from "./images/four.png";

import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import { useSelector, useDispatch } from "react-redux";
import { navcart } from "../../features/page/pageSlice";
import {
  increase,
  decrease,
  clearCart,
  toCart,
} from "../../features/cart/cartSlice";

const Products = () => {
  const dispatch = useDispatch();

  const cartClick = () => {
    dispatch(navcart());
  };

  const addToCart = (e) => {
    let id = e.currentTarget.id;
    dispatch(toCart({ id }));
  };

  return (
    <Container fluid>
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
              <Image lg={6} src={White} fluid width={200} />
            </Col>
            <Col className="py-3" lg={3}>
              <h1>R220</h1>
            </Col>
            <Col className="py-3" lg={3}>
              <Button id={1} onClick={addToCart} size="lg">
                Add the Cart
              </Button>
            </Col>
          </Row>
          <Row className="py-5 border-bottom">
            <Col>
              <Image lg={6} src={Black} rounded fluid width={200} />
            </Col>
            <Col className="py-3" lg={3}>
              <h1>R300</h1>
            </Col>
            <Col className="py-3" lg={3}>
              <Button id={2} onClick={addToCart} size="lg">
                Add the Cart
              </Button>
            </Col>
          </Row>
          <Row className="py-5 border-bottom">
            <Col lg={6}>
              <Image src={Red} rounded fluid width={200} />
            </Col>
            <Col className="py-3" lg={3}>
              <h1>R250</h1>
            </Col>
            <Col className="py-3" lg={3}>
              <Button id={3} onClick={addToCart} size="lg">
                Add the Cart
              </Button>
            </Col>
          </Row>
          <Row className="py-5">
            <Col lg={6}>
              <Image src={Gray} rounded fluid width={200} />
            </Col>
            <Col className="py-3" lg={3}>
              <h1>R200</h1>
            </Col>
            <Col className="py-3" lg={3}>
              <Button id={4} onClick={addToCart} size="lg">
                Add the Cart
              </Button>
            </Col>
          </Row>
        </Col>
        <Col lg={3}>
          <Button onClick={cartClick} size="lg">
            Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
