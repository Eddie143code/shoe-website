import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { useSelector, useDispatch } from "react-redux";
import { navhome, navproducts } from "../features/page/pageSlice";

const Navbar_Main = () => {
  const { home, products } = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const onClick = (e) => {
    if (e.currentTarget.id === "home") {
      dispatch(navhome());
    } else if (e.currentTarget.id === "products") {
      dispatch(navproducts());
    }
  };

  return (
    <>
      <Navbar expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand id="home" onClick={onClick}>
            SneakerZone
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link id="home" onClick={onClick}>
              Home
            </Nav.Link>
            <Nav.Link id="products" onClick={onClick}>
              Products
            </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar_Main;
