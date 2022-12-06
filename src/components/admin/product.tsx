import axios from "axios";
import React from "react";
import { Form, } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { authHeader } from "../../redux/auth/authHeader";
// TODO: dynamic checkbox
type ProductPropsType = {
  title: string;
  description: string;
  price: string;
  color: {
    color1?: string;
    color2?: string;
    color3?: string;
  },
  img_url: string;
};
const Product = () => {
  const [success, setSuccess] = React.useState<boolean>(false);
  const [product, setProduct] = React.useState<ProductPropsType>({
    title: "",
    description: "",
    price: "",
    color: {
      color1: '#8da1cd',
      color2: '#000',
      color3: '#e6e2d6',
    },
    img_url: "",
  });
  // const checkboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value)
  //   const i = e.target.name
  //   setProduct((prev) => ({
  //     ...prev, size: {
  //       ...prev.size, [e.target.name]: !prev.size[`l`]
  //     }
  //   }))
  // }
  const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;
    if (!fileList) return;

    const imageData = new FormData();
    imageData.set("key", "a50bd9e146ea263516d08f905253b815");
    imageData.append("image", fileList[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setProduct((prev) => ({
          ...prev,
          img_url: response.data.data.display_url,
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const notify = () => {
    // toast("Default Notification !");

    toast.success("Product successfully added !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      type: 'default',
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  // When Form submit
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // await axios
    //   .post("http://localhost:5000/product/addProduct", product, { headers: authHeader() })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
    notify()
    console.log(product);

    toast.warning("Success!", { position: "bottom-left" });
  };


  return (
    <div className="pd-table-wr mt-3">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
      <span className="product-form-title">Add New Product</span>
      <form
        className="login100-form flex-sb flex-w"
        onSubmit={handleFormSubmit}
      >
        <div className="p-t-31 p-b-9">
          <span className="txt1">Product title</span>
        </div>
        <div className="wrap-input100 " data-validate="Title is required">
          <input
            className="input100"
            type="text"
            name="title"
            onChange={(e) =>
              setProduct((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <span className="focus-input100"></span>
        </div>

        <div className="p-t-13 p-b-9">
          <span className="txt1">Product description</span>
        </div>
        <div className="wrap-input100 " data-validate="Description is required">
          <input
            className="input100"
            name="description"
            onChange={(e) =>
              setProduct((prev) => ({ ...prev, description: e.target.value }))
            }
          />
          <span className="focus-input100"></span>
        </div>
        <div className="p-t-31 p-b-9">
          <span className="txt1">Price</span>
        </div>
        <div className="wrap-input100 " data-validate="Title is required">
          <input
            className="input100"
            type="text"
            name="price"
            onChange={(e) =>
              setProduct((prev) => ({
                ...prev,
                price: e.target.value,
              }))
            }
          />
          <span className="focus-input100"></span>
        </div>
        <div className="p-t-31 p-b-9">
          <span className="txt1">Choose color variant</span>
        </div>
        <div className="wrap-input100 border-0 d-flex justify-content-evenly align-items-center" data-validate="Title is required">
          <>
            <Form.Label htmlFor="exampleColorInput">Color 1</Form.Label>
            <Form.Control
              type="color"
              id="exampleColorInput"
              defaultValue="#8da1cd"
              title="Choose your color"
              onChange={(e) => {
                setProduct((prev) => ({
                  ...prev, color: {
                    ...prev.color, color1: e.target.value
                  }
                }))
              }}
            />
          </>
          <>
            <Form.Label htmlFor="exampleColorInput">Color 2</Form.Label>
            <Form.Control
              type="color"
              id="exampleColorInput"
              defaultValue="#000"
              title="Choose your color"
              onChange={(e) => {
                setProduct((prev) => ({
                  ...prev, color: {
                    ...prev.color, color2: e.target.value
                  }
                }))
              }}
            />
          </>
          <>
            <Form.Label htmlFor="exampleColorInput">Color 3</Form.Label>
            <Form.Control
              type="color"
              id="exampleColorInput"
              defaultValue="#e6e2d6"
              title="Choose your color"
              onChange={(e) => {
                setProduct((prev) => ({
                  ...prev, color: {
                    ...prev.color, color1: e.target.value
                  }
                }))
              }}
            />
          </>
          <span className="focus-input100"></span>
        </div>
        <div className="p-t-31 p-b-9">
          <span className="txt1">Upload Image</span>
        </div>
        <div className="w-full " data-validate="File is required">
          <input type="file" name="image"
            onChange={() => handleImageChange}
          />
        </div>
        <div className="container-login100-form-btn m-t-17">
          <button className="login100-form-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Product;
