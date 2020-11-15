import React,{useState,useEffect} from 'react'
import { Colxx, Separator } from '../components/common/CustomBootstrap';
import {Button,Card,CardBody,CardTitle,Row ,FormGroup,Label, Input, Col,Form, Badge,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './Customcss.css';
import Avatar from './avatarnew.png'
import { func } from 'prop-types';
import produtcs from '../data/products';
import {iconsmind,simplelineicons} from '../data/icons'
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import {FiUpload} from 'react-icons/fi'
import {VscLibrary} from 'react-icons/vsc'
// import Switch from 'rc-switch';
// import {iconsmind} from '../data/icons'
// import 'rc-switch/assets/index.css';

const Remotelook = (props) =>{
    const {uniquesessionid} = props.location.state;
     console.log(props.location)
    console.log(uniquesessionid)
    const [data,setData] = useState(produtcs[uniquesessionid-1]);
console.log(data,produtcs)
    useEffect(() => {
        //call your data from backend with uniquesessionid and store in data
        //setData(result);
        return () => {
            //do what you want you do when component unmounts

        }
    }, [data])

        const {
          buttonLabel,
          className
        } = props;
        
        const [modal, setModal] = useState(false)
      
        const toggle = () => setModal(!modal);

    const fileUploadButton = () => {
        document.getElementById('fileButton').click();
        document.getElementById('fileButton').onchange = () =>{      
        this.setState({
            fileUploadState:document.getElementById('fileButton').value
                });
            }
        }
      //  const summary : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

    return(
        <section>
            <Link to="/app/dashboard/default">              
        <div className={`glyph-icon ${iconsmind[2].icons[42]} sessionlookicon`} style={{fontSize:'3rem'}} />
        </Link>
        <div style={{marginRight:'10%',marginLeft:'10%'}}>
      <Card className="p-4 mb-3 ">
          <CardBody>
            <Row>
     <Colxx md="9" xs="12">
                <Row >
            <nav>
                <ul className="d-flex">
                    <li className="d-flex align-items-center">
                         <h1 style={{marginBottom:'0'}} className="font-weight-bold">{data.title}</h1>
                    </li>
                    <li className="d-flex align-items-center ">
    <badge style={{padding:'2px 2px',backgroundColor:'#CFEBFD',borderRadius:'12px', fontSize:'10px'}}>{data.type}</badge>
                    </li>
                </ul>
            </nav>
</Row>
                <Row style={{marginBottom:'20px'}}>
            <nav>
                <ul className="d-flex">
                   
                    <li className="d-flex align-items-center">
                        <span style={{fontSize:'12px'}}>{data.date},</span>
                    </li>
                    <li className="d-flex">
                        <span style={{fontSize:'12px'}}>12:35 AM</span>
                    </li>
                    
                </ul>
            </nav>
</Row>
<Row style={{marginBottom:'20px'}}>
            
             
                  <Col md="4" xs="12">
                    <li className="d-flex ">
    <h6 className="mb-0"> <a href="" style={{cursor:'pointer'}}>{data.link?data.link:"www.zoomapp.com,"}</a></h6>
                    </li></Col>
                    <Col md="4" xs="12">
                    <li className=" d-flex">
                        <p className="mb-0" style={{marginLeft:'10px'}}><span className="font-weight-bold">Code: </span> ZOOM1111</p>
                    </li></Col>
                    <Col md="4" xs="12">
                    <li className=" d-flex ">
                      <p style={{marginLeft:'10px'}} className="mb-0">  <span className="font-weight-bold">Password:</span> axsaerxcc</p>
                    </li></Col>
                    
        
            
</Row>
</Colxx>
<Colxx md="3" xs="12">
    <Button outline color="secondary" style={{fontSize:'1.0rem', borderRadius:'0px'}}>Launch</Button>
</Colxx>
</Row>
</CardBody>
</Card>
<Card className="px-4 mb-3">
          <CardBody>
              <Row className="justify-content-end">
          <Button className="float-right" style={{borderRadius:'0px',fontSize:'15px'}} onClick={toggle}>Edit</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Edit Details</ModalHeader>
                <ModalBody>
                    <Label for="exampleText">Tagline</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                    <Label for="exampleText2" className="mt-4">Description</Label>
                    <Input type="textarea" name="text" id="exampleText2" />
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={toggle} style={{borderRadius:'0px',fontSize:'15px'}}>Submit</Button>{' '}
                <Button color="secondary" onClick={toggle} style={{borderRadius:'0px',fontSize:'15px'}}>Cancel</Button>
                </ModalFooter>
            </Modal>
            </Row>
            <Row className="pr-4">
 
          <Colxx xs='12' md="12">
            <h3 className="font-weight-bold">Tagline</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </Colxx>
          
          <Colxx xs='12' md="12">
            <h3 className="font-weight-bold">Description</h3>
            <p>{data.description}</p>
          </Colxx>
          


</Row>
</CardBody>
</Card>
<Card className=" mb-3">
<CardTitle className="font-weight-bold pl-4 pt-4" style={{fontSize:"1.3rem"}}>Trainer Profile</CardTitle>
                  <CardBody>
                  <nav>
                    <Row>
                      
                        <Colxx md="2" xs="12" className="cardseparations text-center font-weight-bold">
                             <h3 className="font-weight-bold" style={{fontSize:"1.1rem"}}>Vedant</h3>
                              <img src={Avatar} alt="..." id="avatar"/>
                              <p>Web developer, IBM, bengaluru</p>
                              <p>2017 to present</p>
                              <Button outline color="secondary" >Edit Profile</Button>
                        </Colxx>
                        <Colxx md="7" xs="12" className="">
                            <h5 className=" font-weight-bold text-center" style={{fontSize:"1.1rem"}}>Career summary</h5>
                            
                               
                            <p className="text-center" style={{fontSize:'15px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        </Colxx>
                        <Colxx md="3" xs="12">
                        <h5 className=" font-weight-bold text-center" style={{fontSize:"1.1rem"}}>Experience</h5>
                        <Scrollbars style={{ width: "100%", height: 300 }}>
                          <div className="mt-4">
                              <p className="text-center" style={{fontSize:"15px"}}>Web Developer, IBM, Bengaluru</p>
                              <p className="text-center">from 2017 to present</p>
                          </div>
                          <div className="mt-4">
                              <p className="text-center" style={{fontSize:"15px"}}>frontend Developer, Capgemini, Bengaluru</p>
                              <p className="text-center">from 2015 to 2017</p>
                          </div>
                          <div className="mt-4">
                              <p className="text-center" style={{fontSize:"15px"}}>Software Engineer, Infosys, Hyderabad</p>
                              <p className="text-center">from 2012 to 2015</p>
                          </div>
                        </Scrollbars>
                        </Colxx>
                        
                    </Row>
                </nav>
    
    
                  </CardBody>
              </Card>
<Card className="p-4 mb-3">
          <CardBody>
            <Row>
                <Colxx md="6" xs="12">
                    <h3 className="font-weight-bold text-center">List Of Occurance</h3>
                    <p className="text-center">Occurance is here</p>
                </Colxx>
                <Colxx md="6" xs="12">
                <h3 className="font-weight-bold text-center">Session Material</h3>
                <Row className="text-center">
                    
                    <label className="input-label-1">
                        <input type="file"/>
                        <FiUpload/>
                        <p id="ufd">Upload from device</p>
                    </label>
                    <label className="input-label-2">
                        <input type="file"/>
                        <VscLibrary/>
                        <p id="ufl">Upload from Library</p>
                    </label>
                    </Row>
                </Colxx>  
</Row>  
</CardBody>
</Card> 


</div>
</section>
    )
}

export default Remotelook