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
      <Row className="h-50 bg" style={{ paddingTop: 100 }}>
        <Col lg={2}></Col>
        <Col lg={9}>
          <Row className="py-10">
            <Col lg={6} style={{ paddingBottom: 150 }}>
              <Image src={White} fluid width={600} />
            </Col>
            <Col className="py-3" lg={3}>
              <h1>R220</h1>

              <h3 className="shoe-description">White Golf Shoe</h3>
            </Col>
            <Col className="py-3" lg={3}>
              <Button id={1} onClick={addToCart} size="lg">
                Add to Cart
              </Button>
            </Col>
          </Row>
          <Row className="py-5">
            <Col style={{ paddingBottom: 100 }}>
              <Image lg={6} src={Black} rounded fluid width={600} />
            </Col>
            <Col className="py-3" lg={3}>
              <h1>R300</h1>
              <h3 className="shoe-description">Black Golf Shoe</h3>
            </Col>
            <Col className="py-3" lg={3}>
              <Button id={2} onClick={addToCart} size="lg">
                Add to Cart
              </Button>
            </Col>
          </Row>
          <Row className="py-5">
            <Col lg={6} style={{ paddingBottom: 100 }}>
              <Image src={Red} rounded fluid width={600} />
            </Col>
            <Col className="py-3" lg={3}>
              <h1>R250</h1>
              <h3 className="shoe-description">Red Golf Shoe</h3>
            </Col>
            <Col className="py-3" lg={3}>
              <Button id={3} onClick={addToCart} size="lg">
                Add to Cart
              </Button>
            </Col>
          </Row>
          <Row className="py-5">
            <Col lg={6}>
              <Image src={Gray} rounded fluid width={600} />
            </Col>
            <Col className="py-3" lg={3}>
              <h1>R200</h1>
              <h3 className="shoe-description">Grey Golf Shoe</h3>
            </Col>
            <Col className="py-3" lg={3}>
              <Button id={4} onClick={addToCart} size="lg">
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Col>
        <Col lg={1}>
          <Button onClick={cartClick} size="lg">
            Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
