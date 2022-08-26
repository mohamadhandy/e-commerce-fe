import Header from "../../components/header";
// import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router";
import { useFetchFoods } from "../../hooks/useFetchFoods";
import Footer from "../../components/footer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addProductToCart } from "../../config/redux/cart-product/action";
import { auth } from "../../config/firebase/index";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { rupiah } from "../../helper/currency";

const Index = () => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const idLocation = location.pathname.split("/products/")[1];
  const data = useFetchFoods(idLocation);
  const food = data.APIData;
  const [detailOrder, setDetailOrder] = useState({
    quantity: 0
  });

  const handleCart = () => {
    if (!user) {
      swal("User Not Found", "User Not Found, please login", "error");
      navigate("/login");
    } else {
      const { id, name, finalPrice, price, url, productHappening, category, createdAt, description } = food;
      const { quantity } = detailOrder;
      const data = { id, name, finalPrice, price, url, productHappening, category, createdAt, description, quantity };
      if (quantity === 0) {
        swal("Please fill all field", "Please fill all field", "error");
      } else {
        dispatch(addProductToCart(data));
        swal("Added to cart", "Success Added to cart", "success");
      }
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Row xs={12}>
          <aside className="col-sm-5 border-right">
            <article className="gallery-wrap">
              <div className="img-big-wrap">
                <div>
                  <img src={`/${food.url}`} />
                </div>
              </div>

              <div className="thumbnail text-center">
                <img src={`/${food.url}`} width="70" />
                <img src={`/${food.url}`} width="70" />
              </div>
            </article>
          </aside>
          <aside className="col-sm-7">
            <article className="card-body p-5">
              <h3 className="title mb-3">{food.name}</h3>

              <p className="price-detail-wrap">
                <span className="price h3 text-warning">
                  <span className="currency"></span>
                  <span className="num">{rupiah(food.finalPrice)}</span>
                </span>
              </p>

              <dl className="item-property">
                <dt>Description</dt>
                <dd>
                  <p>{food.description}</p>
                </dd>
              </dl>
              <dl className="param param-feature">
                <dt>SKU</dt>
                <dd>12345611</dd>
              </dl>

              <dl className="param param-feature">
                <dt>Tag</dt>
                <dd>#FreshFruits</dd>
              </dl>

              <dl className="param param-feature">
                <dt>Delivery</dt>
                <dd>Russia, USA, and Europe</dd>
              </dl>

              <hr />
              <div className="row">
                <div className="col-sm-5">
                  <dl className="param param-inline">
                    <dt>Quantity:</dt>
                    <dd>
                      <input
                        type="number"
                        min="0"
                        defaultValue={0}
                        onChange={(e) =>
                          setDetailOrder({
                            ...detailOrder,
                            quantity: Number(e.target.value),
                          })
                        }
                      />
                    </dd>
                  </dl>
                </div>
              </div>
              <hr />
              {/* <Link to="/cart"> */}
              <span onClick={handleCart} className="btn btn-warning me-1">
                Add to Cart
              </span>
              {/* </Link> */}
            </article>
          </aside>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Index;
