import { createContext, useState } from "react";
import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "./ahnyu-logo.png";
import data from "./components/data";
import ProductList from "./components/ProductList";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail";
import axios from "axios";
import Cart from "./pages/Cart";

export let Context1 = createContext();
// context api == state보관함
// 성능 이슈, state 변경 시 쓸데없는 재렌더링 이슈
// 컴포넌트 재사용이 어려워짐
// 그래서 그냥 잘 안쓰고 외부라이브러리 사용함.

function App() {
  let [products, setProducts] = useState(data);
  let [stock] = useState([10, 11, 12]);
  let [clickNum, setClickNum] = useState(0);
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

              {/* ajax 이용해서 데이터 받아오기 - axios 사용 */}
              <button
                onClick={() => {
                  // 로딩중 ui 띄우기
                  setClickNum(clickNum + 1);
                  if (clickNum === 1) {
                    console.log(clickNum);
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((result) => {
                        console.log(result.data);
                        let copy = [...products, ...result.data];
                        setProducts(copy);
                        // 로딩중 ui 제거
                      })
                      .catch((err) => {
                        console.error(err);
                      });
                  } else if (clickNum === 2) {
                    console.log(clickNum);
                    axios
                      .get("https://codingapple1.github.io/shop/data3.json")
                      .then((result) => {
                        console.log(result.data);
                        let copy = [...products, ...result.data];
                        setProducts(copy);
                        // 로딩중 ui 제거
                      })
                      .catch((err) => {
                        console.error(err);
                      });
                  } else if (clickNum > 2) {
                    console.log(clickNum);
                    alert("더 이상 상품이 없어요,,");
                  }

                  // 한번에 여러번 get 요청해야할 때
                  // Promise.all([axios.get('/url1'),axios.get('/url2')])
                  // .then(()=>{ })
                }}
              >
                버튼
              </button>
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ stock, products }}>
              <Detail products={products} />
            </Context1.Provider>
          }
        />

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

        <Route path="/cart" element={<Cart />} />
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
