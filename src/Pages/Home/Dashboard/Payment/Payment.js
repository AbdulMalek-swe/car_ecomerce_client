
import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
const stripePromise = loadStripe('pk_test_51K7X9NJ0NKjQWCj1LvJebgUt0wwFNg38D1Yj9aaPOMifQhtPsEWdwGVFuq89JzlX8AMElQ6yQ37BB45UCoCIEZ43007xem2HWB');
const Payment = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const url = `https://car-ecomerce-api-m6a7.vercel.app/orders/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setProduct(data);
      })
  }, []);
  console.log(id);
  const price = 90;
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        id={id}
        product={product}
      />
    </Elements>
  );
};
export default Payment;