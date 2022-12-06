import axios from "axios";
import React from "react";
import { Spinner, Button } from 'react-bootstrap';
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { authHeader } from "../../redux/auth/authHeader";
interface IProduct {
  _id: number | null;
  title: string | null;
  description: string | null;
  price: string | null;
  img_url: string | undefined;
};
const Products = () => {
  const [success, setSuccess] = React.useState<boolean>(false);
  const [products, setProducts] = React.useState<IProduct[]>([]);

  React.useEffect(() => {
    axios
      .get("https://gleaming-puce-pullover.cyclic.app/product/getAllProduct", { headers: authHeader() })
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let serial = 0
  // console.log(fileSelected)
  return (
    <div className="container-fluid">
      <div className="row g-4">
        <div className="col-md-12 bg-white p-4 shadow d-flex align-items-center">
          <div className="col-md-4">
            <a href="/dashboard/product" className="btn btn-main"><i className="tf-ion-android-arrow-back"></i><b>+</b> Add product
            </a>
          </div>
          <div className="col-md-4">
            <div className="input-group mb-3">
              <input type="text" className="form-control" aria-label="Text input with dropdown button" />
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Search</button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Separated link</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div className="row g-4 mt-3">
        <div className="col-md-12 bg-white product-table p-4">
          {
            products.length > 0 ? (
              <table className="table table-hover ">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">price</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((pd) => {
                    return (
                      <tr>
                        <td scope="row">{serial++}</td>
                        <td><img src={pd.img_url} alt="product" height="100px" width="120px" /></td>
                        <td>{pd.title}</td>
                        <td>{pd.description}</td>
                        <td>{pd.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )
              :
              (
                <Button variant="primary" disabled>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="">Loading...</span>
                </Button>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default Products;
