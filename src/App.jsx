import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/index'
import Home from './pages/home/index'
import Login from './pages/login/index'
import Register from './pages/register/index'
import Products from './pages/product/index'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/products" element={<ListProducts />} /> */}
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/products/:productId" element={<Products />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
