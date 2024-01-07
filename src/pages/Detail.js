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
  let { id } = useParams();
  let selected = products.find((item) => {
    return item.id == id;
  });

  return (
    <div className="container">
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
