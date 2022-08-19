import Header from "../../components/header";
const Index = () => {
  return (
    <>
      <Header />
      <div className="row justify-content-center">
        <div className="col-md-12 pb-5 text-center">
          <h1>Product Black Pepper</h1>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="./images/product-1.png"
            alt="product apple"
            height={400}
            width={400}
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">Rp. 9000</h4>
          <h1 className="display-5">Black Pepper</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit ut eligendi explicabo vero sint, blanditiis adipisci
            obcaecati vel facere natus.
          </p>
          <button className="btn btn-warning">Go to cart</button>
        </div>
      </div>
    </>
  );
};

export default Index;
