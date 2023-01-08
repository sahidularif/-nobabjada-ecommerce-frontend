import React from 'react'
import '../../styles/checkout.css'
import Header from '../Header/header'
import verified from '../../images/verified.png'
import pd1 from '../../images/product/pd1.png'

import { useAppSelector } from '../../redux/hooks/useTypeSelector'
import PaymentGateway from '../checkout/checkout'

export default function Checkout() {
    const { products, totalPrice } = useAppSelector((state) => state.cart);
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <React.Fragment>
            <Header />
            <div className="page-wrapper">
                <div className="checkouts shopping">
                    <div className="constainer">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="block billing-details">
                                    <h4 className="widget-title">Billing Details</h4>
                                    <form className="checkout-form P-5">
                                        <div className="form-group">
                                            <label >Full Name</label>
                                            <input type="text" className="form-control" id="full_name" placeholder="" />
                                        </div>
                                        <div className="form-group">
                                            <label >Address</label>
                                            <input type="text" className="form-control" id="user_address" placeholder="" />
                                        </div>
                                        <div className="checkout-country-code clearfix">
                                            <div className="form-group">
                                                <label >Zip Code</label>
                                                <input type="text" className="form-control" id="user_post_code" name="zipcode" value="" />
                                            </div>
                                            <div className="form-group" >
                                                <label >City</label>
                                                <input type="text" className="form-control" id="user_city" name="city" value="" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label >Country</label>
                                            <input type="text" className="form-control" id="user_country" placeholder="" />
                                        </div>
                                    </form>
                                </div>
                                <PaymentGateway/>
                          
                            </div>
                            <div className="col-md-4">
                                <div className="product-checkout-details">
                                    <div className="block">
                                        <h4 className="widget-title">Order Summary</h4>
                                        {products && products.map((product) => (
                                            <div className="media product-card">
                                                <a className="pull-left" href="product-single.html">
                                                    <img className="media-object" src={pd1} alt="Image" />
                                                </a>
                                                <div className="media-body">
                                                    <h4 className="media-heading"><a href="product-single.html">{product.title}</a></h4>
                                                    <p className="price">1 x ${product.price}</p>
                                                    <span className="remove" >Remove</span>
                                                </div>
                                            </div>
                                        ))

                                        }
                                        <div className="discount-code">
                                            <p>Have a discount ? <span onClick={handleShow}>enter it here</span></p>
                                        </div>
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
                                            <img src={verified} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
           
        </React.Fragment>
    )
}