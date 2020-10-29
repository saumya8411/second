
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

function Emailcommunicationfunction() {
const [mailonSignup, setMailonSignup] = useState(true);
const [accountverification, setAccountverification] = useState(true);
const [purchaseEmail, setPurchaseEmail] = useState(true);
const [accountverificationtheme, setAccountverificationtheme] = useState('1');
const [purchaseemailtheme, setPurchaseemailtheme] = useState('1');
const [mailonsignuptheme, setMailonsignuptheme] = useState('1');
const [activeFirstTab, setActiveFirstTab] = useState('1');

  
  return (
    <>
    <Card className="mb-4 pl-4 pr-4 pb-4 pt-4">
              <CardHeader className="mb-4">
                <Nav tabs className="card-header-tabs ">
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
              </CardHeader>
              <TabContent activeTab={activeFirstTab}>
                <TabPane tabId="1">
                <Card className="p-4 mb-3">
<Row>
  <Colxx xs="12" sm="6">
    <CardTitle>Mail On Signup</CardTitle>
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
  <CardBody>
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
              className="p-4 mb-3"
              style={{ minWidth: '200px', minHeight: '200px' }}
            >
              <CardImg top width="100%" src="" alt="Theme1 img" />
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
            checked={mailonsignuptheme === '2'}
            value="2"
            onChange={(e) => setMailonsignuptheme(e.target.value)}
          />
          <div className="front-end box">
            <Card
              className="p-4 mb-3"
              style={{ minWidth: '200px', minHeight: '200px' }}
            >
              <CardImg top width="100%" src="" alt="Theme1 img" />
              <CardBody>
                <CardTitle>Theme2</CardTitle>
              </CardBody>
            </Card>
          </div>
        </label>
      </Colxx>
    </Row>
  </CardBody>
) : (
  ''
)}
</Card>
<Card className="p-4 mb-3">
<Row>
  <Colxx xs="12" sm="6">
    <CardTitle>Purchase Email</CardTitle>
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
  <CardBody>
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
              className="p-4 mb-3"
              style={{ minWidth: '200px', minHeight: '200px' }}
            >
              <CardImg top width="100%" src="" alt="Theme1 img" />
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
            checked={purchaseemailtheme === '2'}
            value="2"
            onChange={(e) => setPurchaseemailtheme(e.target.value)}
          />
          <div className="front-end box">
            <Card
              className="p-4 mb-3"
              style={{ minWidth: '200px', minHeight: '200px' }}
            >
              <CardImg top width="100%" src="" alt="Theme1 img" />
              <CardBody>
                <CardTitle>Theme2</CardTitle>
              </CardBody>
            </Card>
          </div>
        </label>
      </Colxx>
    </Row>
  </CardBody>
) : (
  ''
)}
</Card>
<Card className="p-4 mb-3">
<Row>
  <Colxx xs="12" sm="6">
    <CardTitle>Account Verification</CardTitle>
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
  <CardBody>
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
              className="p-4 mb-3"
              style={{ minWidth: '200px', minHeight: '200px' }}
            >
              <CardImg top width="100%" src="" alt="Theme1 img" />
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
              className="p-4 mb-3"
              style={{ minWidth: '200px', minHeight: '200px' }}
            >
              <CardImg top width="100%" src="" alt="Theme1 img" />
              <CardBody>
                <CardTitle>Theme2</CardTitle>
              </CardBody>
            </Card>
          </div>
        </label>
      </Colxx>
    </Row>
  </CardBody>
) : (
""
)}
</Card>
<EmailCommunication/>
                </TabPane>
                <TabPane tabId="2">
                  Tab 2
                </TabPane>
                <TabPane tabId="2">
                  Tab 3
                </TabPane>
                             </TabContent>

              </Card>
    </>
  );
}


export default Emailcommunicationfunction;
