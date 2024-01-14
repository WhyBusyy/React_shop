import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//url파라미터 읽어오는 라이브러리

// import styled from "styled-components";
//해당 파일에만 스타일이 적용됨 //App.module.css와 같은 기능
// 장점 : 페이지 로딩시간 단축
// 단점 : 파일 코드가 길어짐, 중복스타일은 import해서 써야함 >> CSS파일을 쓰는게 나아짐,,

// let YellowBtn = styled.button`
//   background: ${(props) => props.bg};
//   color: ${(props) => (props.bg == "blue" ? "white" : "black")};
//   padding: 10px;
// `;

// let Btn = styled.button(YellowBtn); 가져다쓰기도 가능

// let Box = styled.div`
//   background : grey;
//   padding : 20px;
// `

export default function Detail({ products }) {
  useEffect(() => {
    // 실행 시점 : 렌더링이 다 된 이후 동작함
    // 어려운 연산이나 서버에서 데이터 가져오는 작업, 타이머 장착 등에 사용
    // html이 먼저 렌더링 되고 useEffect 내 코드가 실행되므로 사용자 입장에서 로딩 시간이
    // 상대적으로 짧게 느껴질 수 있음,,
    setTimeout(() => {setAlert(false)}, 2000);

    // return () => {
    // 코드~~~~ (기존 타이머는 제거해주세요~~) clearTimeout(a)
    // }  useEffect 내의 함수가 실행 되기 전에 실행되는 내용 보통 clean up function으로 작성
  }, []); // [] dependency []가 변할때만 함수가 실행됨.

  let [alert, setAlert] = useState(true);

  let [count, setCount] = useState(0);

  let { id } = useParams();
  let selected = products.find((item) => {
    return item.id == id;
  });

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초 이내 구매시 할인</div>
      ) : null}

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      {/* <Box> */}
      {/* <YellowBtn bg="blue">버튼</YellowBtn>
      <YellowBtn bg="orange">버튼</YellowBtn> */}
      {/* </Box> */}
      <div className="row">
        <div className="col-md-6">
          <img
            src={process.env.PUBLIC_URL + "/images/shirt.jpeg"}
            alt="shirt"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{selected.title}</h4>
          <p>{selected.content}</p>
          <p>{selected.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
