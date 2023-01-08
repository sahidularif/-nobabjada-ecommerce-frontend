import React, { FC, } from "react";
import Modal from "../modal/Modal";
import { Product, fetchProducts } from "../../redux/reducer/productSlice";
import { useAppDispatch, useAppSelector,} from "../../redux/hooks/useTypeSelector";
import { addProductToCart } from "../../redux/reducer/cartSlice";

type CartItem = Product & {
  quantity: number;
};
type CartState = {
  products: CartItem[];
  totalPrice: number;
};
const BestProducts: FC = () => {
  const { loading, data } = useAppSelector((state) => state.product);
  const [modalData, setModalData] = React.useState<Product>({
    _id: '',
    title: '',
    description: '',
    color: {},
    price:0,
    img_url:''
  })
  const [openModal, setOpenModal] = React.useState(false);
  const dispatch = useAppDispatch();

  const addToCart = (product: Product) => {
    dispatch(addProductToCart({product:product}));
  };
  React.useEffect(()=>{
    dispatch(fetchProducts())
  }, [])
console.log(data)
  return (
    <section className="products section"
    onClick={(e)=>e.stopPropagation()}
    >      
      <div className="container">
        
        <div className="row">
          {data?.map((pd, i) => {
            return (
               
              <div className="col-md-4" key={i}>
                
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
                <Modal onClose={() => setOpenModal(false)} open={openModal} item={modalData} />
              </div>
              
            );
          })}
        </div>
        
      </div>
      
    </section>
  );
};

export default BestProducts;
