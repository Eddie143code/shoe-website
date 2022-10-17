import React, { useEffect } from "react";
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

import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, calcTotal } from "../../features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total, amount } = useSelector((state) => state.cart);

  const clickIncrease = (e) => {
    const id = e.currentTarget.id;
    dispatch(increase({ id }));
  };

  const clickDecrease = (e) => {
    const id = e.currentTarget.id;
    dispatch(decrease({ id }));
  };

  useEffect(() => {
    dispatch(calcTotal());
  }, [amount]);

  return (
    <Container fluid>
      <Stack>
        <Row>
          <Col>
            <NavbarMain fluid />
          </Col>
        </Row>
        <Row style={{ paddingTop: 200 }}>
          <Col lg={4}></Col>
          <Col lg={4}>
            {items &&
              items.map((item) => {
                if (!item.inCart) {
                  return;
                }
                return (
                  <Row key={item.id} className="py-1 ">
                    <Col lg={6}>
                      <Image lg={8} src={item.name} fluid width={120} />
                    </Col>
                    <Col className="py-4" lg={2}>
                      {item.quantity}
                    </Col>
                    <Col className="" lg={2}>
                      <Row>
                        <Button
                          id={item.id}
                          onClick={clickIncrease}
                          variant="none"
                        >
                          <ChevronUp size={25} />
                        </Button>
                      </Row>
                      <Row>
                        <Button
                          id={item.id}
                          onClick={clickDecrease}
                          variant="none"
                        >
                          <ChevronDown size={25} />
                        </Button>
                      </Row>
                    </Col>
                    <Col className="py-4" lg={2}>
                      <h3>R{item.price}</h3>
                    </Col>
                  </Row>
                );
              })}
          </Col>
          <Row className=" py-2">
            <Col lg={4}></Col>
            <Col lg={4}>
              <Row className="py-5 border-top">
                <Col lg={3}>
                  <h1>Total:</h1>
                </Col>
                <Col lg={6}></Col>
                <Col variant="Primary" lg={3}>
                  <h1>R{total}</h1>
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
            <Col lg={4}></Col>
          </Row>

          <Col lg={4}></Col>
        </Row>
      </Stack>
    </Container>
  );
};

export default Cart;
