import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Cart = () => {
  return (
    <div className="card-body">
      <Row className="row">
        <Col className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <div
            className="bg-image hover-overlay hover-zoom ripple rounded"
            data-mdb-ripple-color="light"
          >
            <img
              src="./images/product-1.png"
              className="w-100"
              alt="Blue Jeans Jacket"
            />
            <a href="#!">
              <div className="mask"></div>
              {/* style="background-color: rgba(251, 251, 251, 0.2)" */}
            </a>
          </div>
        </Col>
        <Col className="col-lg-5 col-md-6 mb-4 mb-lg-0">
          <p>
            <strong>Apple product</strong>
          </p>
          <p>Description</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rerum
            cumque dolorem temporibus culpa? Nulla dolorum repellat voluptas id
            quaerat?
          </p>
          <Button
            type="button"
            className="btn btn-primary btn-sm me-1 mb-2"
            data-mdb-toggle="tooltip"
            title="Remove item"
          >
            <i className="bx bx-trash"></i>
          </Button>
          <Button
            type="button"
            className="btn btn-danger btn-sm mb-2"
            data-mdb-toggle="tooltip"
            title="Move to the wish list"
          >
            <i className="bx bx-heart"></i>
          </Button>
        </Col>
        <Col className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div className="d-flex mb-4">
            <Button className="btn btn-primary">
              <i className="bx bx-minus"></i>
            </Button>
            <div className="form-outline">
              <Form.Control
                id="form1"
                min="0"
                name="quantity"
                defaultValue={1}
                type="number"
                className="form-control"
              />
              <label className="form-label" htmlFor="form1">
                Quantity
              </label>
            </div>
            <Button className="btn btn-primary px-3 ms-2">
              <i className="bx bx-plus"></i>
            </Button>
          </div>
        </Col>
      </Row>
      <hr className="my-4" />
    </div>
  );
};
export default Cart;
