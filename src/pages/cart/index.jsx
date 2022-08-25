import Header from "../../components/header";
import Cart from "../../components/cart";
import { Container, Row, Col, Button } from "reactstrap";
import { auth } from "../../config/firebase/index";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import { useSelector, useDispatch } from 'react-redux';

const Index = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.productOrder);
  const totalAmount = data.reduce((previousValue, currentValue) => previousValue + (currentValue.finalPrice * currentValue.quantity),
  0,)
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <>
      <Header />
      {user ? (
        <section className="h-100 gradient-custom">
          <Container className="container py-5">
            <Row lg={12} className="justify-content-center">
              <Col md={8} xs={12}>
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Cart - {data.length} items</h5>
                  </div>
                  <Cart cart={data} />
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <p>
                      <strong>Expected shipping delivery</strong>
                    </p>
                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                  </div>
                </div>
              </Col>
              <Col md={4} xs={12}>
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>Free</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                          <strong>
                            <p className="mb-0">(including VAT)</p>
                          </strong>
                        </div>
                        <span>
                          <strong>Rp {totalAmount}</strong>
                        </span>
                      </li>
                    </ul>

                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      ) : (
        navigate("/")
      )}
      <Footer />
    </>
  );
};

export default Index;
