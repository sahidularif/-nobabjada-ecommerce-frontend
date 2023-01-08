import React from "react";
import { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { VscTrash } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { authHeader } from "../../redux/auth/authHeader";
import Swal from 'sweetalert2'
import axios from "axios";
import { category } from '../../utilities/category.type';
export interface ICategory {
    _id: string;
    categoryName: string;
    categoryType: string;
    parentCategory: string;
    status: string;
    image: string;
};
function Category() {
    const [error, setError] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [success, setSuccess] = React.useState<boolean>(false);
    const [items, setItems] = React.useState<ICategory[]>([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["categoryName", "categoryType", "parentCategory"]);
    const [filterParam, setFilterParam] = useState("All");
    let serial = 0
    useEffect(() => {
        fetch("https://gleaming-puce-pullover.cyclic.app/product/getAllCategory", { headers: authHeader() })
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result);

                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    const data = Object.values(items);

    function search(items: any) {
        return items.filter((item: any) => {
            if (item.parentCategory === filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            } else if (filterParam == "All") {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }
    const handleCategoryDelete = (id: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://gleaming-puce-pullover.cyclic.app/product/deleteCategory/${id}`)
                    .then((res) => {
                        setSuccess(true)
                        if (res.status === 200) {

                            Swal.fire(
                                'Deleted!',
                                'Your category has been deleted.',
                                'success'
                            )
                            // window.location.reload()
                        }
                    })
                    .catch((err) => {
                        setSuccess(false)
                        Swal.fire(
                            'Cancelled',
                            'Your category is not deleted',
                            'error'
                        )
                    })
            }
        })

    }
   if (!isLoaded) {
        return <>loading...</>;
    } else {
        return (
            <div className="admin-wrapper">
                <div className="container text-center shadow">
                    <div className="row gx-5 bg-white dashboard-header">
                        <div className="col-6">
                            <div className="p-1">
                                <div className="form-floating ">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="floatingInput" 
                                    placeholder="Search for..." 
                                    onChange={(e) => setQ(e.target.value)}/>
                                    <label htmlFor="floatingInput">Category search</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="p-1">
                                <div className="form-floating">
                                    <select className="form-select" id="floatingSelect"
                                        onChange={(e) => {
                                            setFilterParam(e.target.value);
                                        }}
                                        aria-label="Filter Countries By Region">
                                        <option value="All" selected>Filter By Group</option>
                                        {
                                            category.category.parent.map((group) => (
                                                <option value={group.value}>{group.name} </option>
                                            ))
                                        }
                                    </select>
                                    <label htmlFor="floatingSelect">Filter by Group</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="p-1">
                                <a href="/dashboard/add-category" className="btn btn-main"><i className="tf-ion-android-arrow-back"></i><b>+</b> Add category
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-0 mt-3 shadow">
                    <div className="col-md-12 bg-white product-table">
                        {
                            items.length > 0 ? (
                                <table className="table table-hover ">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">ICON</th>
                                            <th scope="col">PARENT</th>
                                            <th scope="col">CHILDREN</th>
                                            <th scope="col">Types</th>
                                            <th scope="col">ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {search(data).map((item: any) => {
                                            return (
                                                <tr>
                                                    <td scope="row">{serial++}</td>
                                                    <td><img src={item?.image} alt="product" height="100px" width="120px" /></td>
                                                    <td>{item.parentCategory}</td>
                                                    <td>{""}</td>
                                                    <td>{item.categoryType}</td>
                                                    <td className="table-actions">
                                                        <Link to={'edit/' + item?._id}><FaRegEdit size={20} /></Link>
                                                        <span>
                                                            <VscTrash size={20} onClick={() => handleCategoryDelete(item._id)} />
                                                        </span>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            )
                                :
                                (
                                    <span>No data found...</span>
                                )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Category