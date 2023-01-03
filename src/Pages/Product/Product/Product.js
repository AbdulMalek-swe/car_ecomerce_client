import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'
const Product = (props) => {
    const {price,name,pic,desc,_id} = props.item;
    console.log(_id);
    return (
        <Col >
        <Card>
          <Card.Img variant="top" className='card-image' src={pic} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {desc}
            </Card.Text>
            <span style={{marginRight:"12px" , color:"blue"}}>${price}</span>
         
            <Link to={`/orders/${_id}`}>
           <Button className="btn btn-primary">BUY NOW</Button>
           </Link>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Product;