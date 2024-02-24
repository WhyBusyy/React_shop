import { useDispatch, useSelector } from "react-redux";
import { memo, useState, useMemo } from "react";
import { Table } from "react-bootstrap";
import { increase } from "./../store/userSlice";
import { addCount } from "./../store";

// memo = 꼭 필요할 때만(특정 상황 : props가 변할 때) 재렌더링하는 기능
// 기존props와 신규props를 계속 비교(props가 복잡할수록 오래걸림)하므로 무분별한 사용은 성능저하를 야기함
// 무거운 컴포넌트들만 감싸두면 좋음, 별로 쓸 일은 없음
let Child = memo(function () {
  console.log("재렌더링됨");
  return <div>자식임</div>;
});

function 함수() {
  return "대충 오래걸리는 내용";
}

function Cart() {
  let state = useSelector((state) => state);
  let dipatch = useDispatch();
  let { count, setCount } = useState(0);
  useMemo(() => {
    return 함수();
  }, [state]);
  // useMemo = 컴포넌트 렌더링시 1회만 실행해줌, 렌더링될 때 실행
  // useEffect와는 실행시점의 차이만 있음, html이 로딩이 다 되면 실행

  return (
    <div>
      <Child count={count}></Child>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      {state.user.name}의 장바구니
      {state.user.age}
      <button
        onClick={() => {
          dipatch(increase(100));
        }}
      >
        age+
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button
                  onClick={() => {
                    dipatch(addCount(state.cart[i].id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
