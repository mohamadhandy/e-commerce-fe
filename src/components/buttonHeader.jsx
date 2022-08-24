import { Link, useLocation } from "react-router-dom";
import { auth, logout } from "../config/firebase/index";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link as Scroll } from "react-scroll";
const ButtonHeader = () => {
  const [user] = useAuthState(auth);
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? (
        <Scroll
          to="products"
          spy={true}
          smooth={true}
          offset={150}
          duration={100}
        >
          <span className="nav-item nav-link" style={{ cursor: "pointer" }}>
            Products
          </span>
        </Scroll>
      ) : (
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="nav-item nav-link" style={{ cursor: "pointer" }}>
            Home
          </span>
        </Link>
      )}
      {user ? (
        <span className="nav-item nav-link" style={{ cursor: "pointer" }} onClick={logout}>
          Logout
        </span>
      ) : (
        <Link to="/login" style={{ textDecoration: "none" }}>
          <span className="nav-item nav-link" style={{ cursor: "pointer" }}>
            Login
          </span>
        </Link>
      )}
      {user ? (
        ""
      ) : (
        <Link to="/register" style={{ textDecoration: "none" }}>
          <span className="nav-item nav-link" style={{ cursor: "pointer" }}>
            Register
          </span>
        </Link>
      )}
      {user ? (
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <span className="nav-item nav-link" style={{ cursor: "pointer" }}>
            Cart
          </span>
        </Link>
      ) : (
        ""
      )}
    </>
  );
};

export default ButtonHeader;
