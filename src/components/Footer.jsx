import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className=" text-white pt-5 border-top" id='contact'>
      <div className="container text-center text-md-start">
        <div className="row align-items-start mb-4">
          <div className="col-md-3 mb-3">
            <h5 className="fw-bold">
              <span className="text-danger">/</span>Urban<span className="fw-normal">Drive</span>
            </h5>
          </div>

          <div className="col-md-6 mb-3 ">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link text-white" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#pricing">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#works">Works</a>
              </li>
             {/*  <li className="nav-item">
                <a className="nav-link text-white" href="#support">Support</a>
              </li> */}
            </ul>
          </div>

          <div className="col-md-3 text-center text-md-end mb-3 ">
            <a href="#" className="text-white me-3 p-2 fs-4"><FaTwitter /></a>
            <a href="#" className="text-white me-3 p-2 fs-4"><FaFacebookF /></a>
            <a href="#" className="text-white me-3 p-2 fs-4"><FaInstagram /></a>
            <a href="#" className="text-white p-2 fs-4"><FaGithub /></a>
          </div>
        </div>

        <hr />

        <div className="row align-items-center pb-3">
          <div className="col-md-6 text-center text-md-start p-4">
            <small>© Copyright 2025, All Rights Reserved</small>
          </div>
          <div className="col-md-6 text-center text-md-end p-4">
            <a href="#privacy" className="text-white me-3" style={{textDecoration:'none'}}>Privacy Policy</a>
            <a href="#terms" className="text-white" style={{textDecoration:'none'}}>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
