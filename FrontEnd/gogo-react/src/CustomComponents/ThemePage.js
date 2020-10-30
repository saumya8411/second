import React, { useState, useEffect } from 'react';
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
  const [homePage, sethomePage] = useState(true);
  const [contactus, setContactus] = useState(true);
  const [activeFirstTab, setActiveFirstTab] = useState('1');
  const [homepagetheme, setHomepagetheme] = useState('1');
  const [contactustheme, setContactustheme] = useState('1');

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
                <h6>Affiliate Link</h6>
              </NavLink>
            </NavItem>
          </Nav>
        </CardHeader>
        <TabContent activeTab={activeFirstTab}>
          <TabPane tabId="1">
            <Card className="p-4 mb-3">
              <Row>
                <Colxx xs="12" sm="6">
                  <CardTitle>Homepage</CardTitle>
                </Colxx>
                <Colxx xs="12" sm="6">
                  <div
                    className="d-flex justify-content-around"
                    style={{ maxWidth: '400px' }}
                  >
                    <FormGroup className="error-l-100">
                      <Switch
                        className="custom-switch custom-switch-secondary custom-switch-small"
                        checked={homePage}
                        onChange={(secondary) => setHomepagetheme(secondary)}
                      />
                    </FormGroup>
                  </div>
                </Colxx>
              </Row>
              {homePage ? (
                <CardBody>
                  <Row>
                    <Colxx xs="12" sm="6">
                      <label>
                        <input
                          type="radio"
                          checked={homepagetheme === '1'}
                          value="1"
                          onChange={(e) => setHomepagetheme(e.target.value)}
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
                          checked={homepagetheme === '2'}
                          value="2"
                          onChange={(e) => setHomepagetheme(e.target.value)}
                        />
                        <div className="front-end box">
                          <Card
                            className="p-4 mb-3"
                            style={{ minWidth: '200px', minHeight: '200px' }}
                          >
                            <CardImg top width="100%" src="" alt="Theme2 img" />
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
                  <CardTitle>Contact US Page</CardTitle>
                </Colxx>
                <Colxx xs="12" sm="6">
                  <div
                    className="d-flex justify-content-around"
                    style={{ maxWidth: '400px' }}
                  >
                    <FormGroup className="error-l-100">
                      <Switch
                        className="custom-switch custom-switch-secondary custom-switch-small"
                        checked={contactus}
                        onChange={(secondary) => setContactus(secondary)}
                      />
                    </FormGroup>
                  </div>
                </Colxx>
              </Row>
              {contactus ? (
                <CardBody>
                  <Row>
                    <Colxx xs="12" sm="6">
                      <label>
                        <input
                          type="radio"
                          checked={contactustheme === '1'}
                          value="1"
                          onChange={(e) => setContactustheme(e.target.value)}
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
                          checked={contactustheme === '2'}
                          value="2"
                          onChange={(e) => setContactustheme(e.target.value)}
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
          </TabPane>
          <TabPane tabId="2">Tab 2</TabPane>
          <TabPane tabId="2">Tab 3</TabPane>
        </TabContent>
      </Card>
    </>
  );
}

export default Themepage;
