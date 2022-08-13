import { getProducts } from "./components/products"
import "../../App.css"
function Products() {
  return (
    <section className="section categories">
      <div className="title">
        <span>CATEGORIES</span>
        <h2>2022 Fresh Products</h2>
      </div>
      <ListProducts />
    </section>
  )
}

function ListProducts() {
  let products = getProducts()
  const productList = products.map((product, index) => 
    <div className="product" key={index}>
      <div className="top d-flex">
        <a href="product-detail.html"><img src={product.url} alt="Product" /></a>
        <div className="icon d-flex">
          <i className="bx bxs-heart"></i>
        </div>
      </div>
      <div className="bottom">
        <div className="d-flex">
          <h4>{product.title}</h4>
          <a href="cart.html" className="btn cart-btn">Add to Cart</a>
        </div>
        <div className="d-flex">
          <div className="price">Rp.{product.price}</div>
          <div className="rating">
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <div className="products container">
      {productList}
    </div>
  )
}

export default Products