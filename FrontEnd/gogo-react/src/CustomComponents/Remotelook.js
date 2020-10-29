import React,{useState} from 'react'
import { Colxx, Separator } from '../components/common/CustomBootstrap';
import {Button,Card,CardBody,CardTitle,Row ,FormGroup,Label, Input, Col,Form} from 'reactstrap';
import './Customcss.css';
import { func } from 'prop-types';
// import Switch from 'rc-switch';
// import {iconsmind} from '../data/icons'
// import 'rc-switch/assets/index.css';


const Remotelook = () =>{
    return(
        <section>
      <Card className="p-4 mb-3">
          <CardBody>
            <Row>
     <Colxx md="9" sm="12">
                <Row >
            <nav>
                <ul className="d-flex">
                    <li>
                         <h3>Session Name</h3>
                    </li>
                    <li className="marking">
                        <span style={{padding:'5px 10px',backgroundColor:'#CFEBFD',borderRadius:'12px'}}>Session Type</span>
                    </li>
                </ul>
            </nav>
</Row>
                <Row style={{marginBottom:'20px'}}>
            <nav>
                <ul className="d-flex">
                  
                    <li>
                         <span>Date</span>
                    </li>
                    <li className="marking">
                        <span>Time</span>
                    </li>
                    
                </ul>
            </nav>
</Row>
<Row style={{marginBottom:'20px'}}>
            <nav>
                <ul className="d-flex">
                  
                    <li>
                        <h6> <a href="" style={{cursor:'pointer'}}>Link</a></h6>
                    </li>
                    <li className="marking">
                        <p><span>Code</span></p>
                    </li>
                    <li className="marking">
                      <p>  <span>Password</span></p>
                    </li>
                    
                </ul>
            </nav>
</Row>
</Colxx>
<Colxx md="3" sm="12">
    <Button outline color="secondary">Launch</Button>
</Colxx>
</Row>
</CardBody>
</Card>
<Card className="p-4 mb-3">
          <CardBody>
            <Row>
     <Colxx sm="12">
     <Row style={{marginBottom:'20px'}}>
          <Colxx xxs='12' md="4">
              <h3>Tagline</h3>
              <p>Tagline is here</p>
          </Colxx>
          
</Row>   
     <Row style={{marginBottom:'20px'}}>
          <Colxx xxs='12' md="4">
              <h3>Description</h3>
              <p>Description is here</p>
          </Colxx>
          
</Row>

</Colxx>
</Row>
</CardBody>
</Card>
<Card className="p-4 mb-3">
              <CardTitle>Trainer Profile</CardTitle>
              <CardBody>
              <nav>
                <Row>
                  
                    <Colxx md="4" sm="12" className="cardseparations">
                         <h5>Trainers Name</h5>
                    </Colxx>
                    <Colxx md="4" sm="12" className="marking cardseparations">
                        <h5>Skils</h5>
                        <ul className="skillslist">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>ANGULAR</li>
                            <li>DEVOPS</li>
                        </ul>
                    </Colxx>
                    <Colxx md="4" sm="12" className="cardseparations">
                        <Button outline color="secondary" style={{width:'max-content',height:'min-content'}}>Edit Profile</Button>
                    </Colxx>
                    
                </Row>
            </nav>


              </CardBody>
              </Card>
<Card className="p-4 mb-3">
          <CardBody>
            <Row>
     <Colxx md="6" sm="12">
     <Row style={{marginBottom:'20px'}}>
          <Colxx xxs='12' md="4">
              <h3>List Of Occurance</h3>
              <p>Occurance is here</p>
          </Colxx>
          
</Row> 
</Colxx>  
          
</Row>  
</CardBody>
</Card> 
<Card className="p-4 mb-3">
          <CardBody>
            <Row>
     <Colxx md="6" sm="12">
     <Row style={{marginBottom:'20px'}}>
          
              <h3>Session Material</h3>
              <Row style={{width:'100%'}}>
                  <Colxx xxs="12" sm="4">
              <Button color="secondary" type="file" className="mb-2">Upload</Button></Colxx>
              <Colxx xxs="12" sm="8">
              <Button color="secondary">Pick From Library</Button></Colxx>
              </Row>
        
          
</Row> 
</Colxx>  
          
</Row>  
</CardBody>
</Card> 

</section>
    )
}

export default Remotelook;