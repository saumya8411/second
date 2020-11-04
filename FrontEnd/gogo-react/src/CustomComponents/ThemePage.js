
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

function Themepage() {
const [defaulttheme, setDefaulttheme] = useState(true);
const [blanktheme, setBlanktheme] = useState(true);
const [activeFirstTab, setActiveFirstTab] = useState('1');
const [theme, setTheme] = useState('1');
const [contactustheme, setContactustheme] = useState('1');

  
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
                   <h6> General</h6>
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
                      <h6>Blog Post</h6>
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
                 <h6>Affiliate Pages</h6>
                    </NavLink>
                  </NavItem>
                </Nav>
             
              <TabContent activeTab={activeFirstTab}>
                <TabPane tabId="1">
<Row className="mt-3 mb-2" style={{marginLeft:'15px'}}>
    <h3>Default Theme</h3>
  {/* <Colxx xs="12" sm="6">
    <div
      className="d-flex justify-content-around"
      style={{ maxWidth: '400px' }}
    >
      <FormGroup className="error-l-100">
        <Switch
          className="custom-switch custom-switch-secondary custom-switch-small"
          checked={defaulttheme}
          onChange={(secondary) => setDefaulttheme(secondary)}
        />
      </FormGroup>
    </div>
  </Colxx> */}
</Row>

    <Row className="mt-1" style={{marginLeft:'15px'}}>
        <label>
          <input
            type="radio"
            checked={theme === '1'}
            value="1"
            onChange={(e) => setTheme(e.target.value)}
          />
          <div className="front-end box">
            <Card
              className="p-4"
              style={{ minWidth: '270px', minHeight: '200px' }}
            >
              <CardImg top width="100%" src="" alt="Theme1 img" />
              <CardBody>
                <CardTitle>DefaultTheme</CardTitle>
              </CardBody>
            </Card>
          </div>
        </label>
    </Row>

<Row className="mt-3 mb-2" style={{marginLeft:'15px'}}>
  <Colxx xs="12" sm="6">
    <h3>Blank Theme</h3>
  </Colxx>
  {/* <Colxx xs="12" sm="6">
    <div
      className="d-flex justify-content-around"
      style={{ maxWidth: '400px' }}
    >
      <FormGroup className="error-l-100">
        <Switch
          className="custom-switch custom-switch-secondary custom-switch-small"
          checked={blanktheme}
          onChange={(secondary) => setBlanktheme(secondary)}
        />
      </FormGroup>
    </div>
  </Colxx> */}
</Row>
    <Row style={{marginLeft:'15px'}} className="mt-1">
      <Colxx xs="12" sm="6">
        <label>
          <input
            type="radio"
            checked={theme === '2'}
            value="2"
            onChange={(e) => setTheme(e.target.value)}
          />
          <div className="front-end box">
            <Card
              className="p-4"
              style={{ minWidth: '270px', minHeight: '200px' }}
            >
              <CardImg top width="100%" src="" alt="Theme1 img" />
              <CardBody>
                <CardTitle>Blank Theme</CardTitle>
              </CardBody>
            </Card>
          </div>
        </label>
      </Colxx>
    
    </Row>

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


export default Themepage;
