import { useState } from "react";
import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./ahnyu-logo.png";
import data from "./data";
import ProductList from "./ProductList";

function App() {
  let [products] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Ahnyu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + logo + ")" }} // 문자 안에 변수 집어넣는 법
      ></div>

      <ProductList products = {products} />
    </div>
  );
}

export default App;
