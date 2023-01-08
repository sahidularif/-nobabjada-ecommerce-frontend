import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"
import { authHeader } from "../../redux/auth/authHeader"
import { OrderInterface } from "../../redux/models/OrderInterface"
import { Table } from "react-bootstrap"

export default function LatestOrder() {
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
        <>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order) => {
                            return (
                                <tr className="p-5">
                                    <td className="cell">#...{order?._id}</td>
                                    <td className="cell">{order.shipping.name}</td>
                                    <td className="cell">
                                        <span>{new Date(order.createdAt).toLocaleDateString()} </span>
                                    </td>
                                    <td className="cell"><span className="badge bg-success">{order.delivery_status}</span></td>
                                    <td className="cell">${order.total}</td>
                                    <td className="cell"><a className="btn-sm btn-outline app-btn-secondary" href="#">View</a></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}
