import axios from "axios";
import React from "react";
type ProductPropsType = {
  title: string;
  article: string;
  image: string;
};
const Article = () => {
  const [article, setArticle] = React.useState<ProductPropsType>({
    title: "",
    article: "",
    image: '',
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
        setArticle((prev) => ({
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
      .post("https://gleaming-puce-pullover.cyclic.app/article/addArticle", article)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    console.log(article);

  };
  // console.log(fileSelected)
  return (
    <div className="products-wrapper">
      <span className="product-form-title p-b-53">Add New Product</span>
      <form
        className="login100-form flex-sb flex-w"
        onSubmit={handleFormSubmit}
      >
        <div className="p-t-31 p-b-9">
          <span className="txt1">Title</span>
        </div>
        <div className="wrap-input100 " data-validate="Title is required">
          <input
            className="input100"
            type="text"
            name="title"
            onChange={(e) =>
              setArticle((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <span className="focus-input100"></span>
        </div>

        <div className="p-t-13 p-b-9">
          <span className="txt1">Article</span>
        </div>
        <div className="wrap-input100 " data-validate="Description is required">
          <textarea
            className="textarea100"
            name="article"
            onChange={(e) =>
              setArticle((prev) => ({ ...prev, article: e.target.value }))
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

export default Article;
