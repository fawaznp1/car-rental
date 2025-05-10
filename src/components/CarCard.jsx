import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FaTachometerAlt, FaUsers, FaGasPump } from 'react-icons/fa';
import image1 from '../images/car1-removebg-preview.png';
import image2 from '../images/car2-removebg-preview.png';
import image3 from '../images/car3-removebg-preview.png';
import image4 from '../images/car4-removebg-preview.png';
import image5 from '../images/car5-removebg-preview.png';
import image6 from '../images/car6-removebg-preview.png';
import image7 from '../images/kisspng-2-18-subaru-wrx-car-2-17-removebg-preview.png';
import image8 from '../images/kisspng-cadillac-xlr-car-lexus-l-removebg-preview.png';
import image9 from '../images/kisspng-aston-martin-vanquish-ca-removebg-preview.png';
import image10 from '../images/car10.png';
import image11 from '../images/car11.png'
import image12 from '../images/car12.png'
import image13 from '../images/car13.png'

import './CarCard.css';

const cars = [
    { image: image1, name: "BMW X5", transmission: "Automatic", seats: 5, mpg: 11 },
    { image: image2, name: "Audi Q7", transmission: "Automatic", seats: 5, mpg: 8 },
    { image: image3, name: "Mercedes GLE", transmission: "Automatic", seats: 5, mpg: 12 },
    { image: image4, name: "Jaguar F-Pace", transmission: "Manual", seats: 5, mpg: 13 },
    { image: image5, name: "Range Rover Evoque", transmission: "Automatic", seats: 5, mpg: 15 },
    { image: image6, name: "Toyota Fortuner", transmission: "Manual", seats: 7, mpg: 16 },
    { image: image7, name: "Hyundai Tucson", transmission: "Manual", seats: 5, mpg: 16 },
    { image: image8, name: "Ferrari EQ7", transmission: "Automatic", seats: 2, mpg: 6 },
    { image: image9, name: "Porsche 911", transmission: "Manual", seats: 2, mpg: 5 },
    { image: image10, name: "Safari", transmission: "Automatic", seats: 7, mpg: 6 },
    { image: image11, name: "Bentley  C3", transmission: "Automatic", seats: 2, mpg: 3 },
    { image: image12, name: "Dodge Charger GT ", transmission: "Automatic", seats: 2, mpg: 6 },
    { image: image13, name: "Volvo XC60", transmission: "Automatic", seats: 2, mpg: 6 },
    { image: image8, name: "Ferrari EQ7", transmission: "Manual", seats: 2, mpg: 7 },
];

function CarList() {
  const [show, setShow] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleShow = (car) => {
    setSelectedCar(car);
    setShow(true);
  };

  // Just close the modal without showing alert
  const handleClose = () => {
    setShow(false);
    setSelectedCar(null);
  };

  // Handle save action - close modal AND show alert
  const handleSave = () => {
    setShow(false);
    setSelectedCar(null);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000); // hides after 4 sec
  };

  return (
    <>
      <h2 className="cards-title text-center fw-bold mb-4" id='catalog'>
        Explore Luxury Rides
      </h2>
      <div className="car-grid">
        {cars.map((car, idx) => (
          <Card className="car-card" key={idx}>
            <Card.Img variant="top" src={car.image} className="car-img" loading='lazy' />
            <Card.Body className="card-body-custom">
              <Card.Title className="text-center">{car.name}</Card.Title>

              <div className="car-info">
                <div><FaTachometerAlt /><div>{car.transmission}</div></div>
                <div><FaUsers /><div>{car.seats} Seat</div></div>
                <div><FaGasPump /><div>{car.mpg} MPG</div></div>
              </div>

              <div className="rent-btn">
                <Button
                  variant="primary"
                  className="w-100 d-flex justify-content-center align-items-center gap-2 mb-1 "
                  onClick={() => handleShow(car)}
                >
                  Rent Now <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      {showAlert && (
        <div className="custom-alert-wrapper">
          <sl-alert variant="success" open>
            <sl-icon slot="icon" name="check2-circle"></sl-icon>
            <strong>Appointment booked..!</strong><br />
            Car will reach u at the earliest
          </sl-alert>
        </div> 
      )}

      <Modal show={show} onHide={handleClose} centered size="lg" className='custom-modal'>
        <Modal.Header closeButton>
          <Modal.Title>Rent {selectedCar?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column flex-lg-row">
          <div className="mb-3 mb-lg-0" style={{ flex: 1 }}>
            {selectedCar && (
              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                style={{ width: '100%', borderRadius: '10px' }}
              />
            )}
          </div>

          <div style={{ flex: 1, paddingLeft: '20px' }}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Pickup Date & Time</Form.Label>
                <Form.Control type="datetime-local" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Drop-off Date & Time</Form.Label>
                <Form.Control type="datetime-local" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control className='placeholdertel' type="tel" placeholder="Enter phone number" />
              </Form.Group>

              <Button 
                variant="success" 
                onClick={handleSave} 
              >
                Save
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CarList;