import React from 'react';
import { Col, Row } from 'react-bootstrap';
import honda from '../../../images/honda.jpg'
const CarCompany = () => {
    return (
    // color: #9e9595;
    <div style={{background:'#a19f9f70'}}>
         <div className="m-2">
         <div className="row mt-3 p-2">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <img src={honda} className="img-fluid" alt="honda car" />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <h2 className="text-center">Honda Company</h2>
                  <h3 className="text-center">WE ARE DREAM BUILDERS</h3>
                  <p className="text-center">Honda believes in The Power of Dreams. But believing isn’t enough. As Soichiro Honda said: “Action without philosophy is a lethal weapon; philosophy without action is worthless.” See how we are bringing this idea to life.</p>
                  </div>
              </div>
              <hr />
              <div className="row mt-3">
                
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <h2 className="text-center">Honda Company</h2>
                  <h3 className="text-center">WE ARE DREAM BUILDERS</h3>
                  <p className="text-center">Honda believes in The Power of Dreams. But believing isn’t enough. As Soichiro Honda said: “Action without philosophy is a lethal weapon; philosophy without action is worthless.” See how we are bringing this idea to life.</p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <img src={honda} className="img-fluid" alt="honda car" />
                  </div>
              </div>
              <hr />
              <div className="row mt-3">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                      <img src={honda} className="img-fluid" alt="honda car" />
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <h2 className="text-center">Honda Company</h2>
                  <h3 className="text-center">WE ARE DREAM BUILDERS</h3>
                  <p className="text-center">Honda believes in The Power of Dreams. But believing isn’t enough. As Soichiro Honda said: “Action without philosophy is a lethal weapon; philosophy without action is worthless.” See how we are bringing this idea to life.</p>
                  </div>
              </div>
         </div>
        </div>
    );
};

export default CarCompany;