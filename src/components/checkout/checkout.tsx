import {
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  Elements,
} from "@stripe/react-stripe-js";
import styled from "styled-components";
import React from 'react'
import { loadStripe } from "@stripe/stripe-js";

export interface CreateCardPaymentProps {
  onSuccessCard: (id: string) => void;
}

const CardInputWrapper = styled.div`
border: 2px solid powderblue;
border-radius: 8px;
padding: 20px 4px;
justify-content-space-between
`;
const inputStyle = {
  iconColor: 'green',
  backgroundColor: 'white',
  border: '2px solid black',
  marginBottom: '10px',
  color: '#fff',
  fontWeight: '600',
  fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
  fontSize: '16px',
  fontSmoothing: 'antialiased',
  ':-webkit-autofill': {
    color: '#fce883',
  },
  '::placeholder': {
    color: '#87BBFD',
  },
}
export const CreateCardPayment = () => {
  const [name, setName] = React.useState("");
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [paymentStatus, setPaymentStatus] = React.useState('');
  const elements = useElements(); // use element provider state
  const stripe = useStripe(); // stripe sdk



  const onSubmit = async () => {
    if (!stripe || !elements) {
      return;
    }
    // card number element as the card element
    const cardNumberElement = elements?.getElement(CardNumberElement);

    if (cardNumberElement) {
      const { error, paymentMethod } = await stripe?.createPaymentMethod({
        type: 'card',
        card: cardNumberElement,  // pass as card
        billing_details: {
          name, // name of the user
        },
      });

      if (!error && paymentMethod?.id) {
        setPaymentStatus('Payment success!');
      } else {
        setPaymentStatus('Payment failed!');
      }
    }
    else {
      setPaymentStatus('Payment failed!');
    }
  };


  return (

    <div className="d-block text-dark">
      <CardNumberElement
        className="text-dark border"
      />
      {/* <CardExpiryElement
        options={{
          style: {
            base: inputStyle,
          },
          placeholder:'CVC'
        }}
      /> */}

      <button onClick={onSubmit}>Pay with card</button>
      {isProcessing && <div>Processing...</div>}
        {!isProcessing && paymentStatus && <div>Status: {paymentStatus}</div>}
    </div>
  );
}
export interface CreateCardPaymentProps {
  onCreatePaymentMethod: (id: string) => void;
}
const PaymentGateway = () => {
  const stripePromise = loadStripe('pk_test_Hpa0K7PQIXM2i2STQXenukfE');

  return (
    <Elements stripe={stripePromise}>
      <CreateCardPayment />
    </Elements>
  );
};

export default PaymentGateway;