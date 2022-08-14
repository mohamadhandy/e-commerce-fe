const Header = () => {
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
              <a className="nav-link active" aria-current="page" href="https://google.com">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="https://google.com">
                Products
              </a>
            </li>
          </ul>
          <div className="buttons">
            <button className="btn btn-outline-dark me-1">
              <i className="bx bx-user"></i>
              Login
            </button>
            <button className="btn btn-outline-dark ms-2">
              <i className="bx bx-registered"></i>
              Register
            </button>
            <button className="btn btn-outline-dark ms-2">
              <i className="bx bx-cart"></i>
              Cart
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
