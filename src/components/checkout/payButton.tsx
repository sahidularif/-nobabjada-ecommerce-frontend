import axios from "axios";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/useTypeSelector";
// import { clearCart } from "../../redux/reducer/cartSlice";

const PayButton = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { products } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch()
  const handleCheckout = () => {
    console.log(products)
    axios
      .post(`https://nobabjada-ecommerce.onrender.com/stripe/checkout`, {
        products,
        userId: user?.id,
      })
      .then((response) => {
        if (response.data.url) {
          // dispatch(clearCart({id:1}))
          window.location.href = response.data.url;
          console.log(response.data)
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button onClick={() => handleCheckout()} className="button_checkout shadow-sm">Check out</button>
    </>
  );
};

export default PayButton;
