import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { increase } from "./../store/userSlice";
import { addCount } from "./../store";

function Cart() {
  let state = useSelector((state) => state);
  let dipatch = useDispatch();

  return (
    <div>
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
