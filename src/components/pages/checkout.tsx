import React from 'react'
import '../../styles/checkout.css'
import Header from '../Header/header'
import verified from '../../images/verified.png'
import pd1 from '../../images/product/pd1.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

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
            <>
                {/* <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal> */}
            </>
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
                                {/* <div className="block card-form">
                                    <h4 className="widget-title">Payment Method</h4>
                                    
                                    <p>Credit Cart Details (Secure payment)</p>
                                    <div className="checkout-product-details">
                                        <div className="payment">
                                            <div className="card-details">
                                                <form className="checkout-form">
                                                    <div className="form-group">
                                                        <label >Card Number <span className="required">*</span></label>
                                                        <input id="card-number" className="form-control" type="tel" placeholder="•••• •••• •••• ••••" />
                                                    </div>
                                                    <div className="form-group half-width padding-right">
                                                        <label >Expiry (MM/YY) <span className="required">*</span></label>
                                                        <input id="card-expiry" className="form-control" type="tel" placeholder="MM / YY" />
                                                    </div>
                                                    <div className="form-group half-width padding-left">
                                                        <label>Card Code <span className="required">*</span></label>
                                                        <input id="card-cvc" className="form-control" type="tel" maxLength={4} placeholder="CVC" />
                                                    </div>
                                                    <a href="confirmation.html" className="btn btn-main mt-20">Place Order</a >
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
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