import React from "react";
import BestProducts from "../BestProduct/bestProducts";
import Category from "../Category/category";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Herosection from "../Herosection/herosection";
import News from "../News/news";
import Sponsors from "../Sponsors/sponsors";
import HappyHoure from "../SummerSale/happyHoure";
import SummerSale from "../SummerSale/summerSale";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Herosection></Herosection>
      <div className="app_heading">
        <h1 className="fs-normal-heading ">PRODUCTS CATEGORY</h1>
        <p className="text-neutral-500">
          Speaker There are many variations passeges
        </p>
      </div>
      <Category></Category>
      <div className="app_heading">
        <h1 className="fs-normal-heading">SUMMER DEAL</h1>
        <p className="text-neutral-500">
          Speaker There are many variations passeges
        </p>
      </div>
      <HappyHoure></HappyHoure>
      <div className="app_heading">
        <h1 className="fs-normal-heading">TRENDY PRODUCTS</h1>
        <p className="text-neutral-500">
          Speaker There are many variations passeges
        </p>
      </div>
      <BestProducts></BestProducts>
      <div className="app_heading">
        <h1 className="fs-normal-heading">HAPPY HOURE</h1>
        <p className="text-neutral-500">
          Speaker There are many variations passeges
        </p>
      </div>
      <SummerSale></SummerSale>
      <div className="app_heading">
        <h1 className="fs-normal-heading">RECENT NEWS</h1>
        <p className="text-neutral-500">
          Speaker There are many variations passeges
        </p>
      </div>
      <News></News>
      <div className="app_heading">
        <h1 className="fs-normal-heading">OUR SPONSORS</h1>
        <p className="text-neutral-500">
          Speaker There are many variations passeges
        </p>
      </div>
      <Sponsors></Sponsors>
      <Footer></Footer>
    </div>
  );
};

export default Home;
