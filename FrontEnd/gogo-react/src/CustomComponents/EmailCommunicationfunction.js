
import React, { useState ,useEffect} from 'react';
import {
    Card,
    Row,
    Input,Col,
    CardTitle,
    CardBody,
    CardHeader,
    Nav,
    NavItem,
    TabContent,
    Button,
    Label,
    FormGroup,CardText,
    TabPane,
    CardImg,
  } from 'reactstrap';
  import { Colxx } from '../components/common/CustomBootstrap';
  import Switch from 'rc-switch';
  import './Customcss.css';
  import { useTable, usePagination, useSortBy } from 'react-table';
import EmailCommunication from './EmailCommunication';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import img from './bebinca-thumb.jpg'


function Emailcommunicationfunction() {
const [mailonSignup, setMailonSignup] = useState(false);
const [accountverification, setAccountverification] = useState(false);
const [purchaseEmail, setPurchaseEmail] = useState(false);
const [accountverificationtheme, setAccountverificationtheme] = useState('1');
const [purchaseemailtheme, setPurchaseemailtheme] = useState('1');
const [mailonsignuptheme, setMailonsignuptheme] = useState('1');
const [activeFirstTab, setActiveFirstTab] = useState('1');
const [emailontext, setemailontext] = useState(false)
const [emailontext2, setemailontext2] = useState(false)
const [emailontext3, setemailontext3] = useState(false)
const [emailontext4, setemailontext4] = useState(false)

  
  return (
    <>

                <Nav tabs className="card-header-tabs mb-3 mt-3">
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
                   <h6> Email</h6>
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
                      <h6>Direct Message</h6>
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
                 <h6>  Whatsapp</h6>
                    </NavLink>
                  </NavItem>
                  {/* <FormGroup className="mb-4 d-flex float-right ml-auto" id="search">
                    <Input type="email" className="d-flex" id="exampleEmail" placeholder="Search anything" />
                    <Button id="searchbutton" className="d-flex ml-2">Search</Button>
                  </FormGroup> */}
                </Nav>
              <TabContent activeTab={activeFirstTab}>
                <TabPane tabId="1">
                
<Row className="mb-3">
  <Colxx xs="12" sm="6">
    <h1 id="headingMoS">Mail On Signup</h1>
  </Colxx>
  <Colxx xs="12" sm="6">
    <div
      className="d-flex justify-content-around"
      style={{ maxWidth: '400px' }}
    >
      <FormGroup className="error-l-100">
        <Switch
          className="custom-switch custom-switch-secondary custom-switch-small"
          checked={mailonSignup}
          onChange={(secondary) => setMailonSignup(secondary)}
        />
      </FormGroup>
    </div>
  </Colxx>
</Row>
{mailonSignup ? (
  
    <Row>
      <Colxx xs="12" sm="6">
        <label>
          <input
            type="radio"
            checked={mailonsignuptheme === '1'}
            value="1"
            onChange={(e) => setMailonsignuptheme(e.target.value)}
          />
          <div className="front-end box">
            <Card
              className="p-4 mb-3 emailcard"
              style={{ minWidth: '200px', minHeight: '200px' }}
            >
              <CardImg top width="100%" src={img} alt="Theme1 img" className="emailimg" />
              <CardBody>
              <Button>Edit</Button>
              </CardBody>
            </Card>
          </div>
        </label>
      </Colxx>
      <Colxx xs="12" sm="6">
        <label>
          <input
            type="radio"
            checked={mailonsignuptheme === '2'}
            value="2"
            onChange={(e) => setMailonsignuptheme(e.target.value)}
          />
        </label>
      </Colxx>
    </Row>
  
) : (
  ''
)}

<Row className="mb-3 mt-4">
  <Colxx xs="12" sm="6">
    <h1 id="headingPE">Mail on purchase of Course</h1>
  </Colxx>
  <Colxx xs="12" sm="6">
    <div
      className="d-flex justify-content-around"
      style={{ maxWidth: '400px' }}
    >
      <FormGroup className="error-l-100">
        <Switch
          className="custom-switch custom-switch-secondary custom-switch-small"
          checked={purchaseEmail}
          onChange={(secondary) => setPurchaseEmail(secondary)}
        />
      </FormGroup>
    </div>
  </Colxx>
</Row>
{purchaseEmail ? (
  
    <Row>
      <Colxx xs="12" sm="6">
        <label>
          <input
            type="radio"
            checked={purchaseemailtheme === '1'}
            value="1"
            onChange={(e) => setPurchaseemailtheme(e.target.value)}
          />
          <div className="front-end box">
            <Card
              className="p-4 mb-3 emailcard"
              style={{ minWidth: '200px', minHeight: '200px' }}
            >
              <CardImg top width="100%" src={img} alt="Theme1 img" />
              <Row className="emailtext">
                <Colxx xxs="4">
                <span className="hiddenbutton">Preview</span>
                </Colxx>
              </Row>
              <CardBody>
              <Button>Edit</Button>
              </CardBody>
            </Card>
          </div>
        </label>
      </Colxx>
      <Colxx xs="12" sm="6">
        <label>
          <input
            type="radio"
            checked={purchaseemailtheme === '2'}
            value="2"
            onChange={(e) => setPurchaseemailtheme(e.target.value)}
          />
          <div className="front-end box">

          </div>
        </label>
      </Colxx>
    </Row>

) : (
  ''
)}

{/* <Row className="mt-4">
  <Colxx xs="12" sm="6">
    <h3>Account Verification</h3>
  </Colxx>
  <Colxx xs="12" sm="6">
    <div
      className="d-flex justify-content-around"
      style={{ maxWidth: '400px' }}
    >
      <FormGroup className="error-l-100">
        <Switch
          className="custom-switch custom-switch-secondary custom-switch-small"
          checked={accountverification}
          onChange={(secondary) => setAccountverification(secondary)}
        />
      </FormGroup>
    </div>
  </Colxx>
</Row>
{accountverification ? (
  
    <Row>
      <Colxx xs="12" sm="6">
        <label>
          <input
            type="radio"
            checked={accountverificationtheme === '1'}
            value="1"
            onChange={(e) =>
              setAccountverificationtheme(e.target.value)
            }
          />
          <div className="front-end box">
            <Card
              className="p-4 mb-3 emailcard"
              style={{ minWidth: '200px', minHeight: '200px' }}
            >
              <CardImg top width="100%" src={img} alt="Theme1 img" />
              <Row className="emailtext">
                <Colxx xxs="4">
                <span className="hiddenbutton">Preview</span>
                </Colxx><Colxx xxs="4"><span className="hiddenbutton">Edit</span>
                </Colxx><Colxx xxs="4"><span className="hiddenbutton">Select</span>
                </Colxx>
              </Row>
              <CardBody>
                <CardTitle>Theme1</CardTitle>
              </CardBody>
            </Card>
          </div>
        </label>
      </Colxx>
      <Colxx xs="12" sm="6">
        <label>
          <input
            type="radio"
            checked={accountverificationtheme === '2'}
            value="2"
            onChange={(e) =>
              setAccountverificationtheme(e.target.value)
            }
          />
          <div className="front-end box">
            <Card
              className="p-4 mb-3 emailcard"
              style={{ minWidth: '200px', minHeight: '200px' }}
            >
              <CardImg top width="100%" src={img} alt="Theme1 img" />
              <Row className="emailtext">
                <Colxx xxs="4">
                <span className="hiddenbutton">Preview</span>
                </Colxx><Colxx xxs="4"><span className="hiddenbutton">Edit</span>
                </Colxx><Colxx xxs="4"><span className="hiddenbutton">Select</span>
                </Colxx>
              </Row>
              <CardBody>
                <CardTitle>Theme2</CardTitle>
              </CardBody>
            </Card>
          </div>
        </label>
      </Colxx>
    </Row>
) : (
""
)} */}
<EmailCommunication/>
<br/><br/>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                  <h4 className="ml-4">Text Message on Signup</h4>
                  <Switch
                      className="custom-switch custom-switch-secondary custom-switch-small ml-auto" style={{marginRight: '400px'}}
                      checked={emailontext}
                      onChange={() => setemailontext(!emailontext)}
                    /></Row>
                    {emailontext ?        <> <Card body style={{width: '60%',marginLeft: '80px', marginTop:'20px'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </Card> <br/> <br/> </>  : null} 
                      <Row className="mt-4">
                  <h4 className="ml-4">Text message on Purchase of Course</h4>
                  <Switch
                      className="custom-switch custom-switch-secondary custom-switch-small ml-auto" style={{marginRight: '400px'}}
                      checked={emailontext2}
                      onChange={() => setemailontext2(!emailontext2)}
                    /></Row>
                    {emailontext2 ?        <> <Card body style={{width: '60%',marginLeft: '80px', marginTop:'20px'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </Card> <br/> <br/> </>  : null} 
                    <br/><br/>
                    <h4 className="ml-2">Course Alerts</h4>
                    <Row>
                      <Col md={6} xs={12}>
                      <Row className="mt-4 ml-4">
                        <h4 className="ml-4">Angular 8</h4>
                        <Switch
                            className="custom-switch custom-switch-secondary custom-switch-small ml-auto" style={{marginRight: '400px'}}
                            checked={emailontext3}
                            onChange={() => setemailontext3(!emailontext3)}
                          /></Row>
                          {emailontext3 ?        <> <Card body style={{width: '60%',marginLeft: '80px', marginTop:'20px'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                      </Card> <br/> <br/> </>  : null} 
                      <Row className="mt-4 ml-4">
                        <h4 className="ml-4">ReactJs</h4>
                        <Switch
                            className="custom-switch custom-switch-secondary custom-switch-small ml-auto" style={{marginRight: '400px'}}
                            checked={emailontext4}
                            onChange={() => setemailontext4(!emailontext4)}
                          /></Row>


                          {emailontext4 ?        <> <Card body style={{width: '60%',marginLeft: '80px', marginTop:'20px'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                      </Card> <br/> <br/> </>  : null} <br/><br/><br/><br/><br/>
                      </Col>
                      <Col md={6} xs={12}>
                       { emailontext3 ? <><br/><br/><label style={{fontSize:'15px'}}>After how many days of inactivity do you want to notify your students?</label>
                        <Input placeholder="" />
                        <Button className="ml-auto mr-auto d-flex mt-3" style={{borderRadius: '0px'}}>Submit</Button></> : null}
                       { emailontext4 ? <><br/><br/><br/><br/><label style={{fontSize:'15px'}}>After how many days of inactivity do you want to notify your students?</label>
                        <Input placeholder="" />
                        <Button className="ml-auto mr-auto d-flex mt-3" style={{borderRadius: '0px'}}>Submit</Button></> : null}
                      </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                <Row>
                  <h4 className="ml-4">Text Message on Signup</h4>
                  <Switch
                      className="custom-switch custom-switch-secondary custom-switch-small ml-auto" style={{marginRight: '400px'}}
                      checked={emailontext}
                      onChange={() => setemailontext(!emailontext)}
                    /></Row>
                    {emailontext ?        <> <Card body style={{width: '60%',marginLeft: '80px', marginTop:'20px'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </Card> <br/> <br/> </>  : null} 
                      <Row className="mt-4">
                  <h4 className="ml-4">Text message on Purchase of Course</h4>
                  <Switch
                      className="custom-switch custom-switch-secondary custom-switch-small ml-auto" style={{marginRight: '400px'}}
                      checked={emailontext2}
                      onChange={() => setemailontext2(!emailontext2)}
                    /></Row>
                    {emailontext2 ?        <> <Card body style={{width: '60%',marginLeft: '80px', marginTop:'20px'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </Card> <br/> <br/> </>  : null} 
                    <br/><br/>
                    <h4 className="ml-2">Course Alerts</h4>
                    <Row>
                      <Col md={6} xs={12}>
                      <Row className="mt-4 ml-4">
                        <h4 className="ml-4">Angular 8</h4>
                        <Switch
                            className="custom-switch custom-switch-secondary custom-switch-small ml-auto" style={{marginRight: '400px'}}
                            checked={emailontext3}
                            onChange={() => setemailontext3(!emailontext3)}
                          /></Row>
                          {emailontext3 ?        <> <Card body style={{width: '60%',marginLeft: '80px', marginTop:'20px'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                      </Card> <br/> <br/> </>  : null} 
                      <Row className="mt-4 ml-4">
                        <h4 className="ml-4">ReactJs</h4>
                        <Switch
                            className="custom-switch custom-switch-secondary custom-switch-small ml-auto" style={{marginRight: '400px'}}
                            checked={emailontext4}
                            onChange={() => setemailontext4(!emailontext4)}
                          /></Row>


                          {emailontext4 ?        <> <Card body style={{width: '60%',marginLeft: '80px', marginTop:'20px'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                      </Card> <br/> <br/> </>  : null} <br/><br/><br/><br/><br/>
                      </Col>
                      <Col md={6} xs={12}>
                       { emailontext3 ? <><br/><br/><label style={{fontSize:'15px'}}>After how many days of inactivity do you want to notify your students?</label>
                        <Input placeholder="" />
                        <Button className="ml-auto mr-auto d-flex mt-3" style={{borderRadius: '0px'}}>Submit</Button></> : null}
                       { emailontext4 ? <><br/><br/><br/><br/><br/><br/><br/><label style={{fontSize:'15px'}}>After how many days of inactivity do you want to notify your students?</label>
                        <Input placeholder="" />
                        <Button className="ml-auto mr-auto d-flex mt-3" style={{borderRadius: '0px'}}>Submit</Button></> : null}
                      </Col>
                    </Row>
                </TabPane>
                             </TabContent>

              
    </>
  );
}


export default Emailcommunicationfunction;
