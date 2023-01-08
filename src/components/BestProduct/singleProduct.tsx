import React from "react";
import { useParams, } from "react-router-dom";
import "../../styles/singleProduct.css";
import user1 from "../../images/user/man1.jpg";
import user2 from "../../images/user/man2.jpeg";
import user3 from "../../images/user/man3.jpg";
import { fetchProducts, Product } from "../../redux/reducer/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/useTypeSelector";
import { addProductToCart } from "../../redux/reducer/cartSlice";

export type MyParams = {
  _id: string;
};

const SingleProduct = () => {
  const { _id } = useParams<"_id">();
  console.log(_id)
  const { loading, data } = useAppSelector((state) => state.product);
  const [tabDetails, setTabDetails] = React.useState<boolean>(true);
  const [qty, setQty] = React.useState<number>(0);
  const [price, setPrice] = React.useState<number>(0);
  const [tabReview, setTabReview] = React.useState<boolean>(false);
  const [product, setProduct] = React.useState<Product>({
    _id: '',
    title: '',
    price: 0,
    description: '',
    color: {
      color1: '',
      color2: '',
      color3: '',
    },
    img_url: '',
  })

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(fetchProducts())
    setProduct(selectedItem)
  }, [dispatch])
  const selectedItemIndex = data.findIndex(
    (product) => product._id === _id
  );
  const selectedItem = data[selectedItemIndex]
  // const item = data.find((pd) => pd._id === _id);
  const item = data.find((pd) => pd._id === _id)

  const addToCart = (product: Product) => {
    if (qty > 0) {
      dispatch(addProductToCart({ product: product, quantity: qty }));
    }

  };



  if (item == null) return null;
  console.log(data);
  console.log(item);

  return (
    <React.Fragment>
      <section className="single-product">
        <div className="container">
          <div className="row mt-20">
            <div className="col-md-5">
              <div className="single-product-slider">
                <div className="single-product-image">
                  <img src={selectedItem?.img_url} alt="product image" />
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="single-product-details">
                <h2>{selectedItem?.title}</h2>
                <p className="product-price">${selectedItem?.price}</p>

                <p className="product-description mt-20">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum ipsum dicta quod, quia doloremque aut deserunt commodi
                  quis. Totam a consequatur beatae nostrum, earum consequuntur?
                  Eveniet consequatur ipsum dicta recusandae.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt, velit, sunt temporibus, nulla accusamus similique
                  sapiente tempora, at atque cumque assumenda minus asperiores est
                  esse sequi dolore magnam. Debitis, explicabo.
                </p>
                <div className="color-swatches">
                  <span>color:</span>
                  <div style={{ display: "inline-block" }} className="input-color">
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                      <input type="radio" className="btn-check" value={`${product.color.color1}`} name="color" id="btnradio1" autoComplete="off" />
                      <label className="btn btn-outline-secondary" style={{ 'backgroundColor': `${product.color.color1}` }} htmlFor="btnradio1"></label>

                      <input type="radio" className="btn-check" value={`${product.color.color1}`} name="color" id="btnradio2" autoComplete="off" />
                      <label className="btn btn-outline-secondary" style={{ 'backgroundColor': `${product.color.color2}` }} htmlFor="btnradio2"></label>

                      <input type="radio" className="btn-check" value={`${product.color.color1}`} name="color" id="btnradio3" autoComplete="off" />
                      <label className="btn" htmlFor="btnradio3" style={{ 'backgroundColor': `${product.color.color3}` }}></label>
                    </div>
                  </div>
                </div>
                <div className="product-size">
                  <span>Size:</span>
                  <select className="form-control" name="size">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </div>
                <div className="product-quantity">
                  <span>Quantity:</span>
                  <div className="product-quantity_inc_dec">
                    <span style={{ borderRight: "none" }} onClick={() => {
                      // setProduct((prev)=>({...prev, price: product.price - selectedItem.price}))
                      if (qty <= 0) return

                      // if(product.price<0) return 0
                      setQty(qty - 1)
                      if (price <= 0) return
                      setPrice(price - product.price)
                    }}>

                    </span>
                    <span className="quantity" style={{ borderRight: "none" }}>
                      {qty}
                    </span>
                    <span
                      onClick={() => {
                        setPrice(price + product.price)
                        setQty(qty + 1)

                      }}
                    >
                      <i className="tf-ion-android-add"></i>
                    </span>
                  </div>
                </div>
                <div className="product-category">
                  <span>Categories:</span>
                  <ul>
                    <li>
                      <a href="product-single.html">Products</a>
                    </li>
                    <li>
                      <a href="product-single.html">Soap</a>
                    </li>
                  </ul>
                </div>
                <div className="product-subtotal">
                  <span>Sub total:</span>
                  <span>${price}</span>
                </div>
                <a href="#" className="btn btn-main mt-5" onClick={() => addToCart(product)}>
                  Add To Cart
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <div className="single-item-tabs mt-5">
                <ul>
                  <li onClick={() => {
                    setTabDetails(true)
                    setTabReview(false)
                  }}>
                    <a href="#" className="active">
                      Details
                    </a>
                  </li>
                  <li onClick={() => {
                    setTabDetails(false)
                    setTabReview(true)
                  }}>
                    <a href="#">Review</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="single-item-tabs-content">
                {tabDetails && (
                  <div className="tab-details">
                    <h5>Product Details</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum. Sed ut per spici Lorem
                      ipsum dolor sit amet, consectetur adipisicing elit.
                      Veritatis delectus quidem repudiandae veniam distinctio
                      repellendus magni pariatur molestiae asperiores animi, eos
                      quod iusto hic doloremque iste a, nisi iure at unde
                      molestias enim fugit, nulla voluptatibus. Deserunt voluptate
                      tempora aut illum harum, deleniti laborum animi neque,
                      praesentium explicabo, debitis ipsa?
                    </p>
                  </div>
                )}
                {tabReview && (
                  <div className="post-comments">
                    <ul className="media-list comments-list m-bot-50 clearlist">
                      <li className="media">
                        <a className="pull-left" href="#!">
                          <img
                            className="media-object comment-avatar"
                            src={user1}
                            alt=""
                            width="50"
                            height="50"
                          />
                        </a>

                        <div className="media-body">
                          <div className="comment-info">
                            <h4 className="comment-author">
                              <a href="#!">Jonathon Andrew</a>
                            </h4>
                            <time date-time="2013-04-06T13:53">
                              July 02, 2015, at 11:34
                            </time>
                            <a className="comment-button" href="#!">
                              <i className="tf-ion-chatbubbles"></i>Reply
                            </a>
                          </div>

                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque at magna ut ante eleifend eleifend.Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Quod laborum minima, reprehenderit laboriosam officiis
                            praesentium? Impedit minus provident assumenda quae.
                          </p>
                        </div>
                      </li>
                      <li className="media">
                        <a className="pull-left" href="#!">
                          <img
                            className="media-object comment-avatar"
                            src={user2}
                            alt=""
                            width="50"
                            height="50"
                          />
                        </a>

                        <div className="media-body">
                          <div className="comment-info">
                            <div className="comment-author">
                              <a href="#!">Jonathon Andrew</a>
                            </div>
                            <time date-time="2013-04-06T13:53">
                              July 02, 2015, at 11:34
                            </time>
                            <a className="comment-button" href="#!">
                              <i className="tf-ion-chatbubbles"></i>Reply
                            </a>
                          </div>

                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque at magna ut ante eleifend eleifend.
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Magni natus, nostrum iste non delectus atque ab
                            a accusantium optio, dolor!
                          </p>
                        </div>
                      </li>

                      <li className="media">
                        <a className="pull-left" href="#!">
                          <img
                            className="media-object comment-avatar"
                            src={user3}
                            alt=""
                            width="50"
                            height="50"
                          />
                        </a>

                        <div className="media-body">
                          <div className="comment-info">
                            <div className="comment-author">
                              <a href="#!">Jonathon Andrew</a>
                            </div>
                            <time date-time="2013-04-06T13:53">
                              July 02, 2015, at 11:34
                            </time>
                            <a className="comment-button" href="#!">
                              <i className="tf-ion-chatbubbles"></i>Reply
                            </a>
                          </div>

                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Quisque at magna ut ante eleifend eleifend.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <h1>Hello</h1> */}
        </div>
      </section>
    </React.Fragment>
  );
};

export default SingleProduct;
