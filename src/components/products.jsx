import { Link } from "react-router-dom";
import { useFetchFoods } from "../hooks/useFetchFoods";

const ListProducts = () => {
  let foods = useFetchFoods();
  let productList
  if (foods.APIData.length > 0) {
    productList = foods.APIData.map((product, index) => (
      <div className="col-md-3 pb-2" id="products" key={index}>
        <Link to={`/products/${product.id}`}>
          <div className="card h-100 text-center p4">
            <img src={product.url} className="card-img-top food-img" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                {product.description}
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
  } else {
    productList = ''
  }
  return <div className="row justify-content-center">{productList}</div>;
};

export default ListProducts;
