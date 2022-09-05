import { useState } from "react";
import Homepage from "./pages/homepage/Homepage";
import Order from "./pages/products/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/cart/Cart";
import { useSelector, useDispatch } from "react-redux";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [about, setAbout] = useState("");
  const [contact, setContact] = useState("");

  const dispatch = useDispatch();

  const { home, products, cartpage } = useSelector((state) => state.page);

  if (cartpage) {
    return (
      <main>
        <Cart />
      </main>
    );
  }

  if (products) {
    return (
      <main>
        <Order />
      </main>
    );
  }

  if (about) {
    return (
      <main>
        <About />
      </main>
    );
  }

  if (contact) {
    return (
      <main>
        <Contact />
      </main>
    );
  }

  return (
    <main>
      <Homepage />
    </main>
  );
}

export default App;
