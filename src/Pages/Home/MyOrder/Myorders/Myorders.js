import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
const Myorders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://car-ecomerce-api-m6a7.vercel.app/orders`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data._id);
                const dataBack = data.filter(item => item.email === user.email)
                setOrders(dataBack)
            }
            )
    }, []);
    const deleteData = (item) => {
        const proced = window.confirm('Are you want to cancel this order?');
        if (proced) {
            const url = `https://car-ecomerce-api-m6a7.vercel.app/orders/${item}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    //    console.log(item,data._id);
                    if (data.deletedCount > 0) {
                        //  alert("success hoicos tui");
                        const orderItem = orders.filter((user) => user._id !== item);
                        setOrders(orderItem);
                    }
                })
        }

    }
    console.log(orders);
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {orders.map(item =>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={item.picture} />
                            <Card.Body>
                                <Card.Title>{item.productName}</Card.Title>
                                <Card.Text>
                                    <p>quantity  : {item.quantity}</p>
                                    <p>totalPrice : {item.totalPrice}</p>
                                </Card.Text>
                                <Button className="btn btn-danger me-3" onClick={() => { deleteData(item._id) }}>cancel order</Button>
                                <Link to={`/dashboard/payment/${item._id}`}>
                                    <Button className="btn btn-primary">payment</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        </div>

    );
};

export default Myorders;