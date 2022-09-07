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
  const [featuredImage, setFeaturedImage] = useState(hp_1);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (counter === 1) {
        setFeaturedImage(hp_2);
        setCounter(2);
        return;
      } else if (counter === 2) {
        setFeaturedImage(hp_3);
        setCounter(3);
        return;
      }
      if (counter === 3) {
        setFeaturedImage(hp_1);
        setCounter(1);
        return;
      }
    }, 3000);
  });

  return (
    <>
      <Container fluid>
        <Row className="bg-white">
          <Col>
            <NavbarMain />
          </Col>
        </Row>
        <Row
          className="h-50 bg-light"
          bg-light
          style={{ paddingTop: 200, paddingBottom: 400 }}
        >
          <Col lg={1}></Col>
          <Col className="display-2" lg={3}>
            Brand New Collection of Golf Shoes
          </Col>
          <Col className="px-5" lg={8}>
            <Image src={featuredImage} rounded fluid width={800} />
          </Col>
          <Col lg={0}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
