import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import hc4 from '../images/hc3.png'


import CarCard from './CarCard'
import TestimonialSection from './Testimonial';
import AboutSection from './About';
import ServicesSection from './Service';
import FAQSection from './FAQ';
import TeamSection from './Team';

function Home() {
  return (
    <>
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }} className=" text-white" id='home'>
      <Container >
        <Row  className="align-items-center ms-4">
          <Col md={7} className="text-center text-md-start p-4 ">
            <h1 className="display-4 fw-bold">Premium Car Rentals</h1>
            <p className="lead mt-3">
              Book your ride in seconds — pay only for the time you drive. Enjoy flexible, affordable, and premium vehicles for every journey.
            </p>
            <a href='#catalog'>
              <Button variant="primary" size="lg" className="mt-3" >
                Book Now
              </Button>
            </a>
          </Col>
          <Col md={5} className="text-center">
            <img
              src={hc4}
              alt="Car"
              className="img-fluid"
              style={{ maxHeight: '400px',width:"550px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>

    <AboutSection />

    <CarCard />

   <div id='service'>
     <ServicesSection />
   </div>
   

{/* <section className="pricing-section text-white py-5 px-3 " id="pricing">
  <div className="container text-center">
    <h2 className="pricing-title mb-4">Pricing & Assurance</h2>
    <p className="pricing-subtitle lead mb-4">
      Luxury doesn’t come cheap — and that’s the point. Every ride speaks class, precision, and prestige. <br />
      <p className="fs-5 mt-3">
  We charge <span className="text-danger fw-bold">$80</span> per day.
</p>

    </p>
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div className="pricing-card p-4 bg-secondary rounded-3 shadow">
          <h5 className="fw-bold">What’s Included:</h5>
          <ul className="list-unstyled mt-3 text-start ps-3">
            <li>✔ Full Coverage Insurance</li>
            <li>✔ 24/7 Roadside Assistance</li>
            <li>✔ Real-time Vehicle Tracking</li>
            <li>✔ Complimentary Sanitization</li>
          </ul>
        </div>
      </div>
    </div>
    <p className="pricing-note fst-italic mt-4">
      And no — kings do not bargain.
    </p>
  </div>
</section> */}

    <div id='team'>
      <TeamSection />
    </div>

    <TestimonialSection />

    <FAQSection />


    


    </>
  );
}

export default Home;
