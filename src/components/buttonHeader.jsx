import { Link, useLocation } from "react-router-dom";
import { auth, logout } from "../config/firebase/index";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link as Scroll } from "react-scroll";
const ButtonHeader = () => {
  const [user] = useAuthState(auth);
  const location = useLocation();
  return (
    <div className="buttons">
      {location.pathname === "/" ? (
        <Scroll
          to="products"
          spy={true}
          smooth={true}
          offset={150}
          duration={100}
        >
          <span className="btn btn-outline-dark me-1">
            <i className="bx bxl-product-hunt"></i>
            Products
          </span>
        </Scroll>
      ) : (
        <Link to="/">
          <span className="btn btn-outline-dark me-1">
            <i className="bx bxl-product-hunt"></i>
            Home
          </span>
        </Link>
      )}
      {user ? (
        <span className="btn btn-outline-dark me-1" onClick={logout}>
          <i className="bx bx-user"></i>
          Logout
        </span>
      ) : (
        <Link to="/login">
          <span className="btn btn-outline-dark me-1">
            <i className="bx bx-user"></i>
            Login
          </span>
        </Link>
      )}
      {user ? (
        ""
      ) : (
        <Link to="/register">
          <span className="btn btn-outline-dark ms-2">
            <i className="bx bx-registered"></i>
            Register
          </span>
        </Link>
      )}
      {user ? (
        <Link to="/cart">
          <span className="btn btn-outline-dark ms-2">
            <i className="bx bx-cart"></i>
            Cart
          </span>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default ButtonHeader;
