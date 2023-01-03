import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import honda from '../../../images/honda.jpg'
import Service from '../Service/Service';

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        const url = `https://car-ecomerce-api-m6a7.vercel.app/products`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setService(data);
            })
    }, [])
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {
                    service.slice(0, 6).map(item =>
                        <Service item={item} key={item.id}
                        ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;