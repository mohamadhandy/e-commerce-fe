import { Row, Col, Input } from "reactstrap";
const Cart = () => {
  return (
    <div className="card-body">
      <Row lg={12}>
        <Col md={3} xs={12}>
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
        <Col md={5} xs={12}>
          <p>
            <strong>Apple product</strong>
          </p>
          <p>Description</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rerum
            cumque dolorem temporibus culpa? Nulla dolorum repellat voluptas id
            quaerat?
          </p>
        </Col>
        <Col md={3} xs={12}>
          <div className="d-flex mb-4">
            <i className="bx bx-trash pt-2 px-4"></i>
            <div className="form-outline">
              <Input
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
          </div>
        </Col>
      </Row>
      <hr className="my-4" />
    </div>
  );
};
export default Cart;
