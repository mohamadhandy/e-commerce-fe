import Header from "../../components/header";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Index = () => {
  return (
    <>
      <Header />
      <Row className="row justify-content-center pt-4">
        <Col className="col-md-12 pb-5 text-center">
          <h1>Product Black Pepper</h1>
        </Col>
        <Col className="col-md-6 text-center">
          <Image
            src="/images/product-1.png"
            alt="product apple"
            height={400}
            width={400}
          />
        </Col>
        <Col className="col-md-6">
          <h4 className="text-uppercase text-black-50">Rp. 9000</h4>
          <h1 className="display-5">Black Pepper</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit ut eligendi explicabo vero sint, blanditiis adipisci
            obcaecati vel facere natus.
          </p>
          <Button className="btn btn-warning">Go to cart</Button>
        </Col>
      </Row>
    </>
  );
};

export default Index;
