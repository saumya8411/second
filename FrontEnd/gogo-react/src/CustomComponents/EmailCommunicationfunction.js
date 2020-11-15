
import React, { useState ,useEffect} from 'react';
import {
    Card,
    Row,
    Input,
    CardTitle,
    CardBody,
    CardHeader,
    Nav,
    NavItem,
    TabContent,
    Button,
    Label,
    FormGroup,
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
    <h1 id="headingPE">Purchase Email</h1>
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
                </TabPane>
                <TabPane tabId="2">
                  Tab 2
                </TabPane>
                <TabPane tabId="2">
                  Tab 3
                </TabPane>
                             </TabContent>

              
    </>
  );
}


export default Emailcommunicationfunction;
