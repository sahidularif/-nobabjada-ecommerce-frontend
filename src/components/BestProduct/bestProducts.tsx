import React, { FC, } from "react";
import Modal from "../modal/Modal";
import { Product, TProduct } from "../../redux/reducer/productSlice";
import { useAppDispatch, useAppSelector,} from "../../redux/hooks/useTypeSelector";
import { addProductToCart } from "../../redux/reducer/cartSlice";
import { Link } from "react-router-dom";

type CartItem = Product & {
  quantity: number;
};
type CartState = {
  products: CartItem[];
  totalPrice: number;
};
const BestProducts: FC = () => {
  const { loading, data } = useAppSelector((state) => state.product);
  const { products } = useAppSelector((state) => state.cart);
  const [modalData, setModalData] = React.useState<Product>({
    id: 0,
    title: '',
    description: '',
    color: {},
    size: {},
    price:0,
    img_url:''
  })
  const [openModal, setOpenModal] = React.useState(false);
  const dispatch = useAppDispatch();

  const addToCart = (product: Product) => {
    dispatch(addProductToCart({product:product}));
  };
console.log(modalData)
  return (
    <section className="products section"
    // onClick={handleOuterClick}
    onClick={(e)=>e.stopPropagation()}
    >      
      <div className="container">
        
        <div className="row">
          {data?.map((pd) => {
            return (
              
              <div className="col-md-4">
                
                <div className="product-item">
                  <div className="product-thumb">
                    <span className="bage">Sale</span>
                    <img
                      className="img-responsive"
                      src={pd.img_url}
                      alt="product-img"
                    />
                    <div className="preview-meta">
                      <ul>
                        <li>
                          <span
                            data-toggle="modal"
                            data-target="#product-modal"
                          >
                            <i className="tf-ion-ios-search-strong" onClick={(e)=>{
                               e.stopPropagation()
                              setOpenModal(true)
                              setModalData(pd)
                             
                              }}></i>
                          </span>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="tf-ion-ios-heart"></i>
                          </a>
                        </li>
                        <li>
                        <span>
                            <i
                              className="tf-ion-android-cart"
                              onClick={() => addToCart(pd)}
                            ></i>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <h4>
                      <a href="product-single.html">{pd.title}</a>
                    </h4>
                    <p className="price">${pd.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
      <Modal onClose={() => setOpenModal(false)} open={openModal} item={modalData} />
    </section>
  );
};

export default BestProducts;
