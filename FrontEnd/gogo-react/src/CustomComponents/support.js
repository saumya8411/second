import React,{useState} from 'react'
import classnames from 'classnames';
import { Row, Button ,NavItem,Nav,TabContent,TabPane,NavLink,Collapse,Table,CardTitle,CardBody,Card,Badge,Col,CardText,UncontrolledDropdown,Label,FormGroup,Input,
    DropdownItem,
    DropdownToggle,
    DropdownMenu, } from 'reactstrap';
import {RiArticleLine} from 'react-icons/ri'
import {FiSearch} from 'react-icons/fi'
import {RiPagesLine} from 'react-icons/ri'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {BiMessageRoundedDetail} from 'react-icons/bi'
import {TiAttachment} from 'react-icons/ti'
import {Link} from 'react-router-dom'


function Support() {
    const [activeFirstTab, setActiveFirstTab] = useState('1')
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const toggle3 = () => setIsOpen3(!isOpen3);
    const toggle4 = () => setIsOpen4(!isOpen4);
    return (
        <>
            <Nav tabs className="card-header-tabs mb-3">
       
       <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '1',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('1');
                      }}
                    >
                   <h6>Home</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '2',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('2');
                      }}
                    >
                   <h6>Help Guide</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '3',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('3');
                      }}
                    >
                   <h6>Feedback</h6>
                    </NavLink>
                </NavItem>
            </Nav> 
            <TabContent activeTab={activeFirstTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col md={4} xs={12}>
                            <Card>
                                <CardBody>
                                    <h4><FiSearch className="mb-1 mr-2"/>Search<hr/></h4>
                                    <FormGroup>
                                        <Label for="exampleSelect">Select</Label>
                                        <Input type="select" name="select" id="exampleSelect">
                                            <option>Community</option>
                                            <option>Help Guide</option>
                                        </Input>
                                    </FormGroup>
                                    <Input type="text" placeholder="Search"/>
                                    <Button className="mt-3 mx-auto d-flex"style={{borderRadius:'0px'}}>Search</Button>
                                </CardBody>
                            </Card>
                            <br/><br/>
                        </Col>
                        <Col md={4} xs={12}>
                            <Card>
                                <CardBody>
                                    <h4><RiArticleLine className="mb-1 mr-2"/>Popular Articles<hr/></h4>
                                    <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article one</p></Link>
                                    <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article two</p></Link>
                                    <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article three</p></Link>
                                    <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article four</p></Link>
                                    <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article five</p></Link>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={4} xs={12}>
                            <Card>
                                <CardBody>
                                    <h4><BiMessageRoundedDots className="mb-1 mr-2"/>Recent Topics<hr/></h4>
                                    <Link to=""><p style={{fontSize:'18px'}}><BiMessageRoundedDetail className="mb-1 mr-2"/>Hi, i am article one</p></Link>
                                    <Link to=""><p style={{fontSize:'18px'}}><BiMessageRoundedDetail className="mb-1 mr-2"/>Hi, i am article two</p></Link>
                                    <Link to=""><p style={{fontSize:'18px'}}><BiMessageRoundedDetail className="mb-1 mr-2"/>Hi, i am article three</p></Link>
                                    <Link to=""><p style={{fontSize:'18px'}}><BiMessageRoundedDetail className="mb-1 mr-2"/>Hi, i am article four</p></Link>
                                    <Link to=""><p style={{fontSize:'18px'}}><BiMessageRoundedDetail className="mb-1 mr-2"/>Hi, i am article five</p></Link>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                <Card className=" p-3 mt-4" onClick={toggle} style={{cursor: "pointer"}}>User Guide</Card>
                <Collapse isOpen={isOpen}>
                    <Card className=" p-3 mb-4" style={{boxShadow:'none'}}>
                    <CardBody>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article one</p></Link>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article two</p></Link>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article three</p></Link>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article four</p></Link>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article five</p></Link>
                        <a href="" className="mx-auto" style={{fontSize:'16px'}}>54 more article...</a>
                    </CardBody>
                    </Card>
                </Collapse>
                <Card className=" p-3 mt-4" onClick={toggle2} style={{cursor: "pointer"}}>FAQ</Card>
                <Collapse isOpen={isOpen2}>
                    <Card className=" p-3 " style={{boxShadow:'none'}}>
                    <CardBody>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article one</p></Link>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article two</p></Link>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article three</p></Link>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article four</p></Link>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article five</p></Link>
                        <a href="" className="mx-auto" style={{fontSize:'16px'}}>21 more article...</a>
                    </CardBody>
                    </Card>
                </Collapse>
                <Card className=" p-3 mt-4" onClick={toggle3} style={{cursor: "pointer"}}>Help Videos</Card>
                <Collapse isOpen={isOpen3}>
                    <Card className=" p-3 " style={{boxShadow:'none'}}>
                    <CardBody>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article one</p></Link>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article two</p></Link>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article three</p></Link>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article four</p></Link>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article five</p></Link>
                        <a href="" className="mx-auto" style={{fontSize:'16px'}}>33 more article...</a>
                    </CardBody>
                    </Card>
                </Collapse>
                <Card className=" p-3 mt-4" onClick={toggle4} style={{cursor: "pointer"}}>Community</Card>
                <Collapse isOpen={isOpen4}>
                    <Card className=" p-3 " style={{boxShadow:'none'}}>
                    <CardBody>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article one</p></Link>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article two</p></Link>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article three</p></Link>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article four</p></Link>
                        <Link to=""><p style={{fontSize:'18px'}}><RiPagesLine className="mb-1 mr-2"/>Hi, i am article five</p></Link>
                        <a href="" className="mx-auto" style={{fontSize:'16px'}}>21 more article...</a>
                    </CardBody>
                    </Card>
                </Collapse>
                </TabPane>
                <TabPane tabId="3">
                    <Card className="mx-auto" style={{width:'60%'}}>
                      <CardBody className="px-4">
                          <h4 className="text-center">Your Feedback is Valuable !!!</h4> 
                        <label className="mt-4">Contact Name</label>
                        <Input placeholder="default" />
                        <label className="mt-4">Email</label>
                        <Input placeholder="default" />
                        <label className="mt-4">Subject</label>
                        <Input placeholder="default" />
                        <label className="mt-4">Phone</label>
                        <Input placeholder="default" />
                        <FormGroup className="mt-4">
                            <Label for="exampleText">Description</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                        <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="select" id="exampleSelect">
                            <option>Choose One...</option>
                            <option>Critical</option>
                            <option>Emergency</option>
                            <option>Just normal query</option>
                            </Input>
                            <Row className="mt-4">
                                <Col md={6}>
                                   
                                    <TiAttachment className="text-center" style={{fontSize:'35px' ,color:'#19BC7D'}}/>
                                   
                                </Col>
                                <Col md={6}>
                                    <Button outline>Reset</Button>
                                    <Button className="ml-4">Submit</Button>
                                </Col>
                            </Row>
                      </CardBody>
                    </Card>
                </TabPane>
            </TabContent>
            <br/>
            <br/>
            <br/>
            <br/>
            
        </>
    )
}

export default Support
