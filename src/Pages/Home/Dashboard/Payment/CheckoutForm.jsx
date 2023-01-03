import { flexbox } from '@mui/system';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
const CheckoutForm = ({ product }) => {
  // console.log(product);
  const [error, setError] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const { price } = product;
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.clientSecret);
        setClientSecret(data.clientSecret)
      });
  }, [price]);
  const handleSubmit = async (event) => {
    // Block native form submission.
    console.log(event.target);
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {

      setError(error.message);
    } else {
      setError('sucess');

    }
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: product?.name,
          },
        },
      },
    );

  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='mt-5 pt-5'>

      <Button variant="primary" onClick={handleShow}>
        payment
      </Button>

      <Modal show={show} onHide={handleClose} className='mt-5 md-ms-5'>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>{error}</h1>
            <h1>price {product.price}</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },

                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}

            />
            <button type="submit" disabled={!stripe}>
              pay
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};


export default CheckoutForm;