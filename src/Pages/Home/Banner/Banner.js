import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
        <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100 car"
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/hero_banner/2021/10_27/02_evo_rwd.jpg"
          alt="First slide"
          width="100%"
        />
        <Carousel.Caption>
        <Link to="/products">
            <Button variant="success">EXPLORE</Button>
            </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian-fkp-37/overview/SIAN_FKP_37_01-overview2_M.jpg"
    
          alt="Second slide"
        />

        <Carousel.Caption>
        <Button variant="success">EXPLORE</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 car"
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/hero_banner/2021/10_27/01_aventador_ultimae.jpg"
          alt="Third slide"
          width="100%"
        />

        <Carousel.Caption>
            <Link to="/products">
            <Link to="/products">
            <Button variant="success">EXPLORE</Button>
            </Link>
            </Link>
  
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Banner;