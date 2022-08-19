import { Link } from "react-router-dom";
import { auth, logout } from "../config/firebase/index";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link as Scroll } from "react-scroll";
import { useLocation } from "react-router-dom";
const Header = () => {
  let location = useLocation();
  const [user] = useAuthState(auth);
  return (
    <nav className="navbar navbar-expand-lg bg-light py-4">
      <div className="container">
        <img src="./images/logo.png" alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/">
                <span className="nav-link active" aria-current="page">
                  Home
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <span className="nav-link active" aria-current="page">
                {location.pathname !== "/" ? (
                  <Link to="/">
                    <span>Products</span>
                  </Link>
                ) : (
                  <Scroll
                    to="products"
                    spy={true}
                    smooth={true}
                    offset={150}
                    duration={100}
                  >
                    Product
                  </Scroll>
                )}
              </span>
            </li>
          </ul>
          <div className="buttons">
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
        </div>
      </div>
    </nav>
  );
};

export default Header;
