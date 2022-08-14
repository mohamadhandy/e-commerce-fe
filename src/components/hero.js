import Products from "./products";
import Product from "./product"
import Cart from "./cart";
import Login from "./login";
import Register from "./register";
const Hero = () => {
  return (
    <div className="hero pt-4">
      <div className="card text-dark border-0">
        <div className="card-img-overlay">
          <div className="container">
            <h5 className="tuttie-fruittie-h1">Tuttie<br></br>Fruittie</h5>
            <p className="card-text display-5">YOUR BEST FRUIT ON YOUR BEST DAY</p>
            <button type="button" className="btn btn-warning btn-lg px-4 me-md-2">Explore Now</button>
          </div>
          <Products />
          <Product />
          <Cart />
          <Login />
          <Register />
        </div>
      </div>
    </div>
  );
};

export default Hero;