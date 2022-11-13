import axios, { AxiosRequestConfig } from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"
import { authHeader } from "../../redux/auth/authHeader"

export default function AllOrder() {
    const [order, setOrder] = React.useState([])
    const navigate = useNavigate()

    React.useEffect(() => {
        axios.get(`http://localhost:5000/product/getAllOrder`, { headers: authHeader()})
            .then((res) => {
                console.log(res.data)
            })
            .catch((err)=>{
                if(err.response.status == '403')
                navigate('/login')
                console.log(err);
                
            })
    })
    return (
        <div className="table-responsive">
            <table className="table app-table-hover admin-table mb-0 text-left">
                <thead>
                    <tr>
                        <th className="cell">Order</th>
                        <th className="cell">Product</th>
                        <th className="cell">Customer</th>
                        <th className="cell">Date</th>
                        <th className="cell">Status</th>
                        <th className="cell">Total</th>
                        <th className="cell"></th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    <tr className="p-5">
                        <td className="cell">#15346</td>
                        <td className="cell"><span className="truncate">Lorem ipsum dolor sit amet eget volutpat erat</span></td>
                        <td className="cell">John Sanders</td>
                        <td className="cell"><span>17 Oct</span><span className="note">2:16 PM</span></td>
                        <td className="cell"><span className="badge bg-success">Paid</span></td>
                        <td className="cell">$259.35</td>
                        <td className="cell"><a className="btn-sm app-btn-secondary" href="#">View</a></td>
                    </tr>
                    <tr>
                        <td className="cell">#15345</td>
                        <td className="cell"><span className="truncate">Consectetur adipiscing elit</span></td>
                        <td className="cell">Dylan Ambrose</td>
                        <td className="cell"><span className="cell-data">16 Oct</span><span className="note">03:16 AM</span></td>
                        <td className="cell"><span className="badge bg-warning">Pending</span></td>
                        <td className="cell">$96.20</td>
                        <td className="cell"><a className="btn-sm app-btn-secondary" href="#">View</a></td>
                    </tr>
                    <tr>
                        <td className="cell">#15344</td>
                        <td className="cell"><span className="truncate">Pellentesque diam imperdiet</span></td>
                        <td className="cell">Teresa Holland</td>
                        <td className="cell"><span className="cell-data">16 Oct</span><span className="note">01:16 AM</span></td>
                        <td className="cell"><span className="badge bg-success">Paid</span></td>
                        <td className="cell">$123.00</td>
                        <td className="cell"><a className="btn-sm app-btn-secondary" href="#">View</a></td>
                    </tr>

                    <tr>
                        <td className="cell">#15343</td>
                        <td className="cell"><span className="truncate">Vestibulum a accumsan lectus sed mollis ipsum</span></td>
                        <td className="cell">Jayden Massey</td>
                        <td className="cell"><span className="cell-data">15 Oct</span><span className="note">8:07 PM</span></td>
                        <td className="cell"><span className="badge bg-success">Paid</span></td>
                        <td className="cell">$199.00</td>
                        <td className="cell"><a className="btn-sm app-btn-secondary" href="#">View</a></td>
                    </tr>

                    <tr>
                        <td className="cell">#15342</td>
                        <td className="cell"><span className="truncate">Justo feugiat neque</span></td>
                        <td className="cell">Reina Brooks</td>
                        <td className="cell"><span className="cell-data">12 Oct</span><span className="note">04:23 PM</span></td>
                        <td className="cell"><span className="badge bg-danger">Cancelled</span></td>
                        <td className="cell">$59.00</td>
                        <td className="cell"><a className="btn-sm app-btn-secondary" href="#">View</a></td>
                    </tr>

                    <tr>
                        <td className="cell">#15341</td>
                        <td className="cell"><span className="truncate">Morbi vulputate lacinia neque et sollicitudin</span></td>
                        <td className="cell">Raymond Atkins</td>
                        <td className="cell"><span className="cell-data">11 Oct</span><span className="note">11:18 AM</span></td>
                        <td className="cell"><span className="badge bg-success">Paid</span></td>
                        <td className="cell">$678.26</td>
                        <td className="cell"><a className="btn-sm app-btn-secondary" href="#">View</a></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}