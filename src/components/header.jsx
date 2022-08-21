import ButtonHeader from "./buttonHeader";
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"></li>
              <li class="nav-item"></li>
              <li class="nav-item"></li>
            </ul>
            <form class="d-flex" role="search">
              <ButtonHeader />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
