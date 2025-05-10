import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import hc4 from '../images/hc3.png'
import CarCard from './CarCard'
import TestimonialSection from './Testimonial';
import AboutSection from './About';
import ServicesSection from './Service';
import FAQSection from './FAQ';
import TeamSection from './Team';
import PricingSection from './Pricing';

function Home() {
  return (
    <>
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }} className=" text-white" id='home'>
      <Container >
        <Row  className="align-items-center ms-2">
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
   

 
    <div id='price'>
    <PricingSection />
    </div>

    <div id='team'>
      <TeamSection />
    </div>

    <TestimonialSection />

    <FAQSection />


    


    </>
  );
}

export default Home;
