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
    <footer className="page-footer">
      <Row>
      <p className="heading">© 2020 Oyesters Training All Rights Reserved</p>
      <p className="heading2 ml-4"><a href="https://oyesters.in/privacy-policy/" className="a">Privacy Policy</a>   <a href="https://oyesters.in/refund-cancellation-policy/">Refund & Cancellation Policy</a>  Home   <a href="https://oyesters.in/apply-online-for-internship-oyesters-training/">Internship</a>   <a href="https://oyesters.in/technical-workshops/">Technical Workshops</a>   <a href="https://oyesters.in/contact/">Contact Us</a>   <a href="https://oyesters.in/about-us/">About Us</a>  </p>
      <div className="icons">
        <FaFacebook className="ml-3" id="fb" />
        <FiInstagram className="ml-3" id="insta" />
        <AiFillTwitterCircle className="ml-3" id="twi" />
      </div>
      </Row>
    </footer>
  );
};

export default Footer;
