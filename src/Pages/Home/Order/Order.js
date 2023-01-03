import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Alert, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../Share/Navigation/Navigation';
const Order = () => {

  const { user } = useAuth();
  const [num, setNum] = useState(1);
  const [order, setOrder] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const { id } = useParams();
  const productInfo = { email: user.email }
  const [productsInfo, setProductsInfo] = useState(productInfo);
  const totalPrices = Number(order.price) * num;
  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const myProduct = { ...productsInfo };
    myProduct[field] = value;
    setProductsInfo(myProduct);
  }
  console.log(productInfo);

  const handleProduct = e => {
    // collect data
    const myProducts = {
      ...productsInfo,
      productName: order.name,
      quantity: num,
      price: order.price,
      totalPrice: Number(num) * Number(order.price),
      picture: order.pic
    }
    console.log(myProducts);

    fetch('https://car-ecomerce-api-m6a7.vercel.app/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(myProducts)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {

          setIsSuccess(true);
        }
      });

    e.preventDefault();
  }
  useEffect(() => {
    const url = `https://car-ecomerce-api-m6a7.vercel.app/products/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setOrder(data);
      })
  }, []);

  const addQuantity = e => {
    if (e && num < 10) {
      setNum(Number(num) + 1);
    }
    if (!e && num > 1) {
      setNum(Number(num) - 1);
    }

  }
  //  console.log(totalPrices);
  return (
    <div className="mb-3">
      <Navigation></Navigation>
      <Card>
        <Card.Img variant="top" src={order.pic} />
        <Card.Body>
          <Card.Title>{order.name}...</Card.Title>
          {order.desc} <br />

        </Card.Body>
        <div>
          <button className="btn btn-primary me-3" onClick={() => { addQuantity(true) }}>+</button>
          <span>{num} </span>

          <button className="btn btn-primary ms-3" onClick={() => { addQuantity(false) }}>-</button> <br />
          <span> {totalPrices} </span>
        </div>
      </Card>
      <form onSubmit={handleProduct} className=" d-flex  flex-column justify-content-center align-items-center"  >
        <Form.Floating className="mb-3 mt-3 w-50 ">
          <Form.Control
            id="floatingInputCustom"
            type="text"
            name="name"
            //   onBlur={registerOnBlur}
            onBlur={handleOnBlur}
            defaultValue="abdul"
          />
          <label htmlFor="floatingInputCustom">name</label>
        </Form.Floating>
        <Form.Floating className="mb-3 mt-3 w-50">
          <Form.Control
            id="floatingInputCustom"
            type="number"
            name="number"
            //   onBlur={registerOnBlur}
            onBlur={handleOnBlur}
            defaultValue="017101"
          />
          <label htmlFor="floatingInputCustom">number</label>
        </Form.Floating>

        <Form.Floating className="mb-3 w-50">
          <Form.Control
            id="floatingPasswordCustom"
            type="email"
            name="email"
            // onBlur={registerOnBlur}
            onBlur={handleOnBlur}
            placeholder="email"
            defaultValue={user?.email}
          />

          <label htmlFor="floatingPasswordCustom">email</label>
        </Form.Floating>
        <Button type="submit" className="btn btn-primary">submit</Button>
      </form>
      {
        isSuccess && <Alert severity="success">successfully you complete your order</Alert>
      }
    </div>
  );
};

export default Order;