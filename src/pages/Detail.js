import { useParams } from "react-router-dom";
//url파라미터 읽어오는 라이브러리

export default function Detail({ products }) {
  let { id } = useParams();
  let selected = products.find((item)=>{
    return item.id == id
  });

  return (
    <div className="container">
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
