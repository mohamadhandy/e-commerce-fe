import { Link as Scroll } from "react-scroll";
const Hero = () => {
  return (
    <>
      <div
        className="container-fluid p-0 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="/images/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7">
                      <h1 className="display-2 mb-5 text-success animated slideInDown">
                        Organic Food Is Good For Health
                      </h1>
                      <Scroll
                        to="products"
                        spy={true}
                        smooth={true}
                        offset={150}
                        duration={100}
                      >
                        <span
                          className="btn btn-success rounded-pill py-sm-3 px-sm-5"
                          style={{ cursor: "pointer" }}
                        >
                          Products
                        </span>
                      </Scroll>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="/images/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7">
                      <h1 className="display-2 mb-5 text-success animated slideInDown">
                        Natural Food Is Always Healthy
                      </h1>
                      <Scroll
                        to="products"
                        spy={true}
                        smooth={true}
                        offset={150}
                        duration={100}
                      >
                        <span
                          className="btn btn-success rounded-pill py-sm-3 px-sm-5"
                          style={{ cursor: "pointer" }}
                        >
                          Products
                        </span>
                      </Scroll>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
