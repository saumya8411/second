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
  TabPane,Col,
  CardImg,CardText
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
  let [select, setSelect] = useState('Select');
  let [select2, setSelect2] = useState('Select');
  const [timeline, settimeline] = useState(false)
  const [timeline1, settimeline1] = useState(false)
  const [timeline2, settimeline2] = useState(false)
  const [activeFirstTab1, setActiveFirstTab1] = useState('1');
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "",rate: "" }]);
  
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
   
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
   
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "",rate: "" }]);
  };
  let selectme = (e) => {
      if(e == 'select'){
        setSelect(select = 'Selected')
        setSelect2(select = 'Select')
      }
      else if(e == 'select2'){
        setSelect2(select2 = 'Selected')
        setSelect(select = 'Select')
      }
      else{
        setSelect(select = 'Select')
      }
  }
  const value = 100

  return (
    <>
    {/*  <FormGroup className="mb-4 d-flex float-right ml-auto" id="search">
          <Input type="email" className="d-flex" id="exampleEmail" placeholder="Search anything" />
          <Button id="searchbutton" className="d-flex ml-2">Search</Button>
        </FormGroup> */}
    <h3 id="default" className="font-weight-bold">1. Website Theme</h3>
       
    <Row className="mt-1" style={{ marginLeft: '15px' }}>
            <label>
              <input
                type="radio"
                checked={theme === '1'}
                value="1"
                onChange={(e) => setTheme(e.target.value)}
              />
              <div className="">
                {/* <Card
                  className="p-4"
                  style={{ minWidth: '270px', minHeight: '200px' }}
                >
                  <CardImg top width="100%" src="" alt="Theme1 img" />
                  <CardBody>
                    <CardTitle>DefaultTheme</CardTitle>
                  </CardBody>
                </Card> */}
                <Row className="mt-4">
                <Card
                  className="p-4 ml-4"
                  style={{ minWidth: '270px', minHeight: '200px' }}
                >
                  <CardImg
                    top
                    width="100%"
                    src={require('./bebinca-thumb.jpg')}
                    alt="Theme1 img" className="mb-3"
                  />
                  Default Theme
                  <CardBody>
                  <Button className="float-left butn" onClick={() => selectme('select')}>{select}</Button><Button className="float-right butn">Edit</Button>
                  </CardBody>
                </Card>                <Card
                  className="p-4 ml-4"
                  style={{ minWidth: '270px', minHeight: '200px' }}
                >
                  <CardImg
                    top
                    width="100%"
                    src={require('./bebinca-thumb.jpg')}
                    alt="Theme1 img" className="mb-3"
                  />
                  Blank Theme
                  <CardBody>
                  <Button className="float-left butn" onClick={() => selectme('select2')}>{select2}</Button><Button className="float-right butn">Edit</Button>
                  </CardBody>
                </Card>
                </Row>
              </div>
            </label>
          </Row>



          <h3 className="d-flex mt-4 font-weight-bold" id="default">2. Enable blogs on website</h3> <Switch className="custom-switch custom-switch-secondary custom-switch-small ml-auto mb-auto d-flex" id="custom-switch" checked={timeline2} onChange={() => settimeline2(!timeline2)} /> <br/> 



          <h3 className="d-flex mt-4 font-weight-bold" id="default">3. Enable affiliate pages</h3> <Switch className="custom-switch custom-switch-secondary custom-switch-small ml-auto mb-auto d-flex" id="custom-switch" checked={timeline1} onChange={() => settimeline1(!timeline1)} /> <br/>
          {timeline1 ? <Card body className="card1">
          <Row>
            <Col md='6' xs='12'>
              <p className="mr-auto" id="para1">Do you want to give monitary benifit your affiliate?</p>
            </Col>
            
            <Col md='6' xs='12'>
              <Switch className="custom-switch custom-switch-secondary custom-switch-small ml-auto mb-auto" id="custom-switch" checked={timeline} onChange={() => settimeline(!timeline)} /> <br/>
            </Col>
          </Row>
          {timeline ? <div className="d-flex mt-4 mb-4 float-left thediv"><Input placeholder="Your Currency Name" className="mr-auto"/> <Button style={{borderRadius:'0px', marginLeft:'5px'}}>Submit</Button></div> : null}
          <Card body className="mt-2">
            <Row>
            <Nav tabs className="card-header-tabs mb-3">
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab1 === '4',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab1('4');
                      }}
                    >
                   <h6>Fixed</h6>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab1 === '5',
                        'nav-link': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab1('5');
                      }}
                    >
                      <h6>Set Ranges</h6>
                    </NavLink>
                  </NavItem>
                  </Nav>
            </Row>
            <TabContent activeTab={activeFirstTab1}>
            <TabPane tabId="4">
                     <div className="d-flex"><p className="font-weight-bold" style={{fontSize:'20px'}}>Rate per conversion</p> <Input style={{width:'70%' , marginLeft:'10px'}} /></div>
                     <Button className="mx-auto mt-4 d-flex" style={{borderRadius:"0px"}}>Submit</Button>
            </TabPane>
            <TabPane tabId="5">
            {inputList.map((x, i) => {
                    return (
                      <div className="box">
                        <div className="d-flex"><Input
                          name="firstName"
                          value={x.firstName}
                          onChange={e => handleInputChange(e, i)} placeholder="Cost(Min)"
                        /><p className="mt-2 ml-4"> to</p>
                        <Input
                          className="ml-4"
                          name="lastName"
                          value={x.lastName}
                          onChange={e => handleInputChange(e, i)}  placeholder="Cost(Max)"
                        />
                         <p className="mt-2 ml-4">=</p> 
                        <Input
                          className="ml-4"
                          name="rate"
                          value={x.rate}
                          onChange={e => handleInputChange(e, i)} placeholder="Rate"
                        /></div>
                        <div className="btn-box">
                          {inputList.length !== 1 && <Button className="mr10" className="mx-auto mt-4 d-flex mb-4" style={{borderRadius:"0px"}} onClick={handleRemoveClick}>Remove</Button>}
                          {inputList.length - 1 === i && <div className="d-flex"><Button onClick={handleAddClick} className="ml-auto mt-4 d-flex mr-2" style={{borderRadius:"0px"}} >Add</Button> <Button className=" mt-4 d-flex mr-auto ml-2" style={{borderRadius:"0px"}}>Submit</Button> </div>}
                        </div>
                        
                      </div>
                    );
                  })} 
                     {/* <Input className="mx-4" placeholder="Cost(Min)"/>  <Input className="mx-4" placeholder="Cost(Max)"/><Input className="mx-4" placeholder="Rate"/>
                     <Button >Add</Button> */}
            </TabPane>
            
            </TabContent>
          </Card>
        </Card> : null}
      {/* <Nav tabs className="card-header-tabs mb-3">
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
            
          </NavLink>
        </NavItem>
        
      </Nav>

      <TabContent activeTab={activeFirstTab}>
        <TabPane tabId="1">
          <Row className="mt-3 mb-2" style={{ marginLeft: '15px' }}> */}
            
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
         {/*  </Row> */}

          

          {/* <Row className="mt-3 mb-2" style={{ marginLeft: '15px' }}>
            <Colxx xs="12" sm="6">
              <h3>Blank Theme</h3>
            </Colxx> */}
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
          {/* </Row> */}
         {/*  <Row style={{ marginLeft: '15px' }} className="mt-1">
            <Colxx xs="12" sm="6">
              <label>
                <input
                  type="radio"
                  checked={theme === '2'}
                  value="2"
                  onChange={(e) => setTheme(e.target.value)}
                /> */}
                {/* <div className="front-end box">
                  <Card
                    className="p-4"
                    style={{ minWidth: '270px', minHeight: '200px' }}
                  >
                    <CardImg top width="100%" src="" alt="Theme1 img" />
                    <CardBody>
                      <CardTitle>Blank Theme</CardTitle>
                    </CardBody>
                  </Card>
                </div> */}
           {/*    </label>
            </Colxx>
          </Row>
        </TabPane>
        <TabPane tabId="2">Tab 2</TabPane>
        <TabPane tabId="3">
 */}
{/* 
        </TabPane>
      </TabContent> */}
    </>
  );
}

export default Themepage;
