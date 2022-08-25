import { Row, Col } from "reactstrap";
import { changeQuantity, removeProductToCart } from "../config/redux/cart-product/action";
import { useDispatch } from 'react-redux';
const Cart = ({ cart }) => {
  const dispatch = useDispatch();
  const handleChange = (e, item) => {
    item.quantity = Number(e.target.value)
    dispatch(changeQuantity(item))
  }
  return (
    <div className="card-body">
      {cart.map((item, index) => (
        <div key={index}>
          <Row lg={12}>
            <Col md={3} xs={12}>
              <div
                className="bg-image hover-overlay hover-zoom ripple rounded"
                data-mdb-ripple-color="light"
              >
                <img
                  src={item.url}
                  className="w-100"
                  alt="Blue Jeans Jacket"
                />
              </div>
            </Col>
            <Col md={5} xs={12}>
              <p>
                <strong>{item.name}</strong>
              </p>
              <p>Description</p>
              <p>
                {item.description}
              </p>
            </Col>
            <Col md={3} xs={12}>
              <div className="d-flex mb-4">
                <i onClick={() => dispatch(removeProductToCart(item))} className="bx bx-trash pt-2 px-4"></i>
                <div className="form-outline">
                  <input
                    id="form1"
                    min="0"
                    name="quantity"
                    defaultValue={item.quantity}
                    type="number"
                    className="form-control"
                    onChange={(e) =>
                      handleChange(e, item)
                    }
                  />
                  <label className="form-label" htmlFor="form1">
                    Quantity
                  </label>
                </div>
              </div>
            </Col>
          </Row>
          {index === cart.length - 1 ? (<></>) : (<hr className="my-4" />)}
        </div>
      ))}
    </div>
  );
};
export default Cart;
