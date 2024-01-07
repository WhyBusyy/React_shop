import { useState } from "react";
import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./ahnyu-logo.png";
import data from "./components/data";
import ProductList from "./components/ProductList";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail";

function App() {
  let [products] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Ahnyu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            {/* navigate(1) 앞으로가기 / navigate(-1) 뒤로가기 */}
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                style={{ backgroundImage: "url(" + logo + ")" }}
              ></div>
              <ProductList products={products} />
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail products = {products}/>} />

        {/* nested routes 문법 */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치임</div>} />
          {/* 부모컴포넌트와 자식 컴포넌트 모두 보여줌(Outlet 써야함) */}
        </Route>
        {/* <Route path="/detail/member" element={<About />} />
        <Route path="/detail/location" element={<About />} /> */}

        <Route path="*" element={<div>없는 페이지예요!</div>} />
        {/* 404페이지 / "*"은 "그외"를 의미 */}

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양말 증정</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사페이지임</h4>
      <Outlet></Outlet>
      {/* Outlet은 nested routes가 들어갈 자리 */}
    </div>
  );
}

function Event() {
  return (
    <div>
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
