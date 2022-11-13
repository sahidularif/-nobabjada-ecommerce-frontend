import {
    useElements,
    useStripe,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
} from "@stripe/react-stripe-js";
import styled from "styled-components";
import React from 'react'

export interface CreateCardPaymentProps {
    onSuccessCard: (id: string) => void;
}
const CardInputWrapper = styled.div`
  border: 2px solid #00f;
  border-radius: 8px;
  padding: 20px 4px;
`;
const inputStyle = {
    iconColor: '#c4f0ff',
    color: '#ff0',
    fontWeight: '500',
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
export const CreateCardPayment = ({ onSuccessCard }: CreateCardPaymentProps) => {
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
                onSuccessCard(paymentMethod.id);
            } else {
                setPaymentStatus('Payment failed!');
            }
        }
        else {
            setPaymentStatus('Payment failed!');
        }
    };


    return (

        <CardInputWrapper>
            <CardNumberElement
                options={{
                    style: {
                        base: inputStyle,
                    },
                }}
            />

            <button onClick={onSubmit}>Pay with card</button>
        </CardInputWrapper>
    );
}