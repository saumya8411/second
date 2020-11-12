import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row,Col } from 'reactstrap';
import { Colxx } from '../../components/common/CustomBootstrap';
import './navs.css'
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="page-footer">
      <Row className="m-0">
        <Col md="1" xs="1">
        
      
      </Col>
      <Col md="3" xs="3">
      <p className="heading ">© 2020 Oyesters Training All Rights Reserved</p>
      </Col>
      <Col md="6" xs="5">
      <p className="heading2 "><a href="https://oyesters.in/privacy-policy/" className="a text-light ml-4">Privacy Policy</a>   <a href="https://oyesters.in/refund-cancellation-policy/" className="text-light">Refund & Cancellation Policy</a>  Home   <a href="https://oyesters.in/apply-online-for-internship-oyesters-training/" className="text-light">Internship</a>   <a href="https://oyesters.in/technical-workshops/" className="text-light">Technical Workshops</a>   <a href="https://oyesters.in/contact/" className="text-light">Contact Us</a>   <a href="https://oyesters.in/about-us/" className="text-light">About Us</a>  </p>
      </Col>
      <Col md="2" xs="3">
      <div className="icons mb-4">
        <FaFacebook className="ml-3 mb-4" id="fb" />
        <FiInstagram className="ml-3 mb-4" id="insta" />
        <AiFillTwitterCircle className="ml-3 mb-4" id="twi" />
      </div>
      </Col>
      </Row>
    </footer>
  );
};

export default Footer;
