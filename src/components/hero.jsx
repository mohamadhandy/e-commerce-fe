const Hero = () => {
  return (
    <>
      <div className="container pt-5 px-5">
        <div className="row">
          <div className="col-md-7">
            <h5 className="tuttie-fruittie-h1">
              Tuttie<br></br>Fruittie
            </h5>
            <p className="card-text display-5">
              YOUR BEST FRUIT ON YOUR BEST DAY
            </p>
            <button
              type="button"
              className="btn btn-warning btn-lg px-4 me-md-2"
            >
              Explore Now
            </button>
          </div>
          <div className="col-md-5">
            <img src="./images/5334958.jpg" width={500} height={400} loading="lazy" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
