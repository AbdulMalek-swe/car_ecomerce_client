import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-area">
          <Container>
  <Row>
    <Col xs={12} md={7} className="footer">
        <ul className="d-flex flex-column justify-content-between">
           <div className="d-flex">
           <li>COMPANY</li>
           <li>COMPANY</li>
            <li>CAREERS</li>
            <li>CONTACT US</li>
           </div>
            <div className="d-flex">
            <li>MEDIA CENTER</li>
            <li>PRIVACY & LEGAL</li>
            <li>COOKIE SETTINGS</li>
            </div>
            <p>The consumption and emissions values in the website refer to your geographical IP. This value might be unrealistic if you navigate using VPN </p>
        </ul>
    </Col>
    <Col xs={12} md={5} >
    <i class="fab fa-facebook-square text-light p-2 fa-2x"></i>
    <i class="fab fa-twitter-square text-light p-2 fa-2x"></i>
    <i class="fab fa-instagram-square text-light p-2 fa-2x"></i>
    <i class="fab fa-linkedin text-light p-2 fa-2x"></i>
    <i class="fab fa-pinterest-square text-light p-2 fa-2x"></i>
    <i class="fab fa-snapchat-square text-light p-2 fa-2x"></i>
  
    </Col>
  </Row>
   <p  className="text-center text-light p-4">Copyright © 2021 Automobili Lamborghini S.p.A. a sole shareholder company part of Audi Group.</p>
</Container>
        </div>
    );
};

export default Footer;