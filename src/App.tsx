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
import AddCategory from "./components/admin/addCategory";
import EditCategory from "./components/admin/EditCategory";
import Category from "./components/admin/Category";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgetPassword" element={<Forgetpassword />} />
          {/* <Route path="/product/:id" element={<Details />} /> */}
          <Route path="single-product/:_id" element={<SingleProduct />} />
          <Route path="admin" element={<Admin chield={<Login />} />} />

          <Route path="checkout-success" element={<CheckoutSuccess />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="dashboard" element={<PrivateOutlet />}>
            <Route path="/dashboard" element={<Admin chield={<Details />} />} />
            <Route path="articles" element={<Admin chield={<Article />} />} />
            <Route path="products" element={<Admin chield={<Products />} />} />
            <Route path="orders" element={<Admin chield={<Orders />} />} />
            <Route path="products" element={<Admin chield={<Product />} />} />
            <Route path="add-category" element={<Admin chield={<AddCategory />} />} />
            {/* <Route path="edit/:id" element={<Admin chield={<AddCategory />} />} /> */}
            <Route path="categories" element={<Admin chield={<Category />} />} />
            <Route path="categories/edit/:id" element={<Admin chield={<EditCategory />} />} />
          </Route>
          {/* <Route path="/edit/:id" element={<CheckoutSuccess />} /> */}
          <Route path="*" element={<NF_404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
