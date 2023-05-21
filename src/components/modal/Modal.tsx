import React from "react";
import { MdClose } from "react-icons/md";
import "./modal.css";
import { Link } from "react-router-dom";
import { Product, TProduct } from "../../redux/reducer/productSlice";
import { addProductToCart } from "../../redux/reducer/cartSlice";
import { useAppDispatch } from "../../redux/hooks/useTypeSelector";

type PropsType = {
  open: boolean;
  onClose: () => void;
  item: Product;
};

const Modal = ({ open, onClose, item }: PropsType) => {
  const dispatch = useAppDispatch();
  if (!open) return null;
  const addToCart = (product: Product) => {
    dispatch(addProductToCart({ product}));
  };
  console.log(item)
  return (
    <div onClick={onClose} className="overlay">
      <div className="modalContainer"
        onClick={(e) => e.stopPropagation()}
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
                <button type="button" className="btn btn-main" onClick={() => {
                  addToCart(item)
                }}>
                  Add To Cart
                </button><br />
                <Link to={'single-product/' + item?._id} className="btn btn-transparent">
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
