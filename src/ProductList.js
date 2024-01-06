import { Container, Row, Col } from "react-bootstrap";

function ProductList({ products }) {
  return (
    <Container>
      <Row>
        {products.map((item) => (
          <Col>
            <img
              src={process.env.PUBLIC_URL + "/images/shirt.jpeg"}
              alt="shirt"
              width="80%"
            />
            <h5>{item.title}</h5>
            <p>{item.price}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
