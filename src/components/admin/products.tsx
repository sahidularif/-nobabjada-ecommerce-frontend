import axios from "axios";
import React from "react";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
type ProductPropsType = {
  title: string;
  description: string;
  price: string;
  image: string;
};
const Products = () => {
  const [success, setSuccess] = React.useState<boolean>(false);
  const [products, setProducts] = React.useState([{
    image: '', description: '', title: '', price:''
  } as ProductPropsType]);

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/products")
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
    <React.Fragment>
      <button className="product_btn mt-5">
        <Link to="/product">
          <MdAddCircle size={20} />
          Add product
        </Link>
      </button>

      <div className="products-wrapper">
        <table className="table mt-5">
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
                  <th scope="row">{serial++}</th>
                  <td><img src={pd.image} alt="product" height="100px" width="120px"/></td>
                  <td>{pd.title}</td>
                  <td>{pd.description}</td>
                  <td>{pd.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Products;
