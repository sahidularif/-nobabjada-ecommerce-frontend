import axios from "axios";
import React from "react";
type ProductPropsType = {
  title: string;
  description: string;
  price: string;
  image: string;
};
const Product = () => {
  const [success, setSuccess] = React.useState<boolean>(false);
  const [product, setProduct] = React.useState<ProductPropsType>({
    title: "",
    description: "",
    price: "",
    image: "",
  });

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
          image: response.data.data.display_url,
        }));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // When Form submit
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/addProduct", product)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    console.log(product);
   
  };

  // console.log(fileSelected)
  return (
    <div className="pd-table-wr">
      <span className="product-form-title p-b-40">Add New Product</span>
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
          <span className="txt1">Upload Image</span>
        </div>
        <div className="w-full " data-validate="File is required">
          <input type="file" name="image" onChange={handleImageChange} />
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
