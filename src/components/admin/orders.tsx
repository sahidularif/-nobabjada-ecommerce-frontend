import React from "react";
import Tab from "../tabComponents/tab";
import { authHeader } from "../../redux/auth/authHeader"
import axios from "axios"
import Tabs from "../tabComponents/tabs";
import Order from "./order";
import { useNavigate } from "react-router-dom";
import { OrderInterface } from "../../redux/models/OrderInterface";
const Orders = () => {
    const [orders, setOrders] = React.useState<OrderInterface[]>([])
    const navigate = useNavigate()

    React.useEffect(() => {
        axios.get(`https://gleaming-puce-pullover.cyclic.app/product/getAllOrder`, { headers: authHeader() })
            .then((res) => {
                if (res.data) {
                    setOrders(res.data)
                }
            })
            .catch((err) => {
                if (err.response.status == '403')
                    navigate('/login')
                console.log(err);

            })
    })
    return (
        <div className="">
            <Tabs>
                <Tab title="All">
                    <Order orders={orders} />
                </Tab>
                <Tab title="Pending">
                    <Order orders={
                        orders.filter((order) => {
                            return order.delivery_status === "pending"
                        })
                    } />
                </Tab>
                <Tab title="Processing">
                    <Order orders={
                        orders.filter((order) => {
                            return order.delivery_status === "processing"
                        })
                    } />
                </Tab>
                <Tab title="Completed">
                    <Order orders={
                        orders.filter((order) => {
                            return order.delivery_status === "completed"
                        })
                    } />
                </Tab>
            </Tabs>
        </div>
    )
}
export default Orders