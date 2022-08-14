import { getProducts } from "./components/products";
const Products = () => {
  return (
    <>
      <div className="buttons d-flex justify-content-center pb-5">
        <button className="btn btn-outline-dark me-2">All</button>
        <button className="btn btn-outline-dark me-2">Diet foods</button>
      </div>
      <ListProducts />
    </>
  );
};

function ListProducts() {
  let products = getProducts();
  const productList = products.map((product, index) => (
    <div className="col-md-3 pb-2" key={index}>
      <div className="card h-100 text-center p4">
        <img src={product.url} className="card-img-top food-img" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            {product.title} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ut eligendi explicabo vero sint, blanditiis adipisci obcaecati vel facere natus.
          </p>
          <p>Rp. {product.price}</p>
          <a href="https://google.com" className="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    </div>
    
  ));
  return <div className="row justify-content-center">{productList}</div>;
}

export default Products;
