import React from 'react';
import { MdProductionQuantityLimits } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';
import { FcSalesPerformance } from 'react-icons/fc';
const DashboardSammary = () => {
    return (
        
            <div className="row g-4">
                <div className="col-sm-6  col-md-4 sammary-block">
                    <div className="p-4 border sammary-body">
                        <div className="card border-0" style={{ 'maxWidth': '18rem' }}>
                            <div className="card-header  border-0 d-flex justify-content-between">
                                <span>VISITORS</span><TbWorld size={30} />
                            </div>
                            <div className="card-body d-flex justify-content-between">
                                <div className='order-sammary'>
                                    <h6>Weekly</h6>
                                    <h4>5,530</h4>
                                </div>
                                <div className='order-sammary'>
                                    <h6>Monthly</h6>
                                    <h4>225,530</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6  col-md-4 sammary-block">
                    <div className="p-4 border sammary-body">
                        <div className="card border-0" style={{ 'maxWidth': '18rem' }}>
                            <div className="card-header  border-0 d-flex justify-content-between">
                                <span>ORDERS</span><MdProductionQuantityLimits size={30} />
                            </div>
                            <div className="card-body d-flex justify-content-between">
                                <div className='order-sammary'>
                                    <h6>Today</h6>
                                    <h4>5,530</h4>
                                </div>
                                <div className='order-sammary'>
                                    <h6>Total Revenue</h6>
                                    <h4>225,530</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6  col-md-4 sammary-block">
                    <div className="p-4 border sammary-body">
                        <div className="card border-0" style={{ 'maxWidth': '18rem' }}>
                            <div className="card-header  border-0 d-flex justify-content-between">
                                <span>SALES</span><FcSalesPerformance size={30} />
                            </div>
                            <div className="card-body d-flex justify-content-between">
                                <div className='order-sammary'>
                                    <h6>Today</h6>
                                    <h4>5,530</h4>
                                </div>
                                <div className='order-sammary'>
                                    <h6>Total Revenue</h6>
                                    <h4>225,530</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default DashboardSammary;