import React from 'react';
import axios from 'axios';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    axios.get('https://vf8huftlq6.execute-api.us-west-2.amazonaws.com/dev/singlecharge')
        .then(async res => {
            if(res.data.body){
                let clientSecret = res.data.body.clientsecret
                const result = await stripe.confirmCardPayment(clientSecret, {
                  payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                      name: 'Jenny Rosen',
                    },
                  }
                });
                if (result.error) {
                  alert(result.error.message);
                } else {
                  if (result.paymentIntent.status === 'succeeded') {
                    alert('Payment succeeded!')
                  }
                }
            } else alert('wtf');
        
        })
  };

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={CARD_ELEMENT_OPTIONS}
        />
        <button type='submit' disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
}
