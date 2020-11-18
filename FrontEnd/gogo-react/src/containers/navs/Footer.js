import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row,Col } from 'reactstrap';
import { Colxx } from '../../components/common/CustomBootstrap';
import './navs.css'
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Logo from './s2white.png'

const Footer = () => {
  return (
    <footer className="page-footer ">
      <Row className="m-0">
      <Col md="2"></Col>
      <Col md="3" xs="12 "> 
      <p className=" copy1 ml-auto" style={{marginLeft:"auto"}}>Copyright © Trainer Oyesters Training <br/> All Rights Reserved <b className="text-center">Contact Trainer at</b><FaFacebook style={{color:'#046DE4', fontSize: '25px', marginRight: '20px', marginLeft:'60px', marginTop:'5px'}}/><FiInstagram style={{color: '#ED4956',fontSize: '25px', marginRight: '20px',marginTop:'5px'}}/><AiFillTwitterCircle style={{color: '#50ABF1',fontSize: '25px',marginTop:'5px'}} /> </p></Col>
      <Col md="4" xs="12" className=" col2 mt-3 text-center">
      <a href="#" className=" mt-4 copy" >Terms of Use</a><a href="#" className=" ml-2 mt-4 copy" >Privacy Policy</a><a href="#" className="ml-2  copy" >Refund & Cancellation Policy</a><br/><a href="#" className="ml-2  copy"> Contact Us</a><a href="#" className="ml-2  copy"> About Us</a></Col>
      <Col md="3" xs="12" className="text-center mt-4 text-light"><p style={{lineHeight: '0px',}}>Deliver online with Oyesters</p><img src={Logo} style={{width:'30%', marginLeft:'auto',marginright:'auto'}} /><br/><FaFacebook style={{color:'#046DE4', fontSize: '20px', marginRight: '20px'}}/><FiInstagram style={{color: '#ED4956',fontSize: '20px', marginRight: '20px'}}/><AiFillTwitterCircle style={{color: '#50ABF1',fontSize: '20px'}} /></Col>
      </Row>
    </footer>
  );
};

export default Footer;
