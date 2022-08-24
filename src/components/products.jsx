import { Link } from "react-router-dom";
import { auth } from "../config/firebase/index";
import { useAuthState } from "react-firebase-hooks/auth";

const ListProducts = ({ foods, loading }) => {
  const [user] = useAuthState(auth);
  return !loading ? (
    <div className="row justify-content-center" id="products">
      {foods.map((product, index) => (
        <div className="col-lg-3 col-md-6 col-xs-12 mb-4" key={index}>
          <div className="product-item justify-content-start">
            <div className="position-relative bg-light overflow-hidden">
              <img
                className="img-fluid w-50 h-50"
                src={product.url}
                alt="Product"
              />
              <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                New
              </div>
            </div>
            <div className="text-center p-4">
              <span className="d-block h5 mb-2" href="">
                {product.name}
              </span>
              <span className="text-success me-1">
                Rp. {product.finalPrice}
              </span>
              <span className="text-body text-decoration-line-through">
                Rp. {product.price}
              </span>
              <p className="text-body">{product.description}</p>
            </div>
            <div className="d-flex border-top">
              {user ? (
                <>
                  <small className="w-50 text-center border-end py-2">
                    <Link
                      to={`/products/${product.id}`}
                      style={{ textDecoration: "none" }}
                      className="text-body"
                    >
                      <i className="bx bx-detail text-success me-2"></i>View
                      detail
                    </Link>
                  </small>
                  <small className="w-50 text-center py-2">
                    <Link
                      to="/cart"
                      style={{ textDecoration: "none" }}
                      className="text-body"
                    >
                      <i className="bx bx-shopping-bag text-success me-2"></i>
                      Add to cart
                    </Link>
                  </small>
                </>
              ) : (
                <small className="w-100 text-center border-end py-2">
                  <Link
                    to={`/products/${product.id}`}
                    style={{ textDecoration: "none" }}
                    className="text-body"
                  >
                    <i className="bx bx-detail text-success me-2"></i>View
                    detail
                  </Link>
                </small>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ListProducts;
