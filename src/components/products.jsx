import { Link } from "react-router-dom";

const ListProducts = ({ foods, loading }) => {
  return !loading ? (
    <div className="row justify-content-center">
      {foods.map((product, index) => (
        <div className="col-lg-4 col-md-12 mb-4" key={index}>
          <Link
            to={`/products/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="height d-flex justify-content-center align-items-center">
              <div className="card p-3">
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="mt-2">
                    <h4 className="text-uppercase">{product.name}</h4>
                    <div className="mt-5">
                      <h1 className="main-heading mt-0">{product.category}</h1>
                      <div className="d-flex flex-row user-ratings">
                        <div className="ratings">
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bxs-star"></i>
                          <i className="bx bx-star"></i>
                        </div>
                        <h6 className="text-muted ml-1">4/5</h6>
                      </div>
                    </div>
                  </div>
                  <div className="image">
                    <img src={product.url} width="200" />
                  </div>
                </div>
                <p>{product.description}</p>

                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ListProducts;
