import { useState } from "react";
import Homepage from "./pages/homepage/Homepage";
import Order from "./pages/order/Order";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/cart/Cart";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [order, setOrder] = useState("");
  const [about, setAbout] = useState("");
  const [contact, setContact] = useState("");
  const [cart, setCart] = useState(true);

  if (cart) {
    return (
      <main>
        <Cart />
      </main>
    );
  }

  if (order) {
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
