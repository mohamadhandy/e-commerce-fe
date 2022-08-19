import { getProducts } from "../data/products";
import { Link } from "react-router-dom";

const ListProducts = () => {
  let products = getProducts();
  const productList = products.map((product, index) => (
    <div className="col-md-3 pb-2" id="products" key={index}>
      <Link to="/products/1">
        <div className="card h-100 text-center p4">
          <img src={product.url} className="card-img-top food-img" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">
              {product.title} Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Reprehenderit ut eligendi explicabo vero sint,
              blanditiis adipisci obcaecati vel facere natus.
            </p>
            <p>Rp. {product.price}</p>
            <Link to="/cart">
              <span className="btn btn-primary">Add to cart</span>
            </Link>
          </div>
        </div>
      </Link>
    </div>
  ));
  return <div className="row justify-content-center">{productList}</div>;
};

export default ListProducts;
