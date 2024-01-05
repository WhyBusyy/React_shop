import "./App.css";
import { Container, Nav, Navbar, Row, Col, } from "react-bootstrap";
import logo from "./images/ahnyu-logo.png";
import shirt from "./images/shirt.jpeg";

function App() {
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

      <Container>
        <Row>
          <Col><img src={shirt} alt="shirt" width="80%"/><h5>Paper shirts</h5><p>바스락거림이 매력적인 셔츠</p></Col>
          <Col><img src={shirt} alt="shirt" width="80%"/><h5>Paper shirts</h5><p>바스락거림이 매력적인 셔츠</p></Col>
          <Col><img src={shirt} alt="shirt" width="80%"/><h5>Paper shirts</h5><p>바스락거림이 매력적인 셔츠</p></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
