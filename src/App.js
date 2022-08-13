import './App.css';
import Home from "./pages/home/index"

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

// function Header() {
//   return (
//     <header className="header">
//       <nav className="navbar">
//         <div className="row container d-flex">
//           <div className="logo">
//             <img src="./images/logo.png" alt="" />
//           </div>

//           <div className="nav-list d-flex">
//             <p>Home</p>
//             <div className="close">
//               <i className="bx bx-x"></i>
//             </div>
//             <p>Login</p>
//           </div>

//           <div className="icons d-flex">
//             <div className="icon d-flex"><i className="bx bx-search"></i></div>
            
//             <div className="icon user-icon d-flex">
//               <a href="login.html">
//                 <i className="bx bx-user"></i>
//               </a>
//             </div>
//             <div className="icon d-flex">
//               <i className="bx bx-bell"></i>
//               <span></span>
//             </div>
//           </div>

//           <div className="hamburger">
//             <i className="bx bx-menu-alt-right"></i>
//           </div>
//         </div>
//       </nav>
//       <Hero />
//     </header>
//   )
// }

// function Hero(){
//   return (
//     <div className="hero">
//       <div className="row container d-flex">
//         <div className="col">
//           <span className="subtitle">Limited Time Only For Summer</span>
//           <h1>Tutti<br />Fruittie</h1>
//           <p>YOUR BEST FRUIT ON YOUR BEST DAY</p>
//           <button className="btn">Explore Now!</button>
//         </div>
//         <img src="./images/fruits-no-bg.png" loading="lazy" alt="" />
//       </div>
//     </div>
//   )
// }

// function Products() {

//   return (
//     <section className="section categories">
//       <div className="title">
//         <span>CATEGORIES</span>
//         <h2>2022 Fresh Products</h2>
//       </div>
//       <ListProducts />
//     </section>
//   )
// }

// function ListProducts() {
//   let products = getProducts()
//   const productList = products.map((product, index) => 
//     <div className="products container">
//       <h1>{index}TEST</h1>
//       <div className="product">
//         <div className="top d-flex">
//           <a href="product-detail.html"><img src={product.url} alt="Product" /></a>
//           <div className="icon d-flex">
//             <i className="bx bxs-heart"></i>
//           </div>
//         </div>
//         <div className="bottom">
//           <div className="d-flex">
//             <h4>${product.title}</h4>
//             <a href="cart.html" className="btn cart-btn">Add to Cart</a>
//           </div>
//           <div className="d-flex">
//             <div className="price">Rp.{product.price}</div>
//             <div className="rating">
//               <i className="bx bxs-star"></i>
//               <i className="bx bxs-star"></i>
//               <i className="bx bxs-star"></i>
//               <i className="bx bxs-star"></i>
//               <i className="bx bxs-star"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
//   return (
//     {productList}
//   )
// }

// const getProducts = () => {
//   const products = [
//     {
//       id: 1,
//       title: "Apple",
//       price: "13000",
//       url: "./images/product-1.png",
//       category: "Fruits"
//     },
//     {
//       id: 2,
//       title: "Orange",
//       price: "15000",
//       url: "./images/product-2.png",
//       category: "Fruits"
//     },
//     {
//       id: 3,
//       title: "Spinach",
//       price: "8000",
//       url: "./images/product-3.png",
//       category: "Vegetables"
//     },
//     {
//       id: 4,
//       title: "Mustard",
//       price: "7500",
//       url: "./images/product-4.png",
//       category: "Vegetables"
//     },
//     {
//       id: 5,
//       title: "Onions",
//       price: "6500",
//       url: "./images/product-5.png",
//       category: "Herbs"
//     },
//     {
//       id: 6,
//       title: "Black Pepper",
//       price: "5000",
//       url: "./images/product-6.png",
//       category: "Herbs"
//     }
//   ]
//   return products
// };

export default App;
