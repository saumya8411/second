import React,{useState,useEffect} from 'react'
import { Colxx, Separator } from '../components/common/CustomBootstrap';
import {Button,Card,CardBody,CardTitle,Row ,FormGroup,Label, Input, Col,Form} from 'reactstrap';
import './Customcss.css';
import { func } from 'prop-types';
import produtcs from '../data/products';
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

    const fileUploadButton = () => {
        document.getElementById('fileButton').click();
        document.getElementById('fileButton').onchange = () =>{      
        this.setState({
            fileUploadState:document.getElementById('fileButton').value
                });
            }
        }


    return(
        <section>
      <Card className="p-4 mb-3">
          <CardBody>
            <Row>
     <Colxx md="9" sm="12">
                <Row >
            <nav>
                <ul className="d-flex">
                    <li className="d-flex align-items-center">
                         <h3 style={{marginBottom:'0'}}>{data.title}</h3>
                    </li>
                    <li className="d-flex align-items-center marking">
    <span style={{padding:'5px 10px',backgroundColor:'#CFEBFD',borderRadius:'12px'}}>{data.type}</span>
                    </li>
                </ul>
            </nav>
</Row>
                <Row style={{marginBottom:'20px'}}>
            <nav>
                <ul className="d-flex">
                  
                    <li className="d-flex align-items-center">
    <span>{data.date}</span>
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
                  
                    <li className="d-flex align-items-center">
    <h6 className="mb-0"> <a href="" style={{cursor:'pointer'}}>{data.link?data.link:"there is no link in database"}</a></h6>
                    </li>
                    <li className="marking d-flex align-items-center">
                        <p className="mb-0" style={{marginBottom:0}}><span>Code</span></p>
                    </li>
                    <li className="marking d-flex align-items-center">
                      <p style={{marginBottom:0}} className="mb-0">  <span>Password</span></p>
                    </li>
                    
                </ul>
            </nav>
</Row>
</Colxx>
<Colxx md="3" sm="12">
    <Button outline color="secondary" style={{fontSize:'1.3rem'}}>Launch</Button>
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
    <p>{data.description}</p>
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
                        <Button outline color="secondary" style={{width:'max-content',height:'min-content',fontSize:'1.1rem'}}>Edit Profile</Button>
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
                  
<Input id="fileButton" type="file" hidden />
<Button onClick={fileUploadButton}>
    Upload
</Button>
{/* <Button color="secondary" type="file" className="mb-2" onClick={fileUploadButton}>Upload</Button> */}

{/* {this.state.fileUploadState} */}
{/* 
<Input type="file">
              <Button color="secondary" type="file" className="mb-2">Upload</Button>
              </Input> */}
                      </Colxx>
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