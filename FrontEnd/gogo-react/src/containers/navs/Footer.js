import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row,Col } from 'reactstrap';
import { Colxx } from '../../components/common/CustomBootstrap';
import './navs.css'
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <footer className="page-footer ">
      <Row className="m-0">
      <Col md="2"></Col>
      <Col md="4" xs="12 "> 
      <p className=" copy1 mr-auto" style={{marginLeft:"auto"}}>Copyright © 2020 Oyesters Training All Rights Reserved</p></Col>
      <Col md="4" xs="12" className=" col2 mt-3">
      <a href="#" className=" mt-4 copy" >Privacy Policy</a><a href="#" className="ml-2  copy" >Refund & Cancellation Policy</a><a href="#" className="ml-2  copy"> Contact Us</a><a href="#" className="ml-2  copy"> About Us</a></Col>
      <Col md="2" xs="12" className=" text-center mt-3"><FaFacebook style={{color:'#046DE4', fontSize: '30px', marginRight: '20px'}}/><FiInstagram style={{color: '#ED4956',fontSize: '30px', marginRight: '20px'}}/><AiFillTwitterCircle style={{color: '#50ABF1',fontSize: '30px'}} /></Col>
      </Row>
    </footer>
  );
};

export default Footer;
