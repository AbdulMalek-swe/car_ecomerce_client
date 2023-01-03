import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Alert, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const Addproduct = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const { id } = useParams();
  const productInfo = {};
  const [productsInfo, setProductsInfo] = useState(productInfo);

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const myProduct = { ...productsInfo };
    myProduct[field] = value;
    setProductsInfo(myProduct);
  }

  const handleProduct = e => {
    const myProducts = {
      ...productsInfo,
    }
    console.log(myProducts);
    // send to the server
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(myProducts)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {

          // handleBookingClose();
          setProducts({});
          setIsSuccess(true);
        }
      });

    e.preventDefault();
  }
  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setProducts(data);
      })
  }, [])
  return (
    <div className="mb-3">

      <form onSubmit={handleProduct} className=" d-flex  flex-column justify-content-center align-items-center"  >
        <Form.Floating className="mb-3 mt-3 w-50 ">
          <Form.Control
            id="floatingInputCustom"
            type="text"
            name="name"
            onBlur={handleOnBlur}
            defaultValue=""
          />
          <label htmlFor="floatingInputCustom">product name</label>
        </Form.Floating>

        <Form.Floating className="mb-3 w-50">

          <Form.Control
            id="floatingPasswordCustom"
            type="text"
            name="price"

            onBlur={handleOnBlur}
            placeholder="price"
            defaultValue=""
          />
          <label htmlFor="floatingPasswordCustom">product price</label>
        </Form.Floating>

        <Form.Floating className="mb-3 mt-3 w-50">
          <Form.Control
            id="floatingInputCustom"
            type="text"
            name="pic"

            onBlur={handleOnBlur}
            defaultValue=""
          />
          <label htmlFor="floatingInputCustom">product pic url</label>
        </Form.Floating>

        <Form.Floating className="mb-3 w-50">

          <Form.Control
            id="floatingPasswordCustom"
            type="text"
            name="desc"

            onBlur={handleOnBlur}
            placeholder="pic url"
            defaultValue="the product is nice "
          />
          <label htmlFor="floatingPasswordCustom">description</label>
        </Form.Floating>

        <Button type="submit" className="btn btn-primary">submit</Button>
      </form>
      {
        isSuccess && <Alert severity="success">successfully Add data</Alert>
      }
    </div>
  );
};
export default Addproduct;