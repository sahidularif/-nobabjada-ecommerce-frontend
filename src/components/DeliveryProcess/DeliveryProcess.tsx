import React from 'react';
import "../../styles/style.css";
import { TbTruckDelivery } from 'react-icons/tb';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { MdSupportAgent,MdSecurityUpdateGood } from 'react-icons/md';
const DeliveryProcess = () => {
    return (
        <div className='container'>
            <div className='delivery_process_wrapper'>
                <div className='process'>
                    <div><TbTruckDelivery size={30} color="#f42a34"/></div>
                    <div>
                        <h5>Free Shipping</h5>
                        <h6>Free Shipping On All Order</h6>
                    </div>
                </div>
                <div className='process'>
                <div><RiSecurePaymentLine size={30} color="#f42a34"/></div>
                    <div>
                        <h5>Money Gurantee</h5>
                        <h6>30 Days Money Back</h6>
                    </div>
                </div>
                <div className='process'>
                <div><MdSupportAgent size={30} color="#f42a34"/></div>
                    <div>
                        <h5>24/7 Online Support</h5>
                        <h6>Technical Support 24/7</h6>
                    </div>
                </div>
                <div className='process'>
                <div><MdSecurityUpdateGood size={30} color="#f42a34"/></div>
                    <div>
                        <h5>Secure Payment</h5>
                        <h6>All Cards Accepted</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryProcess;