import React from 'react';
import Banner from '../Banner/Banner';
import CarCompany from '../CarCompany/CarCompany';
import Footer from '../Footer/Footer';

import Review from '../Review/Review';
import Services from '../Services/Services';
import Navigation from '../Share/Navigation/Navigation';

const Home = () => {
    return (
        <div>
           <Navigation></Navigation> 
           <Banner></Banner>
           <Services></Services>
           <Review></Review>
           <CarCompany></CarCompany>
           <Footer></Footer>
        </div>
    );
};

export default Home;