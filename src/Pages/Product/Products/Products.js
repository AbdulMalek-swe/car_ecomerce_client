import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Navigation from '../../Home/Share/Navigation/Navigation';
import Product from '../Product/Product';

const Products = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/products`
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)
    return (
        <div>
            <Navigation></Navigation>
            <Row xs={1} md={2} className="g-4">
                {
                    services.map(item => <Product
                        item={item}
                        key={item.id}
                    ></Product>)
                }
            </Row>
        </div>

    );
};

export default Products;