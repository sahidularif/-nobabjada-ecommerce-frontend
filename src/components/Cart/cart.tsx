import React from "react";
import headphone from "../../images/headphone-2.png";
import { BsBagPlusFill, BsBagDashFill } from "react-icons/bs";
import card from '../../images/verified.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/hooks/useTypeSelector";
import { Product } from "../../redux/reducer/productSlice";
import { addProductToCart, clearCart, removeProductFromCart } from "../../redux/reducer/cartSlice";
import { MdAddCircle,  MdArrowBack, MdClose, MdDelete, MdRemoveCircle, } from "react-icons/md";
import { Link } from "react-router-dom";
import '../../styles/checkout.css'
const Cart = () => {
  const dispatch = useAppDispatch()
  const { products, totalPrice } = useAppSelector((state) => state.cart);
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(products);
  const handleDeleteProduct = (id: string) => {
    dispatch(removeProductFromCart({ id: id, full: true }))
  }

  const handleIncreaseProduct = (product: Product) => {
    dispatch(addProductToCart({ product: product }))
  }

  const handleDecreaseProduct = (pd: string) => {
    dispatch(removeProductFromCart({ id: pd }))
  }
  const handleClearCart = () => {
    // dispatch(clearCart({ id: products[0].id }))
  }
  return (
    <div>
      <>
        {
          show && (
            <div className="coupone-modal" onClick={handleClose}>

              <div className="coupone" onClick={(e) => e.stopPropagation()}>
                <MdClose className="coupone-close" onClick={handleClose} color={'black'} size={30} />
                <div className="coupone-body">
                  <input type="text" name="coupone" /><br />
                  <button type="button">APPLY COUPONE</button>
                </div>
              </div>
            </div>
          )
        }
      </>

      {
        products.length === 0 ? (
          <div className="cart-empty">
            <h6>Your cart is currently empty</h6>
            <div className="start-shopping">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <MdArrowBack />
                </svg>
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="product-cart-items">
            <div className="product-checkout-details">
              <div className="block">
                <h4 className="widget-title">Order Summary</h4>
                {products && products.map((product) => (
                  <div className="media product-card">
                    <a className="pull-left" href="product-single.html">
                      <img className="media-object" src={product.img_url} alt="Image" />
                    </a>
                    <div className="media-body">
                      <h4 className="media-heading"><a href="product-single.html">{product.title}</a></h4>
                      <p className="price">1 x ${product.price}</p>
                      <div className="remove d-flex align-items-center justify-content-between" >
                        <div className="d-flex align-items-center">
                          <MdRemoveCircle size={20} />&nbsp;
                          <span>{0}</span>&nbsp;
                          <MdAddCircle size={20} />
                        </div>
                        <MdDelete onClick={()=> handleDeleteProduct(product._id)} />
                      </div>
                    </div>
                  </div>
                ))

                }
                <div className="discount-code">
                  <p>Have a discount ? <span style={{ 'cursor': 'pointer' }} onClick={handleShow}>enter it here</span></p>
                </div>
                <div className="cart-total">
                  <ul className="summary-prices">
                    <li>
                      <span>Subtotal:</span>
                      <span className="price">${totalPrice}</span>
                    </li>
                    <li>
                      <span>Shipping:</span>
                      <span>Free</span>
                    </li>
                  </ul>
                  <div className="summary-total">
                    <span>Total</span>
                    <span>${totalPrice}</span>
                  </div>
                  <div className="verified-icon">
                    <img src={card} />
                  </div>
                </div>
              </div>
            </div>
            <button onClick={handleClearCart}>Clear cart</button>
          </div>
          
        )
      }
      
    </div>
  );
};

export default Cart;
