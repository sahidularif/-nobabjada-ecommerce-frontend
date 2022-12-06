import axios, { AxiosRequestConfig } from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"
import { string } from "yup"
import { authHeader } from "../../redux/auth/authHeader"
import { OrderInterface } from "../../redux/models/OrderInterface"
import Spinner from 'react-bootstrap/Spinner';
import { Button, Table } from "react-bootstrap"

export default function Order({ orders }: { orders: OrderInterface[] }) {

    return (
        <>
            <Table striped hover className="p-4">
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
