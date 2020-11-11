import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row } from 'reactstrap';
import { Colxx } from '../../components/common/CustomBootstrap';
import './navs.css'
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiFillTwitterCircle } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="page-footer mt-auto float-bottom">
      <Row className="m-0">
      <p className="heading mr-4">© 2020 Oyesters Training All Rights Reserved</p>
      <p className="heading2 ml-4 "><a href="https://oyesters.in/privacy-policy/" className="a text-light ml-4">Privacy Policy</a>   <a href="https://oyesters.in/refund-cancellation-policy/" className="text-light">Refund & Cancellation Policy</a>  Home   <a href="https://oyesters.in/apply-online-for-internship-oyesters-training/" className="text-light">Internship</a>   <a href="https://oyesters.in/technical-workshops/" className="text-light">Technical Workshops</a>   <a href="https://oyesters.in/contact/" className="text-light">Contact Us</a>   <a href="https://oyesters.in/about-us/" className="text-light">About Us</a>  </p>
      <div className="icons mb-4">
        <FaFacebook className="ml-3 mb-4" id="fb" />
        <FiInstagram className="ml-3 mb-4" id="insta" />
        <AiFillTwitterCircle className="ml-3 mb-4" id="twi" />
      </div>
      </Row>
    </footer>
  );
};

export default Footer;
