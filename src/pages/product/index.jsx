import Header from "../../components/header";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
const Index = () => {
  return (
    <>
      <Header />
      <Row lg={12} className="justify-content-center pt-4">
        <Col md={12} xs={12} className="pb-5 text-center">
          <h1>Product Apple</h1>
        </Col>
        <Col md={6} xs={12} className="text-center">
          <img
            src="/images/product-1.png"
            alt="product apple"
            height={400}
            width={400}
          />
        </Col>
        <Col md={6} xs={12} className="text-center">
          <h4 className="text-uppercase text-black-50">Rp. 9000</h4>
          <h1 className="display-5">Black Pepper</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit ut eligendi explicabo vero sint, blanditiis adipisci
            obcaecati vel facere natus.
          </p>
          <Link to="/cart">
            <span className="btn btn-warning me-1">
              Add to Cart
            </span>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default Index;
