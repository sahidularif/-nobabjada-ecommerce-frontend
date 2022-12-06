import React from "react";
import "./App.css";
import "./styles/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Admin from "./components/admin/admin";
import Products from "./components/admin/products";
import Article from "./components/admin/article";
import Product from "./components/admin/product";
import Details from "./components/admin/overview";
import SingleProduct from "./components/BestProduct/";
import PrivateOutlet from "./firebase/PrivateOutlet";
import { useDispatch } from "react-redux";
import Register from "./components/pages/register";
import Forgetpassword from "./components/pages/forgetPassword";
import CheckOut from "./components/checkout/checkout";
import Orders from "./components/admin/orders";
import Checkout from "./components/pages/checkout";
import CheckoutSuccess from "./CheckoutSuccess";
import { useAppSelector } from "./redux/hooks/useTypeSelector";
import NF_404 from "./components/pages/NF_404";

function App() {
  const [openModal, setOpenModal] = React.useState(false);
  const { isAuthenticated } = useAppSelector(state => state.auth)
  const dispatch = useDispatch();
  // console.log(user)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetPassword" element={<Forgetpassword />} />
          {/* <Route path="/product/:id" element={<Details />} /> */}
          <Route path="/single-product/:_id" element={<SingleProduct />} />
          <Route path="/admin" element={<Admin chield={<Login />} />} />
         
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<PrivateOutlet />}>
            <Route path="" element={<Admin chield={<Details />} />} />
            <Route path="articles" element={<Admin chield={<Article />} />} />
            <Route path="products" element={<Admin chield={<Products />} />} />
            <Route path="order" element={<Admin chield={<Orders />} />} />
            <Route path="product" element={<Admin chield={<Product />} />} />
          </Route>
          <Route path="*" element={<NF_404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
