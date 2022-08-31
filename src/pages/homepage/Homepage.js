import { useEffect, useState } from "react";
import NavbarMain from "../NavbarMain";
import hp_1 from "./images/hp_1.png";
import hp_2 from "./images/hp_2.png";
import hp_3 from "./images/hp_3.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Homepage = () => {
  const [featured, setFeatured] = useState(hp_1);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (counter === 1) {
        setFeatured(hp_2);
        setCounter(2);
        return;
      } else if (counter === 2) {
        setFeatured(hp_3);
        setCounter(3);
        return;
      }
      if (counter === 3) {
        setFeatured(hp_1);
        setCounter(1);
        return;
      }
    }, 4500);
  });
  return (
    <>
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
            <Col lg={3}>Great Value</Col>
            <Col lg={8}>
              <Image src={featured} rounded fluid width={1000} />
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Stack>
      </Container>
    </>
  );
};

export default Homepage;
