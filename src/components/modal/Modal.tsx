import React from "react";
import { MdClose } from "react-icons/md";
import "./modal.css";
import storeItems from '../../data.json'
import pd1 from '../../images/earphone.png'
import { Link, useParams } from "react-router-dom";
import { TProduct } from "../../redux/reducer/productSlice";

type PropsType = {
  open: boolean;
  onClose: () => void;
  item: TProduct | null
};

const Modal = ({ open, onClose, item }: PropsType) => {
  if (!open) return null;

  console.log(item)
  return (
    <div onClick={onClose} className="overlay">
      <div  className="modalContainer"
      onClick={(e)=>e.stopPropagation()}
      >
        <div className="modal-body">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="modal-image">
                <img className="img-responsive img-fluid" src={item?.img_url} alt="product-img" />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <p className="closeBtn" onClick={onClose}>
                <MdClose />
              </p>
              <div className="product-short-details">
                <h2 className="product-title">{item?.title}</h2>
                <p className="product-price">${item?.price}</p>
                <p className="product-short-description">
                 {item?.description}
                </p>
                <a href="cart.html" className="btn btn-main">
                  Add To Cart
                </a><br/>
                <Link to={'single-product/' + item?._id } className="btn btn-transparent">
                  View Product Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
