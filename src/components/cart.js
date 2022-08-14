const Cart = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-12 text-center">
        <h1>Cart</h1>
      </div>
      <div className="col-md-6 text-center">
        <img src="./images/product-1.png" alt="..." height={200} width={180} />
      </div>
      <div className="col-md-6 text-center">
        <p className="lead fw-bold">
          1 x 2 = 15000
        </p>
        <button className="btn btn-outline-dark me-4">
          <i className="bx bx-minus"></i>
        </button>
        <button className="btn btn-outline-dark me-4">
          <i className="bx bx-plus"></i>
        </button>
      </div>
    </div>
  )
}

export default Cart
