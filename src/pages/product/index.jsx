import Header from "../../components/header";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router";
import { useFetchFoods } from "../../hooks/useFetchFoods";

const Index = () => {
  const location = useLocation();
  const idLocation = location.pathname.split("/products/")[1];
  const data = useFetchFoods(idLocation);
  const food = data.APIData;

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
                  <span className="currency">Rp</span>
                  <span className="num">{food.price}</span>
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
                      <select
                        className="form-control form-control-sm"
                        style={{ width: 70 }}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </dd>
                  </dl>
                </div>
              </div>
              <hr />
              <Link to="/cart">
                <span className="btn btn-warning me-1">Add to Cart</span>
              </Link>
            </article>
          </aside>
        </Row>
      </Container>
    </>
  );
};

export default Index;
