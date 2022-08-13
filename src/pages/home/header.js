import "../../../src/App.css"

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="row container d-flex">
          <div className="logo">
            <img src="./images/logo.png" alt="" />
          </div>

          <div className="nav-list d-flex">
            <p>Home</p>
            <div className="close">
              <i className="bx bx-x"></i>
            </div>
            <p>Login</p>
          </div>

          <div className="icons d-flex">
            <div className="icon d-flex"><i className="bx bx-search"></i></div>
            
            <div className="icon user-icon d-flex">
              <a href="login.html">
                <i className="bx bx-user"></i>
              </a>
            </div>
            <div className="icon d-flex">
              <i className="bx bx-bell"></i>
              <span></span>
            </div>
          </div>

          <div className="hamburger">
            <i className="bx bx-menu-alt-right"></i>
          </div>
        </div>
      </nav>
      <Hero />
    </header>
  )
}

function Hero(){
  return (
    <div className="hero">
      <div className="row container d-flex">
        <div className="col">
          <span className="subtitle">Limited Time Only For Summer</span>
          <h1>Tutti<br />Fruittie</h1>
          <p>YOUR BEST FRUIT ON YOUR BEST DAY</p>
          <button className="btn">Explore Now!</button>
        </div>
        <img src="./images/fruits-no-bg.png" loading="lazy" alt="" />
      </div>
    </div>
  )
}

export default Header;