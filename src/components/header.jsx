import ButtonHeader from "./buttonHeader";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div
        className="container-fluid px-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <nav
          className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <Link to="/" className="navbar-brand ms-4 ms-lg-0" style={{ textDecoration: "none" }}>
            <h1 className="fw-bold text-success m-0">
              Tu<span className="text-secondary">ttie</span> Frui<span className="text-secondary">ttie</span>
            </h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <ButtonHeader />
            </div>
          </div>
        </nav>
      </div>
      {/* <nav className="navbar navbar-expand-lg bg-light py-3">
        <div className="container-fluid">
          <img src="/images/logo.png" alt="logo" />
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
              <li className="nav-item"></li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
            </ul>
            <form className="d-flex" role="search">
              <ButtonHeader />
            </form>
          </div>
        </div>
      </nav> */}
    </>
  );
};

export default Header;
